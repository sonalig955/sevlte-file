

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.f6cfb998.js","_app/immutable/chunks/scheduler.4b9cddaf.js","_app/immutable/chunks/index.1e4a6a2f.js","_app/immutable/chunks/singletons.ea01304d.js","_app/immutable/chunks/index.6c3c4f72.js"];
export const stylesheets = [];
export const fonts = [];
