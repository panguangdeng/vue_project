<template>
   <div>
			<ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="(item,index) in news_list_arr" :key="item.id">
          <router-link :to="'/news_info/'+item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<p class="p_title">{{item.title}}</p>
							<p class='mui-ellipsis'>
                  <span> {{item.add_time | moment_date}} </span>
                  <span> 查看:{{item.click}} </span>
              </p>
						</div>
          </router-link>
				</li>
			</ul>
        <p>我是新闻列表里的内容11111211111111111111111111111111111</p>
        <p>我是新闻列表里的内3333333333333容2</p>
   </div>
</template>

<style scoped>
    .mui-table-view-cell{
        height: 80px;
    }
    .mui-media-object{
        height: 65px;
        max-width: 80px;
    }
    .mui-ellipsis {
      display: flex;
      justify-content: space-between;
      padding-right: 10px;
      color: #0094ff;
      font-size: 12px;
      margin-top: 25px;
    }
</style>

<script>
import comment_url from '../../comment_url/comment_url.js';

export default {
  data() {
    return {
      news_list_arr: []
    };
  },
  created() {
    this.get_news_list_data();
  },
  methods: {
    get_news_list_data() {
      const url = comment_url.research+"api/getnewslist";
      this.$http.get(url).then(back => {
        this.news_list_arr = back.body.message;
      });
    }
  }
};
</script>