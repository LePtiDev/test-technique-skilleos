<template>
    <div class="container-pages">
        <h2>Episodes</h2>
        <EpisodeList :episodes="episodes.results"/>
    </div>
</template>

<script>

    const axios = require("axios");

    //components
    import EpisodeList from "@/components/Episodes/EpisodeList";

    export default {
        name: "Episodes",
        components: {EpisodeList},
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

<style scoped lang="scss">

</style>