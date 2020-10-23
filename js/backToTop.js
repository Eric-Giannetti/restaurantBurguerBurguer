    var mybutton = document.querySelector(".backTotop");

    window.onscroll = function () { scrollFunction() }

    function scrollFunction() {
      if (document.documentElement.scrollTop > 500) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }