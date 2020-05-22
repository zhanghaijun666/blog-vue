<template>
    <div>user-file</div>
</template>
<script>
    export default {
        mounted() {
            this.getFile()
        },
        methods: {
            getFile: function () {
                this.$axios.getBinary('/api/file', {cmd: "GET"})
                    .then(res => {
                        console.log(res)
                    })
            }
        }
    }
</script>
