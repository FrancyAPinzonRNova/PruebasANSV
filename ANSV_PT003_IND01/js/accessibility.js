//-------------------------------
//-------- Accessibility --------
//----------Version 1.0----------
//-------------------------------
// Implementación de acciones de accesibilidad para las plantillas HTML
// Contiene:
// Temas de contraste
// Lector de textos
// Cambio de tamaño de fuente
// Activación de componenetes por teclado
//
//------------TODO---------------
//Preparar para lectores: aria-label aria-labelledby aria-describedby
//
//-------------------------------
// Variables
// Activar o desactivar el menu de accesibilidad
var allowAccesibility = true;

//speechSynthesis
var selected_voice = "";
var currentSlideText;
var currentSpeachText = 0;
var reader = window.speechSynthesis;
var available_voices = reader.getVoices();
var readerContent;

//default font size in pixels
var fontSize = 18;
var maxfontSize = 24;
var minfontSize = 10;
var fontIncrement = 2;
//-------------------------------
// Funciones
// load Accessibility
function showAccesibility() {
  if (allowAccesibility) {
    //console.log("accesibility enabled");
    $(".accesibility-container").show();
    loadVoices();
    chooseVoiceLang();
  }
}
//-------------------------------
// load available voices
function loadVoices() {
  if (reader.getVoices().length == 0) {
    reader.addEventListener("voiceschanged", function () {
      available_voices = reader.getVoices();
      //console.log("voices loaded");
    });
  } else {
    available_voices = reader.getVoices();
  }
  selected_voice = available_voices[0];
  //console.log(available_voices);
}

//Select voice lang: es-MX //es-US //es-ES
function chooseVoiceLang() {
  for (var i = 0; i < available_voices.length; i++) {
    if (available_voices[i].lang == "es-MX") {
      //console.log("Lang found: "+available_voices[i].lang);
      selected_voice = available_voices[i];
    } else if (available_voices[i].lang == "es-US") {
      //console.log("Lang found: "+available_voices[i].lang);
      selected_voice = available_voices[i];
    } else if (available_voices[i].lang == "es-ES") {
      //console.log("Lang found: "+available_voices[i].lang);
      selected_voice = available_voices[i];
    }
  }
}

//Preload and Speech Menu
function loadSpeechPlayer() {
  if (available_voices.length > 0 && selected_voice.lang.startsWith("es")) {
    console.log("speech enabled");
    console.log("selected voice: " + selected_voice.lang);
    currentSpeachText = 0;
    selectReadText();
    if (currentSlideText) {
      createSpeachObject();
    } else {
      console.warn("No readable text found in Slide");
    }
    if (readerContent) {
      $(".btn-read").show();
    }
  }
  //TODO fix comprobation on mobile -> debug
  if (isMobileDevice()) {
    console.log("speech enabled");
    console.log("selected voice: " + selected_voice.lang);

    currentSpeachText = 0;
    selectReadText();
    if (currentSlideText) {
      createSpeachObject();
    } else {
      console.warn("No readable found in Slide");
    }
    if (readerContent) {
      $(".btn-read").show();
    }
  }
}

function showSpeechPlayer() {
  $(".speechPlayer-container").show();
  $(".accesibility-options").toggle();
  $(currentSlideText[currentSpeachText]).addClass("readerHighlight");
  $(".btn-playText").focus();
  if (currentSlideText.length <= 1) {
    $(".btn-nextText").hide();
    $(".btn-prevText").hide();
  }
}

function selectReadText() {
  var selectedReadable = $("*[data-readable]");
  if (selectedReadable.length > 0) {
    currentSlideText = new Array(selectedReadable.length);
    if (selectedReadable[0].dataset.readable == "true") {
      //console.log("true-order");
      currentSlideText = selectedReadable;
    } else {
      // console.log("Re-order");
      //TODO fix order
      currentSlideText = selectedReadable;
    }
    console.log(currentSlideText);
  }
}

function createSpeachObject() {
  readerContent = new Array(currentSlideText.length);
  var textToSpeak = "";
  for (i = 0; i < readerContent.length; i++) {
    if (currentSlideText[i].tagName == "IMG") {
      textToSpeak = currentSlideText[i].ariaDescription;
      //some nav compatibility
      if (textToSpeak == "undefined") {
        textToSpeak = currentSlideText[i].alt;
      }
    } else if (currentSlideText[i].tagName == "BUTTON") {
      textToSpeak = currentSlideText[i].ariaDescription;
    } else if (currentSlideText[i].tagName == "A") {
      textToSpeak = currentSlideText[i].ariaDescription;
    } else {
      textToSpeak = currentSlideText[i].textContent;
    }

    readerContent[i] = new SpeechSynthesisUtterance();
    readerContent[i].voice = selected_voice;
    readerContent[i].text = textToSpeak;
    readerContent[i].rate = 1;
    readerContent[i].pitch = 1;
    readerContent[i].onerror = function () {
      console.log("ERROR");
      stopCurrentSpeech();
    };
  }
}

function playCurrentText() {
  $(".btn-playText").html(
    '<img class="img-fluid" src="resources/images/img_pause.png">'
  );
  if (reader.speaking) {
    reader.pause();
    $(".btn-playText").hide();
    $(".btn-pauseText").show();
  } else {
    $(currentSlideText[currentSpeachText]).addClass("readerHighlight");
    //speak
    reader.speak(readerContent[currentSpeachText]);
    $(".btn-playText").html(
      '<img class="img-fluid" src="resources/images/a11y/img_pause.png">'
    );
    //after text end
    readerContent[currentSpeachText].onend = function () {
      $(".btn-playText").html(
        '<img class="img-fluid" src="resources/images/a11y/img_play.png">'
      );
      if (currentSpeachText == currentSlideText.length - 1) {
        $(".btn-prevText").focus();
      } else {
        $(".btn-nextText").focus();
        //nextText();
      }
    };
  }
}

function pauseCurrentSpeech() {
  reader.resume();
  $(".btn-playText").show();
  $(".btn-pauseText").hide();
  $(".btn-playText").html(
    '<img class="img-fluid" src="resources/images/a11y/img_pause.png">'
  );
}

function stopCurrentSpeech() {
  reader.cancel();
  $(".btn-playText").html(
    '<img class="img-fluid" src="resources/images/a11y/img_play.png">'
  );
  $(".btn-playText").show();
  $(".btn-playText").focus();
  $(".btn-pauseText").hide();
  $("*").removeClass("readerHighlight");
}

function prevText() {
  stopCurrentSpeech();
  currentSpeachText -= 1;
  $(".btn-nextText").removeClass("disable");
  $(".btn-nextText").prop("disabled", false);
  if (currentSpeachText == 0) {
    $(".btn-prevText").addClass("disable");
    $(".btn-prevText").prop("disabled", true);
  }
  playCurrentText();
}

function nextText() {
  stopCurrentSpeech();
  currentSpeachText += 1;
  $(".btn-prevText").prop("disabled", false);
  $(".btn-prevText").removeClass("disable");
  if (currentSpeachText == currentSlideText.length - 1) {
    $(".btn-nextText").prop("disabled", true);
    $(".btn-nextText").addClass("disable");
  }
  playCurrentText();
}
//hide Accesibility
function hideAccesibilityMenu() {
  $(".accesibility-options").hide();
  stopReader();
}

function stopReader() {
  reader.cancel();
  currentSlideText = "";
  currentSpeachText = 0;
  readerContent = "";
  stopCurrentSpeech();
  $(".btn-read").hide();
  $(".speechPlayer-container").hide();
  $(".btn-prevText").show();
  $(".btn-prevText").prop("disabled", true);
  $(".btn-prevText").addClass("disable");
  $(".btn-nextText").show();
  $(".btn-nextText").prop("disabled", false);
  $(".btn-nextText").removeClass("disable");
}
//-------------------------------
//show/hide Menu
function toggleAccesibilityMenu() {
  $(".accesibility-options").toggle();
  stopReader();
}
//-------------------------------
//theme change
function changeTheme(className) {
  if ($("body").attr("class") == className) {
    $("body").removeClass(className);
  } else {
    $("body").attr("class", className);
  }
}
//-------------------------------
//font size
function resizeFont(scale) {
  if (scale == "+" && fontSize <= maxfontSize) {
    fontSize += fontIncrement;
    $("body").css("font-size", fontSize + "px");
  }
  if (scale == "-" && fontSize >= minfontSize) {
    fontSize -= fontIncrement;
    $("body").css("font-size", fontSize + "px");
  }
  if (scale == "0") {
    fontSize = 18;
    $("body").css("font-size", "");
  }
}
//-------------------------------
// Allow click on keyboard 'Space' - 'Enter' for elements
function allowKeyClick(event) {
  if (event.type === "click") {
    return true;
  } else if (event.type === "keypress") {
    var code = event.charCode || event.keyCode;
    if (code === 32 || code === 13) {
      return true;
    }
  } else {
    return false;
  }
}
/*
    $(id).on('click keypress', function(event){
        if(allowKeyClick(event) === true){

        }
    });
*/
// ...
//-------------------------------
var a11yElements = `
<div class="mx-1 accesibility-btn-toggle">
    <button type="button" class="btn btn-nav btn-blue-dark menu btn-accesibility" onclick='toggleAccesibilityMenu(); loadSpeechPlayer();' data-toggle="tooltip" title="Opciones de accesibilidad"><img class="img-fluid" src="resources/images/a11y/img_ac_menu.png"></button>
</div>
<div class="speechPlayer-container">
    <div class="speechPlayer-menu btn-group-vertical" role="group" aria-label="Lector de textos" alt="Lector de textos">
        <button onclick="prevText()" class="btn btn-speechPlayer btn-prevText disable" disabled data-toggle="tooltip" title="Texto Anterior"><img class="img-fluid" src="resources/images/a11y/img_prev.png"></button>
        <button onclick="playCurrentText()" class="btn btn-speechPlayer btn-playText" data-toggle="tooltip" title="Leer Texto"><img class="img-fluid" src="resources/images/a11y/img_play.png"></button>
        <button onclick="pauseCurrentSpeech()" class="btn btn-speechPlayer btn-pauseText" data-toggle="tooltip" title="Continuar lectura"><img class="img-fluid" src="resources/images/a11y/img_play.png"></button>
        <button onclick="stopCurrentSpeech()" class="btn btn-speechPlayer btn-stopText" data-toggle="tooltip" title="Detener lectura"><img class="img-fluid" src="resources/images/a11y/img_stop.png"></button>
        <button onclick="nextText()" class="btn btn-speechPlayer btn-nextText" data-toggle="tooltip" title="Texto Siguiente"><img class="img-fluid" src="resources/images/a11y/img_next.png"></button>
    </div>
</div>
<div class="accesibility-menu">
    <div class="accesibility-options btn-group-vertical" role="group" aria-label="Opciones de accesibilidad" alt="Opciones de accesibilidad">
        <button class="btn btn-accesibility-option" onclick='resizeFont("+")' data-toggle="tooltip" title="Incrementar tamaño de fuente"><img class="img-fluid" src="resources/images/a11y/img_ac_font_increase.png"></button>
        <button class="btn btn-accesibility-option" onclick='resizeFont("-")' data-toggle="tooltip" title="Disminuir tamaño de fuente"><img class="img-fluid" src="resources/images/a11y/img_ac_font_decrease.png"></button>
        <button class="btn btn-accesibility-option" onclick='resizeFont("0")' data-toggle="tooltip" title="Restaurar tamaño de fuente"><img class="img-fluid" src="resources/images/a11y/img_ac_font_reset.png"></button>
        <button class="btn btn-accesibility-option" onclick='changeTheme("highContrast")' data-toggle="tooltip" title="Invertir color"><img class="img-fluid" src="resources/images/a11y/img_ac_contrast01.png"></button>
        <button class="btn btn-accesibility-option" onclick='changeTheme("highContrastHalfColor")' data-toggle="tooltip" title="Invertir tonalidad"><img class="img-fluid" src="resources/images/a11y/img_ac_contrast02.png"></button>
        <button class="btn btn-accesibility-option" onclick='changeTheme("highContrastHalfColorBright")' data-toggle="tooltip" title="Invertir Brillo"><img class="img-fluid" src="resources/images/a11y/img_ac_contrast03.png"></button>
        <button class="btn btn-accesibility-option" onclick='changeTheme("grayScale")' data-toggle="tooltip" title="Sin color"><img class="img-fluid" src="resources/images/a11y/img_ac_contrast04.png"></button>
        <button class="btn btn-accesibility-option btn-read" onclick='showSpeechPlayer()' data-toggle="tooltip" title="Lector de textos"><img class="img-fluid" src="resources/images/a11y/img_ac_reader.png"></button>
    </div>
</div>
`;
