<template>
  <section class="Films">
      <ul>
          <li class="film-list" v-for="film in films" :key="film.id">
              {{film.name}}
              {{film.vote_average}}
              {{film.original_title}}
              {{film.original_language}} 
          </li>
      </ul>
  </section>
</template>

<script>
import Library from './Library'
export default {
    name: 'FilmCard',
    data(){
    return{
        Library,
    }
    }
}
</script>

<style>

</style>