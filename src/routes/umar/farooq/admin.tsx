import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Edit2, Trash2, Plus, X, Check, Film, FolderOpen, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  createCategory, 
  updateCategory, 
  deleteCategory, 
  createProject, 
  updateProject, 
  deleteProject, 
  getCategories 
} from "../../../db"; // Correct relative import path to reach src/db

export const Route = createFileRoute("/umar/farooq/admin")({
  component: AdminPage,
  loader: async () => {
    const categories = await getCategories();
    return { categories };
  },
  head: () => ({
    meta: [
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
});

/* ---------------- YouTube helpers ---------------- */
function getYouTubeId(url: string): string | null {
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

function getYouTubeThumbnail(url: string): string {
  const id = getYouTubeId(url);
  return id ? `https://img.youtube.com/vi/${id}/maxresdefault.jpg` : "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600";
}

/* ---------------- Video Modal ---------------- */
function VideoModal({
  project,
  onClose,
}: {
  project: any;
  onClose: () => void;
}) {
  const videoId = getYouTubeId(project.videoLink);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/85 backdrop-blur-md" />

      {/* Floating Viewport Close Button */}
      <button
        onClick={onClose}
        className="fixed top-6 right-6 z-[110] flex items-center gap-2 rounded-full bg-white/10 px-4 py-2.5 text-sm font-medium text-white/80 backdrop-blur transition-all hover:bg-white/20 hover:text-white hover:scale-105 shadow-lg border border-white/10"
        aria-label="Close modal"
      >
        <X className="h-4 w-4" />
        <span>Close</span>
        <span className="text-xs text-white/40 border-l border-white/20 pl-2">ESC</span>
      </button>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 20 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Video player */}
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl">
          <div className="relative aspect-video w-full">
            {videoId ? (
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
                title={project.videoTitle}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-white/60">
                <p>Video not available</p>
              </div>
            )}
          </div>
          {/* Info bar */}
          <div className="flex items-start justify-between gap-4 border-t border-white/10 bg-black/60 p-5">
            <div>
              <span className="inline-block bg-primary/20 text-muted-foreground border border-foreground/10 text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-md mb-2">
                {project.categoryName}
              </span>
              <h3 className="font-display text-lg font-semibold text-white">{project.videoTitle}</h3>
              <p className="mt-1 text-sm text-white/60">{project.videoDescription}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function AdminPage() {
  const router = useRouter();
  const { categories } = Route.useLoaderData();

  // Category CRUD states
  const [catName, setCatName] = useState("");
  const [editingCategoryId, setEditingCategoryId] = useState<string | null>(null);
  const [editingCategoryName, setEditingCategoryName] = useState("");

  // Project CRUD states
  const [videoLink, setVideoLink] = useState("");
  const [videoTitle, setVideoTitle] = useState("");
  const [videoDescription, setVideoDescription] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [editingProjectId, setEditingProjectId] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  // --- Category Actions ---
  const handleCreateCategory = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createCategory({ data: { name: catName } });
      toast.success("Category created successfully!");
      setCatName("");
      router.invalidate();
    } catch (err: any) {
      toast.error(err.message || "Failed to create category");
    }
  };

  const handleUpdateCategory = async (id: string) => {
    if (!editingCategoryName.trim()) {
      toast.warn("Category name cannot be empty");
      return;
    }
    try {
      await updateCategory({ data: { id, name: editingCategoryName } });
      toast.success("Category updated successfully!");
      setEditingCategoryId(null);
      setEditingCategoryName("");
      router.invalidate();
    } catch (err: any) {
      toast.error(err.message || "Failed to update category");
    }
  };

  const handleDeleteCategory = async (id: string, name: string) => {
    if (!window.confirm(`Are you sure you want to delete the category "${name}"? All projects under it will be affected.`)) {
      return;
    }
    try {
      await deleteCategory({ data: { id } });
      toast.success("Category deleted successfully!");
      router.invalidate();
    } catch (err: any) {
      toast.error(err.message || "Failed to delete category");
    }
  };

  // --- Project Actions ---
  const handleProjectSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingProjectId) {
        // Update mode
        await updateProject({
          data: {
            id: editingProjectId,
            videoLink,
            videoTitle,
            videoDescription,
            categoryId,
          },
        });
        toast.success("Project updated successfully!");
        setEditingProjectId(null);
      } else {
        // Create mode
        await createProject({
          data: {
            videoLink,
            videoTitle,
            videoDescription,
            categoryId,
          },
        });
        toast.success("Project created successfully!");
      }
      // Reset fields
      setVideoLink("");
      setVideoTitle("");
      setVideoDescription("");
      setCategoryId("");
      router.invalidate();
    } catch (err: any) {
      toast.error(err.message || "Failed to save project");
    }
  };

  const startEditProject = (project: any) => {
    setEditingProjectId(project.id);
    setVideoLink(project.videoLink);
    setVideoTitle(project.videoTitle);
    setVideoDescription(project.videoDescription);
    setCategoryId(project.categoryId);
    // Scroll to form
    const formElement = document.getElementById("project-form");
    formElement?.scrollIntoView({ behavior: "smooth" });
  };

  const cancelEditProject = () => {
    setEditingProjectId(null);
    setVideoLink("");
    setVideoTitle("");
    setVideoDescription("");
    setCategoryId("");
  };

  const handleDeleteProject = async (id: string, title: string) => {
    if (!window.confirm(`Are you sure you want to delete the project "${title}"?`)) {
      return;
    }
    try {
      await deleteProject({ data: { id } });
      toast.success("Project deleted successfully!");
      router.invalidate();
    } catch (err: any) {
      toast.error(err.message || "Failed to delete project");
    }
  };

  // Extract all projects from categories
  const allProjects = Array.isArray(categories) 
    ? categories.flatMap((c: any) => c.projects.map((p: any) => ({ ...p, categoryName: c.name })))
    : [];

  return (
    <div className="p-8 max-w-5xl mx-auto space-y-12">
      <ToastContainer position="top-right" autoClose={3000} theme="dark" />
      
      <div className="flex items-center justify-between border-b border-foreground/10 pb-5">
        <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
        <a href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          View Website &rarr;
        </a>
      </div>
      
      {/* ================= CATEGORIES SECTION ================= */}
      <section className="bg-surface p-6 rounded-2xl border border-foreground/10 space-y-6">
        <div className="flex items-center gap-2 text-xl font-semibold">
          <FolderOpen className="h-5 w-5 text-[color:var(--gold)]" />
          <h2>Manage Categories</h2>
        </div>

        {/* Add Category Form */}
        <form onSubmit={handleCreateCategory} className="flex gap-4">
          <input 
            type="text" 
            placeholder="New Category Name (e.g. Commercials)" 
            className="flex-1 bg-background border border-foreground/20 rounded-xl px-4 py-2.5 text-sm"
            value={catName} 
            onChange={(e) => setCatName(e.target.value)} 
            required 
          />
          <button type="submit" className="bg-[color:var(--gold)] text-primary px-5 py-2.5 rounded-xl font-medium text-sm flex items-center gap-2 hover:brightness-95 transition-all">
            <Plus className="h-4 w-4" /> Add Category
          </button>
        </form>

        {/* Categories List */}
        <div className="border border-foreground/10 rounded-xl overflow-hidden divide-y divide-foreground/10">
          {Array.isArray(categories) && categories.length > 0 ? (
            categories.map((c: any) => (
              <div key={c.id} className="flex items-center justify-between p-4 bg-background/40">
                {editingCategoryId === c.id ? (
                  <div className="flex items-center gap-2 flex-1 mr-4">
                    <input
                      type="text"
                      className="flex-1 max-w-md bg-background border border-foreground/20 rounded-lg px-3 py-1.5 text-sm"
                      value={editingCategoryName}
                      onChange={(e) => setEditingCategoryName(e.target.value)}
                      required
                    />
                    <button
                      onClick={() => handleUpdateCategory(c.id)}
                      className="p-2 text-green-500 hover:bg-green-500/10 rounded-lg transition-colors"
                      title="Save"
                    >
                      <Check className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => setEditingCategoryId(null)}
                      className="p-2 text-red-500 hover:bg-red-500/10 rounded-lg transition-colors"
                      title="Cancel"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ) : (
                  <span className="font-medium text-sm">{c.name} ({c.projects?.length || 0} projects)</span>
                )}
                
                {editingCategoryId !== c.id && (
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => {
                        setEditingCategoryId(c.id);
                        setEditingCategoryName(c.name);
                      }}
                      className="p-2 text-muted-foreground hover:text-foreground hover:bg-foreground/5 rounded-lg transition-colors"
                      title="Rename"
                    >
                      <Edit2 className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteCategory(c.id, c.name)}
                      className="p-2 text-red-400 hover:text-red-500 hover:bg-red-500/5 rounded-lg transition-colors"
                      title="Delete"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="p-4 text-center text-sm text-muted-foreground">No categories created yet.</div>
          )}
        </div>
      </section>

      {/* ================= PROJECTS SECTION ================= */}
      <section className="bg-surface p-6 rounded-2xl border border-foreground/10 space-y-6">
        <div className="flex items-center gap-2 text-xl font-semibold">
          <Film className="h-5 w-5 text-[color:var(--gold)]" />
          <h2>Manage Video Projects</h2>
        </div>

        {/* Project Form (Create / Edit) */}
        <div id="project-form" className="bg-background/40 p-5 rounded-xl border border-foreground/5 space-y-4">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            {editingProjectId ? "Edit Project" : "Add Project"}
          </h3>
          <form onSubmit={handleProjectSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs mb-1.5 font-medium text-muted-foreground">Category</label>
                <select 
                  className="w-full bg-background border border-foreground/20 rounded-xl px-4 py-2.5 text-sm"
                  value={categoryId} 
                  onChange={(e) => setCategoryId(e.target.value)}
                  required
                >
                  <option value="">Select a category</option>
                  {Array.isArray(categories) && categories.map((c: any) => (
                    <option key={c.id} value={c.id}>{c.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs mb-1.5 font-medium text-muted-foreground">YouTube Video Link</label>
                <input 
                  type="url" 
                  placeholder="https://www.youtube.com/watch?v=..."
                  className="w-full bg-background border border-foreground/20 rounded-xl px-4 py-2.5 text-sm"
                  value={videoLink} 
                  onChange={(e) => setVideoLink(e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs mb-1.5 font-medium text-muted-foreground">Video Title</label>
              <input 
                type="text" 
                placeholder="Cinematic Project Title"
                className="w-full bg-background border border-foreground/20 rounded-xl px-4 py-2.5 text-sm"
                value={videoTitle} 
                onChange={(e) => setVideoTitle(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-xs mb-1.5 font-medium text-muted-foreground">Video Description</label>
              <textarea 
                placeholder="Brief description of the editing, grading, or production details."
                className="w-full bg-background border border-foreground/20 rounded-xl px-4 py-2.5 text-sm h-24 resize-none"
                value={videoDescription} 
                onChange={(e) => setVideoDescription(e.target.value)}
                required
              />
            </div>

            <div className="flex gap-2">
              <button type="submit" className="bg-[color:var(--gold)] text-primary px-6 py-2.5 rounded-xl font-medium text-sm hover:brightness-95 transition-all">
                {editingProjectId ? "Save Changes" : "Create Project"}
              </button>
              {editingProjectId && (
                <button 
                  type="button" 
                  onClick={cancelEditProject}
                  className="border border-foreground/15 px-6 py-2.5 rounded-xl text-sm font-medium hover:bg-foreground/5 transition-all"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Projects List */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Existing Projects</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {allProjects.length > 0 ? (
              allProjects.map((p: any) => (
                <div key={p.id} className="bg-background/40 p-4 rounded-xl border border-foreground/10 flex flex-col justify-between overflow-hidden">
                  <div className="space-y-3">
                    {/* Visual Video Thumbnail Playable Container */}
                    <div 
                      onClick={() => setSelectedProject(p)}
                      className="group/thumb relative aspect-video w-full overflow-hidden rounded-lg bg-black cursor-pointer border border-foreground/10 shadow-sm"
                    >
                      <img 
                        src={getYouTubeThumbnail(p.videoLink)} 
                        alt={p.videoTitle}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover/thumb:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/25 flex items-center justify-center opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-300">
                        <div className="h-10 w-10 bg-[color:var(--gold)] text-primary rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover/thumb:scale-110">
                          <Play className="h-4 w-4 fill-current" />
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur px-2 py-0.5 rounded text-[10px] text-white flex items-center gap-1 font-medium">
                        <Play className="h-2.5 w-2.5 fill-current" /> Play Video
                      </div>
                    </div>

                    <div>
                      <span className="inline-block bg-primary/20 text-muted-foreground border border-foreground/10 text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-md mb-2">
                        {p.categoryName}
                      </span>
                      <h4 className="font-semibold text-base mb-1">{p.videoTitle}</h4>
                      <p className="text-xs text-muted-foreground line-clamp-2 mb-2">{p.videoDescription}</p>
                      <a 
                        href={p.videoLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-xs text-[color:var(--gold)] hover:underline break-all"
                      >
                        {p.videoLink}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 mt-4 border-t border-foreground/5 pt-3 justify-end">
                    <button
                      onClick={() => startEditProject(p)}
                      className="px-3 py-1.5 text-xs border border-foreground/10 hover:bg-foreground/5 rounded-lg flex items-center gap-1.5 transition-all"
                    >
                      <Edit2 className="h-3.5 w-3.5" /> Edit
                    </button>
                    <button
                      onClick={() => handleDeleteProject(p.id, p.videoTitle)}
                      className="px-3 py-1.5 text-xs border border-red-500/20 text-red-400 hover:bg-red-500/10 rounded-lg flex items-center gap-1.5 transition-all"
                    >
                      <Trash2 className="h-3.5 w-3.5" /> Delete
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full border border-dashed border-foreground/10 rounded-xl p-8 text-center text-sm text-muted-foreground">
                No video projects created yet. Use the form above to add one.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedProject && (
          <VideoModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
