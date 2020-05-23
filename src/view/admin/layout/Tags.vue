<template>
    <div class="tags">
        <div>
            <el-dropdown @command="handleTags">
                <el-button size="mini" type="primary">
                    标签选项
                    <i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu size="small" slot="dropdown">
                    <el-dropdown-item command="other" :disabled="tagsList.length<2">关闭其他</el-dropdown-item>
                    <el-dropdown-item command="all">关闭所有</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
        <ul>
            <li v-for="(item,index) in tagsList" :class="{'active': isActive(item.path)}" :key="index">
                <router-link :to="item.path" class="tags-li-title">
                    <span class="tags-li-icon"> {{$t('router.'+item.name)}}</span>
                    <i class="el-icon-close" @click="closeTags(index)"></i>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                tagsList: []
            }
        },
        created() {
            this.tagsList.push(this.$route);
        },
        watch: {
            $route(newValue) {
                if (this.tagsList.filter(function (item) {
                    return item.path === newValue.path;
                }).length == 0) {
                    this.tagsList.push(newValue);
                }
            }
        },
        methods: {
            isActive(path) {
                return path === this.$route.fullPath;
            },
            closeTags(index) {
                const delItem = this.tagsList.splice(index, 1)[0];
                const item = this.tagsList[index] ? this.tagsList[index] : this.tagsList[index - 1];
                if (!item && item.name !== "adminHome") {
                    this.$router.push('/admin');

                } else if (delItem.path === this.$route.fullPath) {
                    this.$router.push(item.path);
                }
            },
            handleTags(command) {
                switch (command) {
                    case "other":
                        this.tagsList = this.tagsList.filter(item => {
                            return item.path === this.$route.fullPath;
                        }) || [];
                        break;
                    case "all":
                        if (this.$route.name === "adminHome") {
                            this.tagsList = [this.$route];
                        } else {
                            this.tagsList = [];
                            this.$router.push('/admin');
                        }
                        break;
                    default:
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .tags {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100%;
        max-height: 32px;
        box-shadow: 0 5px 10px #ddd;
        background: #ffffff;

        > ul {
            flex-grow: 1;
            flex-shrink: 1;
            box-sizing: border-box;
            margin: 0px;
            padding-left: 6px;

            > li {
                float: left;
                margin: 3px 5px 2px 3px;
                border-radius: 3px;
                font-size: 12px;
                overflow: hidden;
                cursor: pointer;
                height: 23px;
                line-height: 23px;
                border: 1px solid #e9eaec;
                background: #fff;
                vertical-align: middle;
                color: #666;
                -webkit-transition: all .3s ease-in;
                -moz-transition: all .3s ease-in;
                transition: all .3s ease-in;

                &:not(.active):hover {
                    background: #f8f8f8;
                }

                &.active {
                    background-color: #409EFF;
                    color: #fff;
                }

                > .tags-li-title {
                    display: inline-block;
                    height: 100%;
                    color: inherit;
                    padding: 0 5px 0 12px;

                    > .el-icon-close {
                        text-overflow: ellipsis;
                        margin-left: 5px;
                    }
                }


            }
        }

        > div {
            width: 100px;
            height: 100%;
            flex-grow: 0;
            flex-shrink: 0;
            line-height: 28px;
            text-align: center;
            background: #fff;
            box-shadow: -3px 0 15px 3px rgba(0, 0, 0, .1);
        }
    }

</style>
