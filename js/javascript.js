$(document).ready(function() {
    // Hide all sections except the initial section
    $("section:not(#Home)").hide();

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
