<template>
	<!--<h1>{{msg}}<a href="/about.html">about</a></h1>
	<span class="u-icon iconfont icon-rili"></span>
	<img src="../../assets/img/logo.png" alt="">
	<img src="../../assets/img/1.png" alt="">-->
    <div class="g-content">
        <div class="u-page">
            <a href="javascript:;" v-for="item in pageCount" v-on:click="changePage(item+1)" v-text="item+1" v-bind:class="{ z_sel: item+1===nowPage }"></a>
        </div>
        <h1 v-text="msg"></h1>
        <div v-for="item in proList.data" v-text="item.name"></div>
        <img src="../../assets/img/1.png" alt="">
  </el-pagination>
    </div>
     
</template>
<script>
    import Api from '../../api/api.js'   

    export default {
        //获取从父组件传过来的数据
		//props: {
			//proList: {
				//type: Object,
				//default: {} //这样可以指定默认的值
			//}
		//},
        data () {
            return {
                msg:'This is Index Content Component!',
                proList:{},
                pageCount:0,
                nowPage:0
            }
        },
        methods:{
            getProduct:function(data){
                Api.Fn.product.getProduct({id:data.id,page:data.page},(ret)=>{
                    this.proList = ret;
                    this.pageCount = ret.paging.totalSize;
                    this.nowPage = ret.paging.page;
                    console.log(this.proList);
                },function(){

                });
            },
            changePage:function(pageNum){
                this.getProduct({
                    id:'1045',
                    page:pageNum
                });
            }
        },
        
        created:function() {
            this.getProduct({id:'1045',page:1});
        }
    }
</script>
<style scoped>
    /*全局common.css*/
	@import '../../assets/css/common.css';
	h1{
		color: rgb(5, 110, 234);
        margin:50px 0;
	}
    .u-page{
        width:600px;
        height:30px;
        margin:10px auto;
        overflow:hidden;
    }
     .u-page a{
         display:block;
         width:60px;
         height:28px;
         line-height:28px;
         border:1px solid #fff;
         float:left;

     }
     .u-page .z_sel{
         background:#eee;
         color:#999;
     }
</style>