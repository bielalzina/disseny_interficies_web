$(document).ready(function () {
    //ANIMACIO IMATGE PROPIA
    animacioImatge();

    //DESPLAÇAMENTS NAV
    anarInici();
    anarEsdeveniments();
    anarEfectes();
    anarJqueryHtml();

    //MOSTRA INFO

    mostraInfo();

    // ESDEVENIMENTS
    esdevenimentOn();
    esdevenimentOff();
    esdevenimentOne();
    esdevenimentClickMostrar();
    esdevenimentDblClickOcultar();
    esdevenimentMouseEnter();
    esdevenimentMouseLeave();
    esdevenimentKeyPress();
    esdevenimentKeyDown();
    esdevenimentKeyUp();
    esdevenimentFocus();
    esdevenimentFocusIn();
    esdevenimentFocusOut();
    obteDimensionsActuals();
    esdevenimentResize();
    esdevenimentScroll();

    //EFECTES
    efecteFadeIn();
    efecteFadeOut();
    efecteFadeToggle();
    efecteFadeTo();
    efecteSlideUp();
    efecteSlideDown();
    efecteSlideToggle();
    efecteAnimateRelatius();
    efecteAnimatePredefinits();
    efecteAnimateCua();
    iniciaEfecteStop();
    aturaEfecteStop();
    efecteHide();
    efecteShow();
    callbackOpacitatOn();
    callbackOpacitatOff();
    iniciaEncadenament();
    resetEncadenament();

    //JQUERY HTML
    insereixEnInici();
    insereixEnFinal();
    insereixAbansDe();
    insereixDespresDe();
    manipulaCss();
    resetCss();
    infoCss();
});

// ANIMACIO IMATGE PROPIA
// El valor de l'opacitat de la imatge canvia entre 0.7 i 1,
// cada 1000ms i de infinitament
function animacioImatge() {
    setInterval(function () {
        $("#avatar")
            .animate({ opacity: "0.7" }, 1000, "linear")
            .animate({ opacity: "1" }, 1000, "linear");
    }, 2000);
}

//DESPLAÇAMENTS NAV
// Desplaçament a l'inici de la pàgina

function anarInici() {
    $("#anar_inici").on("click", function () {
        $(window).scrollTop(0);
    });
}

// Desplaçament a la secció d'esdeveniments

function anarEsdeveniments() {
    $("#anar_esdeveniments").on("click", function () {
        var posicio_inici = $("#inici").position();
        //console.log(posicio_inici.top);
        var posicio_esdeveniments = $("#esdeveniments").position();
        //console.log(posicio_esdeveniments.top);
        $(window).scrollTop(posicio_esdeveniments.top - posicio_inici.top);
    });
}

// Desplaçament a la secció d'efectes

function anarEfectes() {
    $("#anar_efectes").on("click", function () {
        var posicio_inici = $("#inici").position();
        var posicio_efectes = $("#efectes").position();
        $(window).scrollTop(posicio_efectes.top - posicio_inici.top);
    });
}

// Desplaçament a la secció JQUERY HTML

function anarJqueryHtml() {
    $("#anar_jquery_html").on("click", function () {
        var posicio_inici = $("#inici").position();
        var posicio_jquery_html = $("#jquery_html").position();
        $(window).scrollTop(posicio_jquery_html.top - posicio_inici.top);
    });
}

//MOSTRA INFO
// Mostra la informació relativa a cada esedeveniment, efecte ...
// quan el punter del ratolí es posiciona sobre el seu títol

function mostraInfo() {
    $(".info_interactiva").hover(function () {
        var titol = $(this).attr("title");
        var info_a_mostrar = "#info_interactiva_" + titol;
        $(info_a_mostrar).slideToggle(1000);
    });
}

// ESDEVENIMENTS

// ESDEVENIMENT ON()
// Mostra element $("#info_on")

function esdevenimentOn() {
    $("#on_btn").on("click", function () {
        $("#info_on").hide();
        $("#info_on").show(1000);
    });
}

// ESDEVENIMENT OFF()
// Elimina funcionalitat a boto $("#on_btn")
// Amaga element $("#info_on")
// Mostra element $("#info_off")

function esdevenimentOff() {
    $("#off_btn").on("click", function () {
        $("#on_btn").off("click");
        $("#info_on").hide();
        $("#info_off").show(1000);
    });
}

// ESDEVENIMENT ONE()
// Mostra alert una sola vegada quan clicam en boto $("#boto_one")

function esdevenimentOne() {
    $("#boto_one").one("click", function () {
        alert(
            "L'esdeveniment one() nomes s'executa un sol cop, proveu a tornar-hi clicar"
        );
    });
}

// ESDEVENIMENT CLICK()
// Mostra $("#password") quan clicam en boto $("#click_mostrar_btn")

function esdevenimentClickMostrar() {
    $("#click_mostrar_btn").on("click", function () {
        $("#password").show();
    });
}

// ESDEVENIMENT DBLCLICK()
// Amaga $("#password") quan feim doble click en boto $("#cdblclick_ocultar_btn")

function esdevenimentDblClickOcultar() {
    $("#dblclick_ocultar_btn").on("dblclick", function () {
        $("#password").hide();
    });
}

// ESDEVENIMENT MOUSEENTER()
// Canvia text i css a element $("#mouse_enter_leave") quan punter del
// ratolí es situat a sobre

function esdevenimentMouseEnter() {
    $("#mouse_enter_leave").on("mouseenter", function () {
        $(this)
            .text("HAS SITUAT EL PUNTER DEL RATOLÍ SOBRE AQUESTA CAIXA")
            .css("background-color", "#03612d")
            .css("color", "white");
    });
}

// ESDEVENIMENT MOUSELEAVE()
// Torna element $("#mouse_enter_leave") a situació inicial quan punter del
// ratolí deixa d'estar situat a sobre d'ell

function esdevenimentMouseLeave() {
    $("#mouse_enter_leave").on("mouseleave", function () {
        $(this)
            .text("Mou el punter del ratolí sobre aquesta caixa")
            .css("background-color", "#cfecde")
            .css("color", "black");
    });
}

// ESDEVENIMENT KEYPRESS()
// Retorna codi ASCI corresponent a la tecla premuda

function esdevenimentKeyPress() {
    $("#cadena01").keypress(function (e) {
        $("#codi_caracter").html(
            `Codi ASCI del darrer caràcter teclejat: ${e.charCode}`
        );
    });
}

// ESDEVENIMENT KEYDOWN()
// Canvia CSS a elements $("#key_down") i $("#key_up") quan es prem una tecla

function esdevenimentKeyDown() {
    $("#cadena02").keydown(function () {
        $("#key_down").css("background-color", "#03612d").css("color", "white");
        $("#key_up").css("background-color", "#cfecde").css("color", "black");
    });
}

// ESDEVENIMENT KEYUP()
// Canvia CSS a elements $("#key_down") i $("#key_up") quan es deixa
// anar una tecla

function esdevenimentKeyUp() {
    $("#cadena02").keyup(function () {
        $("#key_up").css("background-color", "#03612d").css("color", "white");
        $("#key_down").css("background-color", "#cfecde").css("color", "black");
        setTimeout(function () {
            $("#key_up")
                .css("background-color", "#cfecde")
                .css("color", "black");
        }, 100);
    });
}

// ESDEVENIMENT FOCUS()
// Mostra element $("#focus") quan element $("#cadena03") adquireix el focus

function esdevenimentFocus() {
    $("#cadena03").focus(function () {
        $("#focus").show();
    });
}

// ESDEVENIMENT FOCUSIN()
// Mostra $("#focusin") i amaga $("#focusout")
// quan $("#cadena04") adquireix el focus

function esdevenimentFocusIn() {
    $("#cadena04").focusin(function () {
        $("#focusout").hide();
        $("#focusin").show();
    });
}

// ESDEVENIMENT FOCUSOUT()
// Amaga $("#focusin") i mostra $("#focusout")
// quan $("#cadena04") perd el focus

function esdevenimentFocusOut() {
    $("#cadena04").focusout(function () {
        $("#focusin").hide();
        $("#focusout").show();
    });
}

// FUNCIÓ QUE RETORNA LES DIMENSIONS ACTUALS DE L'OBJECTE WINDOW
// Mostra en $("#size") les dimensions inicials de $(window)
// S'executa quan es carrega la pagina, no està associada a cap
// esdeveniment

function obteDimensionsActuals() {
    var ample = $(window).width();
    var alt = $(window).height();
    $("#size").html(`Amplada x alçada actuals: ${ample} x ${alt} `);
}

// ESDEVENIMENT RESIZE()
// Mostra en $("#size") les dimensions actuals de $(window)
// a mesura que canvien les dimensions de $(window)

function esdevenimentResize() {
    $(window).resize(function () {
        var ample = $(window).width();
        var alt = $(window).height();
        $("#size")
            .html(`Amplada x alçada actuals: ${ample} x ${alt} `)
            .css("background-color", "#03612d")
            .css("color", "white");
        setTimeout(function () {
            $("#size").css("background-color", "#cfecde").css("color", "black");
        }, 1000);
    });
}

// ESDEVENIMENT SCROLL()
// Mostra $("#scroll") quan feim scroll en la pagina

function esdevenimentScroll() {
    $(window).scroll(function () {
        $("#scroll").css("display", "inline").fadeOut(1000);
    });
}

//EFECTES

// EFECTE FADEOUT()
// Aplica efecte fadeOut a $("#fade_in_out") quan clicam en $("#fade_out_btn")

function efecteFadeOut() {
    $("#fade_out_btn").click(function () {
        $("#fade_in_out").fadeOut(1000);
    });
}

// EFECTE FADEIN()
// Aplica efecte fadeIn a $("#fade_in_out") quan clicam en $("#fade_in_btn")

function efecteFadeIn() {
    $("#fade_in_btn").click(function () {
        $("#fade_in_out").fadeIn(1000);
    });
}

// EFECTE FADETOGGLE()
// Aplica efecte fadeToggle a $("#fade_toggle") quan clicam en $("#fade_toggle_btn")

function efecteFadeToggle() {
    $("#fade_toggle_btn").click(function () {
        $("#fade_toggle").fadeToggle("slow");
    });
}

// EFECTE FADETO()
// Aplica efecte fadeTo a $("#fade_to") quan clicam en $("#fade_to_btn")

function efecteFadeTo() {
    $("#fade_to_btn").click(function () {
        $("#fade_to").fadeTo(1000, 0.5, "linear");
    });
}

// EFECTE SLIDEUP()
// Aplica efecte slideUp() a $("#slide_up_down") quan clicam en $("#slide_up_btn")

function efecteSlideUp() {
    $("#slide_up_btn").click(function () {
        $("#slide_up_down").slideUp(1000);
    });
}

// EFECTE SLIDEDOWN()
// Aplica efecte slideDown() a $("#slide_up_down") quan clicam en $("#slide_down_btn")

function efecteSlideDown() {
    $("#slide_down_btn").click(function () {
        $("#slide_up_down").slideDown(1000);
    });
}

// EFECTE SLIDETOGGLE()
// Aplica efecte slideToggle() a $("#slide_toggle") quan clicam en $("#slide_toggle_btn")

function efecteSlideToggle() {
    $("#slide_toggle_btn").click(function () {
        $("#slide_toggle").slideToggle(1000);
    });
}

// EFECTE ANIMATE() - VALORS RELATIUS
// Augmenta amplada en 200px a $("#animate_relatius") fins que aquesta > 1100
// Quan amplada > 1100, retorna a amplada inicial
// Aquetes animacions es produeixen clicant en $("#animate_relatius_btn")

function efecteAnimateRelatius() {
    $("#animate_relatius_btn").click(function () {
        if ($("#animate_relatius").width() < 1100) {
            $("#animate_relatius").animate(
                {
                    width: "+=200",
                },
                1000
            );
        } else {
            var amplada = $(".div_visible").width();
            //console.log(amplada);
            $("#animate_relatius").animate(
                {
                    width: `${amplada}`,
                },
                1000,
                "swing"
            );
        }
    });
}

// EFECTE ANIMATE() - VALORS PRDEFINITS
// Aplicam a l'element $("#animate_predefinits")
// el valor predefinit (width: "toggle")
// el qual actua en un sentit o un altra a mesura
// que clicam en $("#animate_predefinits_btn")

function efecteAnimatePredefinits() {
    $("#animate_predefinits_btn").click(function () {
        $("#animate_predefinits").animate(
            {
                width: "toggle",
            },
            2000,
            "swing"
        );
    });
}

// EFECTE ANIMATE() - AMB FUNCIONALITAT DE CUA
// Aplicam successivament diferents valors d'amplada, alçada i opacitat
// a l'element $("#animate_cua") quan es clica en $("#animate_cua_btn")

function efecteAnimateCua() {
    $("#animate_cua_btn").click(function () {
        var divAnimatCua = $("#animate_cua");
        divAnimatCua.animate({ width: "+=300", opacity: "0.5" }, "slow");
        divAnimatCua.animate({ height: "+=100", opacity: "1" }, "slow");
        divAnimatCua.animate({ height: "-=100", opacity: "0.5" }, "slow");
        divAnimatCua.animate({ width: "-=300", opacity: "1" }, "slow");
    });
}

// EFECTE STOP() - EFECTE QUE ES VOL ATURAR
// Augmenta amplada i opacitat a l'element $("#stop") durant 5 segons,
// al cap d'aquests l'element fa el camì invers durant 5 segons més
// L'animació comença quan clicam en boto $("#inicia_btn")

function iniciaEfecteStop() {
    $("#inicia_btn").click(function () {
        var divAnimatStop = $("#stop");
        divAnimatStop.removeAttr("style");
        divAnimatStop.animate(
            { width: "+=500", opacity: "0.5" },
            5000,
            function () {
                divAnimatStop.animate({ width: "-=500", opacity: "1" }, 5000);
            }
        );
    });
}

// EFECTE STOP() - ATURA EFECTE ANTERIOR
// Aturam animació anterior assignada a $("#stop") quan clicam en $("#stop_btn")

function aturaEfecteStop() {
    $("#stop_btn").click(function () {
        $("#stop").stop();
    });
}

// EFECTE HIDE()
// Amaga $("#hide_show") quan clicam en $("#hide_btn")

function efecteHide() {
    $("#hide_btn").click(function () {
        $("#hide_show").hide(1000, "swing");
    });
}

// EFECTE SHOW()
// Amaga $("#hide_show") quan clicam en $("#show_btn")

function efecteShow() {
    $("#show_btn").click(function () {
        $("#hide_show").show(1000, "swing");
    });
}

// CALLBACK - OPACITAT ON
// Mostra element $("#div_callback_opacitat_on")
// quan l'opacitat de $("#callback") arriba a valor = 0

function callbackOpacitatOn() {
    $("#opacitat_on_callback_btn").click(function () {
        $("#div_callback_opacitat_off").css("display", "none");
        $("#callback").animate({ opacity: "0" }, 2000, function () {
            $("#div_callback_opacitat_on").css("display", "inline");
        });
    });
}

// CALLBACK - OPACITAT OFF
// Mostra element $("#div_callback_opacitat_off")
// quan l'opacitat de $("#callback") arriba a valor = 1

function callbackOpacitatOff() {
    $("#opacitat_off_callback_btn").click(function () {
        $("#div_callback_opacitat_on").css("display", "none");
        $("#callback").animate({ opacity: "1" }, 2000, function () {
            $("#div_callback_opacitat_off").css("display", "inline");
        });
    });
}

// ENCADENAMENT
// Canvia el valor de varies caracteritiques CSS de l'element $("#encadenament")
// encadenant una acció a l'acció anterior i així successivament
// Aquest efecte s'inicia quan es clica en $("#inicia_encadenament_btn")

function iniciaEncadenament() {
    $("#inicia_encadenament_btn").click(function () {
        $("#encadenament")
            .animate({ width: "+=400" }, 500)
            .animate({ height: "+=60" }, 500)
            .animate({ fontSize: "46px" }, 500)
            .animate({ borderWidth: 30 }, 500, function () {
                $(this)
                    .css({ color: "white" })
                    .css({ backgroundColor: "#03612d" })
                    .css({ borderColor: "#cfecde" });
            });
    });
}

// ENCADENAMENT RESET
// Retorna les caracteristiques CSS inicials a $("#encadenament") anterior

function resetEncadenament() {
    $("#reset_encadenament_btn").click(function () {
        $("#encadenament").removeAttr("style");
    });
}

//JQUERY HTML

// PREPEND()
// Afegeix text en l'inici de $("#prepend_append")
// quan clicam en $("#prepend_btn")

function insereixEnInici() {
    $("#prepend_btn").click(function () {
        $("#prepend_append").prepend("<b>Text a l'inici :) </b>");
    });
}

// APPEND()
// Afegeix text al final de $("#prepend_append")
// quan clicam en $("#append_btn")

function insereixEnFinal() {
    $("#append_btn").click(function () {
        $("#prepend_append").append("<b> :) Text al final</b>");
    });
}

// BEFORE()
// Afegeix div abans del div $("#before_after")
// quan clicam en $("#before_btn")

function insereixAbansDe() {
    $("#before_btn").click(function () {
        $("#before_after").before("<div id='div_before_after'>ABANS DE</div>");
    });
}

// AFTER()
// Afegeix div després del div $("#before_after")
// quan clicam en $("#after_btn")

function insereixDespresDe() {
    $("#after_btn").click(function () {
        $("#before_after").after("<div id='div_before_after'>DESPRÉS DE</div>");
    });
}

// MANIPULACIÓ CSS
// Canvia varies propietats CSS a l'element $("#manipulacio_css")
// quan clicam en $("#manipula_css_btn")

function manipulaCss() {
    $("#manipula_css_btn").click(function () {
        $("#info_css").empty().hide();
        $("#manipulacio_css")
            .css({ width: "+=400" })
            .css({ height: "+=60" })
            .css({ fontSize: "46px" })
            .css({ borderWidth: 30 })
            .css({ color: "white" })
            .css({ backgroundColor: "#03612d" })
            .css({ borderColor: "#cfecde" });
    });
}

// Canvia a propietats CSS inicials de l'element $("#manipulacio_css")
// quan clicam en $("#reset_css_btn")

function resetCss() {
    $("#reset_css_btn").click(function () {
        $("#info_css").empty().hide();
        $("#manipulacio_css").removeAttr("style");
    });
}

// Mostra els valors de les propietats CSS de l'element $("#manipulacio_css")
// quan clicam en $("#info_css_btn")

function infoCss() {
    $("#info_css_btn").click(function () {
        $("#info_css")
            .empty()
            .append("<p>width: " + $("#manipulacio_css").css("width") + "</p>")
            .append(
                "<p>height: " + $("#manipulacio_css").css("height") + "</p>"
            )
            .append(
                "<p>fontSize: " + $("#manipulacio_css").css("fontSize") + "</p>"
            )
            .append(
                "<p>borderWidth: " +
                    $("#manipulacio_css").css("borderWidth") +
                    "</p>"
            )
            .append("<p>color: " + $("#manipulacio_css").css("color") + "</p>")
            .append(
                "<p>backgroundColor: " +
                    $("#manipulacio_css").css("backgroundColor") +
                    "</p>"
            )
            .append(
                "<p>borderColor: " +
                    $("#manipulacio_css").css("borderColor") +
                    "</p>"
            )
            .slideToggle(1000);
    });
}
