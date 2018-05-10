$(document).foundation();

$(document).ready(function(){
    $("#navbar").show();
    $("#header").hide();
    $("#buttons").hide();
    $("#jumbo").hide();
    $("#footer").hide();
    $("#stars").hide();
});

$("#1").click(function(){
    $("#navbar").show();
    $( "#header" ).hide();
    $("#buttons").hide();
    $("#jumbo").hide();
    $("#footer").hide();
    $("#stars").hide();
});
$("#2").click(function(){
    $("#navbar").hide();
    $( "#header" ).show();
    $("#buttons").hide();
    $("#jumbo").hide();
    $("#footer").hide();
    $("#stars").hide();
});
$("#3").click(function(){
    $("#navbar").hide();
    $( "#header" ).hide();
    $("#buttons").show();
    $("#jumbo").hide();
    $("#footer").hide();
    $("#stars").hide();
});
$("#4").click(function(){
    $("#navbar").hide();
    $( "#header" ).hide();
    $("#buttons").hide();
    $("#jumbo").show();
    $("#footer").hide();
    $("#stars").hide();
});
$("#5").click(function(){
    $("#navbar").hide();
    $( "#header" ).hide();
    $("#buttons").hide();
    $("#jumbo").hide();
    $("#footer").show();
    $("#stars").hide();
});
$("#6").click(function(){
    $("#navbar").hide();
    $( "#header" ).hide();
    $("#buttons").hide();
    $("#jumbo").hide();
    $("#footer").hide();
    $("#stars").show();
});