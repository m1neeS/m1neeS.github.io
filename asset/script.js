$(document).ready(function(){
    // Get the modal
    var modal = document.getElementById("myModalLogin");
    var modal_btn = document.getElementById("login-btn");
    var close_btn = document.getElementById("loginClose-btn");
    
    modal_btn.onclick = function() {
        $("#myModalLogin").fadeIn("slow");
    }
    
    close_btn.onclick = function() {
        $("#myModalLogin").fadeOut("slow");
    }
    
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
});

$(document).ready(function(){
    // Get the modal
    var modalSign = document.getElementById("myModalSign");
    var sign_btn = document.getElementById("signUp-btn");
    var signClose_btn = document.getElementById("signClose-btn");
    
    sign_btn.onclick = function() {
        $("#myModalSign").fadeIn("slow");
    }
    
    signClose_btn.onclick = function() {
        $("#myModalSign").fadeOut("slow");
    }
    
    window.onclick = function(event) {
      if (event.target == modalSign) {
        modalSign.style.display = "none";
      }
    }
});