

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/Page2/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.d4cc81a7.js","_app/immutable/chunks/scheduler.4b9cddaf.js","_app/immutable/chunks/index.1e4a6a2f.js","_app/immutable/chunks/each.396cedcd.js"];
export const stylesheets = ["_app/immutable/assets/7.434b08eb.css"];
export const fonts = [];
