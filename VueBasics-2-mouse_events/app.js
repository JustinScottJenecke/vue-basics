const app = Vue.createApp({
    ///template: '<h1>Hello {{name}} World</h1>',
    data() {
        return {
            display: true,
            name: 'RX7',
            brand: 'Mazda',
            model: 'FD3S',
            price: '200',

            x_move: 0,
            y_move: 0
        }
    },
    methods: {
        changeModel(model) {
            
            this.model = model
        },
        toggleShowCar() {

            this.display = !this.display
        },
        eventHandler(e, x){
            if(x)
                console.log(x)

            console.log(e, e.type)
        },
        mouseMoveHandler(e){
            this.x_move = e.offsetX
            this.y_move = e.offsetY
        }
    }
})

app.mount('#app')