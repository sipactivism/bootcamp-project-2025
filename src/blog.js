var blogEntries = [
    {
        title: "Hello world",
        date: "10-16-2025",
        description: "As part of milestone 1, I've had no choice but to make this blog. Expect to see more posts here in the future about my life or cool tech problems I've solved or have at least tried to.",
        image: "welcome.jpg",
        imageAlt: "Green whiteboard with the text 'welcome' and a smiley face",
        slug: "first-post",
    },
    {
        title: "Subway",
        date: "10-16-2025",
        description: "Subway is genuinely the best place to eat on campus. No, I haven't eaten everywhere, but for the price, it is the greatest bang for your buck. Sure, you COULD eat at Chick-fil-a, but you get MUCH less actual *food* there for the same price. A 12 inch sandwich from Subway is ONLY about 10 bucks, not to mention the cookies. The cookies are half of the appeal. Please be careful when ordering cookies on GrubHub, as they can be forgotten. CHECK YOUR BAGS. To sum up, if you haven't been to a subway on campus, try it out. Reliable good cheap food that's open late.",
        image: "subwaycookiebag.jpg",
        imageAlt: "Subway cookie bag with the text 'lookie lookie, I've got a cookie'",
        slug: "subway",
    },
];
var addEntriesToDOM = function () {
    blogEntries.forEach(function (entry) {
        console.log(entry);
    });
};
window.onload = function () {
    addEntriesToDOM();
};
