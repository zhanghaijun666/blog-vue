<template>
    <div>
        <el-submenu v-if="item.children && item.children.length>0" :index="resolvePath(item.path)">
            <template slot="title">
                <i :class="item.icon"></i>
                <span slot="title">{{$t('router.'+item.name)}}</span>
            </template>
            <sidebar-item v-for="(route,index) in item.children"
                          :key="index"
                          :item="route"
                          :basePath="resolvePath(item.path)">
            </sidebar-item>
        </el-submenu>
        <el-menu-item v-else :index="resolvePath(item.path)">
            <i :class="item.icon"></i>
            <span slot="title">{{$t('router.'+item.name)}}</span>
        </el-menu-item>
    </div>
</template>
<script>
    export default {
        name: 'SidebarItem',
        props: {
            item: {
                type: Object,
                required: true
            }, basePath: {
                type: String,
                default: ''
            }
        },
        methods: {
            resolvePath(routePath) {
                if (/^(https?:|mailto:|tel:)/.test(routePath)) {
                    return routePath
                }
                if (/^(https?:|mailto:|tel:)/.test(this.basePath)) {
                    return this.basePath
                }
                return this.basePath + "/" + routePath;
            }
        }
    }
</script>
