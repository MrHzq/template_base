/*
 * @Author: hzq
 * @Date: 2018-08-28 16:11:24
 * @Last Modified by: hzq
 * @Last Modified time: 2018-09-17 14:53:20
 * @文件说明: 测试接口地址
 */
export default [
    {
        name: 'logout', // 方法名称，这样写就这样使用：this.$api.logout()
        url: 'login/logout' // 请求地址，请根据swagger上面的来，不再需要加前缀了，如'/sib/'，因为自动处理了
        // methods: 'get' // 该接口为get请求，没有该属性时，默认为post
    }
];
