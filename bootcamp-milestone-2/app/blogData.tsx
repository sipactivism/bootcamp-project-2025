export type Blog = {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
};

export const blogEntries: Blog[] = [
  {
    title: "Hello world",
    date: "10-16-2025",
    description: "My first blog post",
    image: "welcome.jpg",
    imageAlt: "Green whiteboard with the text 'welcome' and a smiley face",
    slug: "blogs/first-post.html",
  },
  {
    title: "Subway",
    date: "10-16-2025",
    description: "A rant about my favorite restaurant on campus",
    image: "subwaycookiebag.jpg",
    imageAlt:
      "Subway cookie bag with the text 'lookie lookie, I've got a cookie'",
    slug: "blogs/subway.html",
  },
];
