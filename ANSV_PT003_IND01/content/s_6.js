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
                                Acompañamiento a víctimas y rehabilitación e inclusión de personas en situación de discapacidad
                            </div>
                        </div>
                    </h1>
                    
                    <div class="row justify-content-center justify-content-md-end mt-5">
                        <div class="col-11">
                            <div class="row text-center">
                                <p class="text-title">Explora cada situación e identifica elementos clave del acompañamiento a víctimas y rehabilitación e inclusión de Personas en situación de discapacidad: </p>
                                <div class="col-lg-12 justify-content-start d-flex">
                                    <img src="${slideImagesPath}img_s6_indicator.png" class="img-fluid shadow-img">
                                </div>
                                <div class="row">
                                    <div class="col-lg-4"></div>
                                    <div class="col-lg-4">
                                        <button id="modal-1" class="btn"  onclick="showModal(1)">
                                            <img src="${slideImagesPath}img_s6_btn1.png" class="img-fluid shadow-img">
                                        </button>

                                    </div>
                                    <div class="col-lg-4">
                                        <button id="modal-2" class="btn"  onclick="showModal(2)">
                                            <img src="${slideImagesPath}img_s6_btn2.png" class="img-fluid shadow-img">
                                        </button>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-4"></div>
                                    <div class="col-lg-4">
                                        <button id="modal-3" class="btn"  onclick="showModal(3)">
                                            <img src="${slideImagesPath}img_s6_btn3.png" class="img-fluid shadow-img">
                                        </button>
                                    </div>
                                    <div class="col-lg-4">
                                        <button id="modal-4" class="btn"  onclick="showModal(4)">
                                            <img src="${slideImagesPath}img_s6_btn4.png" class="img-fluid shadow-img">
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
                            <audio src="${slideAudioPath}audio_s6.mp3" preload="auto" controls="">
                            <p>Tu navegador no implementa el elemento audio.</p>
                            </audio>
                        </div>
                    </div>
                    <div class="row bg-yellow-gradient-none d-flex justify-content-center">
                        <img class="img-fluid img-size" src="${slideImagesPath}img_s6.png">
                    </div>
                </div>
            </main>          
        </div>
        
        <div id="contentModal" class="modal fade contentModal2" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-xl modal-dialog-centered" role="document">
                <div class="modal-content">
                      <div class="modal-body">
                        <div class="row w-100 justify-content-center">
                          <div class="col-12 col-lg-4 modal-img p-3 d-flex align-items-center justify-content-center bg-blue-light"></div>
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
    img: "img_s6_modal_1",
    title: "",
    body: `<div class="row justify-content-center align-items-center pt-3 mt-4 mt-lg-0">
            <div class="col-11 col-md-10 text-white text-center">
                <p>Mi nombre es Pablo. En mi entidad territorial estamos creando un Centro de Atención Integral a las Víctimas de Siniestros Viales. En este lugar podrán acudir los afectados después de sufrir un siniestro vial y es allí donde se centraliza toda la información a las víctimas y/o a sus familiares más directos. Esta es una iniciativa muy valiosa y que permitirá seguir avanzando en la atención integral a las víctimas de siniestros viales.</p>
            </div>
        </div>`,
    dest: "",
    audio: "",
  },
  {
    img: "img_s6_modal_2",
    title: "",
    body: `<div class="row justify-content-center align-items-center pt-3 mt-4 mt-lg-0">
            <div class="col-11 col-md-10 text-white text-center">
                <p>Yo soy Javier y he recibido la atención psicológica que necesitaba después del siniestro vial, puesto que la rehabilitación integral no solo se centra en la afectación física, sino en mitigar la repercusión que pueden tener las secuelas del siniestro en todos  los ámbitos donde nos desenvolvemos.</p>
                <p>También mi mamá ha recibido acompañamiento desde psicología, pues la atención integral no solo es para las víctimas, también incluye a los familiares, quienes son una parte fundamental del proceso de rehabilitación e inclusión.</p>
            </div>
        </div>`,
    dest: "",
    audio: "",
  },
  {
    img: "img_s6_modal_3",
    title: "",
    body: `<div class="row justify-content-center align-items-center pt-3 mt-4 mt-lg-0">
            <div class="col-11 col-md-10 text-white text-center">
                <p>Sabías que las afectaciones después de un siniestro vial se pueden manifestar en:</p>
                <ul class="list">
                    <li class="mb-3">Estructura física del cuerpo = Discapacidades motoras</li>
                    <li class="mb-3">Lesiones de los nervios sensitivos = Discapacidades sensoriales</li>
                    <li class="mb-3">Traumatismos craneoencefálicos = Discapacidades neurológicas, cognitivas, intelectuales, dificultades del habla o mixtas.</li>
                <ul>
            </div>
        </div>`,
    dest: "a",
    audio: "",
  },
  {
    img: "img_s6_modal_4",
    title: "",
    body: `<div class="row justify-content-center align-items-center pt-3 mt-4 mt-lg-0">
            <div class="col-11 col-md-10 text-white text-center">
                <p>Mi nombre es María y gracias a los programas de inclusión laboral he iniciado labores en una empresa y me siento muy feliz. Este logro no lo hubiera alcanzado sin el equipo multidisciplinario que me acompañó en mi rehabilitación y me garantizó un tratamiento integral desde los ámbitos de salud, educación, psicología, entre otros.</p>
            </div> 
        </div>`,
    dest: "",
    audio: "",
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
