<template>
    <header>
        <div class="container">
            <h1>BOOLFLIX</h1>
            <SearchBarSection/>
        </div>
    </header>
</template>

<script>
    import SearchBarSection from '../sections/SearchBarSection.vue'
    export default {
        name: 'BaseHeader',
        components: {
            SearchBarSection,
        }
    }
</script>

<style lang="scss" scoped>
.container{
    display: flex;
    justify-content: space-between;
    background-color: black;
 }
 h1{
    color: red;
 }
</style>