import { createServerFn } from "@tanstack/react-start";
import { prisma } from "./lib/prisma";

export const getCategories = createServerFn({ method: "GET" }).handler(async () => {
  const categories = await prisma.category.findMany({
    include: { projects: true },
    orderBy: { createdAt: "desc" },
  });
  return categories;
});

export const createCategory = createServerFn({ method: "POST" })
  .validator((d: { name: string }) => d)
  .handler(async ({ data }) => {
    const category = await prisma.category.create({
      data: { name: data.name },
    });
    return category;
  });

export const createProject = createServerFn({ method: "POST" })
  .validator(
    (d: {
      videoLink: string;
      videoTitle: string;
      videoDescription: string;
      categoryId: string;
    }) => d
  )
  .handler(async ({ data }) => {
    const project = await prisma.project.create({
      data: {
        videoLink: data.videoLink,
        videoTitle: data.videoTitle,
        videoDescription: data.videoDescription,
        categoryId: data.categoryId,
      },
    });
    return project;
  });

export const updateCategory = createServerFn({ method: "POST" })
  .validator((d: { id: string; name: string }) => d)
  .handler(async ({ data }) => {
    const category = await prisma.category.update({
      where: { id: data.id },
      data: { name: data.name },
    });
    return category;
  });

export const deleteCategory = createServerFn({ method: "POST" })
  .validator((d: { id: string }) => d)
  .handler(async ({ data }) => {
    const category = await prisma.category.delete({
      where: { id: data.id },
    });
    return category;
  });

export const updateProject = createServerFn({ method: "POST" })
  .validator(
    (d: {
      id: string;
      videoLink: string;
      videoTitle: string;
      videoDescription: string;
      categoryId: string;
    }) => d
  )
  .handler(async ({ data }) => {
    const project = await prisma.project.update({
      where: { id: data.id },
      data: {
        videoLink: data.videoLink,
        videoTitle: data.videoTitle,
        videoDescription: data.videoDescription,
        categoryId: data.categoryId,
      },
    });
    return project;
  });

export const deleteProject = createServerFn({ method: "POST" })
  .validator((d: { id: string }) => d)
  .handler(async ({ data }) => {
    const project = await prisma.project.delete({
      where: { id: data.id },
    });
    return project;
  });
