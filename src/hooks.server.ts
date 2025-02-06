import { type Handle, type HandleServerError } from '@sveltejs/kit';
import log from '$lib/log';

export const handleError: HandleServerError = async({ error, event }) => {
    const errorId = crypto.randomUUID();

    // @ts-expect-error change object
    event.locals.error = error?.toString() || undefined;
    // @ts-expect-error change object
    event.locals.errorId = errorId;
    // @ts-expect-error change object
    event.locals.errorStack = error?.stack || undefined;

    log(500, event);

    return {
        message: 'An unexpected error occurred',
        status: 500,
        errorId
    };
};

export const handle: Handle = async ({ event, resolve }) => {
    const now = Date.now();
    // @ts-expect-error change object
    event.locals.startTimer = now;

    const response = await resolve(event);

    log(response.status, event);

    return response;
}
