<template>
    <div class="container-card-location">
        <LocalisationListItem v-for="(location, index) in locations" :key="index" :location="location"/>
    </div>
</template>

<script>
    import LocalisationListItem from "@/components/Localisations/LocalisationListItem";
    export default {
        name: "localisationList",
        components: {
            LocalisationListItem
        },
        props: {
            locations: Array,
        }
    }
</script>

<style scoped lang="scss">
    .container-card-location{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-wrap: wrap;
    }
</style>