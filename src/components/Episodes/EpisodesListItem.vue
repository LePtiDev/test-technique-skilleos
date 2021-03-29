<template>
    <router-link :to="{ name: 'Episode', params: { id: showEpisode.id }}">
        <div class="card-episodes">
            <h3>{{showEpisode.name}}</h3>
            <div class="container-date-episode">
                <p>{{showEpisode.air_date}}</p>
                <p>{{showEpisode.episode}}</p>
            </div>
        </div>
    </router-link>
</template>

<script>

    const axios = require("axios");

    export default {
        name: "EpisodesListItem",
        props: {
            episode: [Object, String]
        },
        data(){
            return {
                data: {}
            }
        },
        computed: {
            showEpisode() {
                if(typeof this.episode === 'string'){
                    this.getEpisode(this.episode)
                    return this.data
                }
                else{
                    return this.episode
                }
            }
        },
        methods: {
            getEpisode(url) {
                axios.get(url)
                    .then(result => this.data = result.data)
                    .catch(error => console.error(error))
            }
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