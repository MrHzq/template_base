/*
 * @Author: hzq
 * @Date: 2018-09-17 14:45:43
 * @Last Modified by: hzq
 * @Last Modified time: 2018-12-29 11:27:23
 * @文件说明: 渠道相关路由
 */
/*
[]：为对应文件夹名称下面的【.vue文件】名称，如：当前文件夹名称为：channel，则要加载的vue为：src/views/channel 下面的所有【.vue文件】
{
    name:'add-channel', .vue文件名
    children: ['publish-article', 'my-article'], 以name为文件夹的里面的.vue文件名
    meta: { requiresAuth: true } 路由元信息
}
*/

/*
假设：当前所有页面的路由为
[
    {
        path:'/login',component:import('src/views/login.vue')  登录页面，放在views根目录下的
    },
    {
        path:'/home',component:import('src/views/home.vue'),  首页页面，放在views根目录下的
        children:[
            {
                path:'product',component:import('src/views/home/product.vue'),  子路由：产品页面，放在views/home下的
                path:'about',component:import('src/views/home/about.vue')  子路由：关于页面，放在views/home下的
            }
        ]
    },
    {
        path:'/user-info',component:import('src/views/user/user-info.vue')  用户信息页面，放在views/user下的
    },
    {
        path:'/user-edit',component:import('src/views/user/user-edit.vue')  用户信息编辑页面，放在views/user下的
    }
]


则在views里面要这样创建文件：
    src/views/login.vue --> 【登录】页面
    src/views/home.vue --> 【首页】页面
    src/views/home/product.vue --> 【产品】页面，该页面属于home的子路由，所以放在以父路由（home.vue）命名的home文件夹下
    src/views/home/about.vue --> 【关于】页面，该页面属于home的子路由，所以放在以父路由（home.vue）命名的home文件夹下
    src/views/user/user-info.vue --> 【用户信息】页面
    src/views/user/user-edit.vue --> 【用户信息编辑】页面

最后在 src/router/routes 下面新建.js，用于保存路由信息
    router/routes/root.js
    router/routes/user.js

router/routes/root.js：存放所有views根目录下的【.vue】
    export default [
        {
            name: 'login' .vue文件名
        },
        {
            name: 'home',
            children: ['product', 'about'] 以home的子路由名称，与【.vue】的名称对应
        }
    ]

router/routes/user.js：存放所有views/user下的【.vue】
    export default [
        {
            name: 'user-info'
        },
        {
            name: 'user-edit'
        }
    ]

然后在src/router/index.js里面统一处理

*/
export default [
    {
        name: 'add-channel'
    }
]
