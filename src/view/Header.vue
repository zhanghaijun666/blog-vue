<template>
    <div class="layout-header">
        <div>
            <span>个人知识库</span>
        </div>
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
                    <el-avatar shape="square" :size="32" :src="circleUrl"></el-avatar>
                    <span>张晨瑾</span>
                </template>
                <el-menu-item>个人信息</el-menu-item>
                <el-menu-item @click="switchLang">切换语言</el-menu-item>
                <el-menu-item>退出登录</el-menu-item>
            </el-submenu>
            <el-menu-item v-for="(item,index) in routerArray.routes" :key="index" :index="'/'+item.path">
                <i :class="item.icon"></i>
                <span slot="title">{{$t('router.'+item.name)}}</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                circleUrl: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
            }
        },
        computed: {
            routerArray: function () {
                return this.$router.getBlogHeaderRouter();
            },
            activeRouter: function () {
                return this.$route.path.substr(0, this.$route.path.indexOf("/", 1))
            }
        },
        methods: {
            switchLang() {
                switch (this.$i18n.locale) {
                    case "zh":
                        localStorage.setItem('blog_lang', "en");
                        this.$i18n.locale = "en";
                        break;
                    case "en":
                    default:
                        localStorage.setItem('blog_lang', "zh");
                        this.$i18n.locale = "zh";
                }
            }
        }
    }
</script>
<style lang="less" scoped>
    .layout-header {
        display: flex;
        flex-direction: row;
        height: 50px;
        width: 100%;
        background-color: #545c64;
        color: #fff;

        > :first-child {
            width: 300px;
            flex-grow: 0;
            flex-shrink: 0;
            height: 100%;
            line-height: 55px;
            text-align: right;
            font-size: 22px;
        }

        > .el-menu-header {
            flex-grow: 1;
            flex-shrink: 1;
            height: 100%;
            overflow: hidden;

            &.el-menu--horizontal {
                border: 0px;
            }

            > .el-menu-item, > .el-submenu {
                height: 50px;
                line-height: 60px;
                float: right;
            }

            .el-avatar {
                margin: 0px 10px 6px 6px;
            }
        }
    }

</style>
