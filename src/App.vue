<template>
    <div id="app">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>
<style>
    html, body, #app {
        height: 100%;
        width: 100%;
        padding: 0px;
        margin: 0px;
        font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    }

    li {
        list-style: none
    }

    a {
        text-decoration: none;
    }

    /*修改滚动条样式*/
    ::-webkit-scrollbar {
        width: 0.25rem;
        height: 0.25rem;
        background-image: linear-gradient(135deg, #1DE9B6 0%, rgba(8, 196, 219, 0.5) 72%, rgba(0, 182, 234, 0.3) 100%);
    }

    ::-webkit-scrollbar-track {
        border-radius: 0;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 0;
        background-image: linear-gradient(135deg, #1DE9B6 0%, #08c4db 72%, #057494 100%);
        transition: all .2s;
        border-radius: 0.25rem;
    }

    ::-webkit-scrollbar-thumb:hover {
        background-color: rgba(95, 95, 95, 0.7);
    }
</style>
