<template>
    <router-link :to="{ name: 'Character', params: { id: character.id }}">
        <div class="card card-character" style="width: 18rem;">

            <span v-if="character.status === 'Alive'" class="badge pill-status rounded-pill bg-success">{{character.status}}</span>
            <span v-if="character.status === 'Dead'" class="badge pill-status rounded-pill  bg-danger">{{character.status}}</span>
            <span v-if="character.status === 'unknown'" class="badge pill-status rounded-pill  bg-secondary">{{character.status}}</span>

            <img :src="character.image" class="card-img-top" :alt="character.name">
            <div class="card-body">
                <h5 class="card-title">{{character.name}}</h5>
                <p class="card-text">{{character.gender}}</p>
                <p class="card-text">{{character.species}}</p>
                <router-link :to="{ name: 'Character', params: { id: character.id }}" class="btn btn-primary">See this character</router-link>
            </div>
        </div>
    </router-link>
</template>

<script>

    export default {
        name: "CharacterListItem",
        props:{
            character: Object
        }
    }
</script>

<style scoped lang="scss">
    .card-character{
        position: relative;
        margin: 15px 30px;

        .pill-status{
            top: 10px;
            right: 10px;
            font-size: 15px;
            position: absolute;
        }
    }
</style>