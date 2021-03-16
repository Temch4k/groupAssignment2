const app = Vue.createApp({
    data() {
        return {
            keyword: '',
            result: null,
            start: 0,
            max: 20

        }
    },
    methods: {
        searchGoogleBooks() {
            fetch('https://www.googleapis.com/books/v1/volumes?&q=' + this.keyword + "&startIndex="+this.start+"&maxResults="+this.max)
                .then(response => response.json())
                .then(json => this.result = json)
        },
        checkIfTooFarLeft(){
            if(this.start == 0)
            {
                return false;
            }
            else{
                return true;
            }
        },
        checkIfTooFarRight()
        {
            if(this.start+ 40 >= this.result.totalItems)
            {
                return false;
            }
            else{
                return true;
            }
        },
        pageRight()
        {
            this.start=this.start +20;
            this.searchGoogleBooks();
        },
        pageLeft()
        {
            this.start=this.start -20;
            this.searchGoogleBooks();
        }
    }
})