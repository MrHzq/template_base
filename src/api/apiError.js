/*
 * @Author: hzq
 * @Date: 2018-08-28 17:13:49
 * @Last Modified by: hzq
 * @Last Modified time: 2018-12-05 17:11:46
 * @文件说明: 请求错误处理函数
 */

export default error => {
    if (
        error.code === 'ECONNABORTED' &&
        error.message.indexOf('timeout') !== -1
    ) {
        // 超时的处理
        console.log('网络超时，请刷新页面')
    } else {
        const { errorCode, errMsg } = error.response.data
        if (errorCode === 99 || error.response.data.status === 90040006) {
            // 单点登录控制
            console.log('登录超时，请退出后重试')
        } else if (errorCode === -999) {
            // 服务器内部错误处理
            console.log('网络异常，请稍后重试')
        } else {
            // 其他错误处理
            console.log(errMsg)
        }
    }
}
