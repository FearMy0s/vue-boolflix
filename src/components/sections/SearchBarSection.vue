<template>
  <div class="SearchBar">
        <form @submit.prevent="TakeDataFrom()">
        <input type="text" placeholder="Cerca Film" v-model="search">
        <button type="submit">Search</button>

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
                    console.log(this.films)
                }).catch((error) => {
                    console.log(error);
                })
        }
    }
}
</script>

<style>

</style>