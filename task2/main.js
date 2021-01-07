let app = Vue.createApp({
    
   data: function() {
       return {
         visible: false,
         text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ducimus, fuga veritatis sit porro eos, rerum quas iusto, dolores accusamus delectus soluta? Iure, tempora animi adipisci voluptatibus ut sequi facilis.',
         nav: {
            nav_news: 'News',
            nav_about: 'About Us',
            nav_contacts: 'Contacts',
         },
         show: {
            show_news: 'Sorry, We have not news today :(',
            show_about: 'We are a new company since 2020',
            show_contacts: '8-800-555-35-35'
         },
         newspage: true,
         aboutpage: false,
         contactspage: false,
       }
    },
    methods: {
        news() {
            this.newspage = true,
            this.aboutpage = false,
            this.contactspage = false
        },
        about() {
            this.newspage = false,
            this.aboutpage = true,
            this.contactspage = false
        },
        contacts() {
            this.newspage = false,
            this.aboutpage = false,
            this.contactspage = true
        }
    }
});
 
 let vm = app.mount("#app");