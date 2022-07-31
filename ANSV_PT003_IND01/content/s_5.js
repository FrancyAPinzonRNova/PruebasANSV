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
                                Gestión del conocimiento
                            </div>
                        </div>
                    </h1>
                    
                    <div class="row justify-content-center justify-content-md-end mt-3 mt-md-5">
                        <div class="col-11">
                            <div class="row text-center">
                                <p class="text-title">Cada página del libro te permitirá explorar aspectos claves relacionados con la gestión del conocimiento</p>
                                <div class="col-lg-12 justify-content-start d-flex">
                                    <img src="${slideImagesPath}img_s5_indicator.png" class="img-fluid shadow-img">
                                </div>
                                <div class="row">
                                  <div class="col-lg-3"></div>
                                  <div class="col-lg-3  ">
                                      <button id="modal-1" class="btn"  onclick="showModal(1)">
                                          <img src="${slideImagesPath}img_s5_btn1.png" class="img-fluid shadow-img">
                                      </button>
                                  </div>
                                  <div class="col-lg-3 ">
                                      <button id="modal-2" class="btn"  onclick="showModal(2)">
                                          <img src="${slideImagesPath}img_s5_btn2.png" class="img-fluid shadow-img">
                                      </button>
                                  </div>
                                  <div class="col-lg-3 ">
                                      <button id="modal-3" class="btn"  onclick="showModal(3)">
                                          <img src="${slideImagesPath}img_s5_btn3.png" class="img-fluid shadow-img">
                                      </button>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-lg-4"></div>
                                  <div class="col-lg-4 ">
                                      <button id="modal-4" class="btn"  onclick="showModal(4)">
                                          <img src="${slideImagesPath}img_s5_btn4.png" class="img-fluid shadow-img">
                                      </button>
                                  </div>
                                  <div class="col-lg-4 ">
                                      <button id="modal-5" class="btn"  onclick="showModal(5)">
                                          <img src="${slideImagesPath}img_s5_btn5.png" class="img-fluid shadow-img">
                                      </button>
                                  </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row col-md-5 bg-yellow-gradient content align-items-center d-flex  justify-content-center">
                    <div class="row col-lg-8 col-md-10 col-sm-10 align-items-center audioPlayer-container no-gutters">
                        <div class="col-2 audio-icon">
                            <img class="img-fluid img-audioPlayer" src="${slideImagesPath}a11y/img_ac_reader.png">
                        </div>
                        <div class="col-10 audio-Player text-center">
                            <audio src="${slideAudioPath}audio_s5.mp3" preload="auto" controls="">
                            <p>Tu navegador no implementa el elemento audio.</p>
                            </audio>
                        </div>
                    </div>
                    <div class="row bg-yellow-gradient-none d-flex justify-content-center">
                        <img class="img-fluid img-size" src="${slideImagesPath}img_s5.png">
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
    img: "img_s5_btn1",
    title: "",
    body: `<div class="row justify-content-center align-items-center pt-3 mt-4 mt-lg-0">
            <div class="col-11 col-md-10 text-white text-center">
                <p>La información que se recopila debe servir como insumo para los informes de peritaje y diligencias pertinentes que deberán ser usados por las autoridades policiales, judiciales, las propias víctimas y demás autoridades involucradas. </p>
            </div>
        </div>`,
    background: `bg-green-medium`,
  },
  {
    img: "img_s5_btn2",
    title: "",
    body: `<div class="row justify-content-center align-items-center pt-3 mt-4 mt-lg-0">
            <div class="col-11 col-md-10 text-white text-center">
                <p>La información que se recopila debe permitir la generación de variables e indicadores de interés que se convierten en insumo para gestionar el conocimiento en relación con el diseño de medidas preventivas, factores relacionados con el siniestro, la vía, los vehículos, las personas implicadas, etc.  </p>
                
            </div>
        </div>`,
    background: `bg-yellow-medium`,
  },
  {
    img: "img_s5_btn3",
    title: "",
    body: `<div class="row justify-content-center align-items-center pt-3 mt-4 mt-lg-0">
            <div class="col-11 col-md-10 text-white text-center">
                <p>El Observatorio Nacional de Seguridad Vial, instancia adscrita a la Agencia Nacional de Seguridad Vial es la encargada de integrar la información resultante de diferentes fuentes (policial, forense y hospitalaria) y generar los procesos de fortalecimiento e incorporación de métodos innovadores que permitan conocer mejor las circunstancias de los siniestros y los resultados lesivos de los mismos.</p>
            </div>
        </div>`,
    background: `bg-orange-medium`,
  },
  {
    img: "img_s5_btn4",
    title: "",
    body: `<div class="row justify-content-center align-items-center pt-3 mt-4 mt-lg-0">
            <div class="col-11 col-md-10 text-white text-center">
                <p>Es importante asegurar la mejor información posible sobre las víctimas sobrevivientes, las circunstancias del siniestro, el registro de la discapacidad relacionada con las lesiones y la información que permita avanzar hacia modelos de auditoría sobre el desempeño de los servicios médicos de emergencia</p>
            </div> 
        </div>`,
    background: `bg-blue-light`,
  },
  {
    img: "img_s5_btn5",
    title: "",
    body: `<div class="row justify-content-center align-items-center pt-3 mt-4 mt-lg-0">
            <div class="col-11 col-md-10 text-white text-center">
                <p>Lesionado por siniestro vial:</p>
                <p> <b>¿Quién es?</b></br> Cualquier persona que como consecuencia de un siniestro vial haya sufrido daño físico o mental y que requiera <b>atención en salud.</b></p>
            </div>
        </div>
        <div class="row py-4 justify-content-center">
            <div class="col-12 col-sm-6 col-md-4 text-center align-self-center my- my-md-0">
                <img src="${slideImagesPath}img_s5_modal1.png" class="img-fluid mb-3">
            </div>
            <div class="col-12 col-sm-6 col-md-4 text-center align-self-center my-3 my-md-0">
                <img src="${slideImagesPath}img_s5_modal2.png" class="img-fluid mb-3">
            </div>
            <div class="col-12 col-sm-6 col-md-4 text-center align-self-center my-3 my-md-0">
                <img src="${slideImagesPath}img_s5_modal3.png" class="img-fluid mb-3">
            </div>
        </div>`,
    background: `bg-purple-medium`,
  },
];

function showModal(id) {
  if (id) {
    $(".modal-img").removeClass("bg-orange-medium");
    $(".modal-img").removeClass("bg-purple-medium");
    $(".modal-img").removeClass("bg-blue-light");
    $(".modal-img").removeClass("bg-yellow-medium");
    $(".modal-img").removeClass("bg-green-medium");
    $(".modal-img").addClass(modalContent[id].background);
  }
  $("#contentModal")
    .find(".modal-img")
    .html(
      `<img src="${slideImagesPath}${modalContent[id].img}.png" alt="" class="img-fluid">`
    );
  $("#contentModal").find("#modal-text").html(modalContent[id].body);
  $("#contentModal").modal("show");
}
