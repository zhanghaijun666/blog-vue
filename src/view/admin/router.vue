<template>
    <div class="admin-layout">
        <div>
            <div>
                <el-menu :default-active="$route.path" :collapse="isCollapse" router>
                    <sidebar-item v-for="(route,index) in routes" :key="index" :item="route"
                                  :basePath="basePath"></sidebar-item>
                </el-menu>
            </div>
            <div @click="switchLeftNav">
                <i :class="isCollapse?'fa fa-angle-double-right':'fa fa-angle-double-left'"></i>
            </div>
        </div>
        <div>
            <router-view :key="$route.path"/>
        </div>
    </div>
</template>
<script>
    import SidebarItem from './SidebarItem';

    export default {
        components: {SidebarItem},

        data() {
            return {
                isCollapse: false,
                basePath: "/admin",
                routes: this.$router.getChildren("/admin")
            }
        },
        methods: {
            switchLeftNav: function () {
                this.isCollapse = !this.isCollapse;
            }
        }
    };
</script>
<style lang="less" scoped>
    .admin-layout {
        height: 100%;
        width: 100%;
        display: flex;
        display: -webkit-flex;
        flex-direction: row;
        overflow: hidden;

        > :first-child {
            height: 100%;
            max-width: 220px;
            min-width: 60px;
            border-right: 1px solid #333333;
            overflow: hidden;
            flex-shrink: 0;
            display: flex;
            flex-direction: column;
            background-color: rgb(46, 62, 82);
            color: rgb(191, 203, 217);

            > div:not(:last-child) {
                width: 100%;
                flex-grow: 1;
                overflow: auto;

                .el-menu {
                    background-color: inherit;
                    color: inherit;
                    height: 100%;
                    border: 0px;
                }
            }

            > :last-child {
                width: 100%;
                height: 30px;
                line-height: 30px;
                text-align: center;
                border-top: 1px solid #B3C0D1;
            }
        }
    }

    .admin-layout > div:last-child {
        height: 100%;
        flex-grow: 1;
        flex-shrink: 1;
        overflow: auto;
    }
</style>
