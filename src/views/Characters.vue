<template>
    <div class="container-pages">
        <h2>Characters</h2>
        <PageNavigation :page="page" :info="characters.info" @next-page="nextPage" @previous-page="previousPage"/>
        <CharacterList :key="page" :characters="characters.results"/>
    </div>
</template>

<script>

    import CharacterList from "@/components/characters/CharacterList";
    import PageNavigation from "@/components/PageNavigation";
    const axios = require("axios");

    export default {
        name: "Character",
        components: {PageNavigation, CharacterList},
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
            async getCharacters(){
                const { data } = await axios.get("https://rickandmortyapi.com/api/character/?page=" + this.page);
                this.characters = data;
            },

            nextPage(){
                this.page ++
                this.getCharacters()
            },

            previousPage(){
                this.page --
                this.getCharacters()
            }
        }
    }

</script>

<style scoped>

</style>