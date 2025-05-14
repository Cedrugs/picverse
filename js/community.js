// Active Forum Discussions

const forumData = [
    {
        title: "How to Improve Digital Painting",
        author: "JonDeMarcus",
        replies: 51,
        date: "25 May 2025",
    },
    {
        title: "Best tools for sci-fi art creation",
        author: "futurist",
        replies: 42,
        date: "26 May 2025",
    },
    {
        title: "Community critique for my latest work",
        author: "amy.art",
        replies: 31,
        date: "25 May 2025",
    },
    {
        title: "Organizing virtual art jams",
        author: "nickDiGiovanni",
        replies: 17,
        date: "25 May 2025",
    }
];

const section = document.getElementById("Active-Forum-Discussions");

forumData.forEach(forum => {
    const forumContainer = document.createElement("div");
    forumContainer.className = "forum-container";

    // Forum Details
    const forumDetails = document.createElement("div");
    forumDetails.className = "forum-details";

    const forumDetailsH2 = document.createElement("h2");
    forumDetailsH2.textContent = forum.title;

    const forumDetailsP = document.createElement("p");
    forumDetailsP.textContent = `by ${forum.author} - ${forum.date}`;

    forumDetails.appendChild(forumDetailsH2);
    forumDetails.appendChild(forumDetailsP);

    // Forum Likes
    const forumLikes = document.createElement("div");
    forumLikes.className = "forum-likes";

    const forumLikesH2 = document.createElement("h2");
    forumLikesH2.textContent = forum.replies;

    const forumLikesImg = document.createElement("img");
    forumLikesImg.src = "/assets/icons/chat.png";
    forumLikesImg.alt = "Chat Icon";

    forumLikes.appendChild(forumLikesH2);
    forumLikes.appendChild(forumLikesImg);

    // Append to Forum Details
    forumContainer.appendChild(forumDetails);
    forumContainer.appendChild(forumLikes);

    // Append Forum to section
    section.appendChild(forumContainer);
});

// Recent Activities

const activityData = [
    "Forum created: \"How to improve digital painting?\"",
    "New follower: @amy.art started following you",
    "Comment added to \"Best tools for sci-fi art creation\"",
    "Forum created: \"Community critique for my latest work\""
];

const activitySection = document.getElementById("Recent-Activities");

activityData.forEach(activity => {
    const forumContainer = document.createElement("div");
    forumContainer.className = "forum-container";

    // Forum Details
    const forumDetails = document.createElement("div");
    forumDetails.className = "activity-details";

    const forumDetailsH2 = document.createElement("h2");
    forumDetailsH2.textContent = activity;

    forumDetails.appendChild(forumDetailsH2);

    // Append to Forum Details
    forumContainer.appendChild(forumDetails);

    // Append Forum to section
    activitySection.appendChild(forumContainer);
});

// Active Users

const users = [
    "JamesArtReal",
    "kevin.arts",
    "will.stetson",
    "maxwellPro",
    "flazhs_1212",
    "camie_2931",
    "Sigmaboy360",
    "CoolDude99",
    "demogorgonX",
    "awooGas",
    "XXxhrisxXX",
    "shroudArts"
];

const usersSection = document.getElementById("Active-Users-Container");

users.forEach(user => {
    const userContainer = document.createElement("div");
    userContainer.className = "user-container";

    // User Details
    const userDetails = document.createElement("div");
    userDetails.className = "forum-details user-details";

    const userDetailsH2 = document.createElement("h2");
    userDetailsH2.textContent = user;

    const userDetailsImg = document.createElement("img")
    userDetailsImg.src = "/assets/icons/profile.png";
    userDetailsImg.alt = "Profile Icon"

    userDetails.appendChild(userDetailsImg);
    userDetails.appendChild(userDetailsH2);

    // Append to User Container
    userContainer.appendChild(userDetails);

    usersSection.appendChild(userContainer);
});

