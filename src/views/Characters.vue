<template>
    <div class="">
        <h2>Personnages</h2>
        <pre>{{characters}}</pre>
    </div>
</template>

<script>

    const axios = require("axios");

    export default {
        name: "Character",
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