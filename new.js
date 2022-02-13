

document.addEventListener('DOMContentLoaded', () => {
    console.log('loaded');


    var slider_large = tns({
        container: '.slide_large',
        items: 1.4,
        autoplay: false,
        loop: false,
        mouseDrag: true,
        controlsText: ['', ''],
        responsive: {
          700: {
            items: 1.73
          }
        }
    });


    var slider_medium = tns({
        container: '.slide_medium',
        items: 1.4,
        autoplay: false,
        loop: false,
        mouseDrag: true,
        controlsText: ['', ''],
        responsive: {
          700: {
            items: 2.2
          }
        }
    });

    var slider_small = tns({
      container: '.slide_small',
      items: 1.4,
      autoplay: false,
      loop: false,
      mouseDrag: true,
      controlsText: ['', ''],
      responsive: {
        700: {
           items: 3
        }
      }
  });

  // const openContent = document.querySelector('#js-openContent')

  // if() {

  //   openContent.addEventListener('click', (e) => {
  //     e.preventDefault();
  //     document.querySelector('.page_copy').classList.toggle('open')
  //   })
  // }

})


