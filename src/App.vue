<template>
    <div>
        <TheHeader/>
        <router-view/>
    </div>
</template>

<script>

    import TheHeader from "@/components/TheHeader";
    export default {
        name: "App",
        components: {
            TheHeader
        }
    }

</script>

<style lang="scss">

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    #app{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background-color: yellow;
    }

</style>
