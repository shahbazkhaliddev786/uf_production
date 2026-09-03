import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-HqwT0FNr.mjs";
import { c as createServerFn, i as TSS_SERVER_FUNCTION } from "./createServerFn-CIHAFgYl.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/db-RFDr2sbu.js
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var getCategories = createServerFn({ method: "GET" }).handler(createSsrRpc("79755a68891e665ff46314e907f9940c09e1e024539e6b9709141f6d8e7b8f34"));
var createCategory = createServerFn({ method: "POST" }).validator((d) => d).handler(createSsrRpc("05324aa20ed711ebbb8a6e109cd79b73fa47c9ba737d8aa775f6ccf4148a4bde"));
var createProject = createServerFn({ method: "POST" }).validator((d) => d).handler(createSsrRpc("d922da8997e088f5ef96f5560db43dae900db0f03d5e28b62d23b383eca994d3"));
var updateCategory = createServerFn({ method: "POST" }).validator((d) => d).handler(createSsrRpc("d3f17af8c5f89dba4dba8435d0a230afa9d22eb4a4da0751eb7a8b64373f15ea"));
var deleteCategory = createServerFn({ method: "POST" }).validator((d) => d).handler(createSsrRpc("2869ca4c30492e1c5b266d29b8835c049ce5ed96c0aaf8b24c1f46bec659fa1a"));
var updateProject = createServerFn({ method: "POST" }).validator((d) => d).handler(createSsrRpc("92c5f81fbc620741ca3ea60abeef71174dab21baf53fe85630c4404154f8f11d"));
var deleteProject = createServerFn({ method: "POST" }).validator((d) => d).handler(createSsrRpc("8919dd9c895eb2a03572104af99275d0fc5a48b0e41bf9448e16344acdcd820d"));
//#endregion
export { getCategories as a, deleteProject as i, createProject as n, updateCategory as o, deleteCategory as r, updateProject as s, createCategory as t };
