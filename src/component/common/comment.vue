<template>
    <section class="comment">
        <div class="mui-card">
            <div class="mui-card-header">发表评论</div>
            <div class="mui-card-content">
                <div class="mui-input-row" style="margin: 10px 5px;">
                    <textarea id="textarea" v-model="content" rows="5" placeholder="请输入评论内容"></textarea>
                </div>
            </div>
            <div class="mui-card-footer">
                <button @click="submitComment" type="button" class="mui-btn mui-btn-royal mui-btn-block">去吧！皮卡丘</button>
            </div>
        </div>
    
        <div class="comment_list">
            <ul>
                <li v-for="(item,i) in commentsList" :key="i">
                    <h5>用户名：{{item.user_name}} 发表时间：{{item.add_time | formatDate("YYYY-MM-DD")}}</h5>
                    <p>{{item.content}}</p>
                </li>
            </ul>
        </div>
    
        <button ref="btn" type="button" @click="getMoreComment" class="mui-btn mui-btn-primary mui-btn-block mui-btn-outlined">加载更多</button>
    </section>
</template>

<style>

</style>
 
 <script>
import config from "../../js/config";
import { Toast } from 'mint-ui';

export default {
    props: ['id'],
    data() {
        return {
            content: "",
            pageIndex: 1,
            commentsList: []
        }
    },
    methods: {
        // 提交评论
        submitComment() {
            let data = {
                content: this.content
            };
            const url = config.submitComment + this.id;
            this.$http.post(url, data, { emulateJSON: true }).then(req => {
                Toast({
                    message: '操作成功',
                    iconClass: 'icon icon-success'
                });
                this.commentsList.unshift({
                     content: this.content,
                     user_name:"me",
                     add_time:new Date()
                })
                // this.getCommentList();
                this.content = "";
                
            });

        },
        // 获取评论列表
        getCommentList() {
            const url = config.getCommentList + this.id + '?pageindex=' + this.pageIndex;
            this.$http.get(url).then(req => {
                var body = req.body;
                if (body.status == 0 && body.message.length != 0) {
                     console.log("获取列表了")
                    this.commentsList.push(...body.message);
                } else {
                    this.$refs.btn.disabled = true; //禁用加载按钮
                }
            })
        },
        // 加载更多评论
        getMoreComment() {
            this.pageIndex++;
            this.getCommentList();
        }
    },
    created() {
        this.getCommentList()
    }
}
</script>
 