<template>
  <section class="films">
      <ul>
          <h1>FILM</h1>
          <li class="film-list" v-for="FilmData in films" :key="FilmData.id">
                <img :src="GetUrl(FilmData.poster_path)" :alt="FilmData.title">
                {{FilmData.original_title}}
                {{FilmData.title}}
                <img class="flag-style" :src="getFlag(FilmData.original_language)"/>
                <span class="star" v-html="TotalVote(FilmData.vote_average)"></span>
          </li>
      </ul>
      <ul>
            <h1>SERIE TV</h1>
            <li v-for="SerieData in TvSeries" :key="SerieData.id">
                <img :src="GetUrl(SerieData.poster_path)" :alt="SerieData.title">
                {{SerieData.name}} 
                {{SerieData.original_name}} 
                <img class="flag-style" :src="getFlag(SerieData.original_language)"/>
                <span class="star" v-html="TotalVote(SerieData.vote_average)"></span>
            </li>
        </ul>
  </section>
</template>

<script>
import Library from './Library'
export default {
    name: 'FilmCard',
    props: {
        films: Array,
        TvSeries: Array,
    },
    data(){
        return{
            Library,
        };
    },
    methods:{
            GetUrl(url) {
            if (url === null) {
                return `https://via.placeholder.com/185x260`
            } 
                return `https://image.tmdb.org/t/p/w185/${url}`
            },
            TotalVote(vote) {
                let Vote = '';
                let NoVote = '';
                for (let i = 0; i < Math.ceil(vote / 2); i++) {
                    Vote += '<i class="fa-solid fa-star"></i>';
                }
                for (let i = 0; i < (5 - Math.ceil(vote / 2)); i++) {
                    NoVote += '<i class="fa-regular fa-star"></i>';
                }
                return `${Vote}${NoVote}`;
            },
            getFlag(lang) {
                if (lang === 'en') {
                    return this.Library.FlagData.ENG;
                } else if (lang === 'fr') {
                    return this.Library.FlagData.FR;
                } else if (lang === 'de') {
                    return this.Library.FlagData.DE;
                } else if (lang === 'it') {
                    return this.Library.FlagData.ITA;
                } else if (lang === 'es') {
                    return this.Library.FlagData.ES;
                } else {
                    return this.Library.FlagData.WORLD;
                }
                },
    }
}
</script>

<style>
 .star {
        color: yellow;
    }
 .flag-style{
     width: 50px;
     height: 40px;

}

</style>