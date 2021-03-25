<template>
    <div class="">
        <h2>Localisation: {{$route.params.id}}</h2>
        <pre>{{location}}</pre>
    </div>
</template>

<script>

    const axios = require("axios");

    export default {
        name: "Location",
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

<style scoped>

</style>