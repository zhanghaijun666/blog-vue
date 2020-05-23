<template>
    <div class="user-router">
        <div>
            <div>
                <el-avatar shape="square" :size="120" :src="circleUrl"></el-avatar>
                <p>大自然的搬运工</p>
                <div>
                    <span>关注 66</span>
                    <el-divider direction="vertical"></el-divider>
                    <span>文章 20</span>
                    <el-divider direction="vertical"></el-divider>
                    <span>粉丝 88</span>
                </div>
                <ul>
                    <li v-for="(item, index) in comm" :key="index">
                        <i :class="item.icon"></i>
                    </li>
                </ul>
            </div>
            <div>
                <el-menu :default-active="$route.path"
                         class="el-menu-user"
                         active-text-color="#ffd04b"
                         router>
                    <el-menu-item v-for="(route,index) in routes" :key="index" :index="basePath+'/'+route.path">
                        <i :class="route.icon"></i>
                        <span slot="title">{{$t('router.'+route.name)}}</span>
                    </el-menu-item>
                </el-menu>
            </div>
        </div>
        <div>
            <router-view/>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                basePath: "/user",
                routes: this.$router.getChildren("/user"),
                circleUrl: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                comm: [
                    {link: 'https://github.com/zhanghaijun666', icon: 'fa fa-qq'},
                    {link: 'https://github.com/zhanghaijun666', icon: 'fa fa-github'},
                    {link: 'https://github.com/zhanghaijun666', icon: 'fa fa-weibo'},
                    {link: 'https://github.com/zhanghaijun666', icon: 'fa fa-weixin'}
                ]
            }
        }
    }
</script>
<style lang="less" scoped>
    .user-router {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        height: 100%;

        > :first-child {
            width: 220px;
            height: 100%;
            flex-shrink: 0;
            flex-grow: 0;
            background-color: #2e3238;

            > div {
                width: 100%;
                color: aliceblue;
                box-shadow: 0 2px 12px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.08);
                clear: both;
                margin-bottom: 8px;
                background-color: rgb(81, 90, 110);
            }

            > :nth-child(1) {
                display: inline-block;
                padding-bottom: 10px;

                > .el-avatar {
                    display: block;
                    margin: 20px auto;
                    border: 5px solid #ddd;
                }

                > p {
                    text-align: center;
                }

                > div {
                    width: 100%;
                    text-align: center;
                }

                > ul {
                    display: flex;
                    flex-direction: row;
                    padding: 0px;
                    text-align: center;
                    font-size: 18px;

                    > li {
                        display: inline-block;
                        flex-shrink: 1;
                        flex-grow: 1;
                        cursor: pointer;
                    }
                }
            }

            > :nth-child(2) {
                > .el-menu-user {
                    width: 100%;
                    background-color: inherit;
                    text-align: center;
                    border: 0px;

                    .el-menu-item:focus, .el-menu-item:hover {
                        background-color: rgb(62, 75, 88);
                    }

                    i {
                        font-size: 16px;
                        margin-right: 16px;
                    }

                    .el-menu-item {
                        color: #ffffff;
                    }
                }
            }

        }

        > :last-child {
            height: 100%;
            flex-shrink: 1;
            flex-grow: 1;
            overflow: auto;
            background-image: url("../../assets/images/bg.jpg");
        }
    }
</style>
