<template>
    <div class="home container-pages">
    <h2>Welcome</h2>
    <p>
      This documentation will help you get familiar with the characters, location and episodes of the Rick and Morty.
    </p>
    <h2 class="mt-5">Characters</h2>
    <div class="container-show">
        <CharacterList :characters="characters"/>
        <router-link class="btn btn-primary" :to="{ name: 'Characters'}">View all</router-link>
    </div>
    </div>
</template>

<script>
    import CharacterList from "@/components/characters/CharacterList";
    const axios = require("axios");
    export default {
      name: 'Home',
        components: {
          CharacterList
        },
        data(){
            return {
                characters: [],
                page: 1
            }
        },
        beforeMount() {
            this.getCharacters()
        },
        methods: {
            async getCharacters() {
                const {data} = await axios.get("https://rickandmortyapi.com/api/character/[1,2,3,4]");
                this.characters = data;
            }
        }
    }
</script>

<style scoped lang="scss">
    .container-show{
        height: auto;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: start;
        a{
            margin-top: 20px;
            margin-left: 30px;
        }
    }
</style>
