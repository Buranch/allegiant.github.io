$(document).ready(function () {
  function togglePassword(id) {
    var x = document.getElementById(id);
    if (x.type === "password") {
      x.type = "text";
      $(`#${id}-hidden-eye`).css("display", "block");
      $(`#${id}-visible-eye`).css("display", "none");
    } else {
      x.type = "password";
      $(`#${id}-visible-eye`).css("display", "block");
      $(`#${id}-hidden-eye`).css("display", "none");
    }
  }

  $("#minimize-btn").click(() => {
    $(".claim-info").css("visibility", "hidden");
  });

  $("#show-password-toggle").click(() => {
    togglePassword("pass1");
  });
});
