const baseUri = "http://localhost:5180/api/Cars"

// STEPS
// 1 Tilføj variabler til data i js - 
// 2 Tilføj input felter som twoway pinder til variaber - 
// 3 Test at twoway binding virker med {{}} - commit
// 4 Tilføj knap og click event 
// 5 Test knap - commit
// 6 Tilføj axios post kald
// 7 test at .then virker - commit
// 8 test at .catch virker - commit 
// 9 Tilføj statuskode vises i html 
// FIN


const app = Vue.createApp({
    data() {
        return {
            intro: 'Welcome to my Vue template',
        }
    },
    methods: {
        myMethod(){

        },
    },
    computed: {
        myComputed() {
            return ''
        },
        
    }
})
