const projects = [
    {
        name: "SlugSchedule",
        time: "August 2023",
        description: "Make planning the quarter a breeze! See enrollment history, walking times, RateMyProfessor reviews, and create schedules all in one place.",
        why: "The UCSC class search was way too slow for my liking... I just wanted to plan my schedule and see all my classes without waiting hours for pages to load!",
        tags: ["Svelte", "GitHub Actions"],
        link: "https://cabalex.github.io/slugschedule",
        repo: "https://github.com/cabalex/slugschedule",
        images: {
            "desktop": ["./assets/images/slugschedule_desktop1.png"],
            "mobile": ["./assets/images/slugschedule_mobile1.png"]
        }
    },
    {
        name: "LectureLighter",
        time: "June 2022",
        description: "Make lectures easier to watch! LectureLighter speeds up silent parts of lectures, such as when the professor is writing or waiting for questions, so you can focus on the parts you actually need to learn.",
        why: "In the summer of 2022, I was taking a class that had me watching over 20 hours of lecture videos a week. Work smarter, not harder, right?<br><br>It's now a Chrome extension that seamlessly integrates with the Canvas video player and Zoom recordings!",
        tags: ["Svelte", "Web Audio API"],
        link: "https://chrome.google.com/webstore/detail/lecturelighter/ncmmnjgdnafpjbgmgjghmiciknejojfp",
        repo: "https://github.com/cabalex/lecturelighter",
        images: {
            "desktop": ["./assets/images/default_desktop1.png"],
            "mobile": ["./assets/images/default_mobile1.png"]
        }
    }
]

const otherProjects = [
    ...projects.map(x => { return {name: x.name, description: x.description, link: x.link} }),

]


function setupLottieLogo() {
    let container = document.getElementById("logo");
    let temp = document.getElementById("temp");
    let anim = lottie.loadAnimation({
        container: container,
        renderer: "svg",
        loop: false,
        autoplay: false,
        path: "./assets/logo.json"
    });

    let started = false;

    anim.addEventListener("data_ready", function (animation) {
        temp.remove();
        setTimeout(() => {
            anim.play();
            setTimeout(() => started = true, 2000);
        }, 1000);
    });

    anim.addEventListener("enterFrame", function (animation) {
        if (animation.currentTime > (anim.totalFrames - 1)) {
            anim.pause();
        }
    });

    let direction = 1;
    container.addEventListener('mouseenter', (e) => {
        if (!started) return; // don't let the user interact until first animation has completed

        direction *= -1;
        anim.setDirection(direction);
        anim.play();
    })
}

function setupProjects() {
    let section = document.getElementById("projects");
    
    for (let i = 0; i < projects.length; i++) {
        let project = projects[i];

        let projectDiv = document.createElement("div");
        projectDiv.classList.add("project");

        projectDiv.innerHTML = `
            <div class="text">
                <span>${project.time}</span>
                <h1>${project.name}</h1>
                <p>${project.description}</p>
                <div class="why">
                    ${project.why}
                </div>
                <div class="btnrow">
                    ${project.link ? '<a class="linkBtn" href=' + project.link + 'target="_blank">Check it out<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path fill="white" d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg></a>': ''}
                    ${project.repo ? '<a class="repoBtn" href=' + project.repo + 'target="_blank"><svg width="98" height="96" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#fff"/></svg></a>': '<div style="height: 96px"></div>'}
                </div>
            </div>
        `

        section.appendChild(projectDiv);
    }

    let phoneImg = document.getElementById("mobileImg");
    let desktopImg = document.getElementById("desktopImg");

    let currentIndex = -1;

    window.addEventListener("scroll", function (e) {
        let windowHeight = window.innerHeight;
        let scrollTop = window.scrollY;

        let height = scrollTop - windowHeight * 0.5;

        let index = Math.min(projects.length - 1, Math.max(0, Math.floor(height / windowHeight)));

        if (index == currentIndex) return;
        
        console.log(height, Math.floor(height / scrollTop), index)
        
        currentIndex = index;
        let project = projects[index];

        phoneImg.style = `background-image: url("${project.images.mobile[0]}")`;
        desktopImg.style = `background-image: url("${project.images.desktop[0]}")`;
        
    })
}

function setupQuickSwitcher() {
    window.addEventListener("keydown", function (e) {
        if (e.key == "k" && e.ctrlKey) {
            e.preventDefault();
            document.getElementById("quickSwitcher").classList = "";
            document.getElementById("quickSwitcherInput").focus();
        } else if (e.key == "Escape") {
            document.getElementById("quickSwitcher").classList = "hidden";
        }
    })

    window.addEventListener("click", function (e) {
        if (e.target.closest("#quickSwitcher") == null) {
            document.getElementById("quickSwitcher").classList = "hidden";
        }
    })

    document.getElementById("quickSwitcherInput").addEventListener("keyup", function (e) {
        let value = e.target.value.toLowerCase();

        let results = otherProjects.filter(x => x.name.toLowerCase().includes(value) || x.description.toLowerCase().includes(value));

        let container = document.getElementById("quickSwitcherResults");

        if (value.length === 0) {
            container.innerHTML = "";
            return;
        }

        container.innerHTML = results.map(x => `<a href="${x.link}" target="_blank"><div class="result"><h1>${x.name}</h1><p>${x.description}</p></div></a>`).join(``);
    });
}

setupLottieLogo();
setupProjects();
setupQuickSwitcher();