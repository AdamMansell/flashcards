$(document).ready(function() {

  // Column 1
   $(".clickable-show1").click(function() {
    $(".column1show").toggle("slow");
    $(".column1hide").toggle("slow");
  });
  $(".clickable-hide1").click(function() {
    $(".column1show").toggle("slow");
    $(".column1hide").toggle("slow");
  });

  // Column 2
  $(".clickable-show2").click(function() {
    $(".column2show").toggle("slow");
    $(".column2hide").toggle("slow");
  });
  $(".clickable-hide2").click(function() {
    $(".column2show").toggle("slow");
    $(".column2hide").toggle("slow");
  });

  // Column 3
  $(".clickable-show3").click(function() {
    $(".column3show").toggle("slow");
    $(".column3hide").toggle("slow");
  });
  $(".clickable-hide3").click(function() {
    $(".column3show").toggle("slow");
    $(".column3hide").toggle("slow");
  });
  // Column 4
  $(".clickable-show4").click(function() {
    $(".column4show").toggle("slow");
    $(".column4hide").toggle("slow");
  });
  $(".clickable-hide4").click(function() {
    $(".column4show").toggle("slow");
    $(".column4hide").toggle("slow");
  });
  // Column 5
  $(".clickable-show5").click(function() {
    $(".column5show").toggle("slow");
    $(".column5hide").toggle("slow");
  });
  $(".clickable-hide5").click(function() {
    $(".column5show").toggle("slow");
    $(".column5hide").toggle("slow");
  });
  // Column 6
  $(".clickable-show6").click(function() {
    $(".column6show").toggle("slow");
    $(".column6hide").toggle("slow");
  });
  $(".clickable-hide6").click(function() {
    $(".column6show").toggle("slow");
    $(".column6hide").toggle("slow");
  });
});
  // Column 7
  // Column 8
  // Column 9
  // Column 10
  // Column 11
  // Column 12
  // Column 13
  // Column 14
  // Column 15
  // Column 16
  // Column 17
  // Column 18
  // Column 19







  //Hoist Function
//   function hoistMeShow(columnShow, columnHide) {
//     $(document).ready(function() {
//       $(".clickable-show1").click(
//         console.log("HERE"),
//       $(columnShow).toggle("slow"),
//       $(columnHide).toggle("slow")
//       );
//   });
// };




  // $(".clickable-show1").click(function hoistMeShow(columnShow, columnHide) {
  //   console.log("you here?");
  //   $(columnShow).toggle("slow");
  //   $(columnHide).toggle("slow");
  // });
//   $(".clickable-hide1").click(function hoistMeHide(columnShow, columnHide) {
//     $(columnShow).toggle("slow");
//     $(columnHide).toggle("slow");
//   });
// });