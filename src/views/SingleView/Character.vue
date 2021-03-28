<template>
    <div class="container-pages">
        <div class="card-character">
            <img :src="character.image" alt="">
            <div class="container-character-text">
                <h3>{{character.name}}</h3>
                <p><span class="section">Species </span><span class="badge rounded-pill bg-primary">{{character.species}}</span></p>
                <p><span class="section">Gender </span><span class="badge rounded-pill bg-primary">{{character.gender}}</span></p>
                <p v-if="character.type"><span class="section">Type </span><span class="badge rounded-pill bg-primary">{{character.type}}</span></p>
                <p>
                    <router-link :to="{ name: 'Location', params: { id: extractId(character.origin.url) }}">
                        <span class="section">Origin </span>
                        <span class="badge rounded-pill bg-primary">{{character.origin.name}}</span>
                    </router-link>
                </p>
                <p>
                    <router-link :to="{ name: 'Location', params: { id: extractId(character.location.url) }}">
                        <span class="section">Location </span>
                        <span class="badge rounded-pill bg-primary">{{character.location.name}}</span>
                    </router-link>
                </p>

                <span v-if="character.status === 'Alive'" class="badge pill-status rounded-pill bg-success">{{character.status}}</span>
                <span v-if="character.status === 'Dead'" class="badge pill-status rounded-pill  bg-danger">{{character.status}}</span>
                <span v-if="character.status === 'unknown'" class="badge pill-status rounded-pill  bg-secondary">{{character.status}}</span>
            </div>
        </div>

        <h2>Episodes</h2>
        <pre>{{character.episode}}</pre>
    </div>
</template>

<script>

    const axios = require("axios");

    export default {
        name: "Character",
        data(){
            return {
                character: {},
            }
        },
        mounted() {
            this.getCharacter()
        },
        methods: {
            async getCharacter(){
                const { data } = await axios.get("https://rickandmortyapi.com/api/character/" + this.$route.params.id);
                this.character = data;
            },

            extractId(str){
                let id = Number(str.replace(/[^\d]/g, ""))
                if(id === 0){
                    return ""
                }
                return id
            }
        }
    }
</script>

<style scoped lang="scss">

    .card-character{
        width: 100%;
        border-radius: 10px;
        border: solid 1px grey;
        padding: 15px;
        display: flex;
        position: relative;
        margin: 20px 0;
    }

    .container-character-text{
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