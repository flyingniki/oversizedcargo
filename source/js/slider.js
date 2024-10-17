$(function () {
  $(".services__carousel-list").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    centerMode: false,
  });

  $(".features__list").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    centerMode: false,
  });

  $(".car__slider").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: false,
    centerMode: false,
  });

  if ($(window).width() < "1440") {
    $(".work__carousel").slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      variableWidth: true,
      centerMode: false,
    });
  }

  if ($(window).width() >= "1440") {
    $(".partners__list").slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 6,
      slidesToScroll: 1,
      variableWidth: true,
      centerMode: false,
    });

    // section special
    $(".special__slider").slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      variableWidth: false,
      centerMode: false,
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
      slidesToShow: 6,
      slidesToScroll: 1,
      variableWidth: true,
      centerMode: false,
    });

    // section special
    $(".special__slider").slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      variableWidth: false,
      centerMode: false,
    });
  } else {
    $(".partners__list").slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 1,
      variableWidth: true,
      centerMode: false,
    });

    // section special
    $(".special__slider").slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: false,
      centerMode: false,
    });
  }

  $(".detail__list").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: false,
    centerMode: false,
  });

  const detailList = $(".detail__list .slick-dots");
  detailList.addClass("clear-list");

    const dots = detailList.find("button");
    dots.each((i, dot) => {
      dot.textContent = "";
      dot.classList.add("slick-button");
    });

  const slickArrows = [
    $(".services__carousel .slick-arrow"),
    $(".car .slick-arrow"),
    $(".work__carousel .slick-arrow"),
    $(".partners__list .slick-arrow"),
    $(".special__slider .slick-arrow"),
    $(".detail__list .slick-arrow"),
  ];

  slickArrows.forEach((arrow) => {
    arrow.text("");
  });
});
