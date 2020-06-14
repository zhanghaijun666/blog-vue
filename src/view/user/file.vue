<template>
    <div class="layout-file">
        <div>
            <div>
                <span>返回到上一级</span>
                <el-divider direction="vertical"></el-divider>
                <span>文档管理</span>
                <i class="el-icon-arrow-right"></i>
            </div>
            <div>
                <el-button size="mini" icon="el-icon-folder-add">新建文件夹</el-button>
                <el-button size="mini" icon="el-icon-delete">删除</el-button>
                <el-button size="mini" icon="el-icon-upload">上传</el-button>
                <el-button size="mini" icon="el-icon-download">下载</el-button>
            </div>
        </div>
        <el-table height="auto" v-loading="loading"
                  :data="fileList.slice((currentPage-1)*pageSize,currentPage*pageSize)">
            <el-table-column type="selection" width="50"></el-table-column>
            <el-table-column sortable prop="name" label="文件名">
                <template slot-scope="scope">
                    <img src="../../assets/images/file/folder.png" width="30px" height="30px">
                    <span class=""> {{ scope.row.name }}</span>
                    <el-popconfirm title="这是一段内容确定删除吗？">
                        <el-button size="mini" type="text" icon="el-icon-delete" slot="reference">删除</el-button>
                    </el-popconfirm>
                    <el-button size="mini" type="text" icon="el-icon-download">下载</el-button>
                </template>
            </el-table-column>
            <el-table-column width="100" sortable prop="size" label="大小"></el-table-column>
            <el-table-column width="100" sortable prop="createAt" label="创建者"></el-table-column>
            <el-table-column width="150" sortable prop="updateTime" label="创建时间"></el-table-column>
        </el-table>
        <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[5,10, 20, 50, 100]"
                :page-size="pageSize"
                layout="prev, pager, next, jumper,total, sizes"
                :total="fileList.length" background>
        </el-pagination>
    </div>
</template>

<script>
    export default {
        data() {
            const fileData = {
                name: "备忘.txt",
                size: "600MB",
                createAt: "晨瑾旺旺",
                updateTime: "2020-01-01 12:00:00"
            };
            return {
                loading: false,
                currentPage: 1,
                pageSize: 10,
                fileList: new Array(66).fill(fileData)
            }
        }, mounted() {
            this.getFile()
        }, methods: {
            handleSizeChange(val) {
                this.pageSize = val;
            },
            handleCurrentChange(val) {
                this.currentPage = val;
            },
            getFile: function () {
                this.$axios.getBinary('/api/file', {cmd: "GET"})
                    .then(res => {
                        console.log(res)
                    })
            }
        }
    }
</script>
<style lang="less" scoped>
    .layout-file {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        background-color: #ffffff;

        > *:nth-child(1) {
            height: 30px;
            line-height: 30px;
            flex-grow: 0;
            flex-shrink: 0;
            display: flex;
            flex-direction: row;
            border-bottom: 1px solid #fbc4c4;

            > div:first-child {
                flex-grow: 1;
                flex-shrink: 1;
            }

            > div:last-child {
                flex-grow: 0;
                flex-shrink: 0;
                width: 360px;
            }
        }

        > *:nth-child(2) {
            flex-grow: 1;
            flex-shrink: 1;
            overflow: hidden;

            .el-table__row .el-button {
                float: right;
                margin-left: 10px;
                display: none;
            }

            .el-table__row:hover .el-button {
                display: inline-block;
            }
        }

        > *:nth-child(3) {
            flex-grow: 0;
            flex-shrink: 0;
            height: 30px;
            line-height: 30px;
            text-align: right;
        }
    }
</style>
