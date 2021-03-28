<template>
    <div class="container-pages">
        <div class="card-location">
            <h3>{{location.name}}</h3>
            <p><span class="section">Date </span><span class="badge rounded-pill bg-primary">{{location.air_date}}</span></p>
            <p><span class="section">Gender </span><span class="badge rounded-pill bg-primary">{{location.episode}}</span></p>
        </div>
        <CharacterList :link="location.characters"/>
    </div>
</template>

<script>

    import CharacterList from "@/components/characters/CharacterList";
    const axios = require("axios");

    export default {
        name: "Location",
        components: {CharacterList},
        data(){
            return {
                location: {}
            }
        },
        mounted() {
            this.getLocation()
        },
        methods: {
            async getLocation(){
                const { data } = await axios.get("https://rickandmortyapi.com/api/episode/" + this.$route.params.id);
                this.location = data;
            }
        }
    }
</script>

<style scoped lang="scss">
    .card-location{
        width: 100%;
        border-radius: 10px;
        border: solid 1px grey;
        padding: 15px;
        display: flex;
        position: relative;
        flex-direction: column;
        margin: 20px 0;
    }

    .container-location-text{
        width: auto;
        margin-left: 20px;

        h3{
            font-size: 30px;
        }

        p{
            .section{
                color: gray;
                margin-right: 10px;
            }
        }
    }
</style>