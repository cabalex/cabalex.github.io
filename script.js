const LIVE = [
    ["sectorv.mp4", "Sector V", "Zone 09, Astral Chain"],
    ["sewers.mp4", "Collecting Basin", "Ark Sewers, Astral Chain"],
    ["arkmall.mp4", "Ark Mall", "Zone 32, Astral Chain"],
    ["halshideout-1.png", "Hal's Hideout", "Zone 09, Astral Chain"],
    ["halshideout-2.png", "Hal's Hideout", "Zone 09, Astral Chain"],
    ["halshideout-3.png", "Stairway", "Zone 09, Astral Chain"],
]

const GALLERY = [
    {
        img: "laundry.png",
        href: "https://slugsec.ucsc.edu/posts/Laundry-2024",
        tag: "money laundering?",
        title: "Taking Down Big Laundry",
        desc: "How a friend and I accidentally found a vulnerability in one of the world's biggest laundry companies"
    },
    {
        img: "get-tools.png",
        href: "https://cabalex.github.io/get-tools",
        tag: "new!",
        title: "GET Tools",
        desc: "View campus spending, scan in-store, and share with friends"
    },
    {
        img: "slugschedule.png",
        href: "https://cabalex.github.io/slugschedule",
        tag: "a first pass experience",
        title: "SlugSchedule",
        desc: "Tired of a sluggish class search? Get everything you need to enroll, right here."
    }
]

var link = document.createElement('link')
link.rel = 'shortcut icon'

if (Math.round(Math.random()) == 0) {
    link.href = "assets/github-ico-1.ico"
} else {
    link.href = "assets/github-ico-2.ico"
}
document.getElementsByTagName('head')[0].appendChild(link)

const live = document.getElementById("live");
const title = document.getElementById("liveTitle");
const liveLocation = document.getElementById("location");

let random = Math.floor(Math.random() * LIVE.length);
title.innerText = LIVE[random][1];
liveLocation.innerText = LIVE[random][2];

if (LIVE[random][0].endsWith("mp4")) {
    let video = document.createElement("video");
    video.src = "./assets/live/" + LIVE[random][0];
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    live.appendChild(video);
} else {
    let img = document.createElement("img");
    img.src = "./assets/live/" + LIVE[random][0];
    live.appendChild(img);
}

const carousel = document.getElementById("carousel");
const left = document.getElementById("leftGallery");
const right = document.getElementById("rightGallery");

function createCarouselItem(item, i) {
    let carouselItem = document.createElement("a");
    carouselItem.className = "carouselItem";
    carouselItem.href = item.href;
    carouselItem.style.left = `${i * 100}%`;
    carouselItem.style.background = `url(./assets/gallery/${item.img})`;
    carouselItem.innerHTML = `
        <div class="text">
            <p class="tag">${item.tag}</p>
            <h1>${item.title}</h1>
            <p>${item.desc}</p>
        </div>
    `;
    return carouselItem;
}

let carouselIndex = 0;
let autoScroll = true;
let carouselItems = GALLERY.map(createCarouselItem).forEach((item) => {
    carousel.appendChild(item);
})

setInterval(() => {
    if (autoScroll) {
        carouselIndex = (carouselIndex + 1) % GALLERY.length;
        carousel.style.transform = `translateX(-${carouselIndex * 100}%)`;
    }
}, 5000)

left.addEventListener("click", () => {
    carouselIndex = (carouselIndex - 1 + GALLERY.length) % GALLERY.length;
    carousel.style.transform = `translateX(-${carouselIndex * 100}%)`;
    autoScroll = false;
})

right.addEventListener("click", () => {
    carouselIndex = (carouselIndex + 1) % GALLERY.length;
    carousel.style.transform = `translateX(-${carouselIndex * 100}%)`;
    autoScroll = false;
})