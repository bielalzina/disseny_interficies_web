$(document).ready(function () {
    //ANIMACIO LOGOTIP
    animacioImatge();

    // ESDEVENIMENTS

    esdevenimentMouseEnter();
    esdevenimentMouseLeave();
});

//ANIMACIO LOGOTIP
// El valor de l'opacitat de la imatge canvia entre 0.6 i 1,
// cada 1000ms i de infinitament
function animacioImatge() {
    setInterval(function () {
        $("#logogym")
            .animate({ opacity: "0.6" }, 1000, "linear")
            .animate({ opacity: "1" }, 1000, "linear");
    }, 2000);
}

// ESDEVENIMENT MOUSEENTER()
// Canvia css als elements amb class="opcio_menu" quan punter del
// ratolí es situat a sobre

function esdevenimentMouseEnter() {
    $(".opcio_menu").on("mouseenter", function () {
        $(this)
            .css("background-color", "#fccda9")
            .css("color", "black")
            .css("font-weight", "bold")
            .css("font-size", "22px")
            .css("padding-top", "6px")
            .css("padding-bottom", "6px");
    });
}

// ESDEVENIMENT MOUSELEAVE()
// Torna elements amb class="opcio_menu" a situació inicial quan punter del
// ratolí deixa d'estar situat a sobre d'ell

function esdevenimentMouseLeave() {
    $(".opcio_menu").on("mouseleave", function () {
        $(this).removeAttr("style");
    });
}
