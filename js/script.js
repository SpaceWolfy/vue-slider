new Vue({
  el: "#app",
  data: {
    imgIndex: 0,
    images: ["img1.jpg", "img2.jpg", "img3.jpg"],
  },

  methods: {
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
});
