/**
 * Create By:卢以聪 2017.4.26 ，封装数据交互api接口
 */
import 'jquery'
//数据交互api接口
// var Api = Api || {}
// Api.confIp = 'http://172.16.3.82:8077';
// Api.product = {
//     //获取产品
//     getProduct:function(data,succFn,errFn){
//         Api.$http(Api.confIp+'/api/Business/Product/simpleList?categoryId=',data,succFn,errFn);
//     },
//     //获取产品详情
//     getProductDetail:function(pid){

//     }
// },
// //封装公用函数ajax
// Api.$http = function(url,data,succFn,errFn){
//     $.ajax({
//         url:url+data.id+'&page='+data.page,
//         type:'get',
//         dataType:'json',
//         success:succFn,
//         error:errFn
//     });
// }

var Api = (function(){
    //对外接口存储对象
    var Fn = window.Fn || {};
    //内部工具函数封装对象
    var tool = {};
    //接口内部私有变量
    var httpIp = 'http://172.16.3.82:8077';
    //product模块接口封装
    Fn.product = {
        //获取产品
        getProduct:function(data,succFn,errFn){
            tool.$http(httpIp+'/api/Business/Product/simpleList?categoryId=',data,succFn,errFn);
        },
        //获取产品详情
        getProductDetail:function(pid){

        }
    }
    //封装公用函数ajax
    tool.$http = function(url,data,succFn,errFn){
        $.ajax({
            url:url+data.id+'&page='+data.page,
            type:'get',
            dataType:'json',
            success:succFn,
            error:errFn
        });
    }
    //返回接口对象
    return {
        Fn : Fn
    }
})();
//暴露接口
module.exports = Api