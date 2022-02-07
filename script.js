

document.addEventListener('DOMContentLoaded', () => {
    console.log('loaded');


    var slider = tns({
        container: '.slide_large',
        items: 1.2,
        gutter: 32,
        autoplay: false,
        loop: false,
        responsive: {
            1000: {
              items: 2.2
            }
          }
    });


    var slider = tns({
        container: '.slide_medium',
        items: 1.2,
        gutter: 32,
        autoplay: false,
        loop: false,
        responsive: {
            1000: {
              items: 3.2
            }
          }
    });

    

})


