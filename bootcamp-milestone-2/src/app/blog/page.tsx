import type { Metadata } from "next";
import blogEntries from "./blogData";
import BlogPreview from "@/src/components/blogPreview";

export const metadata: Metadata = {
  title: "Blog | Tobin's Site",
};

export default function Blog() {
  return (
    <>
      {blogEntries.map((entry) => (
        <BlogPreview
          title={entry.title}
          description={entry.description}
          image={entry.image}
          imageAlt={entry.imageAlt}
          date={entry.date}
          slug={entry.slug}
          key={entry.title}
        />
      ))}
    </>
  );
}
