<template>
    <div class="user-home">
        <el-card class="box-card">
            <div slot="header">
                <span>我的标签</span>
            </div>
            <el-tag>标签一</el-tag>
            <el-tag type="success">标签二</el-tag>
            <el-tag type="info">标签三</el-tag>
            <el-tag type="warning">标签四</el-tag>
            <el-tag type="danger">标签五</el-tag>
            <el-tag type="danger">标签六</el-tag>
        </el-card>
    </div>
</template>
<style lang="less" scoped>
    .user-home {
        > .el-card {
            width: 200px;
        }
    }
</style>
