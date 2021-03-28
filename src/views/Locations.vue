<template>
    <div class="container-pages">
        <h2>Localisations</h2>
        <LocalisationList :locations="locations.results"/>
    </div>
</template>

<script>

    import LocalisationList from "@/components/Localisations/LocalisationList";
    const axios = require("axios");

    export default {
        name: "Locations",
        components: {LocalisationList},
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
                const { data } = await axios.get("https://rickandmortyapi.com/api/location/?page=" + this.page);
                this.locations = data;
            }
        }
    }
</script>

<style scoped>

</style>