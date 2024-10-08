$(function () {
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

  if ($(window).width() < "1440") {
    $(".work__carousel").slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: false,
      centerMode: true,
    });
  }

  if ($(window).width() >= "1440") {
    $(".partners__list").slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 6,
      slidesToScroll: 6,
      variableWidth: false,
      centerMode: true,
    });

    const partnersList = $(".partners__list .slick-dots");
    partnersList.addClass("clear-list");

    const dots = partnersList.find("button");
    dots.each((i, dot) => {
      dot.textContent = "";
      dot.classList.add("slick-button");
    });
  } else if ($(window).width() < "1440" && $(window).width() >= "768") {
    $(".partners__list").slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 3,
      variableWidth: false,
      centerMode: true,
    });
  } else {
    $(".partners__list").slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 1,
      variableWidth: false,
      centerMode: true,
    });
  }

  const slickArrows = [
    $(".services__carousel .slick-arrow"),
    $(".car .slick-arrow"),
    $(".work__carousel .slick-arrow"),
    $(".partners__list .slick-arrow"),
  ];

  slickArrows.forEach((arrow) => {
    arrow.text("");
  });
});
