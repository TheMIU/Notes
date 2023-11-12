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