var blogEntries = [
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
        imageAlt: "Subway cookie bag with the text 'lookie lookie, I've got a cookie'",
        slug: "blogs/subway.html",
    },
];
var content = document.querySelector(".content");
var addEntriesToDOM = function () {
    blogEntries.forEach(function (entry) {
        var postContainer = document.createElement("div");
        var title = document.createElement("h1");
        var titleLink = document.createElement("a");
        var desc = document.createElement("p");
        var date = document.createElement("p");
        var img = document.createElement("img");
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
        content === null || content === void 0 ? void 0 : content.appendChild(postContainer);
    });
};
window.onload = function () {
    addEntriesToDOM();
};
