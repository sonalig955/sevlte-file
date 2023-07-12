import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.9c5d658a.js","app":"_app/immutable/entry/app.389447a7.js","imports":["_app/immutable/entry/start.9c5d658a.js","_app/immutable/chunks/scheduler.4b9cddaf.js","_app/immutable/chunks/singletons.52adb221.js","_app/immutable/chunks/index.6c3c4f72.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/entry/app.389447a7.js","_app/immutable/chunks/scheduler.4b9cddaf.js","_app/immutable/chunks/index.1e4a6a2f.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/4.js')),
			__memo(() => import('../server/nodes/5.js')),
			__memo(() => import('../server/nodes/6.js')),
			__memo(() => import('../server/nodes/7.js')),
			__memo(() => import('../server/nodes/8.js'))
		],
		routes: [
			{
				id: "/Page2",
				pattern: /^\/Page2\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/cardGMC",
				pattern: /^\/cardGMC\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/cardRenault",
				pattern: /^\/cardRenault\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/cardbmw",
				pattern: /^\/cardbmw\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/sverdle",
				pattern: /^\/sverdle\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})());
