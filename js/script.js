document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(event){
        event.preventDefault();

        const section = document.querySelector(this.getAttribute("href"));

        section.scrollIntoView({
            behavior: "smooth"
        });
    });
});

const btn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        btn.style.display = "block";
    } else{
        btn.style.display = "none";
    }

});

btn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});