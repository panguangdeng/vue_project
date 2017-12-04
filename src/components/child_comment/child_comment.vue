<template>
    <div>
        <div class="title_style">
            <h4>提交评论</h4>
            <textarea id="" cols="30" rows="5" placeholder="请输入评论"></textarea>  
            <mt-button @click="submit_comment()" type="primary" size="large">提交评论</mt-button>
        </div>
        <div class="content_style">
            <h4>评论列表</h4>
            <div v-for="(item,index) in new_info_arr" :key="index" class="content_body">
                <p>{{item.content}}</p>
                <p>
                    <span>{{item.user_name}}</span>
                    <span>{{item.add_time | moment_date}}</span>
                </p>
            </div>
            <mt-button @click="pageindex_add_one()" class="more" type="danger" plain size="large">加载更多</mt-button>
            <p>111111111</p>
            <p>111111111</p>
            <p>111111111</p>
            <p>111111111</p>
        </div>
<!-- 
      <div class="commentListStyle">
          <h4>评论列表</h4>
          <div v-for="(item,index) in commentList" :key="index" class="commentItemStyle">
              <p>{{item.content}}</p>
              <p>
                  <span>{{item.user_name}}</span>
                  <span>{{item.add_time | fmtDate}}</span>
              </p>
          </div>
          <mt-button @click="loadMore()" class="loadMoreStyle" type="danger" plain size="large">加载更加</mt-button>
      </div> -->
    </div>
</template>
<style scoped>
    .content_style{
        padding: 10px;
    }
    h4{
        color: black;
        border-bottom: 1px solid #ccc;
        padding-bottom: 10px;
    }
    .title_style{
        border-bottom: none;
    }
    .content_body p:first-of-type{
        font-size: 14px;
        color: black;
        padding-left: 5px;
        margin-top: 10px;
    }
    .content_body p:last-of-type{
        color: #0094ff;
        font-size: 12px;
        display: flex;
        justify-content: space-between;
        padding-right: 10px;
        padding-left: 5px;
    }
    .more{
        margin-bottom: 50px;
    }
</style>

<script>
    import comment_url from '../../comment_url/comment_url.js';
    import { Toast } from 'mint-ui';
    import $ from 'jquery';
    console.dir($);

    export default {
        data(){
            return {
                new_info_arr:[],
                pageindex:1
            }
        },
        props:['child_id'],
        created(){
            console.log('看看有没有进来子组件的created');
            this.get_child_comment_data();
        },
        methods:{
            pageindex_add_one(){
                this.pageindex++;
                this.get_child_comment_data();
            },
            get_child_comment_data(){
                const url = comment_url.research+'api/getcomments/'+this.child_id+'?pageindex='+this.pageindex;
                this.$http.get(url).then(back=>{
                    console.log(back);  
                    if(this.pageindex ==1){
                        this.new_info_arr = back.body.message;
                        console.log('进来了1111111111')
                    }else{
                        this.new_info_arr = this.new_info_arr.concat(back.body.message);
                        console.log('没有进来2222222222222')
                    }
                    console.log(this.new_info_arr);
                    console.log('看看新数组到底是什么');

                })
            },
            submit_comment(){
                const neirong = $('textarea').val();
                if(neirong.trim()==''){
                    Toast({
                        message:'内容不能为空',
                        position:'bottom',
                        duration:2000
                    });
                    return;
                }
                const url = comment_url.research+'api/postcomment/'+this.child_id;
                this.$http.post(url,{content:neirong},{emulateJSON: true}).then(back=>{
                    $('textarea').val('')
                    this.pageindex = 1;
                    this.get_child_comment_data();
                })
            }
        }
    }
</script>