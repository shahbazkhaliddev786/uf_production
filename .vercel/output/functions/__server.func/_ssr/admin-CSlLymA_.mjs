import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as getCategories } from "./db-RFDr2sbu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-CSlLymA_.js
var $$splitComponentImporter = () => import("./admin-CgCWR_nB.mjs");
var Route = createFileRoute("/umar/farooq/admin")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	loader: async () => {
		return { categories: await getCategories() };
	},
	head: () => ({ meta: [{
		name: "robots",
		content: "noindex, nofollow"
	}] })
});
//#endregion
export { Route as t };
