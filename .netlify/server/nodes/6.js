

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/cardRenault/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.d5525beb.js","_app/immutable/chunks/scheduler.4b9cddaf.js","_app/immutable/chunks/index.1e4a6a2f.js","_app/immutable/chunks/each.396cedcd.js"];
export const stylesheets = [];
export const fonts = [];
