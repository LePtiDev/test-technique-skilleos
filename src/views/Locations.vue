<template>
    <div class="">
        <h2>Localisations</h2>
        <pre>{{locations}}</pre>
    </div>
</template>

<script>

    const axios = require("axios");

    export default {
        name: "Locations",
        data(){
            return {
                locations: {},
                page: 1
            }
        },
        mounted() {
            this.getLocations()
        },
        methods: {
            async getLocations(){
                const { data } = await axios.get("https://rickandmortyapi.com/api/episode/?page=" + this.page);
                this.locations = data;
            }
        }
    }
</script>

<style scoped>

</style>