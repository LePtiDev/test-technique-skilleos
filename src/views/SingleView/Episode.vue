<template>
    <div class="container-pages">
        <h2>Episode: {{episode.name}}</h2>
        <p>{{episode.air_date}}</p>
        <p>{{episode.episode}}</p>
        <pre v-for="(character, index) in episode.characters" :key="index">{{getCharacterByEpisode(character)}}</pre>
    </div>
</template>

<script>
    const axios = require("axios");

    export default {
        name: "Episode",
        data(){
            return {
                episode: {},
            }
        },
        beforeMount() {
            this.getEpisode()
        },
        methods: {

            async getEpisode(){
                const { data } = await axios.get("https://rickandmortyapi.com/api/episode/" + this.$route.params.id);
                this.episode = data;
            },

            async getCharacterByEpisode(character) {
                const { data } = await axios.get(character);
                return data
            }
        }
    }
</script>

<style scoped>

</style>