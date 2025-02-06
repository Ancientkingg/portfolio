function getAllUrlParams(url: string): object | undefined {
	let paramsObj;

	try {
		url = url.slice(1);
		if (!url) return undefined;

		paramsObj = Object.fromEntries(new URLSearchParams(url));
        return paramsObj;
	} catch (error) {
		console.log('[ERR] ', error);
	}
}

function getReferer(referer: string): string {
    if (!referer) return 'Direct';
    const url = new URL(referer);
    return url.hostname;
}

// @ts-expect-error event is too big to type
export function getClientTrueIp(request) {
    // Read about spoofing https://kit.svelte.dev/docs/adapter-node#environment-variables-addressheader-and-xffdepth
    // Prefer CloudFlare's unspoofable header
    return request.headers.get("CF-Connecting-IP") || request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip");
}

// @ts-expect-error event is too big to type
export default function log(statusCode: number, event) {
	const level = statusCode >= 400 ? 'error' : 'info';

	const error = event?.locals?.error || undefined;
	const errorId = event?.locals?.errorId || undefined;
	const errorStack = event?.locals?.errorStack || undefined;

	const urlParams = getAllUrlParams(event?.url?.search) || {};

    const referer = getReferer(event.request.headers.get('referer'));

    const logData = {
        level: level,
        status: statusCode,
        method: event.request.method,
        url: event.request.url,
        ip: getClientTrueIp(event.request) || event.getClientAddress(),
        referer: referer,
        urlParams: urlParams,
        userAgent: event.request.headers.get('user-agent'),
        error: error,
        errorId: errorId,
        errorStack: errorStack,
        responseTimeMs: Date.now() - event?.locals?.startTimer,
    }

    /* === Exceptions to prevent log spam === */

    // Health check
    if (logData.ip === '127.0.0.1' && logData.url.endsWith('healthz')) return;

    /* End of exceptions */

    console.log(JSON.stringify(logData));
}
