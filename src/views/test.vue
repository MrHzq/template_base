<template>
    <div class="test">我是：Cli 2 + Base</div>
</template>

<script>
    export default {
        name: 'test',
        created() {
            this.$api
                .login({
                    password: 'qwer1234',
                    userNo: '13402318457'
                })
                .then(res => console.log(res))
        }
    }
</script>

<style scoped lang="scss">
    .test {
        color: red;
    }
</style>
