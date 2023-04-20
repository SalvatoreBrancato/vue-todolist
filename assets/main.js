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
    }, methods:{
        remove(i){
            this.list.splice(i, 1)
            console.log(`funziona`)
        }
    }
}).mount(`#app`)