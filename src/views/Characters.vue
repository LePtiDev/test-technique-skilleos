<template>
    <div class="container-pages">
        <h2>Personnages</h2>
        <CharacterList :characters="characters.results"/>
    </div>
</template>

<script>

    import CharacterList from "@/components/characters/CharacterList";
    const axios = require("axios");

    export default {
        name: "Character",
        components: {CharacterList},
        data(){
            return {
                characters: {},
                page: 1
            }
        },
        mounted() {
            this.getCharacters()
        },
        methods: {
            async getCharacters(){
                const { data } = await axios.get("https://rickandmortyapi.com/api/character/?page=" + this.page);
                this.characters = data;
            }
        }
    }

</script>

<style scoped>

</style>