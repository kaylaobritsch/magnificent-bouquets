window.onload = function() {
  var modalBasket = document.getElementById('modal-basket');
  var btnBasket = document.getElementById("basket-btn");
  var modalWedding = document.getElementById('modal-wedding');
  var btnWedding = document.getElementById("wedding-btn");
  var modalStately = document.getElementById('modal-stately');
  var btnStately = document.getElementById("stately-btn");
  var modalFuneral = document.getElementById('modal-funeral');
  var btnFuneral = document.getElementById("funeral-btn");
  var modalContract = document.getElementById('modal-contract');
  var btnContract = document.getElementById("contract-btn");

  btnBasket.onclick = function() {
    $(window.document).find("body").addClass("modal-open");
    $("body").removeClass("scrolling");
    $("#modal-basket").addClass("scrolling");
    modalBasket.style.display = "block";
  }

  btnWedding.onclick = function() {
    $(window.document).find("body").addClass("modal-open");
    $("body").removeClass("scrolling");
    $("#modal-wedding").addClass("scrolling");
    modalWedding.style.display = "block";
  }

  btnStately.onclick = function() {
    $(window.document).find("body").addClass("modal-open");
    $("body").removeClass("scrolling");
    $("#modal-stately").addClass("scrolling");
    modalStately.style.display = "block";
  }

  btnFuneral.onclick = function() {
    $(window.document).find("body").addClass("modal-open");
    $("body").removeClass("scrolling");
    $("#modal-funeral").addClass("scrolling");
    modalFuneral.style.display = "block";
  }

  btnContract.onclick = function() {
    $(window.document).find("body").addClass("modal-open");
    $("body").removeClass("scrolling");
    $("#modal-contract").addClass("scrolling");
    modalContract.style.display = "block";
  }

  function closeModal() {
    document.getElementById('modal-basket').style.display = "none";
    document.getElementById('modal-wedding').style.display = "none";
    document.getElementById('modal-stately').style.display = "none";
    document.getElementById('modal-funeral').style.display = "none";
    document.getElementById('modal-contract').style.display = "none";
    $(window.document).find("body").removeClass("modal-open");
    $("body").addClass("scrolling");
  }
}

// var slideIndex = [1,1,1,1,1];
// var slideId = ["gallerySlide", "gallerySlide2", "gallerySlide3", "gallerySlide4", "gallerySlide5"]
// showDivsModal(1, 0);
// showDivsModal(1, 1);
// showDivsModal(1, 2);
// showDivsModal(1, 3);
// showDivsModal(1, 4);
//
// function plusDivsModal(n, no) {
//   showDivsModal(slideIndex[no] += n, no);
// }

// function showDivsModal(n, no) {
//   var i;
//   var x = document.getElementsByClassName(slideId[no]);
//   if (n > x.length) {
//     slideIndex[no] = 1
//   }
//
//   if (n < 1) {
//     slideIndex[no] = x.length
//   }
//
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//     x[i].style.transform = "translate3d(0rem, -50%, 0rem)";
//   }
//
//   x[slideIndex[no]].style.display = "block";
//   x[slideIndex[no]].style.transform = "translate3d(0rem, -50%, 0rem)";
//
//   x[slideIndex[no]-1].style.display = "block"
//   x[slideIndex[no]-1].style.transform = "translate3d(-36rem, -50%, 0rem)";
//
//   x[slideIndex[no]+1].style.display = "block"
//   x[slideIndex[no]+1].style.transform = "translate3d(36rem, -50%, 0rem)";
// }
