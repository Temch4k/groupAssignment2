const app = Vue.createApp({
    data() {
        return {
            keyword: '',
            result: null,
            start: 0,
            end: 20

        }
    },
    methods: {
        searchGoogleBooks() {
            fetch('https://www.googleapis.com/books/v1/volumes?&q=' + this.keyword + "&startIndex="+this.start+"&maxResults="+this.end)
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
            if(this.end+ 20 >= this.result.totalItems)
            {
                return false;
            }
            else{
                return true;
            }
        }
    }
})