const {createApp} = Vue 
createApp({
    data(){
        return{
            list: [
                {
                    text: `Fare la spesa`,
                    done: true
                },
                {
                    text: `Fare carosello`,
                    done: false
                },
                {
                    text: `Andare in plaestra`,
                    done: true
                }
            ]
        }
    }, methods:{
        remove(i){
            this.list.splice(i, 1)
            console.log(`funziona`)
        },

        creaElemento(){
            if( this.textInput != ''){
                this.list.push({
                text: this.textInput,
                done: true
            })
                this.textInput = ''
                
            }
                
            
        }
    }
}).mount(`#app`)

