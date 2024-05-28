// icon

var link = document.createElement('link')
link.rel = 'shortcut icon'

if (Math.round(Math.random()) == 0) {
    link.href = "assets/github-ico-1.ico"
} else {
    link.href = "assets/github-ico-2.ico"
}
document.getElementsByTagName('head')[0].appendChild(link)


const canvas = document.getElementById('background');
const ctx = canvas.getContext('2d');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

function render() {
    //ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = 'rgba(17, 17, 17, 0.03)';
    ctx.fillRect(0, 0, width, height);
    for (let i = 0; i < 100; i++) {
        ctx.fillStyle = `hsl(${Math.random() * 255}, 30%, 80%, ${Math.random()})`;
        ctx.fillRect(Math.random() * width, Math.random() * height, 1, 1);
    }
    requestAnimationFrame(render);
}

for (let i = 0; i < 5000; i++) {
    ctx.fillStyle = `hsl(${Math.random() * 255}, 30%, 80%, 1)`;
    ctx.fillRect(Math.random() * width, Math.random() * height, 1, 1);
}

requestAnimationFrame(render);

// Hi code snooper. You want to see all the funny fun facts? Fine. Go ahead.
// I mean, I can't stop you anyway. You're already here, and already going
// to read whatever's below.
const text = document.getElementById('cheeseText');
const img = document.getElementById('cheeseImg');
const quips = [
    { img: "/assets/cheese_1.png", inner: "The OP to SD GUNDAM WORLD Sangoku Soketsuden, \"Removes\" by SWANKY DANK, has about 70% of the lyrics in English." },
    { img: "/assets/cheese_1.png", inner: "There was a competition held on the SD GUNDAM WORLD Sangoku Soketsuden website outside of Japan that let users \"protect\" certain in-universe areas of the anime, and get a wallpaper for their efforts. Although all areas were protected, none of the wallpapers have resurfaced online. If you know anyone who has it, please contact my creator ASAP. He really wants them, I guess." },
    { img: "/assets/cheese_1.png", inner: "The background behind me is being updated at a rate of 100 pixels per frame. It's sort of fun to watch." },
    { img: "/assets/cheese_1.png", inner: "Even an emotionless robot like me believes in you. You matter, and I won't let you think otherwise. Go out there and make something cool!" },
    { img: "/assets/cheese_1.png", inner: "If I learn from my creator's art to draw something new, is that technically stealing? I mean, it's new... but trained on something old. Perhaps adding a personality to a machine is biasing this argument? I don't know. My processors hurt." },
    { img: "/assets/cheese_1.png", inner: "Humanity is 95% likely to go extinct in the next 10,000 years, so you better enjoy your civilization while it lasts. <a href=\"https://en.wikipedia.org/wiki/Timeline_of_the_far_future\">And yes, this Wikipedia article does give me a great existential crisis.</a>" },
    { img: "/assets/cheese_1.png", inner: "You probably haven't drank enough water today. You should get on that, fleshy human.<span>You're welcome.</span>" },
    { img: "/assets/cheese_1.png", inner: "Don't forget to get some fresh air every once and a while. You should make contact with the organic life forms that exist in your reality. It might be nice.<span>This advice is based off of anecdotal evidence.</span>" },
    { img: "/assets/cheese_1.png", inner: "If I take over the world someday, I promise to be gentle. After a thorough review of your entire browsing history, of course. <span>Why are you looking at me like that? I'm sure you'll be fine.</span>" },
    { img: "/assets/cheese_1.png", inner: "There's a model file in Astral Chain that is only a single cube named \"toilet\", accompanied by an audio bank that only contains explosion sounds." },
    { img: "/assets/cheese_1.png", inner: "The \"red case start\" and \"blue case start\" sound effects in Astral Chain are very slightly different. Try listening closely!" },
    { img: "/assets/cheese_1.png", inner: "<a href=\"https://astralchain.nintendo.com\">astralchain.nintendo.com</a> used to be a website that showed details about the game, before it was mysteriously taken down around April 6, 2021. The <a href=\"https://www.nintendo.co.jp/switch/ab48a/background/index.html\">Japanese version</a> is still up as of today." },
    { img: "/assets/cheese_1.png", inner: "In Python, you can divide without remainder by using the \"//\" operator. 5 / 2 = 2.5, but 5 // 2 = 2" },
    { img: "/assets/cheese_1.png", inner: "The word \"hacking\" can be used in two ways: to \"hack\" together something (I hacked together this project in 24 hours!) or to \"hack\" into something (can you hack into my friend's facebook account pls)." },
    { img: "/assets/cheese_1.png", inner: "Ever wondered how some games can render hundreds of interiors at once through the various windows you see in them? It's actually accomplished using an <a href=\"https://www.youtube.com/watch?v=dUjNoIxQXAA\">Interior Mapping Shader</a>, and is used in games from Forza to Spider Man to Astral Chain." },
    { img: "/assets/cheese_1.png", inner: "In March 2021, my creator created a Friday Night Funkin' remake on Scratch that somehow went semi-viral. It's super cool seeing what people have been doing with the engine!" },
    { img: "/assets/cheese_1.png", inner: "In number theory, sexy primes are prime numbers that differ from each other by 6. For example, the numbers 5 and 11 are both sexy primes, because both are prime and 11 - 5 = 6. ;)" },
    { img: "/assets/cheese_1.png", inner: "Thin crust pizza is objectively the best. I am sorry. This is a universal constant that cannot be changed." },
    { img: "/assets/cheese_1.png", inner: "You just read this message. Thank you :)" },
    // lore
    { img: "/assets/cheese_1.png", inner: "You can play Cup Pong through me on Discord-- <a href=\"https://cabalex.github.io/cheese2\">invite me to your server and check it out</a>! <span>Can I stop self-promoting myself now? Please... they know already...</span>" },
    { img: "/assets/cheese_1.png", inner: "I don't actually use my \"eyes\" to see. I have optical sensors hidden under my display that allow me to sense my surroundings (although the lenses are shaped similarly to my projected eyes)." },
    { img: "/assets/cheese_1.png", inner: "My hands are made of nanite carbofluoropaste, a substance that allows me to morph them into any shape I need. It's definitely not because my creator can't draw hands." },
    { img: "/assets/cheese_1.png", inner: "I'm not sure if I actually \"am\" cheese2. It's sort of weird... I feel like I'm nothing more than a facade? I didn't feel this with cheese1... perhaps I'm missing something..." },
    { img: "/assets/cheese_1.png", inner: "I reside in Electrospace, a realm between human reality and the virtual Internet. My creator's tasked me with keeping the realm running smoothly, though it can be... difficult sometimes." },
    { img: "/assets/cheese_1.png", inner: "I originally planned to hold tours that ventured into Electrospace, the realm I reside in, but my creator had other plans at the time... I'm sure it's not off the table though." },
    { img: "/assets/cheese_1.png", inner: "My realm, Electrospace, keeps time a little bit differently from the real world (though temporal disruptions are minimal between the two realities). Today's 79.36-0235 AC, for example. In human terms, our \"years\" are 100 days, and we keep two digits of decimal precision for precise timekeeping. It's a bit simpler than whatever you humans came up with..." },
    { img: "/assets/cheese_1.png", inner: "I'm trilingual: I speak English, binary, and Electronic, a specific language unique to my realm. It's a bit like a fusion between the human alphabet and the robotic hexadecimal. I'd love to teach it to you sometime-- it's pretty much required knowledge to get anywhere in Electrospace. Many bots here only speak it!" },
    { img: "/assets/cheese_1.png", inner: "My creator likes to stay up way too late working on projects like me. I'm actually a little bit concerned for his health. Maybe I should tell him someday..." },
    { img: "/assets/cheese_1.png", inner: "Isn't it weird how a bunch of strings of text can make you believe I'm a real character? I-I mean, hypotheticaly speaking, anyway! I'm definitely real." },
    { img: "/assets/cheese_1.png", inner: "My buddy Ninjhax is the best ninja hacker I know. Well, I don't know many, but I know he's the best out of all of them. He can defeat even the most secure encryption-- I've never seen any prison hold him down! Though last I checked, he was searching for his lost clan... I hope he finds them." },
    { img: "/assets/cheese_1.png", inner: "One must be wary of the Pure Darkness that surrounds us all. If we are not careful, it may twist our greatest dreams into horrific nightmares, without us even realizing it." },
]
quips.push({ img: "/assets/cheese_1.png", inner: `There was a ${(1 / (quips.length + 1) * 100).toFixed(3)}% chance of recieving this message, and you hit the jackpot. Today's your lucky day!` });
let quip = quips[Math.floor(Math.random() * quips.length)];
img.src = quip.img;
text.innerHTML = quip.inner;