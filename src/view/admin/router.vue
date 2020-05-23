<template>
    <div class="admin-layout">
        <div>
            <div>
                <el-menu :default-active="$route.path"
                         :collapse="isCollapse"
                         background-color="#324157"
                         text-color="#bfcbd9"
                         active-text-color="#20a0ff"
                         router>
                    <sidebar-item v-for="(route,index) in routes"
                                  :key="index"
                                  :item="route"
                                  :basePath="basePath">
                    </sidebar-item>
                </el-menu>
            </div>
            <div @click="switchLeftNav">
                <i :class="isCollapse?'fa fa-angle-double-right':'fa fa-angle-double-left'"></i>
            </div>
        </div>
        <div>
            <tags></tags>
            <div>
                <keep-alive>
                    <router-view ></router-view>
                </keep-alive>
            </div>
        </div>
    </div>
</template>
<script>
    import SidebarItem from './layout/SidebarItem';
    import Tags from "@/view/admin/layout/Tags";

    export default {
        components: {SidebarItem, Tags},

        data() {
            return {
                isCollapse: false,
                basePath: "/admin",
                routes: this.$router.getChildren("/admin"),
            }
        },
        computed: {
            options() {
                return this.$store.state.options;
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
            overflow: hidden;
            flex-shrink: 0;
            display: flex;
            flex-direction: column;

            > div:not(:last-child) {
                width: 100%;
                flex-grow: 1;
                overflow: auto;

                .el-menu {
                    background-color: inherit;
                    color: inherit;
                    height: 100%;
                    border: 0px;

                    &:not(.el-menu--collapse) {
                        width: 220px;
                    }
                }
            }

            > :last-child {
                width: 100%;
                height: 40px;
                line-height: 40px;
                text-align: center;
                border-top: 1px solid #B3C0D1;
                background-color: #324157;
                color: #bfcbd9;
                cursor: pointer;
            }
        }
    }

    .admin-layout > div:last-child {
        height: 100%;
        flex-grow: 1;
        flex-shrink: 1;
        display: flex;
        flex-direction: column;
        background: #f0f0f0;

        > *:first-child {
            width: 100%;
            height: 30px;
            flex-grow: 0;
            flex-shrink: 0;
        }

        > *:last-child {
            width: auto;
            flex-grow: 1;
            flex-shrink: 1;
            overflow: auto;
            margin: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
            background: #ffffff;
        }
    }
</style>
