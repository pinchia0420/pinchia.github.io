// project javascript
$(document).ready(function(){
  $(".preview").on("mouseover focus", showInfo);
  $(".preview").on("mouseleave blur", hideInfo);
  $(".navbar-toggle").on("click", navBarControl);
});
function showInfo(){
  if (this.id === "internImg") {
    //console.log("internImg")
    $("#internText").css("display", "flex");
  }
  else if (this.id === "paraImg") {
    //console.log("paraImg")
    $("#paraText").css("display", "flex");
  }
  else if (this.id === "IRImg") {
    //console.log("IRImg")
    $("#IRText").css("display", "flex");
  }
  else if (this.id === "MLImg") {
    //console.log("MLImg")
    $("#MLText").css("display", "flex");
  }
  else {
    //console.log("CVImg")
    $("#CVText").css("display", "flex");
  }
}
function hideInfo(){
  if (this.id === "internImg") {
    //console.log("internImg")
    $("#internText").css("display", "none");
  }
  else if (this.id === "paraImg") {
    //console.log("paraImg")
    $("#paraText").css("display", "none");
  }
  else if (this.id === "IRImg") {
    //console.log("IRImg")
    $("#IRText").css("display", "none");
  }
  else if (this.id === "MLImg") {
    //console.log("MLImg")
    $("#MLText").css("display", "none");
  }
  else {
    //console.log("CVImg")
    $("#CVText").css("display", "none");
  }
}
function navBarControl(){
  var status = $("#navbarSupportedContent").css('display');
  if (status === "none") {
    $("#navbarSupportedContent").css('display', "block");
  }
  else {
    $("#navbarSupportedContent").css('display', "none");
  }
}
