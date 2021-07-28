console.log("Vue test", Vue);

Vue.config.devtools = true;

const root = new Vue({
    el: "#root",
    data: {
        currentIndex: 0,
        images: [
            "./img/image1.jpg",
            "./img/image2.jpg",
            "./img/image3.jpg",
            "./img/image4.jpg"
        ],
    },
    methods: {
        isActive(index) {
            return this.currentIndex === index ? "active" : "";
        },

        backward() {
            this.currentIndex = this.currentIndex === 0 ? this.images.length - 1 : this.currentIndex - 1;
        },

        forward() {
            this.currentIndex = this.currentIndex === this.images.length - 1 ? 0 : this.currentIndex + 1;
        }

    }
});