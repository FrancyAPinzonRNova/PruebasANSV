var slideTitle = "";
var slideContent = `
<div class="col-12 d-flex flex-column justify-content-center">
    <div class="accesibility-container main-slide-container">
        ${a11yElements}
    </div>
    <div class="row h-100 bg-white">
        <div class="col-12 main-cover-title">
            <div class="row h-md-33 ">
                <div class="logo-container col-12 d-flex align-items-center px-0">
                    <img class="img-fluid" src="resources/images/logos/logo_mintrans.jpg" aria-description="Ministerio de Transporte. La movilidad es de todos.">
                </div>
            </div>
            <div class="row h-md-33 ps-md-3">
                <div class="col-md-8 d-flex justify-content-center flex-column">
                    <h1 class="w-100" data-readable="true">Atención integral a víctimas de siniestros viales</h1>
                </div>
            </div>
            <div class="row h-md-33 ps-md-3">
                <div class="col-md-9 mb-5 mb-md-0 d-flex align-items-center">
                    <h1 class="w-100 small-text">
                        <small data-readable="true">
                            Creación de la ruta de atención integral a víctimas de siniestros viales
                        </small>
                    </h1>
                </div>
            </div>
        </div>
        <div class="col-12 main-cover-footer">
            <div class="row align-items-center">
                <div class="hashtag-container col-md-6  p-4">
                    <h2 class="cover-hashtag float-md-left ps-md-3" data-readable="true">#SalvemosVidasEnLaVía</h2>
                </div>
                <div class="col-12 text-center p-4 d-md-none">
                    <img class="img-fluid" src="resources/images/logos/logo_ansv.png">
                </div>
                <div class="button-container col-md-6 text-center p-4">
                    <button onclick="gotoContent()" class="btn btn-green-dark btn-lg float-md-end me-lg-5 me-0" data-toggle="tooltip" title="Ingresar" aria-description="Ingresar">Ingresar</button>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade contentModal" tabindex="-1" role="dialog" id="showDemostration">
        <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="row justify-content-center m-0">
                        <div class="col-12 text-center msg-body">
                            <div class="row bg-purple-medium justify-content-center ">
                                <div class="col-12 justify-content-end d-flex p-0 d-md-none">
                                    <button data-bs-dismiss="modal" class="close" type="butata-toggle=" tooltip" title="Cerrar">
                                        <img class="img-fluid w-100" src="${slideImagesPath}btn_modal_close.svg" />
                                    </button>
                                </div>
                                <div class="col-6 col-md-3 col-lg-4 p-0 align-items-center justify-content-center d-flex">
                                    <img class="img-fluid d-lg-none" src="${slideImagesPath}nav_guide/img_nav_guide01.png">
                                    <img class="img-fluid d-none d-lg-block" src="${slideImagesPath}nav_guide/img_nav_guide02.png">
                                </div>
                                <div class="col-12 col-md-9 col-lg-8 pb-3">
                                    <div class="row justify-content-center align-items-center d-none d-md-block ">
                                        <div class="col-12 justify-content-end d-flex p-0">
                                            <button data-bs-dismiss="modal" class="close" type="butata-toggle=" tooltip" title="Cerrar">
                                                <img class="img-fluid w-100" src="${slideImagesPath}btn_modal_close.svg" />
                                            </button>
                                        </div>
                                    </div>
                                    <div class="row justify-content-center align-items-center h-100">
                                        <div class="col-11 pb-3">
                                            <p class="text-white" data-readable="true">
                                                A continuación puede consultar la <b>guía de navegación</b> del recurso interactivo o ir directamente a su <b>contenido.</b>
                                            </p>
                                            <div class="row justify-content-center align-items-center mt-3">
                                                <div class="col-12 col-lg-10 ">
                                                    <!-- <button onclick="gotoDemo()" class="btn btn-green-dark w-100" data-toggle="tooltip" title="Ver guía" aria-description="Ver guía de navegación">Ver guía de navegación</button> -->
                                                </div>
                                                <div class="col-12 col-lg-10 mt-3 ">
                                                    <button onclick="gotoContent()" class="btn btn-yellow-dark w-100" data-toggle="tooltip" title="Iniciar" aria-description="Ver el recurso">Ir al contenido del recurso</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
`;

var slideActivityContent = {};
//this variable disables the next button or anything with the class nextControlButton
//to allow again you should call allowProgress function
preventProgress = true;
$(document).ready(function () {
  //hide controls & nav space
  $("#controls").hide();
  $(".slideshow-container").css({ "margin-bottom": "0", border: "0" });
  // checkScrollTop();

  var carouselLength = $(".carousel-item").length - 1;

  if (carouselLength) {
    $(".carousel-control-next").removeClass("d-none");
  }

  $(".carousel")
    .carousel({
      interval: false,
      wrap: false,
    })
    .on("slide.bs.carousel", function (e) {
      // First one
      if (e.to == 0) {
        $(".carousel-control-prev").addClass("d-none");
        $(".carousel-control-next").removeClass("d-none");
      } // Last one
      else if (e.to == carouselLength) {
        $(".carousel-control-prev").removeClass("d-none");
        $(".carousel-control-next").addClass("d-none");
      } // The rest
      else {
        $(".carousel-control-prev").removeClass("d-none");
        $(".carousel-control-next").removeClass("d-none");
      }
    });
});

slideDemoPresentated = false;

function showDemostration() {
  $("#showDemostration").modal("show");
}
function closeDemostration() {
  $("#showDemostration").modal("hide");
}

function gotoDemo() {
  $("#showDemostration").modal("hide");
  $("#showDemostration").on("hidden.bs.modal", function () {
    $("#navigationGuide").modal();
  });
}

function gotoContentBeforeGuide() {
  $("#navigationGuide").modal("hide");
  $("#navigationGuide").on("hidden.bs.modal", function () {
    goToSlide([], 2);
  });
}

function closeModal() {
  $("#navigationGuide").modal("hide");
  $("#navigationGuide").on("hidden.bs.modal", function () {
    goToSlide([], 1);
  });
}

// function gotoContent() {
//   $("#showDemostration").modal("hide");
//   $("#showDemostration").on("hidden.bs.modal", function () {
//     goToSlide([], 2);
//   });
// }

function gotoContent() {
  goToSlide([], 2);
}
