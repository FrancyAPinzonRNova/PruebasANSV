//---------------
var slideTitle = ''
var iconBlue = 'bg-blue-light' // bg-blue-light - ''
var titleBg = 'bg-blue-light' // bg-blue-light - bg-green-light - ''
var slideBg = 'bg-white' // bg-white - bg-purple-medium - bg-orange-medium - bg-yellow-medium - bg-green-medium
//---------------
prevSlideID = 1
nextSlideID = 3
//---------------
var slideContent = `
<div class="col-12">
    <div class="row h-100 main-content px-md-4 pb-md-4 justify-content-center">
        <header class="col-12 top-0 p-0">
            ${navBarElements}
        </header>
        <div class="col-12 ${slideBg}">
            <main class="row justify-content-center content h-100">
                <div class="row complete-text-activity align-items-center">
                    <!-- <div class="col-12"> -->
                        <div class="col-12 col-md-7">
                            <div class="row">
                                <div class="col-sm-10 offset-sm-1" id="incompleteText"></div>
                            </div>
                            <div id="completeTextActivityControls" class="row mt-5 activity-controls">
                                <div class="col-12 d-flex justify-content-center">
                                <button onclick="checkAnswers()" class="btn btn-primary" id="btn-endQuestion" data-toggle="tooltip" title="Evaluar">Evaluar</button>
                                <button onclick="resetActivity()" class="btn btn-primary" id="btn-resetQuestion" data-toggle="tooltip" title="Reiniciar">Reiniciar</button>
                                <button onclick="openHelp()" id="btn-help" class="btn btn-primary" data-toggle="tooltip" title="Ayuda">Ayuda</button>
                                <!--<button onclick="setCorrectAnswers()" class="btn btn-primary" id="btn-setCorrectAnswers">Respuestas</button>-->
                                </div>
                            </div>
                        </div>
                        

                        <div class="col-12 col-md-5">
                            <div class="row">
                                <div class="col-sm-10 offset-sm-1">
                                    <div id="textButtonOptions" class="row"></div>
                                </div>
                            </div>
                        </div>
                    <!-- </div> -->
                </div>
            </main>
        </div>
        <footer class="col-12 d-md-none">
            ${navBarBottomElements}
        </footer>
    </div>
</div>
`
var slideActivityContent = {
    //- Actividad Complete Text -
    controller: "js/activity.complete-text.js",
    //---Parámetros
    //Oculta los botones de control de la actividad que esten bloqueados
    hideDisabledControlButtons: false,
    //Seleccionar tipo de Actividad
    //1 - De botón a campo
    //2 - De campo a botón
    //3 - Mixto
    type: 3,
    //Aleatorizar el orden de las opciones
    allowRandom: true,
    //Mostrar retroalimentación al momento de emparejar campo con texto
    //En false evaluará con el btn de Finalizar (Validación pasiva)
    allowActiveCheck: false,
    //Validación activa/pasiva:
    //Mostrar una retroalimentación final al terminar en el modo activo, disponible si allowActiveCheck está activo (true)
    allowActiveFinalCheck: false,
    //Retroalimentaciones que se muestran al terminar la actividad
    //No se muestra si allowActiveFinalCheck está en false estando allowActiveCheck en true
    //--CorrectFeedback: Retroalimentación correcta al terminar la actividad
    //--CorrectFeedback: Retroalimentación incorrecta al terminar la actividad
    finalFeedback: {
      correctFeedback: ["¡Muy bien! Final","Mensaje correcto Final"],
      incorrectFeedback: ["¡Vuelve a intentarlo! Final", "Mensaje incorrecto Final"],
    },
    //Muestra los popups dependiendo el valor de la respuesta
    //Disponible si allowActiveCheck está activo (true)
    //1 - Solo popups correctos por respuesta
    //2 - Solo popups incorrectos por respuesta
    //3 - Popups correctos e incorrectos
    answerModal: 3,
    //Clase (distribución) de los contenedores de los botones de texto
    buttonContainerClass: "col-12 col-sm-6 col-xl-3 mb-3",
    //Arreglo de frases para construir el texto:
    //firstPhrase: Frase inicial antes de la palabra oculta (opcional).
    //hiddenWord: Palabra que se va a ocultar en la actividad y que aparecerá como botón de texto.
    //lastPhrase: Frase final después de la palabra oculta (opcional).
    //feedbackMessages: Arreglo de mensajes (correctos/incorrectos) que se muestran por palabra si allowActiveCheck está en true
    options: [
      {
        firstPhrase: "Hola! ¿",
        hiddenWord: "como",
        lastPhrase: " estás? ",
        feedbackMessages: [
          ["¡Muy bien! 1", "Mensaje correcto 1"],
          ["¡Vuelve a intentarlo! 1", "Mensaje incorrecto 1"],
        ],
      },
      {
        firstPhrase: "Yo? ",
        hiddenWord: "Bien",
        lastPhrase: ", gracias. ",
        feedbackMessages: [
          ["¡Muy bien! 2", "Mensaje correcto 2"],
          ["¡Vuelve a intentarlo! 2", "Mensaje incorrecto 2"],
        ],
      },
      {
        firstPhrase: "Bienvenido a ",
        hiddenWord: "la actividad",
        lastPhrase: " para ",
        feedbackMessages: [
          ["¡Muy bien! 3", "Mensaje correcto 3"],
          ["¡Vuelve a intentarlo! 3", "Mensaje incorrecto 3"],
        ],
      },
      {
        firstPhrase: "completar",
        hiddenWord: "párrafos",
        lastPhrase: "...",
        feedbackMessages: [
          ["¡Muy bien! 4", "Mensaje correcto 4"],
          ["¡Vuelve a intentarlo! 4", "Mensaje incorrecto 4"],
        ],
      }
    ],
    //Permite poner palabras falsas dentro de las opciones
    allowFakeWorks: true,
    //Listado de palabras falsas
    fakewords: ["hola", "me llamo", "juegos"],
  };
  //-------------------------------
  //funcion de mostrar el popup de la respuesta seleccionada correcta o incorrecta
  function showAnswerPopup(state, id) {
    var feedbackModalMessages = {};
    feedbackModalMessages.correctFeedback = activityContent.options[id - 1].feedbackMessages[0];
    feedbackModalMessages.incorrectFeedback = activityContent.options[id - 1].feedbackMessages[1];
    setAndOpenModal(state,feedbackModalMessages);
  }
  // -------------------------------
  // funcion de completacion de la actividad
  function exitActivity(result) {
    // Para Retroalimentación Activa
    if (activityContent.allowActiveCheck){
      //Para Retroalimentación Act/Pas
      if (activityContent.allowActiveFinalCheck) {
        $("#activityModal").on('hidden.bs.modal', function() {
          $("#activityModal").unbind('hidden.bs.modal');
          setAndOpenModal("success", activityContent.finalFeedback);
          showNextButton();
        });
      } else {
        showNextButton();
      }
    } else {
    // Para Retroalimentación Pasiva
      if (result == activityContent.options.length) {
        setAndOpenModal("success", activityContent.finalFeedback);
        showNextButton();
      }
      else {
        setAndOpenModal("error", activityContent.finalFeedback);
        setActivityButtonState("#btn-resetQuestion","enabled");
      }
    }
  }
  //-------------------------------
  