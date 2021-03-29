<template>
    <div class="container-pages">
        <h2>Episodes</h2>
        <PageNavigation :info="episodes.info" :page="page" @next-page="nextPage" @previous-page="previousPage" />
        <EpisodeList :episodes="episodes.results"/>
    </div>
</template>

<script>

    import PageNavigation from "@/components/PageNavigation";
    const axios = require("axios");

    //components
    import EpisodeList from "@/components/Episodes/EpisodeList";

    export default {
        name: "Episodes",
        components: {PageNavigation, EpisodeList},
        data(){
            return {
                episodes: {},
                page: 1
            }
        },
        beforeMount() {
            this.getEpisodes()
        },
        methods: {
            async getEpisodes(){
                const { data } = await axios.get("https://rickandmortyapi.com/api/episode/?page=" + this.page);
                this.episodes = data;
            },

            nextPage(){
                this.page ++
                this.getEpisodes()
            },

            previousPage(){
                this.page --
                this.getEpisodes()
            }
        }
    }
</script>

<style scoped lang="scss">

</style>