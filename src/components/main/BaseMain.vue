<template>
    <main>
        <div class="container">     
            <FilmCard :films="Library.films" :TvSeries="Library.TvSeries"/>
        </div>
    </main>
</template>

<script>
import FilmCard from "../sections/FilmCard.vue"
import Library from "../sections/Library"
export default {
    name: 'BaseMain',
    data(){
        return{
            Library,
        }
    },
    components: {
        FilmCard,
                }

}
</script>

<style lang="scss" scoped>

</style>