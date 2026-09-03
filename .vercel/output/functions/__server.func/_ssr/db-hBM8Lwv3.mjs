import { c as createServerFn, i as TSS_SERVER_FUNCTION } from "./createServerFn-CIHAFgYl.mjs";
import { PrismaClient } from "@prisma/client";
//#region node_modules/.nitro/vite/services/ssr/assets/db-hBM8Lwv3.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var prisma = globalThis.prisma || new PrismaClient();
var getCategories_createServerFn_handler = createServerRpc({
	id: "79755a68891e665ff46314e907f9940c09e1e024539e6b9709141f6d8e7b8f34",
	name: "getCategories",
	filename: "src/db.ts"
}, (opts) => getCategories.__executeServer(opts));
var getCategories = createServerFn({ method: "GET" }).handler(getCategories_createServerFn_handler, async () => {
	return await prisma.category.findMany({
		include: { projects: true },
		orderBy: { createdAt: "desc" }
	});
});
var createCategory_createServerFn_handler = createServerRpc({
	id: "05324aa20ed711ebbb8a6e109cd79b73fa47c9ba737d8aa775f6ccf4148a4bde",
	name: "createCategory",
	filename: "src/db.ts"
}, (opts) => createCategory.__executeServer(opts));
var createCategory = createServerFn({ method: "POST" }).validator((d) => d).handler(createCategory_createServerFn_handler, async ({ data }) => {
	return await prisma.category.create({ data: { name: data.name } });
});
var createProject_createServerFn_handler = createServerRpc({
	id: "d922da8997e088f5ef96f5560db43dae900db0f03d5e28b62d23b383eca994d3",
	name: "createProject",
	filename: "src/db.ts"
}, (opts) => createProject.__executeServer(opts));
var createProject = createServerFn({ method: "POST" }).validator((d) => d).handler(createProject_createServerFn_handler, async ({ data }) => {
	return await prisma.project.create({ data: {
		videoLink: data.videoLink,
		videoTitle: data.videoTitle,
		videoDescription: data.videoDescription,
		categoryId: data.categoryId
	} });
});
var updateCategory_createServerFn_handler = createServerRpc({
	id: "d3f17af8c5f89dba4dba8435d0a230afa9d22eb4a4da0751eb7a8b64373f15ea",
	name: "updateCategory",
	filename: "src/db.ts"
}, (opts) => updateCategory.__executeServer(opts));
var updateCategory = createServerFn({ method: "POST" }).validator((d) => d).handler(updateCategory_createServerFn_handler, async ({ data }) => {
	return await prisma.category.update({
		where: { id: data.id },
		data: { name: data.name }
	});
});
var deleteCategory_createServerFn_handler = createServerRpc({
	id: "2869ca4c30492e1c5b266d29b8835c049ce5ed96c0aaf8b24c1f46bec659fa1a",
	name: "deleteCategory",
	filename: "src/db.ts"
}, (opts) => deleteCategory.__executeServer(opts));
var deleteCategory = createServerFn({ method: "POST" }).validator((d) => d).handler(deleteCategory_createServerFn_handler, async ({ data }) => {
	return await prisma.category.delete({ where: { id: data.id } });
});
var updateProject_createServerFn_handler = createServerRpc({
	id: "92c5f81fbc620741ca3ea60abeef71174dab21baf53fe85630c4404154f8f11d",
	name: "updateProject",
	filename: "src/db.ts"
}, (opts) => updateProject.__executeServer(opts));
var updateProject = createServerFn({ method: "POST" }).validator((d) => d).handler(updateProject_createServerFn_handler, async ({ data }) => {
	return await prisma.project.update({
		where: { id: data.id },
		data: {
			videoLink: data.videoLink,
			videoTitle: data.videoTitle,
			videoDescription: data.videoDescription,
			categoryId: data.categoryId
		}
	});
});
var deleteProject_createServerFn_handler = createServerRpc({
	id: "8919dd9c895eb2a03572104af99275d0fc5a48b0e41bf9448e16344acdcd820d",
	name: "deleteProject",
	filename: "src/db.ts"
}, (opts) => deleteProject.__executeServer(opts));
var deleteProject = createServerFn({ method: "POST" }).validator((d) => d).handler(deleteProject_createServerFn_handler, async ({ data }) => {
	return await prisma.project.delete({ where: { id: data.id } });
});
//#endregion
export { createCategory_createServerFn_handler, createProject_createServerFn_handler, deleteCategory_createServerFn_handler, deleteProject_createServerFn_handler, getCategories_createServerFn_handler, updateCategory_createServerFn_handler, updateProject_createServerFn_handler };
