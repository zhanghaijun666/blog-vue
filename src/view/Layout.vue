<template>
    <div class="blog-layout">
        <Header></Header>
        <div>
            <router-view/>
        </div>
    </div>
</template>
<script>
    import Header from "@/view/Header";

    export default {
        components: {Header}
    }
</script>
<style lang="less" scoped>
    .blog-layout {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 100%;

        > :first-child {
            width: 100%;
            height: 50px;
            flex-shrink: 0;
            overflow: hidden;
        }

        > :last-child {
            width: 100%;
            flex-grow: 1;
            flex-shrink: 1;
            overflow: auto;
        }
    }
</style>
