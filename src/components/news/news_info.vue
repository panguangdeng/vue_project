<template>
  <div>
      <div class="title_style">
          <h4>{{obj.title}}</h4>
          <p><span>{{obj.add_time | moment_date}}&nbsp;&nbsp;{{obj.click}}次浏览&nbsp;&nbsp;分类:民生经济</span></p>
      </div>
      <div class="body_style" v-html="obj.content">
      </div>
      <sub_comment_ken :child_id="this.$route.params.news_id"></sub_comment_ken>
  </div>
</template>
<style socped>
    h4{
        font-size: 16px;
        color: #0094ff;
    }
    .title_style{
         border-bottom: 1px solid rgba(92,92,92,0.3);
         padding: 10px;
    }
    .title_style p{
        margin-top: 10px;
    }
    .body_style {
        padding-top: 20px;
    }
</style>

<script>
    import comment_url from '../../comment_url/comment_url.js';
    import sub_comment from '../child_comment/child_comment.vue';
    export default {
        data(){
            return {
                obj:{}
            }
        },
        created(){
            this.get_news_info();
        },
        methods:{
            get_news_info(){
                const url = comment_url.research+'api/getnew/'+this.$route.params.news_id;
                this.$http.get(url).then(back=>{
                    this.obj = back.body.message[0];
                })
            }
        },
        components:{
            sub_comment_ken:sub_comment
        }
    }
</script>