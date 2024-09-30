/* eslint-disable @typescript-eslint/no-explicit-any */
export async function load({ fetch }) {
    const seed = await fetch('/api/rng')
        .then((res: { json: () => any }) => res.json())
        .then((json: { seed: string }) => json.seed)
        .catch(() => '');

    return {
        seed
    };
}