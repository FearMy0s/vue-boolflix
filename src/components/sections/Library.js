import Vue from 'vue';

export default Vue.observable({
    films: [],
    TvSeries: [],
    FlagData: {
        ENG: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/640px-Flag_of_the_United_Kingdom.svg.png',
        ES: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/1200px-Bandera_de_Espa%C3%B1a.svg.png',
        FR: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png',
        DE: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png',
        ITA: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/255px-Flag_of_Italy.svg.png',
        WORLD:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/International_Flag_of_Planet_Earth.svg/800px-International_Flag_of_Planet_Earth.svg.png',
      },
});