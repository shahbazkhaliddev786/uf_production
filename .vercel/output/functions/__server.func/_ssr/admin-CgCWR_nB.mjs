import { s as __toESM } from "../__23tanstack-start-server-fn-resolver-HqwT0FNr.mjs";
import { g as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as deleteProject, n as createProject, o as updateCategory, r as deleteCategory, s as updateProject, t as createCategory } from "./db-RFDr2sbu.mjs";
import { r as require_react } from "../_libs/@formspree/react+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Route } from "./admin-CSlLymA_.mjs";
import { a as AnimatePresence, i as motion } from "../_libs/framer-motion.mjs";
import { S as Check, a as Trash2, d as Play, n as X, p as Pen, u as Plus, v as FolderOpen, y as Film } from "../_libs/lucide-react.mjs";
import { n as y, t as xo } from "../_libs/react-toastify.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-CgCWR_nB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function getYouTubeId(url) {
	if (!url) return null;
	const longMatch = url.match(/[?&]v=([^&]+)/);
	if (longMatch) return longMatch[1];
	const shortMatch = url.match(/youtu\.be\/([^?&]+)/);
	if (shortMatch) return shortMatch[1];
	const shortsMatch = url.match(/youtube\.com\/shorts\/([^?&]+)/);
	if (shortsMatch) return shortsMatch[1];
	const embedMatch = url.match(/youtube\.com\/embed\/([^?&]+)/);
	if (embedMatch) return embedMatch[1];
	return null;
}
function getYouTubeThumbnail(url) {
	const id = getYouTubeId(url);
	return id ? `https://img.youtube.com/vi/${id}/maxresdefault.jpg` : "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600";
}
function VideoModal({ project, onClose }) {
	const videoId = getYouTubeId(project.videoLink);
	(0, import_react.useEffect)(() => {
		const handleEsc = (e) => {
			if (e.key === "Escape") onClose();
		};
		document.addEventListener("keydown", handleEsc);
		document.body.style.overflow = "hidden";
		return () => {
			document.removeEventListener("keydown", handleEsc);
			document.body.style.overflow = "";
		};
	}, [onClose]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		transition: { duration: .3 },
		className: "fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8",
		onClick: onClose,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-black/85 backdrop-blur-md" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: onClose,
				className: "fixed top-6 right-6 z-[110] flex items-center gap-2 rounded-full bg-white/10 px-4 py-2.5 text-sm font-medium text-white/80 backdrop-blur transition-all hover:bg-white/20 hover:text-white hover:scale-105 shadow-lg border border-white/10",
				"aria-label": "Close modal",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Close" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs text-white/40 border-l border-white/20 pl-2",
						children: "ESC"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					scale: .92,
					y: 20
				},
				animate: {
					opacity: 1,
					scale: 1,
					y: 0
				},
				exit: {
					opacity: 0,
					scale: .92,
					y: 20
				},
				transition: {
					duration: .4,
					ease: [
						.22,
						1,
						.36,
						1
					]
				},
				className: "relative z-10 w-full max-w-4xl",
				onClick: (e) => e.stopPropagation(),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative aspect-video w-full",
						children: videoId ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
							src: `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`,
							title: project.videoTitle,
							allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
							allowFullScreen: true,
							className: "absolute inset-0 h-full w-full"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-0 flex items-center justify-center text-white/60",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Video not available" })
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-start justify-between gap-4 border-t border-white/10 bg-black/60 p-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-block bg-primary/20 text-muted-foreground border border-foreground/10 text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-md mb-2",
								children: project.categoryName
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-lg font-semibold text-white",
								children: project.videoTitle
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-white/60",
								children: project.videoDescription
							})
						] })
					})]
				})
			})
		]
	});
}
function AdminPage() {
	const router = useRouter();
	const { categories } = Route.useLoaderData();
	const [catName, setCatName] = (0, import_react.useState)("");
	const [editingCategoryId, setEditingCategoryId] = (0, import_react.useState)(null);
	const [editingCategoryName, setEditingCategoryName] = (0, import_react.useState)("");
	const [videoLink, setVideoLink] = (0, import_react.useState)("");
	const [videoTitle, setVideoTitle] = (0, import_react.useState)("");
	const [videoDescription, setVideoDescription] = (0, import_react.useState)("");
	const [categoryId, setCategoryId] = (0, import_react.useState)("");
	const [editingProjectId, setEditingProjectId] = (0, import_react.useState)(null);
	const [selectedProject, setSelectedProject] = (0, import_react.useState)(null);
	const handleCreateCategory = async (e) => {
		e.preventDefault();
		try {
			await createCategory({ data: { name: catName } });
			y.success("Category created successfully!");
			setCatName("");
			router.invalidate();
		} catch (err) {
			y.error(err.message || "Failed to create category");
		}
	};
	const handleUpdateCategory = async (id) => {
		if (!editingCategoryName.trim()) {
			y.warn("Category name cannot be empty");
			return;
		}
		try {
			await updateCategory({ data: {
				id,
				name: editingCategoryName
			} });
			y.success("Category updated successfully!");
			setEditingCategoryId(null);
			setEditingCategoryName("");
			router.invalidate();
		} catch (err) {
			y.error(err.message || "Failed to update category");
		}
	};
	const handleDeleteCategory = async (id, name) => {
		if (!window.confirm(`Are you sure you want to delete the category "${name}"? All projects under it will be affected.`)) return;
		try {
			await deleteCategory({ data: { id } });
			y.success("Category deleted successfully!");
			router.invalidate();
		} catch (err) {
			y.error(err.message || "Failed to delete category");
		}
	};
	const handleProjectSubmit = async (e) => {
		e.preventDefault();
		try {
			if (editingProjectId) {
				await updateProject({ data: {
					id: editingProjectId,
					videoLink,
					videoTitle,
					videoDescription,
					categoryId
				} });
				y.success("Project updated successfully!");
				setEditingProjectId(null);
			} else {
				await createProject({ data: {
					videoLink,
					videoTitle,
					videoDescription,
					categoryId
				} });
				y.success("Project created successfully!");
			}
			setVideoLink("");
			setVideoTitle("");
			setVideoDescription("");
			setCategoryId("");
			router.invalidate();
		} catch (err) {
			y.error(err.message || "Failed to save project");
		}
	};
	const startEditProject = (project) => {
		setEditingProjectId(project.id);
		setVideoLink(project.videoLink);
		setVideoTitle(project.videoTitle);
		setVideoDescription(project.videoDescription);
		setCategoryId(project.categoryId);
		document.getElementById("project-form")?.scrollIntoView({ behavior: "smooth" });
	};
	const cancelEditProject = () => {
		setEditingProjectId(null);
		setVideoLink("");
		setVideoTitle("");
		setVideoDescription("");
		setCategoryId("");
	};
	const handleDeleteProject = async (id, title) => {
		if (!window.confirm(`Are you sure you want to delete the project "${title}"?`)) return;
		try {
			await deleteProject({ data: { id } });
			y.success("Project deleted successfully!");
			router.invalidate();
		} catch (err) {
			y.error(err.message || "Failed to delete project");
		}
	};
	const allProjects = Array.isArray(categories) ? categories.flatMap((c) => c.projects.map((p) => ({
		...p,
		categoryName: c.name
	}))) : [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-8 max-w-5xl mx-auto space-y-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(xo, {
				position: "top-right",
				autoClose: 3e3,
				theme: "dark"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between border-b border-foreground/10 pb-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-3xl font-bold tracking-tight",
					children: "Admin Dashboard"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "/",
					className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
					children: "View Website →"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "bg-surface p-6 rounded-2xl border border-foreground/10 space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 text-xl font-semibold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderOpen, { className: "h-5 w-5 text-[color:var(--gold)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Manage Categories" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleCreateCategory,
						className: "flex gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							placeholder: "New Category Name (e.g. Commercials)",
							className: "flex-1 bg-background border border-foreground/20 rounded-xl px-4 py-2.5 text-sm",
							value: catName,
							onChange: (e) => setCatName(e.target.value),
							required: true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "submit",
							className: "bg-[color:var(--gold)] text-primary px-5 py-2.5 rounded-xl font-medium text-sm flex items-center gap-2 hover:brightness-95 transition-all",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), " Add Category"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "border border-foreground/10 rounded-xl overflow-hidden divide-y divide-foreground/10",
						children: Array.isArray(categories) && categories.length > 0 ? categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between p-4 bg-background/40",
							children: [editingCategoryId === c.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 flex-1 mr-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										className: "flex-1 max-w-md bg-background border border-foreground/20 rounded-lg px-3 py-1.5 text-sm",
										value: editingCategoryName,
										onChange: (e) => setEditingCategoryName(e.target.value),
										required: true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => handleUpdateCategory(c.id),
										className: "p-2 text-green-500 hover:bg-green-500/10 rounded-lg transition-colors",
										title: "Save",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => setEditingCategoryId(null),
										className: "p-2 text-red-500 hover:bg-red-500/10 rounded-lg transition-colors",
										title: "Cancel",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
									})
								]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-medium text-sm",
								children: [
									c.name,
									" (",
									c.projects?.length || 0,
									" projects)"
								]
							}), editingCategoryId !== c.id && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => {
										setEditingCategoryId(c.id);
										setEditingCategoryName(c.name);
									},
									className: "p-2 text-muted-foreground hover:text-foreground hover:bg-foreground/5 rounded-lg transition-colors",
									title: "Rename",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pen, { className: "h-4 w-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => handleDeleteCategory(c.id, c.name),
									className: "p-2 text-red-400 hover:text-red-500 hover:bg-red-500/5 rounded-lg transition-colors",
									title: "Delete",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
								})]
							})]
						}, c.id)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "p-4 text-center text-sm text-muted-foreground",
							children: "No categories created yet."
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "bg-surface p-6 rounded-2xl border border-foreground/10 space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 text-xl font-semibold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Film, { className: "h-5 w-5 text-[color:var(--gold)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Manage Video Projects" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						id: "project-form",
						className: "bg-background/40 p-5 rounded-xl border border-foreground/5 space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-semibold text-muted-foreground uppercase tracking-wider",
							children: editingProjectId ? "Edit Project" : "Add Project"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: handleProjectSubmit,
							className: "space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid md:grid-cols-2 gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-xs mb-1.5 font-medium text-muted-foreground",
										children: "Category"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										className: "w-full bg-background border border-foreground/20 rounded-xl px-4 py-2.5 text-sm",
										value: categoryId,
										onChange: (e) => setCategoryId(e.target.value),
										required: true,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											children: "Select a category"
										}), Array.isArray(categories) && categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: c.id,
											children: c.name
										}, c.id))]
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-xs mb-1.5 font-medium text-muted-foreground",
										children: "YouTube Video Link"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "url",
										placeholder: "https://www.youtube.com/watch?v=...",
										className: "w-full bg-background border border-foreground/20 rounded-xl px-4 py-2.5 text-sm",
										value: videoLink,
										onChange: (e) => setVideoLink(e.target.value),
										required: true
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-xs mb-1.5 font-medium text-muted-foreground",
									children: "Video Title"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									placeholder: "Cinematic Project Title",
									className: "w-full bg-background border border-foreground/20 rounded-xl px-4 py-2.5 text-sm",
									value: videoTitle,
									onChange: (e) => setVideoTitle(e.target.value),
									required: true
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-xs mb-1.5 font-medium text-muted-foreground",
									children: "Video Description"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									placeholder: "Brief description of the editing, grading, or production details.",
									className: "w-full bg-background border border-foreground/20 rounded-xl px-4 py-2.5 text-sm h-24 resize-none",
									value: videoDescription,
									onChange: (e) => setVideoDescription(e.target.value),
									required: true
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "submit",
										className: "bg-[color:var(--gold)] text-primary px-6 py-2.5 rounded-xl font-medium text-sm hover:brightness-95 transition-all",
										children: editingProjectId ? "Save Changes" : "Create Project"
									}), editingProjectId && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: cancelEditProject,
										className: "border border-foreground/15 px-6 py-2.5 rounded-xl text-sm font-medium hover:bg-foreground/5 transition-all",
										children: "Cancel"
									})]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-semibold text-muted-foreground uppercase tracking-wider",
							children: "Existing Projects"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-4 md:grid-cols-2",
							children: allProjects.length > 0 ? allProjects.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-background/40 p-4 rounded-xl border border-foreground/10 flex flex-col justify-between overflow-hidden",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										onClick: () => setSelectedProject(p),
										className: "group/thumb relative aspect-video w-full overflow-hidden rounded-lg bg-black cursor-pointer border border-foreground/10 shadow-sm",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: getYouTubeThumbnail(p.videoLink),
												alt: p.videoTitle,
												className: "h-full w-full object-cover transition-transform duration-500 group-hover/thumb:scale-105"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "absolute inset-0 bg-black/25 flex items-center justify-center opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-300",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "h-10 w-10 bg-[color:var(--gold)] text-primary rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover/thumb:scale-110",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-4 w-4 fill-current" })
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "absolute bottom-2 right-2 bg-black/60 backdrop-blur px-2 py-0.5 rounded text-[10px] text-white flex items-center gap-1 font-medium",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-2.5 w-2.5 fill-current" }), " Play Video"]
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "inline-block bg-primary/20 text-muted-foreground border border-foreground/10 text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-md mb-2",
											children: p.categoryName
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "font-semibold text-base mb-1",
											children: p.videoTitle
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground line-clamp-2 mb-2",
											children: p.videoDescription
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: p.videoLink,
											target: "_blank",
											rel: "noopener noreferrer",
											className: "text-xs text-[color:var(--gold)] hover:underline break-all",
											children: p.videoLink
										})
									] })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 mt-4 border-t border-foreground/5 pt-3 justify-end",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => startEditProject(p),
										className: "px-3 py-1.5 text-xs border border-foreground/10 hover:bg-foreground/5 rounded-lg flex items-center gap-1.5 transition-all",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pen, { className: "h-3.5 w-3.5" }), " Edit"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => handleDeleteProject(p.id, p.videoTitle),
										className: "px-3 py-1.5 text-xs border border-red-500/20 text-red-400 hover:bg-red-500/10 rounded-lg flex items-center gap-1.5 transition-all",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" }), " Delete"]
									})]
								})]
							}, p.id)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "col-span-full border border-dashed border-foreground/10 rounded-xl p-8 text-center text-sm text-muted-foreground",
								children: "No video projects created yet. Use the form above to add one."
							})
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: selectedProject && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VideoModal, {
				project: selectedProject,
				onClose: () => setSelectedProject(null)
			}) })
		]
	});
}
//#endregion
export { AdminPage as component };
