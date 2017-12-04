<template>
  <div>

      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(item,index) in lunboArray" :key="index">
          <img :src="item.img" alt="">
        </mt-swipe-item>
      </mt-swipe>

      <div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                  <router-link to="/news_list">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">新闻资讯</div>
                  </router-link>
                </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
		                    <div class="mui-media-body">图片分享</div></a>
                </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">商品购买</div></a>
                </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">视频专区</div></a>
                </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">留言反馈</div></a>
                </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">联系我们</div></a>
                </li>
		        </ul> 
		</div>
      <p>home里的内容1</p>
      <p>home里的内容2</p>
      <p>home里的内容3</p>
  </div>
</template>

<style scoped>

.mint-swipe {
  height: 250px;
}
.mint-swipe img {
  width: 100%;
  height: 100%;
}
.mui-table-view-cell .mui-icon-home{
  background-image: url('../../../static/images/menu3.png');
  background-size: cover;
  width: 50px;
  height: 50px;
}
.mui-table-view-cell .mui-icon-email{
  background-image: url('../../../static/images/menu4.png');
  background-size: cover;
  width: 50px;
  height: 50px;
}
.mui-table-view-cell .mui-icon-chatbubble{
  background-image: url('../../../static/images/menu5.png');
  background-size: cover;
  width: 50px;
  height: 50px;
}
.mui-table-view-cell .mui-icon-location{
  background-image: url('../../../static/images/menu6.png');
  background-size: cover;
  width: 50px;
  height: 50px;
}
.mui-table-view-cell .mui-icon-search{
  background-image: url('../../../static/images/menu9.png');
  background-size: cover;
  width: 50px;
  height: 50px;
}
.mui-table-view-cell .mui-icon-phone{
  background-image: url('../../../static/images/menu10.png');
  background-size: cover;
  width: 50px;
  height: 50px;
}
.mui-icon::before{
  content : '';
}
.mui-grid-9{
  background-color: #ffffff;
  border: none;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
  border: none;
}
body{
  background-color: #fff !important;
}
</style>


<script>
export default {
  data() {
    return {
      lunboArray: [] //设置我们轮播图所需的模型
    };
  },
  //这个方法是Vue的生命周期方法之一，当我们实现了之后，当home.vue被创建出来的时候，就会自动调用
  created() {
    this.getLunboArrayData();
  },
  methods: {
    //定义了一个方法，用来获取轮播图需要的数据
    getLunboArrayData() {
      const url = "http://vue.studyit.io/api/getlunbo";
      this.$http.get(url).then(response => {
        this.lunboArray = response.body.message;
      });
    }
  }
};
</script>
