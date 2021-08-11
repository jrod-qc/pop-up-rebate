// Version One
function rebateOption() {
    var optionSelector = $("#optionSelector").val();
    if (optionSelector === "optionOne") {
        $(".optionOne").css("display", "block");
        $(".rebate-modal-minimized-container-2").css("display", "none");
        $(".rebate-modal-minimized-container").css("display", "block");


        $(".rebate-btn a").click(() => {
            $(".rebate-modal-form-container").css("display", "flex");
            $(".rebate-modal-popup-main-content").css("display", "none");
        })

        $(".rebate-form-popup-exit-btn-box i").click(() => {
            $(".rebate-modal-form-container").css("display", "none");
            $(".rebate-modal-popup-main-content").css("display", "flex");
        })

        $(".rebate-modal-popup-exit-btn-box i").click(() => {
            $(".rebate-modal-popup-container").css("display", "none");
            $(".rebate-modal-minimized-container").css("left", "0px");
        })

        $(".rebate-modal-minimized-btn a").click(() => {
            $(".rebate-modal-popup-container").css("display", "flex");
            $(".rebate-modal-minimized-container").css("left", "-140px");
        })
    } else if (optionSelector === "optionTwo") {
        // $(".optionOne").css("display", "none");
        $(".rebate-modal-minimized-container").css("display", "none");
        $(".rebate-modal-minimized-container-2").css("display", "block");
        $(".optionTwo").css("display", "block");

        $(".rebate-btn-2 a").click(() => {
            $(".rebate-modal-form-container-2").css("display", "flex");
            $(".rebate-modal-right-side-2").css("display", "none");
            $(".rebate-modal-popup-exit-btn-box-2").css("display", "none");
            $(".rebate-modal-popup-main-content-2").css("height", "100%");
            $(".rebate-modal-left-side-2").css("width", "50%");

        })

        $(".rebate-form-popup-exit-btn-box-2 i").click(() => {
            $(".rebate-modal-form-container-2").css("display", "none");
            $(".rebate-modal-right-side-2").css("display", "block");
            $(".rebate-modal-popup-exit-btn-box-2").css("display", "flex");
            $(".rebate-modal-popup-main-content-2").css("height", "100%");
        })

        $(".rebate-modal-popup-exit-btn-box-2 i").click(() => {
            $(".rebate-modal-popup-container-2").css("display", "none");
            $(".rebate-modal-minimized-container-2").css("left", "0px");
        })

        $(".rebate-modal-minimized-btn-2 a").click(() => {
            $(".rebate-modal-popup-container-2").css("display", "flex");
            $(".rebate-modal-minimized-container-2").css("left", "-140px");
        })
    } else if (optionSelector === "optionThree") {
        // $(".optionOne").css("display", "none");
        $(".rebate-modal-minimized-container").css("display", "none");
        $(".rebate-modal-minimized-container-2").css("display", "none");
        $(".rebate-modal-minimized-container-3").css("display", "block");
        $(".optionThree").css("display", "block");

        $(".rebate-btn-3 a").click(() => {
            $(".rebate-modal-form-container-3").css("display", "flex");
            $(".rebate-modal-right-side-3").css("display", "none");
            $(".rebate-modal-popup-exit-btn-box-3").css("display", "none");
            $(".rebate-modal-popup-main-content-3").css("height", "100%");
            $(".rebate-modal-left-side-3").css("width", "50%");

        })

        $(".rebate-form-popup-exit-btn-box-3 i").click(() => {
            $(".rebate-modal-form-container-3").css("display", "none");
            $(".rebate-modal-right-side-3").css("display", "block");
            $(".rebate-modal-popup-exit-btn-box-3").css("display", "flex");
            $(".rebate-modal-popup-main-content-3").css("height", "100%");
        })

        $(".rebate-modal-popup-exit-btn-box-3 i").click(() => {
            $(".rebate-modal-popup-container-3").css("display", "none");
            $(".rebate-modal-minimized-container-3").css("left", "0px");
        })

        $(".rebate-modal-minimized-btn-3 a").click(() => {
            $(".rebate-modal-popup-container-3").css("display", "flex");
            $(".rebate-modal-minimized-container-3").css("left", "-140px");
        })
    } else if (optionSelector === " ") {
        alert("Please Make a Selection");
    }

}