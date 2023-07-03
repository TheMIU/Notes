$(document).ready(function() {
    // Hide all sections except the initial section
    $("section:not(#Home)").hide();

   /* // Add click event listener to each nav link
    $(".navbar-nav .nav-link").click(function(event) {
        event.preventDefault();

        // Get the target section ID from the link's text
        const targetSectionId = $(this).text();

        // Show the target section and hide the others
        $("section").each(function() {
            if ($(this).attr("id") === targetSectionId) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });*/

    $("#NavHome").click(function(event) {
        $("#Home").show();
        $("section:not(#Home)").hide();
    });

    $("#NavSEM01").click(function(event) {
        $("#SEM_01").show();
        $("section:not(#SEM_01)").hide();
    });

    $("#NavSEM02").click(function(event) {
        $("#SEM_02").show();
        $("section:not(#SEM_02)").hide();
    });

    $("#NavSEM03").click(function(event) {
        $("#SEM_03").show();
        $("section:not(#SEM_03)").hide();
    });

});


/*
$(document).ready(function() {
    // Hide all sections except the Home section


    // Add click event listener to each nav link
    $(".navbar-nav .nav-link").click(function(event) {
        event.preventDefault();

        // Get the target section ID from the link's href attribute
        const targetSectionId = $(this).attr("href");

        // Show the target section and hide the others
        $(targetSectionId).show().siblings("section").hide();
    });
});*/
