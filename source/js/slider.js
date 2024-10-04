$(document).ready(function () {
  $(".services__carousel-list").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 3,
    variableWidth: true,
    centerMode: true
  });

  const slickArrow = $(".services__carousel .slick-arrow");

  slickArrow.text("");
});
