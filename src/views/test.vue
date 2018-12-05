<template>
    <div class="test">我是base</div>
</template>

<script>
    export default {
        name: 'test',
        data() {
            return {}
        },
        created() {
            this.$api
                .login({
                    password: 'qwer1234',
                    userNo: '13402318457'
                })
                .then(res => console.log(res))
        },
        methods: {}
    }
</script>

<style scoped>
    .test {
        color: red;
    }
</style>
