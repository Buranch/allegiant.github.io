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
    let display = $(".good-to-know-txt").css("display");
    if (display == "none") {
      $(".good-to-know-txt").css("display", "inline");
      $(".minimize-info").html(`I've read please minimize`);
    } else {
      $(".good-to-know-txt").css("display", "none");
      $(".minimize-info").html(`Open`);
    }
  });

  $("#show-password-toggle").click(() => {
    togglePassword("pass1");
  });
});
