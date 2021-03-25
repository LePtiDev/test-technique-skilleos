<template>
    <div class="">
        <h2>Episode: {{$route.params.id}}</h2>
        <pre>
            {{episode}}
        </pre>
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
        mounted() {
            this.getEpisode()
        },
        methods: {
            async getEpisode(){
                const { data } = await axios.get("https://rickandmortyapi.com/api/episode/" + this.$route.params.id);
                this.episode = data;
            }
        }
    }
</script>

<style scoped>

</style>