import glob from "fast-glob";
import * as path from "path";

async function importBlog(blogFileNames: any) {
  const modulePath = "../../app/blog/" + blogFileNames;
  let { meta, default: component } = await import("" + modulePath);
  return {
    slug: blogFileNames.replace(/(\/content)?\.mdx$/, ""),
    ...meta,
    component,
  };
}

export async function getAllBlogs() {
  try {
    const blogDirectory = path.resolve("src/app/blog");
    let blogFileNames = await glob(["*.mdx", "*/content.mdx"], {
      // cwd: path.join(process.cwd(), "src/app/blog"),
      cwd: blogDirectory,
    });

    let blogs = await Promise.all(blogFileNames.map(importBlog));

    return blogs.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB.getTime() - dateA.getTime();
    });
  } catch (error) {
    console.error("Failed to get blogs:", error);
    throw error;
  }
}
