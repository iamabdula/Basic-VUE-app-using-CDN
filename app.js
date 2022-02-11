const app = Vue.createApp({
    data() {
        return {
            title: 'Associate Software Engineer - Full Stack Developer',
            company:"AirIT Labs",
            age:24,
            flag:"true",
            books:[
            { bookTitle:"ALice in the Wonderland", img:'assets/1.jpg', author:"Ali", isFav:"true"},
            { bookTitle:"Book 2", img:'assets/2.jpg',author:"Ahmad", isFav:"true"},
            { bookTitle:"bOOK 3", img:'assets/3.jpg',author:"Usman", isFav:"false"},
            { bookTitle:"Book 4", img:'assets/4.jpg',author:"Zaki", isFav:"false"},
            { bookTitle:"Book 5", img:'assets/5.jpg',author:"Ali",isFav:"true"},

        ]
        }
    },
    methods: {
        changeTitle(title){
            this.title=title;
        },
        showBio()
        {
            this.flag=!this.flag;
        } ,
        setFavourite(book){
            book.isFav=!book.isFav;
        } 

    },
    computed:{
          filteredBooks(){
              return this.books.filter((book)=>book.isFav)
          }
    }
    // template: "<h2>{{message}}</h2>"
})
app.mount("#app")