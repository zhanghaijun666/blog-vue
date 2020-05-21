<template>
    <div class="chat">
        <div>
            <div class="user-info">
                <img width="40" height="40" :alt="loginUser.name" src="@/assets/images/1.jpg">
                <span>{{loginUser.name}}</span>
                <input type="text" placeholder="search user..." v-model="search">
            </div>
            <ul class="user-list">
                <li v-for="item in userList" :key="item.id" :class="{ active: false }" @click="select(item)">
                    <img class="avatar" width="30" height="30" :alt="item.name" src="@/assets/images/2.png">
                    <p class="name">{{item.name}}</p>
                </li>
            </ul>
        </div>
        <div>
            <div>{{chatObj?chatObj.name:""}}</div>
            <div>
                <div v-for="item in messages" :key="item.id">
                    <p class="time"><span>{{item.date | time}}</span></p>
                    <div class="chat-message" :class="{ self: item.self }">
                        <img width="30" height="30" src="@/assets/images/1.jpg"/>
                        <span>{{item.text}}</span>
                    </div>
                </div>
            </div>
            <div>
                <textarea placeholder="按 Ctrl + Enter 发送" v-model="messageText" @keyup="sendText"></textarea>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                loginUser: {
                    id: 1,
                    name: '晨瑾'
                },
                userList: [{
                    id: 2,
                    name: '胡歌',
                }, {
                    id: 3,
                    name: '彭于晏',
                }],
                chatObj: null,
                search: '',
                messageText: "",
                messages: [
                    {
                        id: 1,
                        text: '在不在，大神',
                        date: new Date(),
                        self: false
                    }, {
                        id: 2,
                        text: '项目地址: https://sc.chinaz.com/jiaoben/',
                        date: new Date(),
                        self: true
                    }, {
                        id: 3,
                        text: '瞎搞',
                        date: new Date(),
                        self: false
                    }
                ]
            };
        },
        methods: {
            select: function (value) {
                this.chatObj = value;
            },
            sendText: function (e) {
                if (e.ctrlKey && e.keyCode === 13 && this.messageText.length) {
                    console.log();
                    this.messages.push({
                        id: Math.ceil(Math.random() * 200),
                        text: this.messageText,
                        date: new Date(),
                        self: true
                    });
                    this.messageText = '';
                }
            }
        },
        filters: {
            avatar(item) {
                let user = item.self ? this.loginUser : item;
                return user && user.img;
            },
            time(date) {
                if (typeof date === 'string') {
                    date = new Date(date);
                }
                return date.getHours() + ':' + date.getMinutes();
            },
            filterUser(list) {
                console.log(list.filter(item => item.name.indexOf(this.search) > -1));
                return list;
            }
        }
    }
</script>
<style lang="less" scoped>
    .chat {
        margin: 0px auto;
        width: 800px;
        height: 600px;
        overflow: hidden;
        border-radius: 3px;
        display: flex;
        border: 1px solid #eee;
    }

    .chat > div:first-child {
        height: 100%;
        width: 200px;
        color: #f4f4f4;
        background-color: #2e3238;

        .user-info {
            padding: 12px;
            border-bottom: solid 1px #24272C;

            input {
                margin-top: 10px;
                padding: 0 10px;
                width: auto;
                font-size: 12px;
                color: #fff;
                height: 30px;
                line-height: 30px;
                border: solid 1px #3a3a3a;
                border-radius: 4px;
                outline: none;
                background-color: #26292E;
            }

            img {
                border-radius: 2px;
            }

            img, .name {
                vertical-align: middle;
            }

            span {
                display: inline-block;
                margin: 0 0 0 15px;
                font-size: 16px;
            }
        }

        ul.user-list {
            display: flex;
            flex-direction: column;
            padding: 0px;
        }

        ul.user-list > li {
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 12px 15px;
            border-bottom: 1px solid #292C33;
            cursor: pointer;
            transition: background-color .1s;

            &:hover {
                background-color: rgba(255, 255, 255, 0.03);
            }

            &.active {
                background-color: rgba(255, 255, 255, 0.1);
            }

            .avatar, .name {
                vertical-align: middle;
            }

            .avatar {
                border-radius: 2px;
            }

            .name {
                display: inline-block;
                margin: 0 0 0 15px;
            }
        }
    }

    .chat > div:last-child {
        height: 100%;
        flex-grow: 1;
        background-color: #eee;
        display: flex;
        flex-direction: column;

        > :nth-child(1) {
            width: 100%;
            height: 50px;
            line-height: 60px;
            border-bottom: 1px solid #d6d6d6;
            background-color: #eee;
            text-align: center;
        }

        > :nth-child(2) {
            flex-grow: 1;
            padding: 10px 15px;

            > div {
                margin-bottom: 15px;
            }

            .time {
                margin: 7px 0;
                text-align: center;

                > span {
                    display: inline-block;
                    padding: 2px 16px;
                    font-size: 12px;
                    color: #fff;
                    border-radius: 2px;
                    background-color: #dcdcdc;
                }
            }

            .chat-message {
                > img {
                    float: left;
                    margin: 0 10px 0 0;
                    border-radius: 3px;
                }

                > span {
                    position: relative;
                    display: inline-block;
                    min-height: 30px;
                    line-height: 2.5;
                    font-size: 12px;
                    max-width: ~'calc(100% - 60px)';
                    text-align: left;
                    background-color: #fafafa;
                    border-radius: 4px;
                    word-break: break-all;
                    padding: 0px 10px;

                    &:before {
                        content: " ";
                        position: absolute;
                        top: 9px;
                        right: 100%;
                        border: 6px solid transparent;
                        border-right-color: #fafafa;
                    }
                }

                &.self {
                    text-align: right;

                    img {
                        float: right;
                        margin: 0 0 0 10px;
                    }

                    span {
                        background-color: #b2e281;

                        &:before {
                            right: inherit;
                            left: 100%;
                            border-right-color: transparent;
                            border-left-color: #b2e281;
                        }
                    }
                }
            }
        }

        > :nth-child(3) {
            width: 100%;
            height: 150px;
            overflow: hidden;

            textarea {
                font-family: "Micrsofot Yahei";
                background-color: #ffffff;
                text-align: start;
                height: 150px;
                width: 100%;
                border: none;
                outline: 0;
                padding: 10px;
                line-height: 2em;
            }
        }
    }


</style>
