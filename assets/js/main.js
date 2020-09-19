$(document).ready(function () {

  if($('.header-slider').length){
    $('.header-slider').slick({
      dots: true,
      arrows: false
    })
  }

  if($('.add-slider').length){
    $('.add-slider').slick({
      dots: true,
      arrows: false
    })
  }



  if($('.related-house-add-slider').length){
    $('.related-house-add-slider').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: false,
      loop: true,
      infinite: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }



});
