function animateButton() {
    var button = document.getElementById("anim-button");
    button.classList.add("animate");

    setTimeout(function() {
      button.classList.remove("animate");
    }, 300);
  }