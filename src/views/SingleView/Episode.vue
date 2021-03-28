<template>
    <div class="container-pages">
        <div class="card-episode">
            <h2>Episode: {{episode.name}}</h2>
            <p>{{episode.air_date}}</p>
            <p>{{episode.episode}}</p>
        </div>
        <h2>Characters in this episode : </h2>
        <CharacterList :link="episode.characters"/>
    </div>
</template>

<script>
    import CharacterList from "@/components/characters/CharacterList";
    const axios = require("axios");

    export default {
        name: "Episode",
        components: {
            CharacterList
        },
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
                const { data } = await axios.get("https://rickandmortyapi.com/api/episode/" + this.$route.params.id)
                this.episode = data;
            },

            async getCharacterByEpisode(character) {
                const { data } = await axios.get(character);
                return data
            }
        }
    }
</script>

<style scoped lang="scss">
    .card-episode{
        width: 100%;
        border-radius: 10px;
        border: solid 1px grey;
        padding: 15px;
        display: flex;
        flex-direction: column;
        margin: 20px 0;
    }
</style>