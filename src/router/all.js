/*
 * @Author: hzq
 * @Date: 2018-08-28 17:50:19
 * @Last Modified by: hzq
 * @Last Modified time: 2018-09-17 14:48:33
 * @文件说明: 所有路由处理
 */
import channel from './channel';
let all = Object.assign(
    {
        '/': ['test']
    },
    channel
);

let routes = [];
for (let k in all) {
    all[k].map(val => {
        let name = val;
        let path = '/' + val;
        let src = path;
        if (k !== '/') src = '/' + k + path;
        let obj = {
            name,
            path,
            component: () => import('@/views' + src + '.vue')
        };
        routes.push(obj);
    });
}

export default routes;
