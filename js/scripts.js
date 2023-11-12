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
$("#main3buttons").show();

$("#navHome").click(function () {
    hideAll();
    $("#main3buttons").show();
});

$("#btn-sem-1, #navSEM01").click(function () {
    hideAll();
    $("#sem-1").show();
});

$("#btn-sem-2, #navSEM02").click(function () {
    hideAll();
    $("#sem-2").show();
});

$("#btn-sem-3, #navSEM03").click(function () {
    hideAll();
    $("#sem-3").show();
});

function hideAll() {
    $("#main3buttons").hide();
    $("#sem-1").hide();
    $("#sem-2").hide();
    $("#sem-3").hide();
}
