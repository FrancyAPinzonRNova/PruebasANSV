var navBarElements = `
    <nav id="controls" class="navbar d-flex px-1 px-md-0">
        <div id="controlBreadcrumb" aria-label="breadcrumb" class="breadcrumb"></div>
        <div class="d-flex flex-nowrap">
            <ul class="navbar-nav row g-0 justify-content-between d-none d-md-flex">
                <li class="nav-item col">
                    <button id="previousControlButton" class="btn btn-nav prev" onclick="navToSlide('prev')" data-toggle="tooltip" title="Volver" tabindex="0">&#10094;</button>
                </li>
                <li class="nav-item col order-last order-md-1 mx-md-1 justify-content-end d-flex">
                    <button id="nextControlButton" class="btn btn-nav next" onclick="navToSlide('next')" data-toggle="tooltip" title="Siguiente" tabindex="0">&#10095;</button>
                </li>
                <li class="nav-item col order-md-last justify-content-center d-flex">
                    <button type="button" class="btn btn-nav menu" data-toggle="modal" data-target="#mainMenu" title="Menu Principal"><span class="text-center">&#9776;</span></button>
                </li>
            </ul>
            <div class="accesibility-container d-block">
                ${a11yElements}
            </div>
        </div>
    </nav>
`;

var navBarBottomElements = `
        <nav>
            <ul class="navbar-nav row justify-content-between align-items-center flex-row">
                <li class="nav-item col">
                    <button id="previousControlButton" class="btn btn-nav prev" onclick="navToSlide('prev')" data-toggle="tooltip" title="Volver" tabindex="0">&#10094;</button>
                </li>
                <li class="nav-item col order-last mx-md-1 justify-content-end d-flex">
                    <button id="nextControlButton" class="btn btn-nav next" onclick="navToSlide('next')" data-toggle="tooltip" title="Siguiente" tabindex="0">&#10095;</button>
                </li>
                <li class="nav-item col justify-content-center d-flex">
                    <button type="button" class="btn btn-nav menu" data-toggle="modal" data-target="#mainMenu" title="Menu Principal"><span class="text-center">&#9776;</span></button>
                </li>
            </ul>
        </nav>
`;
