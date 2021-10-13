const addLink = document.getElementById('add-link')
const bookmarkBar = document.getElementById('bookmarks')

var links = [];
links = JSON.parse(localStorage.getItem('HOME_LINKS'));   
if (links == null) links = [];

function addBookmark() {
    const URL = prompt("My bookmark")
    if (URL != null && URL.startsWith("http")) {
        // request the url to get og: params and title of webpage - May not work due to CORS??
        // xhr.onerror is a fallback when CORS is a thing
        var xhr = new XMLHttpRequest();
        xhr.open("GET", URL);
        xhr.setRequestHeader('Content-Type', 'text/plain')
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                const title = (/<title>(.*?)<\/title>/m).exec(xhr.responseText);
                const desc = (/<meta property="og:description" content="(.*?)">/m).exec(xhr.responseText);
                const imageUrl = (/<meta property="og:image" content="(.*?)">/m).exec(xhr.responseText);
                let cleanUrl = URL.split("://")[1].replace("www.", "").split("/")[0];
                links.push(`${imageUrl ? `background-image: url("${imageUrl[1]}")` : ""}|<a createtime="${Date.now()}" href="${URL}"><h1>${title ? title[1] : cleanUrl}</h1><p>${desc ? desc[1] : ""}</p></a>`);
                localStorage.setItem('HOME_LINKS', JSON.stringify(links))
                
                const node = createMyCard(links[links.length - 1])
                node.addEventListener('contextmenu', contextMenu);
                node.style.animation = "cardAdd 0.5s ease-in-out";
                bookmarkBar.insertBefore(node, addLink);
            }
        }
        xhr.send();
    }
}

function createMyCard(link) {
    var [style, inner] = link.split("|");
    node = document.createElement('article');
    node.setAttribute('class', 'card my-card')
    console.log(style)
    node.setAttribute('style', style)
    node.innerHTML = inner;
    return node;
}
for (var i = 0; i < links.length; i++) {
    bookmarkBar.insertBefore(createMyCard(links[i]), addLink);
}

function contextMenu(ev) {
    console.log(links.indexOf(`${this.style.backgroundImage != "" ? "background-image: " + this.style.backgroundImage : ""}|${this.innerHTML}`), `background-image: ${this.style.backgroundImage}|${this.innerHTML}`)
    ev.preventDefault();
    if (confirm("Delete?")) {
        links.splice(links.indexOf(`background-image: ${this.style.backgroundImage}|${this.innerHTML}`), 1);
        localStorage.setItem('HOME_LINKS', JSON.stringify(links));
        this.style.animation = "cardDelete 0.5s ease-in-out"
        setTimeout(() => {this.remove()}, 500)
    }
}
const myCards = document.getElementsByClassName('my-card');
for (var i = 0; i < myCards.length; i++) {
    myCards[i].addEventListener('contextmenu', contextMenu)
}

// icon

var link = document.createElement('link')
link.rel = 'shortcut icon'

if (Math.round(Math.random()) == 0) {
    link.href = "assets/github-ico-1.ico"
} else {
    link.href = "assets/github-ico-2.ico"
}
document.getElementsByTagName('head')[0].appendChild(link)

// shake detection

async function shakeAnim(ev) {
    if (this.style.animation) return;
    this.style.animation = 'shakeDeny 0.25s ease-in-out'
    await new Promise(r => setTimeout(r, 250));
    this.style.animation = '';
}
const cardElems = document.getElementsByClassName('card-disabled');
for (var i = 0; i < cardElems.length; i++) {
    cardElems[i].addEventListener('click', shakeAnim)
}