const http = "http://139.199.192.48:8888";

export default {

    http: http,
    newsList: http + '/api/getnewslist',
    newsDetails: http + '/api/getnew/',
    submitComment: http + '/api/postcomment/',
    getCommentList: http + '/api/getcomments/'

}