import "./globals.css";

import getPostMetadata from "@/components/getPostMetadata";
import PostPreview from "@/components/PostPreview";

export default function Homepage() {
  // uses the function to retrieve postMetadata
  const postMetadata = getPostMetadata();
  // for each postMetadata gets the slug
  const postPreviews = postMetadata.map((post) => (
    // with the spread operator(...)
    <PostPreview key={post.slug} {...post} />

    /* // without the spread operator
   <PostPreview
      key={post.slug}
      title={post.title}
      subtitle={post.subtitle}
      slug={post.slug}
      data={post.date}
    /> */
  ));
  return (
    // show the results fetched above and shows them on the page
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{postPreviews}</div>
  );
}
