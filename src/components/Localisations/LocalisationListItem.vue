<template>
    <router-link :to="{ name: 'Location', params: { id: location.id }}">
        <div class="card-episodes">
            <h3>{{location.name}}</h3>
            <div class="container-date-episode">
                <p>{{location.type}}</p>
                <p>{{location.dimension}}</p>
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
    name: "LocalisationListItem",
    props: {
        location: Object,
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