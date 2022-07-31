//-------------------------------
//------ Javascript Common ------
//----------Version 1.0----------
//-------------------------------
// Biblioteca de funciones comunes de javascript
//-------------------------------
//--------------------
//Funcion base para hacer animacion de intro
function jqcallback() {
    setTimeout(function () {
        $("#effect:visible").removeAttr("style").fadeOut();
    }, 1000);
};
//--------------------
//Funcion base para reproducior audio
//#ID-audio: id del audio que se va reproducir
//#ID-audio-btn: id del contenedor que tiene las imágenes del reproductor
//playAndPauseAudio("#ID-audio","#ID-audio-btn")
function playAndPauseAudio(audioId, audioContainer) {
    isAudioPlayed = !isAudioPlayed;
    if (isAudioPlayed) {
        $("#" + audioId)[0].play();
        $("#" + audioContainer).css('background-image', 'url("resources/images/img_pause.png")');
        $("#" + audioContainer).css('background-size', '70%');
    } else {
        $("#" + audioId)[0].pause();
        $("#" + audioContainer).css('background-image', 'url("resources/images/btn_sound.png")');
        $("#" + audioContainer).css('background-size', '100%');
    }
}
//--------------------
//Reproducir audio play/pause
function toggleAudio(audioId) {
    $('audio').each(function () {
        this.pause(); // Stop playing
        this.currentTime = 0; // Reset time
    });
    $("#" + audioId)[0].play();
}
//--------------------
//Reproducir audio de correcto/incorrecto
function playAudio(audioId) {
    $("#" + audioId)[0].play();
}

// Pausa y reinicia el audio
function pauseAudio(audioId) {
    $("#" + audioId)[0].pause();
    $("#" + audioId)[0].currentTime = 0
}
//--------------------
//Comprobacion de si esta en mobile
function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}
//--------------------
//Crear un comboBox usando checkBox -> onReady()
//label: prefijo del id usado para los checkbox
// -> ej: id="check_1" -> label: "check_"
//totalChecks: numero total de Checks que contine el combo
function checkboxGroup(label, totalChecks) {
    $('input[type=checkbox]').on('click', function () {
        for (i = 1; i <= totalChecks; i++) {
            var idCheck = "#" + label + i;
            $(idCheck).prop('checked', false);
        }
        $(this).prop('checked', true);
    });
}
//--------------------
//Aleatorizar el orden de divs
//requiere un div parent y prefijo de id para sus miembros
//parentDiv: id del parent que contiene los divs ej: "#divParent", ".divParent"
//prefijo del id usado para los div
// -> ej: id="div_1" -> label: "#div_"
//total divs a randomizar
function randomDiv(parentDiv, idDivPrefix, totalDivs) {
    var randomDiv = Array.apply(null, {
        length: totalDivs
    }).map(function (value, index) {
        return index + 1;
    });
    randomDiv.sort(function (a, b) {
        return 0.5 - Math.random()
    });
    for (i = 0; i < randomDiv.length; i++) {
        var divID = idDivPrefix + randomDiv[i];
        $(parentDiv).append($(divID));
    }
}
//-------------------------------
//Bloquea o desbloquea los botones de control de la Actividad
//Dependiendo de hideDisabledControlButtons muestra/oculta el botón bloqueado
function setActivityButtonState(buttonId, state) {
    if (state === "disabled") {
        $(buttonId).addClass("disabled");
        if (activityContent.hideDisabledControlButtons)
            $(buttonId).hide();
    }
    if (state === "enabled") {
        $(buttonId).removeClass("disabled");
        if (activityContent.hideDisabledControlButtons)
            $(buttonId).show();
    }
}
//-------------------------------
// Jump to Top
function jumpTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
//-------------------------------
// Jump to Bottom
function jumpBottom() {
    var scrollingElement = (document.scrollingElement || document.body);
    scrollingElement.scrollTop = scrollingElement.scrollHeight;
}
//-------------------------------
function shuffleArray(array) {
    array.sort(() => Math.random() - 0.5);
}