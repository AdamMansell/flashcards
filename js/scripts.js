$(document).ready(function() {
  $(".clickable-show").click(function() {
    $("#column1show").toggle();
    $("#column1show").toggle();
  });
  $(".clickable-hide").click(function() {
    $("#column2show").toggle();
    $("#column2show").toggle();
  });
});