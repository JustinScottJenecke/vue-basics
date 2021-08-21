const app = Vue.createApp({
    ///template: '<h1>Hello {{name}} World</h1>',
    data() {
        return {
            greeting: 'Hello World',
            display: true,
            name: 'RX7',
            brand: 'Mazda',
            model: 'FD3S',
            price: '200'
        }
    },
    methods: {
        changeCar(name, model, brand, price) {
            
            this.name = name
            this.model = model
            this.brand = brand
            this.price = price
        },
        toggleShowCar() {

            this.display = !this.display
        }
    }
})

app.mount('#app')