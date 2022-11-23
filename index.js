let Pages = {
// one
    one: 
    `
    <div class="content-container">
        <div class="homep">
        <div class="textop"><p>Fast, Straight to the point.</p></div>
        <p>
            Check my
            <a href="https://abdo1code.github.io" target="_blank" class="mainweb">GitHub</a> 
            for more professional Web designs like this.
        </p>
    <br>
        <a href="https://fiverr.com/abdoweb_" target="_blank" class="button">
        <i class="fa-solid fa-bolt"></i> Get your own website now.</a>
</div>
<div class="img sa">
    <img src="./images/alligator.png" alt="homeimg" class="frst" draggable="false">
</div>
    </div>`,
// two
    two: 
    ` <div class="content-container">
    <div class="homep2">
    <div class="textop">
        <p>Get your website.</p>
    </div>
        <p>I'm a professional web designer you need to get your website now check out <a class="fiverr" target="_blank" href="https://www.fiverr.com/abdoweb_">My Fiverr</a></p>
    <div class="img">

        <img src="./images/logo2.png" draggable="false" alt="img2" class="sec">
    </div>
        <br>
    <a class="button" href="#scroll"><i class="fa-solid fa-arrow-down"></i></a>
    </div>
    </div>`,
// three
    three: `
    <div class="content-container">
    <div class="home3container">
    <div class="textop">
        <p>You do not wanna miss out on this.</p>
    </div>
    <p class="homep3">Best price possible, Fast response time, Get your Website quickly, No bullshit.</p>
    <p>
    <a href="https://fiverr.com/abdoweb_" target="_blank" class="button">
    <i class="fa-solid fa-bolt"></i>
    Get your Website now!
    </a> 
    <a href="https://abdo1code.github.io" target="_blank" class="mainweb">GitHub</a></p>
    </div>
    </div>`,
};
let homecontent = document.querySelector(".home .container .home-container");

homecontent.onclick = function () {

    let attribute = this.getAttribute("page");
    if (attribute === "one") {
        this.firstElementChild.style.cssText = "transform: translatex(-1500px); opacity: 0.4; transition: 1s;"
    } else if (attribute == "two") {
        this.firstElementChild.style.cssText = "transform: translatex(-1500px); opacity: 0.4; transition: 1s;"
    } else {
        this.firstElementChild.style.cssText = "transform: translatex(-1500px); opacity: 0.4; transition: 1s;"
    }
    setTimeout(() => {
        if (attribute === "one") {
            this.firstElementChild.style.cssText = "transform: translatex(0px); opacity: 1; transition: 1s;"
            this.setAttribute("page", "two");
            sessionStorage.setItem("page", "two")
            this.innerHTML = Pages.two;
        } else if (attribute == "two") {
            this.firstElementChild.style.cssText = "transform: translatex(0px); opacity: 1; transition: 1s;"
            this.setAttribute("page", "three");
            sessionStorage.setItem("page", "three")
            this.innerHTML = Pages.three;
        } else {
            this.setAttribute("page", "one");
            sessionStorage.setItem("page", "one")
            this.innerHTML = Pages.one;
        }
    }, 812.9);
};


if (sessionStorage.getItem("page") === "one") {
    homecontent.innerHTML = Pages.one
} else if (sessionStorage.getItem("page") === "two") {
    homecontent.innerHTML = Pages.two
} else {
    homecontent.innerHTML = Pages.three
}
window.onload = () => homecontent.setAttribute("page", sessionStorage.getItem("page"));


let scrollbtn = document.querySelector("#link");
scrollbtn.addEventListener("click", () => {
    window.scrollTo(0, 2555, "smooth");
});

let section = document.querySelector(".about-me");
let section2 = document.querySelector(".link");
let img = document.querySelector(".about-me .container img");
let parag = document.querySelector(".about-me .container p");
let img2 = document.querySelector(".link .container img");
let started = false; // Function Started ? No
window.onscroll = function () {
if (window.scrollY >= section.offsetTop) {
    if (!started) {
        img.classList.add("show")
        parag.classList.add("show")
    }
    }
    if (window.scrollY >= section2.offsetTop) {
        if (!started) {
            img2.classList.add("show")
        }
        started = true;
    }
};

let stick1 = document.querySelector(".stickygallery");
window.addEventListener("click",(e) => {
    let stick1 = document.querySelector(".stickygallery");
    if (e.target.classList.contains("stickygallery")) {
        document.body.removeChild(stick1)
        // resume scrollin
        document.body.style.height = "0%"
        document.body.style.overflow = "visible"
    }
});

let imgs = document.querySelectorAll(".gallery .main-container .gallery-item img");

imgs.forEach((e) => {
    e.addEventListener("click", (e) => {
        let sticky = document.createElement("div");
        sticky.setAttribute("class", "stickygallery showsticky");
        document.body.appendChild(sticky);
        let text = document.createElement("a");
        let textnode = document.createTextNode("Visit website.");
        text.appendChild(textnode);
        text.setAttribute("href", e.target.dataset.href);
        let image = document.createElement("img");
        image.setAttribute("src", e.target.dataset.background);
        image.setAttribute("draggable", "false");
        document.querySelector(".stickygallery").appendChild(image);
        document.querySelector(".stickygallery").appendChild(text);
        // stop scrollin
        document.body.style.height = "100%"
        document.body.style.overflow = "hidden"
    });
});


// sidelinks

let sidelinksbars = document.querySelector(".bars");
let sidelinks = document.querySelector(".sidelinks");

sidelinksbars.addEventListener("click", () => {
    sidelinks.classList.toggle("showsidelinks");
if (sidelinks.classList.contains("showsidelinks")) {
    sidelinksbars.style.position = "fixed";
} else {
    sidelinksbars.style.position = "absolute";
}
});
