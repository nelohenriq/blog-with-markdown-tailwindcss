// import gray-matter
import matter from "gray-matter";
// import interface
import { PostMetadata } from "../components/PostMetadata";
import fs from "fs";

const getPostMetadata = (): PostMetadata[] => {
  // sets the folder to get the markdown files
  const folder = "posts/";
  // reads all the files from the folder
  const files = fs.readdirSync(folder);
  // selects only the files ending with ".md"
  const markdwonPosts = files.filter((file) => file.endsWith(".md"));
  /* With gray matter */
  // get gray-matter data from each file
  const posts = markdwonPosts.map((filename) => {
    const fileContents = fs.readFileSync(`posts/${filename}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: filename.replace(".md", ""),
    };
  });
  return posts;

  /* Before gray matter */
  /* // get the file names only by removing the ".md"
    const slugs = markdwonPosts.map((item) => item.replace(".md", ""));
    // return only the name of the file without the extension(.md)
    return slugs; */
};

export default getPostMetadata;
