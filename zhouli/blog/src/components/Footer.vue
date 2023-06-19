<template>
    <div class="footer">
        <footer>
            <div class="footer">
                <div class="footer_right">
                    <img src="../assets/weixin.png" alt="微信添加好友">
                    <p>关注微信</p>
                </div>
                <div class="footer_top">
                    <a href="#">游客留言</a>
                    <a href="#">免责申明</a>
                    <a href="#">联系站长</a>
                    <a href="#">本站标签</a>
                </div>
                <div class="footer_bottom">
                    <p>Copyright © 2023.6.10-2023.6.30 www.zhouli.com , All Rights Reserved | 202058304005周丽
                        <br>
                        此处填写网站底部信息|web前端开发|网站运营|html教程|css教程|php教程入门到精通
                    </p>
                    <p>重庆文理学院2020级人工智能学院周丽</p>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
}

footer {
    margin: 0;
    width: 100%;
    height: 215px;
    padding-top: 30px;
    background-color: #282828;
}

.footer {
    margin: 0 auto;
    height: 150px;
}

.footer_right {
    float: right;
    width: 170px;
    height: 150px;
    text-align: center;
    color: #eeeeee;
}

.footer_right img {
    width: 120px;
    height: 120px;
}

.footer_top {
    max-width: 1190px;
    height: 50px;
    /*background-color: pink;*/
}

.footer_top a {
    margin-right: 10px;
    text-decoration: none;
    line-height: 50px;
    font-size: 20px;
    color: #eeeeee;
}

.footer_bottom {
    max-width: 1190px;
}

.footer_bottom p {
    line-height: 30px;
    color: #eeeeee;
}
</style>