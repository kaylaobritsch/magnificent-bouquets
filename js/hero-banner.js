var slideIndex = 1;
var timer = null;
showDivs(slideIndex);

function plusDivs(n) {
  clearTimeout(timer);
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  clearTimeout(timer);
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("badge");

  if (n==undefined) {
    n = ++slideIndex
  }

  if (n > x.length) {
    slideIndex = 1
  }

  if (n < 1) {
    slideIndex = x.length
  }

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" badge-focus", "");
  }

  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " badge-focus";

  timer = setTimeout(showDivs, 6000);
}
