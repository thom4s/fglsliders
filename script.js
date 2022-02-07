

document.addEventListener('DOMContentLoaded', () => {
    console.log('loaded');


    var slider_large = tns({
        container: '.slide_large',
        items: 1.4,
        gutter: 32,
        autoplay: false,
        loop: false,
        responsive: {
          700: {
            items: 2.2
          }
        }
    });


    var slider_medium = tns({
        container: '.slide_medium',
        items: 1.4,
        gutter: 32,
        autoplay: false,
        loop: false,
        responsive: {
          700: {
            items: 3.2
          }
        }
    });

    var slider_small = tns({
      container: '.slide_small',
      items: 1.4,
      gutter: 32,
      autoplay: false,
      loop: false,
      responsive: {
        700: {
           items: 4
        }
      }
  });

})


