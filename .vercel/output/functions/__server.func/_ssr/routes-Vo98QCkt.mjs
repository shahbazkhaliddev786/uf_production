import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as getCategories } from "./db-RFDr2sbu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Vo98QCkt.js
var $$splitComponentImporter = () => import("./routes-DmBXQCEk.mjs");
var Route = createFileRoute("/")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	loader: async () => {
		try {
			return { categories: await getCategories() };
		} catch (error) {
			console.error("Failed to fetch categories, using fallback data:", error);
			return { categories: [] };
		}
	},
	head: () => ({ meta: [
		{ title: "UF Productions — Cinematic Video Agency" },
		{
			name: "description",
			content: "UF Productions is a video production agency crafting commercials, AI films, documentaries, podcasts, and brand stories."
		},
		{
			property: "og:title",
			content: "UF Productions — Cinematic Video Agency"
		},
		{
			property: "og:description",
			content: "UF Productions is a video production agency crafting commercials, AI films, documentaries, podcasts, and brand stories."
		},
		{
			property: "og:image",
			content: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200"
		}
	] })
});
//#endregion
export { Route as t };
