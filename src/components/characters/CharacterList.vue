<template>
    <div class="container-card-characters">
        <CharacterListItem v-for="(character, index) in characters" :key="index" :character="character"/>
    </div>
</template>

<script>
    import CharacterListItem from "@/components/characters/CharacterListItem";
    export default {
        name: "CharacterList",
        components: {
            CharacterListItem
        },
        props: {
            characters: Object
        }
    }
</script>

<style scoped lang="scss">
    .container-card-characters{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-wrap: wrap;
    }
</style>