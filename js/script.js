new Vue({
  el: "#app",
  data: {
    //imgIndex serve ad indicare l'elemento che dobbiamo mostrare prendendolo da dentro il data
    imgIndex: 0,
    images: ["img1.jpg", "img2.jpg", "img3.jpg"],
    timer: null,
  },

  methods: {
    /* creare timing function */
    sliderAutoPlay: function () {
      this.timer = setInterval(() => {
        this.nextImg();
      }, 3000);
    },
    /* se imgIndex è <= 0 allora imgIndex sarà uguale alla lunghezza dell'array di immagini - 1; altrimenti continuerà ad essere decrementata di uno
  per ogni click del pulsante a cui è associata tale funzione */
    prevImg: function () {
      if (this.imgIndex <= 0) {
        this.imgIndex = this.images.length - 1;
      } else {
        this.imgIndex--;
      }
    },
    nextImg: function () {
      //funziona in modo analogo alla superiore
      if (this.imgIndex >= this.images.length - 1) {
        this.imgIndex = 0;
      } else {
        this.imgIndex++;
      }
    },
  },
  //fa funzionare l'autoplay soltanto quando tutto l'html è stato stampato in pagina
  // il mounted e il created vengono richiamati da Vue.js stesso e sa lui quando chiamarli, per questo si mettono fuori dal methods
  mounted: function () {
    this.sliderAutoPlay();
  },
  //mousehover to do
});
