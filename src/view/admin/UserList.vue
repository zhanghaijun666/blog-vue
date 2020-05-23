<template>
    <div class="user-card">
        <div>
            <el-button size="small" type="primary" icon="el-icon-circle-plus-outline">{{$t('user.addUser')}}</el-button>
            <el-button size="small" type="primary" icon="el-icon-delete" @click="deleteBatchUser()">
                {{$t('common.batchDelete')}}
            </el-button>
            <el-input size="small" v-model="searchStr" :placeholder="$t('user.searchUser')" clearable>
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
        </div>
        <el-table ref="userTable" v-loading="loading" height="auto"
                  :data="userTableData.slice((currentPage-1)*pageSize,currentPage*pageSize)">
            <el-table-column type="selection"></el-table-column>
            <el-table-column prop="userName" :label="$t('user.userName')" sortable></el-table-column>
            <el-table-column prop="nickname" :label="$t('user.nickname')" sortable></el-table-column>
            <el-table-column prop="email" :label="$t('user.email')"></el-table-column>
            <el-table-column prop="birthday" :label="$t('user.birthday')"></el-table-column>
            <el-table-column :label="$t('common.operate')">
                <template slot-scope="scope">
                    <el-button type="text" size="small" @click="showUserDetail(scope.row)">
                        {{$t('common.info')}}
                    </el-button>
                    <el-popconfirm :title="scope.row.userName+','+$t('tip.confirmDelete')"
                                   @onConfirm="deleteSingleUser(scope.row)">
                        <el-button slot="reference" type="text" size="small">{{$t('common.delete')}}</el-button>
                    </el-popconfirm>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :hide-on-single-page="false"
                :page-sizes="[5, 10, 20, 50]"
                :page-size="pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :current-page="currentPage"
                :total="userTableData.length">
        </el-pagination>
        <el-drawer :visible.sync="showUserInfo" direction="rtl" :with-header="false" size="30%">
            <el-form :model="userItem" label-width="80px" class="user-info-drawer">
                <el-form-item :label="$t('user.userName')" required>
                    <el-input v-model="userItem.userName" size="small"></el-input>
                </el-form-item>
                <el-form-item :label="$t('user.nickname')" required>
                    <el-input v-model="userItem.nickname" size="small"></el-input>
                </el-form-item>
                <el-form-item :label="$t('user.birthday')">
                    <el-date-picker type="date" :placeholder="$t('user.birthday')"
                                    v-model="userItem.birthday"></el-date-picker>
                </el-form-item>
                <el-form-item :label="$t('user.motto')">
                    <el-input type="textarea" v-model="userItem.motto"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button @click="showUserInfo=false">关闭</el-button>
                    <el-button type="primary">确定</el-button>
                </el-form-item>
            </el-form>
        </el-drawer>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                loading: false,
                userList: [],
                searchStr: "",
                currentPage: 1,
                pageSize: 10,
                showUserInfo: false,
                userItem: {},
                rules: {
                    required: [
                        {required: true, message: this.$t('rules.required'), trigger: 'blur'}
                    ],
                    maxChar: [
                        {max: 32, message: this.$t('rules.exceedChar'[5]), trigger: 'blur'}
                    ],
                },
            }
        },
        computed: {
            userTableData() {
                const searchStr = this.searchStr;
                if (searchStr) {
                    return this.userList.filter(function (item) {
                        return item.userName.indexOf(searchStr) !== -1
                            || item.nickname.indexOf(searchStr) !== -1;
                    });
                }
                return this.userList;
            }
        },
        mounted() {
            this.getFile()
        },
        methods: {
            showUserDetail(item) {
                this.userItem = JSON.parse(JSON.stringify(item));
                this.showUserInfo = true;
            },
            handleSizeChange(val) {
                this.pageSize = val;
            },
            handleCurrentChange(val) {
                this.currentPage = val;
            },
            deleteBatchUser(array) {
                array = array || this.$refs.userTable.selection;
                if (array.length === 0) {
                    return;
                }
                for (let i = 0; i < array.length; i++) {
                    this.userList.splice(this.userList.findIndex(userItem => {
                        return array[i].id == userItem.id;
                    }), 1);
                }
                this.$message({
                    showClose: true,
                    message: array.length === 1 ? '删除成功!' : '删除' + array.length + '项,删除成功!',
                    type: 'success',
                    duration: 1000
                });
            },
            deleteSingleUser(item) {
                this.deleteBatchUser([item]);
            },
            getFile: function () {
                this.loading = true;
                this.$axios.getBinary('/api/user/all', {cmd: "GET"})
                    .then(res => {
                        this.userList = res;
                        this.loading = false;
                    })
                    .catch(() => {
                        this.loading = false;
                    })
            }
        }
    }
</script>
<style lang="less" scoped>
    .user-card {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;

        > div:first-child {
            width: 100%;
            height: 60px;
            line-height: 60px;
            flex-grow: 0;
            flex-shrink: 0;
            background-color: #B3C0D1;

            > :first-child {
                margin-left: 50px;
            }

            > .el-input {
                width: auto;
                margin-left: 10px;
            }
        }

        > .el-table {
            width: 100%;
            flex-grow: 1;
            flex-shrink: 1;

            .el-button--text {
                padding: 0px 16px 0px 0px;
            }
        }

        > .el-pagination {
            flex-grow: 0;
            flex-shrink: 0;
            width: 100%;
            height: 30px;
            line-height: 30px;
            text-align: center;
            padding: 0px;
        }
    }

    .user-info-drawer {
        padding: 10px 30px;
    }
</style>
