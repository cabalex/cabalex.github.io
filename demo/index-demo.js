let projects = document.getElementsByTagName('a');
for (var i = 0; i < projects.length; i++) {
    if (projects[i].className == "project") {
        let project = projects[i];
        project.addEventListener('click', (e) => {
            let fill = document.createElement('div');
            fill.className = "project";
            fill.style = "opacity: 0"
            project.after(fill);

            let bounding = project.getBoundingClientRect();
            project.style = `z-index: 10; position: fixed; left: ${bounding.left}px; top: ${bounding.top}px; animation: ${project.getAttribute('data-bg') == "white" ? "openProject" : "openProjectDark"} 0.5s ease-in`;

            e.preventDefault();
            setTimeout(() => {
                project.className = project.getAttribute('data-bg') == "white" ? "filler" : "filler-dark";
                project.style = "";
                window.location = project.getAttribute('href');
            }, 400);
        })
    }
}