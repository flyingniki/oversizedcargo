$(document).ready(function () {
  $(".services__carousel-list").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 3,
    variableWidth: true,
    centerMode: true,
  });

  $(".features__list").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 3,
    variableWidth: true,
    centerMode: false,
  });

  $(".car__slider").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 2,
    variableWidth: false,
    centerMode: false,
  });

  const slickArrows = [
    $(".services__carousel .slick-arrow"),
    $(".car .slick-arrow"),
  ];

  slickArrows.forEach((arrow) => {
    arrow.text("");
  });
});
