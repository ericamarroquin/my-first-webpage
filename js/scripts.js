$(document).ready(function() {
  $("button#lightButton").click(function() {
    $("body").removeClass();
    $("body").addClass("light-background");
    $("button#lightButton").hide();
    $("button#darkButton").show();
  });
  $("button#darkButton").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-background");
    $("button#darkButton").hide();
    $("button#lightButton").show();
  });
});

