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
        -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.40);
        -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.40);
        box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.40);

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