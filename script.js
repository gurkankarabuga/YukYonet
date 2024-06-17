// Menü açma/kapama işlemi
function onClickMenu() {
    document.getElementById("menu").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
}

// Scroll to top
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.querySelector(".to-top").style.display = "block";
    } else {
        document.querySelector(".to-top").style.display = "none";
    }
}

document.querySelector(".to-top").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
