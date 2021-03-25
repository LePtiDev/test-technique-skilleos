<template>
    <div class="">
        <h2>Episodes</h2>
        <pre>{{episodes}}</pre>
    </div>
</template>

<script>

    const axios = require("axios");

    export default {
        name: "Episodes",
        data(){
            return {
                episodes: {},
                page: 1
            }
        },
        mounted() {
            this.getEpisodes()
        },
        methods: {
            async getEpisodes(){
                const { data } = await axios.get("https://rickandmortyapi.com/api/episode/?page=" + this.page);
                this.episodes = data;
            }
        }
    }
</script>

<style scoped>

</style>