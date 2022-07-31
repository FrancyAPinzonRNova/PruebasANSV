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
                                Atención hospitalaria
                            </div>
                        </div>
                    </h1>
                    
                    <div class="row justify-content-center justify-content-md-end mt-5">
                        <div class="col-11">
                            <div class="row text-center">
                                <p class="text-title">Explora cada ícono e identifica elementos clave de la atención hospitalaria:</p>
                                <div class="col-lg-12 justify-content-start d-flex">
                                  <img src="${slideImagesPath}img_s4_indicator.png" class="img-fluid">
                                </div>
                                <div class="row">
                                  <div class="col-lg-4"></div>
                                  <div class="col-lg-4  ">
                                      <button id="modal-1" class="btn"  onclick="showModal(1)">
                                          <img src="${slideImagesPath}img_s4_btn1.png" class="img-fluid shadow-img">
                                      </button>
                                  </div>
                                  <div class="col-lg-4 ">
                                      <button id="modal-2" class="btn"  onclick="showModal(2)">
                                          <img src="${slideImagesPath}img_s4_btn2.png" class="img-fluid shadow-img">
                                      </button>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-lg-4"></div>
                                  <div class="col-lg-4 ">
                                      <button id="modal-3" class="btn"  onclick="showModal(3)">
                                          <img src="${slideImagesPath}img_s4_btn3.png" class="img-fluid shadow-img">
                                      </button>
                                  </div>
                                  <div class="col-lg-4 ">
                                      <button id="modal-4" class="btn"  onclick="showModal(4)">
                                          <img src="${slideImagesPath}img_s4_btn4.png" class="img-fluid shadow-img">
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
                            <audio src="${slideAudioPath}audio_s4.mp3" preload="auto" controls="">
                            <p>Tu navegador no implementa el elemento audio.</p>
                            </audio>
                        </div>
                    </div>
                    <div class="row bg-yellow-gradient-none d-flex justify-content-center">
                        <img class="img-fluid img-size" src="${slideImagesPath}img_s4.png">
                    </div>
                </div>
            </main>          
        </div>
        
        <<div id="contentModal" class="modal fade contentModal2" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-xl modal-dialog-centered" role="document">
                <div class="modal-content">
                      <div class="modal-body">
                        <div class="row w-100 justify-content-center">
                          <div class="col-12 col-lg-4 modal-img d-flex align-items-center justify-content-center bg-blue-light"></div>
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
    img: "img_s4_modal_1",
    title: "",
    body: `<div class="row justify-content-center align-items-center pt-3 mt-4 mt-lg-0">
            <div class="col-11 col-md-10 text-white text-center">
                <p>La atención hospitalaria tiene por objetivo garantizar el <b>acceso, calidad, pertinencia y oportunidad</b> de la atención a las víctimas de siniestros viales, buscando prevenir  la muerte y discapacidad evitable, limitar la gravedad del traumatismo y del sufrimiento que ocasiona, y garantizar una evolución óptima de los supervivientes para mejorar las posibilidades de una mejor reintegración a la sociedad.</p>
            </div>
        </div>`,
  },
  {
    img: "img_s4_modal_2",
    title: "",
    body: `<div class="row justify-content-center align-items-center pt-3 mt-4 mt-lg-0">
            <div class="col-11 col-md-10 text-white text-center">
                <p>Todos los hospitales son diferentes y tienen distintos niveles de complejidad y capacidad técnica y tecnológica para el manejo de pacientes con traumatismos, por lo cual es necesario trasladar al paciente a la institución que tenga la capacidad para responder a las necesidades de atención de la persona lesionada, evitando así la referencia innecesaria de pacientes entre centros hospitalarios.</p>
                
            </div>
        </div>`,
  },
  {
    img: "img_s4_modal_3",
    title: "",
    body: `<div class="row justify-content-center align-items-center pt-3 mt-4 mt-lg-0">
            <div class="col-11 col-md-10 text-white text-center">
                <p>Incidencia funcional de las lesiones producidas por siniestros viales:</p>
                <ul class="text-start">
                    <li class="mb-3">Traumatismos craneoencefálicos severos</li>
                    <li class="mb-3">Amputaciones</li>
                    <li class="mb-3">Ceguera</li>
                    <li class="mb-3">Grandes quemaduras</li>
                    <li class="mb-3">Hemorragias internas y externas</li>
                    <li class="mb-3">Lesiones neurológicas leves</li>
                    <li class="mb-3">Lesiones articulares</li>
                    <li class="mb-3">Fracturas múltiples de huesos largos</li>
                <ul>
            </div>
        </div>`,
  },
  {
    img: "img_s4_modal_4",
    title: "",
    body: `<div class="row justify-content-center align-items-center pt-3 mt-4 mt-lg-0">
            <div class="col-11 col-md-10 text-white text-center">
                <p>Las víctimas de un siniestro vial necesitan tener una valoración médica y emocional inmediata, incluso para aquellos en que las lesiones parecen no haber ocasionado ningún daño ya que pueden no haberlo hecho, pero pueden tener repercusiones a mediano o largo plazo.</p>
            </div> 
        </div>`,
  },
];

function showModal(id) {
  $("#contentModal")
    .find(".modal-img")
    .html(
      `<img src="${slideImagesPath}${modalContent[id].img}.png" alt="" class="img-fluid">`
    );
  $("#contentModal").find("#modal-text").html(modalContent[id].body);
  $("#contentModal").modal("show");
}
