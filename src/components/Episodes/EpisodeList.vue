<template>
    <div class="container-card-episodes">
        <EpisodesListItem v-for="(episode, index) in episodes" :key="index" :episode="episode"/>
    </div>
</template>

<script>

// Components
import EpisodesListItem from "@/components/Episodes/EpisodesListItem";

export default {
    name: "EpisodeList",
    components: {EpisodesListItem},
    props: {
        episodes: Array,
    }
}
</script>

<style scoped lang="scss">
    .container-card-episodes{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-wrap: wrap;
    }
</style>