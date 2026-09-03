import { createRequire } from "node:module";
//#region \0rolldown/runtime.js
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esmMin = (fn, res, err) => () => {
	if (err) throw err[0];
	try {
		return fn && (res = fn(fn = 0)), res;
	} catch (e) {
		throw err = [e], e;
	}
};
var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod), cb = null), mod.exports);
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));
var __toCommonJS = (mod) => __hasOwnProp.call(mod, "module.exports") ? mod["module.exports"] : __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __require = /* #__PURE__ */ (() => createRequire(import.meta.url))();
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-HqwT0FNr.js
var manifest = {
	"05324aa20ed711ebbb8a6e109cd79b73fa47c9ba737d8aa775f6ccf4148a4bde": {
		functionName: "createCategory_createServerFn_handler",
		importer: () => import("./_ssr/db-hBM8Lwv3.mjs")
	},
	"2869ca4c30492e1c5b266d29b8835c049ce5ed96c0aaf8b24c1f46bec659fa1a": {
		functionName: "deleteCategory_createServerFn_handler",
		importer: () => import("./_ssr/db-hBM8Lwv3.mjs")
	},
	"79755a68891e665ff46314e907f9940c09e1e024539e6b9709141f6d8e7b8f34": {
		functionName: "getCategories_createServerFn_handler",
		importer: () => import("./_ssr/db-hBM8Lwv3.mjs")
	},
	"8919dd9c895eb2a03572104af99275d0fc5a48b0e41bf9448e16344acdcd820d": {
		functionName: "deleteProject_createServerFn_handler",
		importer: () => import("./_ssr/db-hBM8Lwv3.mjs")
	},
	"92c5f81fbc620741ca3ea60abeef71174dab21baf53fe85630c4404154f8f11d": {
		functionName: "updateProject_createServerFn_handler",
		importer: () => import("./_ssr/db-hBM8Lwv3.mjs")
	},
	"d3f17af8c5f89dba4dba8435d0a230afa9d22eb4a4da0751eb7a8b64373f15ea": {
		functionName: "updateCategory_createServerFn_handler",
		importer: () => import("./_ssr/db-hBM8Lwv3.mjs")
	},
	"d922da8997e088f5ef96f5560db43dae900db0f03d5e28b62d23b383eca994d3": {
		functionName: "createProject_createServerFn_handler",
		importer: () => import("./_ssr/db-hBM8Lwv3.mjs")
	}
};
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ?? await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { __require as a, __exportAll as i, __commonJSMin as n, __toCommonJS as o, __esmMin as r, __toESM as s, getServerFnById as t };
