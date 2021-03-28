<template>
    <router-link :to="{ name: 'Character', params: { id: showCharacter.id }}">
        <div class="card card-character" style="width: 18rem;">
            <span v-if="showCharacter.status === 'Alive'" class="badge pill-status rounded-pill bg-success">{{showCharacter.status}}</span>
            <span v-if="showCharacter.status === 'Dead'" class="badge pill-status rounded-pill  bg-danger">{{showCharacter.status}}</span>
            <span v-if="showCharacter.status === 'unknown'" class="badge pill-status rounded-pill  bg-secondary">{{showCharacter.status}}</span>

            <img :src="showCharacter.image" class="card-img-top" :alt="showCharacter.name">
            <div class="card-body">
                <h5 class="card-title">{{showCharacter.name}}</h5>
                <p class="card-text">{{showCharacter.gender}}</p>
                <p class="card-text">{{showCharacter.species}}</p>
                <router-link :to="{ name: 'Character', params: { id: showCharacter.id }}" class="btn btn-primary">See this character</router-link>
            </div>
        </div>
    </router-link>
</template>

<script>

    const axios = require("axios");

    export default {
        name: "CharacterListItem",
        props:{
            character: [Object, String]
        },
        data(){
            return {
                data: {}
            }
        },
        computed: {
             showCharacter() {
                if(typeof this.character === 'string'){
                    this.getCharacter(this.character)
                    return this.data
                }
                else{
                    console.log(this.data)
                    return this.character
                }
            }
        },
        methods: {
             getCharacter(url) {
                 axios.get(url)
                        .then(result => this.data = result.data)
                        .catch(error => console.error(error))
            }
        }
    }
</script>

<style scoped lang="scss">
    .card-character{
        position: relative;
        margin: 15px 30px;
    }
</style>