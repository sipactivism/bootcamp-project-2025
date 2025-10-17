type Blog = {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
};

const blogEntries: Blog[] = [
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

const content = document.querySelector(".content");

const addEntriesToDOM = () => {
  blogEntries.forEach((entry) => {
    const postContainer = document.createElement("div");
    const title = document.createElement("h1");
    const titleLink = document.createElement("a");
    const desc = document.createElement("p");
    const date = document.createElement("p");
    const img = document.createElement("img");
    postContainer.classList.add("blog");
    titleLink.href = entry.slug;
    title.innerHTML = entry.title;
    desc.innerHTML = entry.description;
    date.innerHTML = entry.date;
    img.src = entry.image;
    img.alt = entry.imageAlt;
    titleLink.appendChild(title);
    postContainer.appendChild(titleLink);
    postContainer.appendChild(date);
    postContainer.appendChild(desc);
    postContainer.appendChild(img);
    content?.appendChild(postContainer);
  });
};

window.onload = () => {
  addEntriesToDOM();
};
