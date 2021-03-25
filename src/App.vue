<template>
    <div class="app">
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

    body{
        margin: 0;
        padding: 0;
    }

    .app{
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

</style>
