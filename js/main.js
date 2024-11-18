const baseUri = "http://localhost:5180/api/Cars"

// STEPS
//OK 1 Tilføj variabler til data i js - 
//OK 2 Tilføj input felter som twoway pinder til variaber - 
//OK 3 Test at twoway binding virker med {{}} - commit
//OK 4 Tilføj knap og click event 
//OK 5 Test knap - commit
//OK 6 Tilføj axios post kald
//OK  7 test at .then virker - commit
//OK  8 test at .catch virker - commit 
//OK  9 Tilføj statuskode vises i html 
// FIN


const app = Vue.createApp({
    data() {
        return {
            intro: 'Welcome to my Axios post demo',
            carVendor:"",
            carModel:"",
            carPrice:0,
            statuskode:"",
        }
    },
    methods: {
        gemBil(){
            console.log("er i gem bil metoden")

            axios.post(baseUri,
                {"vendor":this.carVendor,"model":this.carModel,"price":this.carPrice}
            )
            .then(response => {
                console.log("kald gik godt i gembil")
                console.log(response)
                this.statuskode= response.status
            })
            .catch(error => {
                console.log("kald fejlede i gembil")
                console.log(error)
            })

        },
    },
    computed: {
        myComputed() {
            return ''
        },
        
    }
})
