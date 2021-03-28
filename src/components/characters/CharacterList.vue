<template>
    <div class="container-card-characters">
        <CharacterListItem v-for="(character, index) in getAllCharacters()" :key="index" :character="getAllCharacters()[index]"/>
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
            characters: Array,
            link: Array,
        },
        computed: {

        },
        methods: {

            getAllCharacters() {
                if(this.characters){
                    return this.characters
                }
                else{
                    return this.link
                }
            },
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