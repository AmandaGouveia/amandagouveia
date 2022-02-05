const MODAL = document.getElementById("bg-modal")
// const MODALBG = document.getElementById("modal-click-bg")


const PROJECTS = {
    "flower-garden": {
        title: "Flower Garden",
        description: `
        <h3>Flower Garden</h3>
        <p>Flower Garden is a simple simulation game written in vanilla javascript.</p>
        <h4>Challenges</h4>
        <p>With Flower Garden, I learned how to programmatically create and modify SVG images.</p>
        <p>I also had to refactor a large portion of the code after the first working version because I did not realize how much latency was involved in DOM manipulation. After the rewrite, it works great and I have a better understanding of the need to minimize unnecesary DOM manipulation.</p>`
    },
    "sort-game": {
        title: "Sort the Colors",
        description: `
        <h3>Sort the Colors</h3>
        <p>Sort the Colors is a simple color sorting puzzle game written in vanilla javascript.</p>
        <h4>Challenges</h4>
        <p>With Sort the Colors, I focused on executing a complete polished project in a short timeframe. The main game was done in one day, and settings and options were added over 2 other days.</p>
        `
    },
    "plumbers-resolve": {
        title: "Plumber's Resolve",
        description: `
        <h3>Plumber's Resolve</h3>
        <p>Plumber's Resolve is a full-stack issue tracking application designed for the plumbing industry.</p>
        <h4>Challenges</h4>
        <p>Plumber's Resolve is my most complete full-stack project to date.</p>`

    },
    "puzzle-books": {
        title: "Puzzle Books",
        description: `
        <h3>Puzzle Books</h3>
        <p>I designed several puzzle books for print, including covers, logo, and interiors using Illustrator. Although not web development, I was able to do clean design according to the printing specifications and execute a polished product.</p>
        <h4>Challenges</h4>
        <p>To design the puzzle books, I had to use the specifications of the printer. It was a bit of a challenge to get the colors to translate into print well and to account for bleed.</p>
        <p>Since the focus was on the books, the website uses a wordpress template, so that is not the best example of my web development skills.</p>`
    },
    "api-project": {
        title: "NWS Alert Extension",
        description: `
        <h3>NWS Alert Extension</h3>
        <p>I used the NWS alert api to create a chrome extension to show current weather alerts in an area.</p>
        <h4>Challenges</h4>
        <p>This was my first project using an API. It was challenging to figure out how to interpret the data coming from the service because it was not in the format from the documentation, but I was able to make it work.</p>`
    },
    "reddit-clone-project": {
        title: "Reddit Clone",
        description: `
        <h3>Reddit Clone</h3>
        <p>This page is a Reddit clone. It is a simple example of a CRUD application built in React.</p>
        <h4>Challenges</h4>
        <p>This was my first solo React project.</p>`
    }
}

function prjclick(idname) {
    let prj = document.getElementById(idname)
    let cover = prj.innerHTML
    document.getElementById("modal-cover").innerHTML = cover
    let desc = document.getElementById("project-description")
    desc.innerHTML = PROJECTS[idname].description
    
    MODAL.style.display = "flex";
    // MODALBG.style.display = "flex";
}
function closeModal() {
    MODAL.style.display = "none";
    // MODALBG.style.display = "none";
}

function modalClick(){

}
let links = document.getElementsByClassName("modal-links")
// for (var i=0; i < links.length; i++)
//   links[i].onclick = function() {
//     return false;
// }