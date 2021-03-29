<template>
    <div class="container-card-episodes">
        <EpisodesListItem v-for="(episode, index) in getAllEpisodes()" :key="index" :episode="getAllEpisodes()[index]"/>
    </div>
</template>

<script>

// Components
import EpisodesListItem from "@/components/Episodes/EpisodesListItem";

export default {
    name: "EpisodeList",
    components: {
        EpisodesListItem
    },
    props: {
        episodes: Array,
        link: Array,
    },
    methods: {
        getAllEpisodes() {
            if(this.episodes){
                return this.episodes
            }
            else{
                return this.link
            }
        },
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