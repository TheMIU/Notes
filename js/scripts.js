// Hide the loading when the document is fully loaded
document.onreadystatechange = function () {
    if (document.readyState === "complete") {
        $('#loading-container').hide();
    }
};

// Disable the right-click context menu
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});

////// Enable tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

////// add icon before h5
var icon = $('<i>').addClass('fa-solid fa-folder fa-xs');

var containers = $(".subject-container h5");

containers.each(function () {
    $(this).prepend(icon.clone());
});

////// add icon before list items
var icon = $('<i>').addClass('fa-solid fa-file ');

$(".subject-container ul li").each(function () {
    $(this).prepend(icon.clone());
});

////// Navigation
hideAll();
changeNavLinksWhite();
$("#home").css("color", "#45b0ff");
$("#main3buttons").show();

$("#navHome").click(function () {
    hideAll();
    $("#main3buttons").show();
    changeNavLinksWhite();
    $("#home").css("color", "#45b0ff");
    toggleNavbar();
});

$("#home").click(function () {
    hideAll();
    $("#main3buttons").show();
    changeNavLinksWhite();
    $("#home").css("color", "#45b0ff");
    toggleNavbar();
});

$("#btn-sem-1, #navSEM01").click(function () {
    hideAll();
    $("#sem-1").show();
    changeNavLinksWhite();
    $("#navSEM01").css("color", "#45b0ff");
    toggleNavbar();
});

$("#btn-sem-2, #navSEM02").click(function () {
    hideAll();
    $("#sem-2").show();
    changeNavLinksWhite();
    $("#navSEM02").css("color", "#45b0ff");
    toggleNavbar();
});

$("#btn-sem-3, #navSEM03").click(function () {
    hideAll();
    $("#sem-3").show();
    changeNavLinksWhite();
    $("#navSEM03").css("color", "#45b0ff");
    toggleNavbar();
});

function hideAll() {
    $("#main3buttons").hide();
    $("#sem-1").hide();
    $("#sem-2").hide();
    $("#sem-3").hide();
}

function changeNavLinksWhite() {
    $("#navSEM01").css("color", "white");
    $("#navSEM02").css("color", "white");
    $("#navSEM03").css("color", "white");
    $("#home").css("color", "white");
}

////// Toggle navbar
function toggleNavbar() {
    $(".navbar-collapse").collapse('hide');
}

$(document).on("click", function (event) {
    // Check if the clicked element is not part of the navbar
    if (!$(event.target).closest('.navbar').length) {
        $(".navbar-collapse").collapse('hide');
    }
});
