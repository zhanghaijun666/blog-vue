<template>
    <div class="container">
        <quill-editor ref="myTextEditor" v-model="content" :options="editorOption"></quill-editor>
        <el-button size="small" type="primary" @click="submit">提交</el-button>
    </div>
</template>

<script>
    import 'quill/dist/quill.core.css';
    import 'quill/dist/quill.snow.css';
    import 'quill/dist/quill.bubble.css';
    import {quillEditor} from 'vue-quill-editor';

    export default {
        name: 'editor',
        data: function () {
            return {
                content: '',
                editorOption: {
                    placeholder: 'Hello World'
                }
            }
        },
        components: {
            quillEditor
        },
        methods: {
            submit() {
                console.log(this.content);
                this.$message.success('提交成功！');
            }
        }
    }
</script>
<style lang="less" scoped>
    .container{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        >*:first-child{
            flex-shrink: 1;
            flex-grow: 1;
            overflow: hidden;
        }
        >*:last-child{
            flex-shrink: 0;
            flex-grow: 0;
            height: 30px;
            overflow: hidden;

        }
    }
</style>
