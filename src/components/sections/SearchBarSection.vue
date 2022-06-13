<template>
  <div class="SearchBar">
        <form @submit.prevent="TakeDataFrom()">
        <input type="text" placeholder="Cerca Film" v-model="search">
        <button type="submit">Search</button>
        </form>
  </div>
</template>

<script>
    import axios from 'axios';
    import Library from "./Library";
export default {
    name: 'SearchBarSection',
    data(){
        return{
            search:'',
            Library
        }
    },
    methods:{
        TakeDataFrom(){
            axios.get('https://api.themoviedb.org/3/search/movie',
            {
            params: {
                api_key: 'cb12a5b91cb22bdfb90b30c3acf56f50',
                query: this.search,
                language: 'it-IT'
            }
            }
            ).then((response) => {
                    Library.films = response.data.results;
                }).catch((error) => {
                    console.log(error);
                })
                
            axios.get('https://api.themoviedb.org/3/search/tv',
            {
            params: {
                api_key: 'cb12a5b91cb22bdfb90b30c3acf56f50',
                query: this.search,
                language: 'it-IT'
            }
            }
            ).then((response) => {
                    Library.TvSeries = response.data.results;
                }).catch((error) => {
                    console.log(error);
                })
        }
        },
        
    }
</script>

<style lang="scss" scoped>
.SearchBar{
    margin-top: 10px;
}
input{
    border: none;
    height: 20px;
}
button{
    margin-left: 5px;
    border-radius: 0;
}

</style>