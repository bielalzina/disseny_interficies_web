$(document).ready(function () {
    // ESDEVENIMENTS

    esdevenimentMouseEnter();
    esdevenimentMouseLeave();
});

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
