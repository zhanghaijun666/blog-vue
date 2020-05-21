<template>
    <el-menu
            class="el-menu-header"
            :default-active="activeRouter"
            mode="horizontal"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            router>
        <el-submenu index="">
            <template slot="title">
                <el-avatar shape="square" :size="32" :src="squareUrl"></el-avatar>
                <span>张晨瑾</span>
            </template>
            <el-menu-item>个人信息</el-menu-item>
            <el-menu-item>退出登录</el-menu-item>
        </el-submenu>
        <el-menu-item v-for="(item,index) in routerArray.routes" :key="index" :index="'/'+item.path">
            <i :class="item.icon"></i>
            <span slot="title">{{item.name}}</span>
        </el-menu-item>
    </el-menu>
</template>
<script>
    export default {
        data() {
            return {
                squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
            }
        },
        computed: {
            routerArray: function () {
                return this.$router.getBlogHeaderRouter();
            },
            activeRouter: function () {
                return this.$route.path.substr(0, this.$route.path.indexOf("/", 1))
            }
        }
    }
</script>
<style lang="less" scoped>
    .el-menu-header {
        &.el-menu--horizontal {
            border: 0px;
        }

        height: 50px;
        overflow: hidden;

        > .el-menu-item, > .el-submenu {
            height: 50px;
            line-height: 60px;
            float: right;
        }

        .el-avatar {
            margin: 0px 10px 6px 6px;
        }

        .el-menu--popup-bottom-start {
            margin-top: 2px !important;
        }
    }
</style>
