<template>
    <div class="">
        <h2>Personnages: {{$route.params.id}}</h2>
        <pre>{{character}}</pre>
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
            }
        }
    }
</script>

<style scoped>

</style>