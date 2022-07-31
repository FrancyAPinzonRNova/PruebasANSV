//---------------
var slideTitle = "";
var iconBlue = "bg-blue-light"; // bg-blue-light - ''
var titleBg = "bg-blue-light"; // bg-blue-light - bg-green-light - ''
var slideBg = "bg-white"; // bg-white - bg-purple-medium - bg-orange-medium - bg-yellow-medium - bg-green-medium
//---------------
prevSlideID = 2;
// nextSlideID = 3;
//---------------
var slideContent = `
<div class="col-12">
    <div class="row h-100 main-content px-md-4 pb-md-4 justify-content-center">
        <header class="col-12 top-0 p-0">
            ${navBarElements}
        </header>
        <div class="col-12 ${slideBg}">
            <main class="row justify-content-center content h-100">
                <div class="col-12 col-md-7">

                    <h1 class="square-icon my-3 bigfont">
                        <div class="p-0"><span class="icon  ${iconBlue}"></span></div>
                        <div class="d-flex">
                            <div class="px-3 py-2 lh-1 ${titleBg}">
                                Atención prehospitalaria
                            </div>
                        </div>
                    </h1>
                    
                    <div class="row justify-content-center justify-content-md-end mt-3 mt-md-5">
                        <div class="col-11">
                            <div class="row text-center">
                                <p class="text-title">Explora cada uno de los momentos de la atención prehospitalaria:</p>
                                <div class="col-sm-12 col-md-12 col-lg-12 justify-content-start d-flex">
                                  <img src="${slideImagesPath}img_s3_indicator.png" class="img-fluid">
                                </div>
                                <div class="row">
                                  <div class="col-lg-4"></div>
                                  <div class="col-lg-4 mt-3 mb-3">
                                      <button id="modal-1" class="btn w-100 btn-yellow-light animate__animated animate__slideInDown" onclick="showModal(1)">Proteger</button>
                                  </div>
                                  <div class="col-lg-4 mt-3 mb-3">
                                      <button id="modal-2" class="btn w-100 btn-yellow-light animate__animated animate__slideInDown" onclick="showModal(2)">Avisar</button>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-lg-4"></div>
                                  <div class="col-lg-4 mt-3 mb-3">
                                      <button id="modal-3" class="btn w-100 btn-yellow-light animate__animated animate__slideInDown" onclick="showModal(3)">Socorrer</button>
                                  </div>
                                  <div class="col-lg-4 mt-3 mb-3">
                                      <button id="modal-4" class="btn w-100 btn-blue-light animate__animated animate__slideInDown " onclick="showModal(4)">Recuerda que...</button>
                                  </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row col-md-5 bg-yellow-gradient content align-items-center d-flex  justify-content-center">
                    <div class="row col-lg-8 col-md-10 col-sm-10 align-items-center audioPlayer-container no-gutters mb-3">
                        <div class="col-2 audio-icon">
                            <img class="img-fluid img-audioPlayer" src="${slideImagesPath}a11y/img_ac_reader.png">
                        </div>
                        <div class="col-10 audio-Player text-center">
                            <audio src="${slideAudioPath}audio_s3.mp3" preload="auto" controls="">
                            <p>Tu navegador no implementa el elemento audio.</p>
                            </audio>
                        </div>
                    </div>
                    <div class="row bg-yellow-gradient-none">
                        <img class="img-fluid" src="${slideImagesPath}img_s3.png">
                    </div>
                </div>
            </main>          
        </div>
        
        <div id="contentModal" class="modal fade contentModal2" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-xl modal-dialog-centered" role="document">
                <div class="modal-content">
                      <div class="modal-body">
                        <div class="row w-100 justify-content-center">
                          <div class="col-12 col-lg-4 modal-img d-flex align-items-center justify-content-center"></div>
                          <div class="col-12 col-lg-8 text-center">
                              <div class="close-end">
                                <button type="button" class="btn-close-modal" data-bs-dismiss="modal" aria-label="Close">
                                  <span class="close" aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div id="modal-text"></div>        
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <footer class="col-12 d-md-none">
            ${navBarBottomElements}
        </footer>
    </div>
</div>
`;
//---------------
var slideActivityContent = {};

$(document).ready(function () {
  $("#nextControlButton").addClass("hidden");
});

var modalContent = [
  0,
  {
    img: "img_s3_modal_1",
    title: "",
    body: `<div class="row justify-content-center align-items-center pt-3 mt-4 mt-lg-0">
            <div class="col-11 col-md-10 text-white text-center">
                <p>Lo primero que se debe hacer es proteger a las víctimas, el lugar de la escena y las personas que actuarán como primeros respondientes. El objetivo es evitar la exposición a riesgos como nuevas colisiones o atropellos. Estas actuaciones implican el uso de prendas reflectivas, señalizaciones de área a través de dispositivos apropiados (triángulos) y el encendido de luces de emergencia.</p>
            </div>
        </div>`,
  },
  {
    img: "img_s3_modal_2",
    title: "",
    body: `<div class="row justify-content-center align-items-center pt-3 mt-4 mt-lg-0">
            <div class="col-11 col-md-10 text-white text-center">
                <p>Avisar rápidamente a las autoridades competentes permitirá activar una respuesta especializada efectiva frente a un siniestro vial.</p>
                <p>Para avisar es necesario tener información sobre la situación que se está presenciando como: el lugar del siniestro, vehículos implicados, número de heridos, teléfono de contacto y características específicas del siniestro como peligro de caída, cargas peligrosas o personas atrapadas.</p>
                
            </div>
        </div>`,
  },
  {
    img: "img_s3_modal_3",
    title: "",
    body: `<div class="row justify-content-center align-items-center pt-3 mt-4 mt-lg-0">
            <div class="col-11 col-md-10 text-white text-center">
                <p>Mientras llega la ayuda especializada es importante seguir el principio de “no hacer nada que perjudique al lesionado” como puede ser suministrar alimentos, mover a los heridos, realizar maniobras de primeros auxilios sin conocimiento básico, quitar el casco del motociclista, etc. Cuando llega el grupo especializado, se evalúa a dónde se debe trasladar a la persona con una condición de oportunidad y calidad.</p>
                <p>Los primeros auxilios psicológicos son fundamentales durante este momento. Se recomienda usar métodos sencillos que incluyan la escucha activa y la comunicación asertiva, acompañando, apoyando y conteniendo emocionalmente a los afectados. </p>
            </div>
        </div>`,
  },
  {
    img: "img_s3_modal_4",
    title: "",
    body: `<div class="row justify-content-center align-items-center pt-3 mt-4 mt-lg-0">
            <div class="col-11 col-md-10 text-white text-center">
                <p>Como territorio debemos prepararnos para atender un siniestro vial a través de una comunicación efectiva entre las diferentes entidades que intervienen y atienden de forma integral a las víctimas en el momento del siniestro.</p>
            </div> 
        </div>`,
  },
];

function showModal(id) {
  if (id == 1 || id == 2 || id == 3) {
    $(".modal-img").removeClass("bg-yellow-medium");
    $(".modal-img").addClass("bg-blue-light");
  } else if (id == 4) {
    $(".modal-img").removeClass("bg-blue-light");
    $(".modal-img").addClass("bg-yellow-medium");
  }
  $("#contentModal")
    .find(".modal-img")
    .html(
      `<img src="${slideImagesPath}${modalContent[id].img}.png" alt="" class="img-fluid">`
    );
  $("#contentModal").find("#modal-text").html(modalContent[id].body);
  $("#contentModal").modal("show");
}
