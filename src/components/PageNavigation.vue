<template>
    <nav aria-label="Page navigation example">
        <ul class="pagination">
            <li class="page-item" @click="previousPage" v-if="page > 1"><a class="page-link" href="#">Previous</a></li>
            <li class="page-item btn-success"><a class="page-link" href="#">{{page}}</a></li>
            <li class="page-item" @click="nextPage" v-if="page < info.pages"><a class="page-link" href="#">Next</a></li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: "PageNavigation",
        props: {
            page: Number,
            info: Object
        },
        methods: {
            nextPage(){
                this.$emit('next-page')
            },

            previousPage(){
                this.$emit('previous-page')
            }
        }
    }
</script>

<style scoped>

</style>