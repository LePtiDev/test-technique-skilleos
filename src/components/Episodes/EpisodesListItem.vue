<template>
    <router-link :to="{ name: 'Episode', params: { id: episode.id }}">
        <div class="card-episodes">
            <h3>{{episode.name}}</h3>
            <div class="container-date-episode">
                <p>{{episode.air_date}}</p>
                <p>{{episode.episode}}</p>
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
    name: "EpisodesListItem",
    props: {
        episode: Object
    }
}
</script>

<style scoped lang="scss">

    .card-episodes{
        width: 450px;
        background-color: white;
        margin: 15px 30px;
        border-radius: 10px;
        padding: 10px;
        -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.26);
        -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.26);
        box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.26);

        .container-date-episode{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        &:hover{
            -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.26);
            -moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.26);
            box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.26);

        }
    }
</style>