new Vue({
  el: "#app",
  data: {
    imgIndex: 0,
    images: ["img1.jpg", "img2.jpg", "img3.jpg"],
  },

  methods: {
    prevImg: function () {
      if (this.imgIndex <= 0) {
        this.imgIndex = this.images.length - 1;
      } else {
        this.imgIndex--;
      }
    },
    nextImg: function () {
      if (this.imgIndex >= this.images.length - 1) {
        this.imgIndex = 0;
      } else {
        this.imgIndex++;
      }
    },
  },
});
