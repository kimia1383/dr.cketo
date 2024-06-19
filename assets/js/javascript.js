$(document).ready(function(){
  $('.slider-hot-offer').slick({
      infinite:true,
      slidesToShow:4,
      slidesToScroll:3,
      rtl:true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 360,
          settings: {
            arrows: false,
            centerMode: true,
            slidesToShow: 1,
            slidesToScroll:1
          }
        }
      ]
    })});