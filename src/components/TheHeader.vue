<template>
    <header>
        <img class="logo" src="../assets/images/logo.png" alt="logo rick et morty">
        <div class="container-link">
            <router-link class="link" :to="{ name: 'Home'}">Home</router-link>
            <router-link class="link" :to="{ name: 'Episodes'}">Episodes</router-link>
            <router-link class="link" :to="{ name: 'Locations'}">Locations</router-link>
            <router-link class="link" :to="{ name: 'Characters'}">Characters</router-link>
        </div>
    </header>
</template>

<script>
    export default {
        name: "TheHeader"
    }
</script>

<style scoped lang="scss">
    header{
        height: 100px;
        width: 100%;
        background-color: $secondary-color;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 100px 0 100px;

        .logo{
            width: 200px;
            margin-left: 50px;
        }

        .container-link{
            margin-right: 50px;

            .link{
                margin-left: 40px;
                color: white;
                font-size: 18px;
                text-decoration: none;
            }
        }
    }
</style>