<template>
    <div class="container">
        <mavon-editor v-model="content" ref="md" @imgAdd="$imgAdd" @change="change" style="min-height: 600px"/>
    </div>
</template>

<script>
    import {mavonEditor} from 'mavon-editor'
    import 'mavon-editor/dist/css/index.css'

    export default {
        name: 'markdown',
        data: function () {
            return {
                content: '',
                html: '',
                configs: {}
            }
        },
        components: {
            mavonEditor
        },
        methods: {
            change(value, render) {
                this.html = render;
            },
            submit() {
                console.log(this.content);
                console.log(this.html);
                this.$message.success('提交成功！');
            }
        }
    }
</script>
