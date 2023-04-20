const {createApp} = Vue 
createApp({
    data(){
        return{
            list: [
                {
                    text: `Frutta`,
                    done: true
                },
                {
                    text: `Verdura`,
                    done: false
                },
                {
                    text: `Pesce`,
                    done: true
                }
            ]
        }
    }
    // ,methods:{

    // }
}).mount(`#app`)