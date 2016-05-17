console.log("main running")

function showMe() {
    document.getElementById("viewone").style.display = "block";
    document.getElementById("lightboxone").style.display = "block";
    document.getElementById("dots1").style.display = "block";
};

function hideMe() {
    console.log("Hiding all that shizz");
    document.getElementById("viewone").style.display = "none";
    document.getElementById("lightboxone").style.display = "none";
};

function showMeTwo() {
    document.getElementById("viewtwo").style.display = "block";
    document.getElementById("lightboxone").style.display = "block";
    document.getElementById("dots2").style.display = "block";
};

function hideMeTwo() {
    document.getElementById("viewtwo").style.display = "none";
    document.getElementById("lightboxone").style.display = "none";
};