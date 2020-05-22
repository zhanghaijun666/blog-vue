<template>
    <div class="user-card">
        <div>
            <el-button size="small" type="primary" icon="el-icon-circle-plus-outline">{{$t('user.addUser')}}</el-button>
            <el-button size="small" type="primary" icon="el-icon-delete" :disabled="isNotSelection"
                       @click="deleteBatchUser()">{{$t('common.batchDelete')}}
            </el-button>
            <el-input size="small" v-model="searchStr" :placeholder="$t('user.searchUser')" clearable>
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
        </div>
        <el-table ref="userTable" v-loading="loading" height="100%"
                  :data="userTableData.slice((currentPage-1)*pageSize,currentPage*pageSize)">
            <el-table-column type="selection"></el-table-column>
            <el-table-column prop="userName" :label="$t('user.userName')" sortable></el-table-column>
            <el-table-column prop="nickname" :label="$t('user.nickname')" sortable></el-table-column>
            <el-table-column prop="email" :label="$t('user.email')"></el-table-column>
            <el-table-column prop="birthday" :label="$t('user.birthday')"></el-table-column>
            <el-table-column fixed="right" :label="$t('common.operate')" width="120">
                <template slot-scope="scope">
                    <el-button type="text" size="small">{{$t('common.info')}}</el-button>
                    <el-button @click="deleteSingleUser(scope.row)" type="text" size="small">{{$t('common.delete')}}
                    </el-button>
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
                userDialog: false
            }
        },
        computed: {
            isNotSelection() {
                return false;
            },
            userTableData() {
                const searchStr = this.searchStr;
                if (searchStr) {
                    // this.currentPage = 1;
                    return this.userList.filter(function (item) {
                        return item.userName.indexOf(searchStr) !== -1
                            || item.name.indexOf(searchStr) !== -1;
                    });
                }
                return this.userList;
            }
        },
        mounted() {
            console.log(this.$refs.userTable.selection.length);
            this.getFile()
        },
        methods: {
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
</style>
