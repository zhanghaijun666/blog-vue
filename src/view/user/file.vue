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
        <div class="file-card">
            <div class="card-header">
                <el-col :span="16"><span>文件名</span></el-col>
                <el-col :span="2"><span>大小</span></el-col>
                <el-col :span="2"><span>创建者</span></el-col>
                <el-col :span="4"><span>修改日期</span></el-col>
            </div>
            <div class="card-body">
                <el-col :span="16"><span>备忘.txt</span></el-col>
                <el-col :span="2"><span>600MB</span></el-col>
                <el-col :span="2"><span>晨瑾旺旺</span></el-col>
                <el-col :span="4"><span>2022-01-01 12:00:22</span></el-col>
            </div>
            <div class="card-footer">

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                fileList:[
                    {
                        filenam:"备忘.txt",
                        size: "600MB",
                        createAt: "晨瑾旺旺",
                        updateTime: "2020-01-01 12:00:00"
                    }
                ]
            }
        }, mounted() {
            this.getFile()
        }, methods: {
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
        > div:first-child {
            height: 30px;
            line-height: 30px;
            flex-grow: 0;
            flex-shrink: 0;
            display: flex;
            flex-direction: row;
            border-bottom: 1px solid #fbc4c4;
            >div:first-child{
                flex-grow: 1;
                flex-shrink: 1;
            }
            >div:last-child{
                flex-grow: 0;
                flex-shrink: 0;
                width: 360px;
            }
        }
        >div:last-child{
            flex-grow: 1;
            flex-shrink: 1;
        }
    }
</style>
