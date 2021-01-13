let app=Vue.createApp({
    data(){
        return {
        defaultText: "Это текст, который можно изменить",
        display:true,
        titleSearch:"",
        posts:[],
        } 
    },
    methods:{
        swap(event){
            this.display=!this.display
            console.log(event.path[0])
            console.log(event)
        },
    },
    mounted(){ 
        fetch('https://jsonplaceholder.typicode.com/posts')
			.then((response)=>{
				return response.json(); 
            })
            .then((data)=>{
				this.posts = data;
			})
    },
});

let card = app.mount("#main")