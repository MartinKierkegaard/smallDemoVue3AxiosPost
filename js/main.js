const baseUri = "http://localhost:5180/api/Cars"

const app = Vue.createApp({
    data() {
        return {
            intro: 'Welcome to my axios post example',
            carId:0,
            carVendor:"",
            carModel:"",
            carPrice:"",
            statusCode:"",
            statusText:"",

        }
    },
    methods: {
        gemBil(){
            console.log("Er i gem bil funktion")
            axios.post(baseUri,
                {"id":this.carId,"vendor":this.carVendor,"model":this.carModel,"price":this.carPrice}
            )
            .then(response => {
                console.log("er i then i gemBil")
                this.statusCode=response.status
                console.log(response)
            })
            .catch(error => {
                console.log("er i Catch i gemBil funktion")
                console.log(error)
                this.statusCode=error.response.status
                // console.log(error.response.status)
            })

        },
    },
    computed: {
        myComputed() {
            return ''
        },
        
    }
})
