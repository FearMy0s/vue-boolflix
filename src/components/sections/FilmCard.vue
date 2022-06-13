<template>
  <section class="films">
    <div class="container">
                <h1>FILM</h1>
            <div class="product-container">
                <div class="card"  v-for="FilmData in films" :key="FilmData.id">
                        <img :src="GetUrl(FilmData.poster_path)" :alt="FilmData.title">
                        <div class="infos">
                            <h3>Titolo Originale : {{FilmData.original_title}}</h3>
                            <h3>Titolo : {{FilmData.title}}</h3>
                            <span>{{FilmData.overview}}</span><br>
                            <img class="flag-style" :src="getFlag(FilmData.original_language)"/><br>
                            <span class="star" v-html="TotalVote(FilmData.vote_average)"></span>
                        </div>
                </div>
            </div>
                <h1>SERIE TV</h1>
            <div class="product-container">
                    <div class="card" v-for="SerieData in TvSeries" :key="SerieData.id">
                        <img :src="GetUrl(SerieData.poster_path)" :alt="SerieData.title">
                        <div class="infos">
                                <h3>Nome Originale:{{SerieData.name}} </h3>
                                <h3>Nome: {{SerieData.original_name}}</h3>
                                <span>{{SerieData.overview}}</span><br>
                                <img class="flag-style" :src="getFlag(SerieData.original_language)"/><br>
                                <span class="star" v-html="TotalVote(SerieData.vote_average)"></span>
                            </div>      
                        </div>
                    </div>
    </div>
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
<style lang="scss" scoped>
.card{
position: relative;
width: 300px;
flex-shrink: 0;
}
 .star {
        color: yellow;
    }
 .flag-style{
     width: 50px;
     height: 40px;
    }
 img{
    width: 100%;
    height: 100%;
    border: 1px solid black;
    }
    .infos{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    color: white;
    overflow-y:auto ;
}
.card:hover + .infos{
 display: block;

}

</style>