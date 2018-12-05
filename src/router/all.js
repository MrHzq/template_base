/*
 * @Author: hzq
 * @Date: 2018-08-28 17:50:19
 * @Last Modified by: hzq
 * @Last Modified time: 2018-12-05 17:11:04
 * @文件说明: 所有路由处理
 */
import channel from './channel'
let all = Object.assign(
    {
        '/': [{ name: 'test' }]
    },
    channel
)

let routes = []
for (let k in all) {
    all[k].map(val => {
        // 父路由处理
        let p_name = val.name
        let p_path = '/' + val.name
        let p_src = p_path
        if (k !== '/') p_src = '/' + k + p_path
        let p_obj = {
            name: p_name,
            path: p_path,
            component: () => import('@/views' + p_src + '.vue')
        }
        if (val.meta) {
            p_obj.meta = val.meta
        }
        // 子路由处理
        if (val.children) {
            p_obj.children = []
            val.children.map(c => {
                let c_name = c
                let c_path = c
                let c_src = p_src + '/' + c
                let c_obj = {
                    name: c_name,
                    path: c_path,
                    component: () => import('@/views' + c_src + '.vue')
                }
                p_obj.children.push(c_obj)
            })
        }
        routes.push(p_obj)
    })
}

export default routes
