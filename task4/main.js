let app=Vue.createApp({
    data(){
        return {
            totalPrice:[],
            label:"плиткой",
            posts:[],
            isActive: true,
            services:[
                {name:"Купить хлеб", price:50, },
                {name:"Купить колбасу", price:300,  },
                {name:"Купить молоко", price:60,  },
                {name:"Купить говядину", price:350,  },
                {name:"Купить курицу", price:200,  },
            ]
        }
        
    },
    methods:{
       swap(){
        this.isActive=!this.isActive
        if(this.label=="плиткой"){
            this.label="столбцом"
        }else{
            this.label="плиткой"
        }
       }
    }, 
    computed:{
        sumprice(){
            let a = this.totalPrice.reduce(function(sum, elem) {
                return sum + elem;
            }, 0);
            return a
           }
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

let card=app.mount("#main")