const app = Vue.createApp({
    ///template: '<h1>Hello {{name}} World</h1>',
    data() {
        return {
    
            display: true,
            url:'gallery.html',
            carList: [
                {brand:'Mazda', name:'RX-7', model:'FD3S', cost:270, img:'assets/1.jpg', isFav:true},
                {brand:'Nissan', name:'Skyline', model:'R32', cost:220, img:'assets/2.jpg', isFav:false},
                {brand:'Toyota', name:'MR2', model:'AW11', cost:105, img:'assets/3.jpg', isFav:false}
            ]
        }
    },
    methods: {
        changeCar() {

        },
        toggleShowCar() {

            this.display = !this.display
        },
        toggleFav(x) {
            x.isFav = !x.isFav
        }
    }
})

app.mount('#app')