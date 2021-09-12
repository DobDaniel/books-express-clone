let book = document.getElementById("first-book");
let left_arrow = document.getElementById("left");
let right_arrow = document.getElementById("right");
let moves = 0;
let max_moves = 5;
let move = 0;

const goRight = (e) => {
    e.preventDefault();
    let id = null;
    let last_move = move;
    if (moves <= max_moves) {
        moves += 1;
        id = setInterval(frame, 7);
    }
    function frame() {
        if (move == last_move + 50) {
            clearInterval(id);
        } else {
            move = move + 1;
            book.style.marginLeft = "-" + move + "%";
        }
    }
};
const goLeft = (e) => {
    e.preventDefault();
    let id = null;
    let last_move = move;
    if (moves > 0) {
        moves -= 1;
        id = setInterval(frame, 7);
    }
    function frame() {
        if (move == last_move - 50) {
            clearInterval(id);
        } else {
            move = move - 1;
            book.style.marginLeft = -move + "%";
        }
    }
};

left_arrow.addEventListener("click", goLeft);
right_arrow.addEventListener("click", goRight);

backtotop = document.getElementById("back-to-top");

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        backtotop.style.opacity = "1";
        backtotop.style.visibility = "visible";
    } else {
        backtotop.style.opacity = "0";
        backtotop.style.visibility = "hidden";
    }
}

function topFunction(e) {
    e.preventDefault();
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

backtotop.addEventListener("click", topFunction);

let darkmode = document.getElementById("dark-mode");
let root = document.documentElement;
let elements = document.getElementsByTagName("*");
let sw = 1;
const goDark = (e) => {
    e.preventDefault();
    // if (root.style.getPropertyValue("--headercolor") == "white") {
    //     root.style.setProperty("--svgfill", "white");
    //     root.style.setProperty("--textcolor", "white");
    //     root.style.setProperty("--footercolor", "black");
    //     root.style.setProperty("--mainsectioncolor", "#1D2129");
    //     root.style.setProperty("--benefitscolor", "#1B1F26");
    //     root.style.setProperty("--headercolor", "#1D2129");
    //     root.style.setProperty("--logocolor", "white");
    // } else {
    //     root.style.setProperty("--svgfill", "inherit");
    //     root.style.setProperty("--textcolor", "inherit");
    //     root.style.setProperty("--footercolor", "#f6f6f6");
    //     root.style.setProperty("--mainsectioncolor", "white");
    //     root.style.setProperty("--benefitscolor", "#ededed");
    //     root.style.setProperty("--headercolor", "white");
    //     root.style.setProperty("--logocolor", "#162b75");
    // }
    if (sw) {
        document.documentElement.setAttribute("data-theme", "dark");
        
        sw = 0;
    } else {
        document.documentElement.setAttribute("data-theme", "light");
        sw = 1;
    }
};

darkmode.addEventListener("click", goDark);
