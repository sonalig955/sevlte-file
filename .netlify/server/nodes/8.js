import * as server from '../entries/pages/sverdle/_page.server.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/sverdle/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/sverdle/+page.server.js";
export const imports = ["_app/immutable/nodes/8.b1a094a0.js","_app/immutable/chunks/scheduler.4b9cddaf.js","_app/immutable/chunks/index.1e4a6a2f.js","_app/immutable/chunks/each.396cedcd.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.ea01304d.js","_app/immutable/chunks/index.6c3c4f72.js"];
export const stylesheets = ["_app/immutable/assets/8.9d501049.css"];
export const fonts = [];
