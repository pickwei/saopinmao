<template>
    <div class="wode">
        <div class="tu">
            <ul>
                <li><img src="../../assets/imgs/wode-1.jpg" /></li>
                <li><img src="../../assets/imgs/wode-13.jpg" /></li>
                <li><img src="../../assets/imgs/wode-3.jpg" /></li>
                <li><img src="../../assets/imgs/wode-4.jpg" /></li>
                <li><img src="../../assets/imgs/wode-5.jpg" /></li>
                <li><img src="../../assets/imgs/wode-6.jpg" /></li>
                <li><img src="../../assets/imgs/wode-7.jpg" /></li>
                <li><img src="../../assets/imgs/wode-8.jpg" /></li>
                <li><img src="../../assets/imgs/wode-9.jpg" /></li>
                <li><img src="../../assets/imgs/wode-10.jpg" /></li>
                <li><img src="../../assets/imgs/wode-11.jpg" /></li>
                <li><img src="../../assets/imgs/wode-12.jpg" /></li>
            </ul>
            <div class="box">
                <div class="tao">
                    <div class="iconfont icon-taoicon"></div>
                    <div class='tips'>
                        <router-link to="/usercenter/login" tag="a">登录</router-link>
                        
                        <router-link to="/usercenter/register" tag="a">注册</router-link>
                    </div>
                </div>
                <b class="iconfont icon-shezhi"></b>
            </div>
        </div>

    <div class="order">
        <p>我的订单</p>
        <a href="javascript:;">查看全部淘宝订单<i class="iconfont icon-xiangyou"></i></a>
    </div>

    <div class="situation">
        <ul>
            <li>
                <a href="javascript:;" class="iconfont icon-daifukuan"></a>
                <p>待付款</p>
            </li>
            <li>
                <a href="javascript:;" class="iconfont icon-daishouhuo"></a>
                <p>代发货</p>
            </li>
            <li>
                <a href="javascript:;" class="iconfont icon-iconfonttaobaozhongchoudisiqiqiche"></a>
                <p>待收货</p>
            </li>
            <li>
                <a href="javascript:;" class="iconfont icon-daipingjia"></a>
                <p>待评价</p>
            </li>
        </ul>
    </div>

    <div class="shopping">
        <ul>
            <li>
                <p><i class="iconfont icon-gouwuche-copy"></i>购物车</p>
                <a href="javascript:;" class="iconfont icon-xiangyou"></a>
            </li>
            <li>
                <p><i class="iconfont icon-shoucang"></i>收藏夹</p>
                <a href="javascript:;" class="iconfont icon-xiangyou"></a>
            </li>
            <li>
                <p><i class="iconfont icon-iconfonteyes" style="margin-right: 0.1rem"></i>开枪提醒</p>
                <a href="javascript:;" class="iconfont icon-xiangyou"></a>
            </li>
            <li>
                <p><i class="iconfont icon-suo"></i>密码找回</p>
                <a href="javascript:;" class="iconfont icon-xiangyou"></a>
            </li>
        </ul>
    </div>
    <div class="help">
        <ul>
            <li>
                <p><i class="iconfont icon-shape"></i>帮助中心</p>
                <a href="javascript:;" class="iconfont icon-xiangyou"></a>
            </li>
            <li>
                <p><i class="iconfont icon-icon-wentifankui"></i>问题反馈</p>
                <a href="javascript:;" style="color: #fab357">提建议, 领红包<i style="color: #cecece" class="iconfont icon-xiangyou"></i></a>
            </li>
            <li>
                <p><i class="iconfont icon-fenxiang"></i>分享应用</p>
                <a href="javascript:;" class="iconfont icon-xiangyou"></a>
            </li>
        </ul>
    </div>

</div>
</template>

<script>
export default {
  name: 'userInfo'
}
</script>

<style scoped>
.wode {
    width: 100%;
    height: auto;
    background-color: #eee;
    overflow: hidden;
}
.wode .tu {
    width: 100%;
    height: 2.12rem;
    position: relative;
}
.wode .tu ul {
    width: 120%;
    overflow: hidden;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
}
.wode .tu ul li {
    height: 50%;
    width: 1.15rem;
    float: left;
}
.wode .tu ul li img {
    width: 100%;
    height: 100%;
}
.wode .tu .box {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, .8)
}
.wode .tu .box .tao {
    width: 100%;
    height: 1.2rem;
    margin-top: 0.59rem;
    padding-left: 0.4rem;
    box-sizing: border-box;
    line-height: 1.1rem;
    overflow: hidden;
}
.wode .tu .box  b{
    position: absolute;
    right:.3rem;
    top:.2rem;
    font-size: .3rem;
    color: #fff;
}
.wode .tu .box .tao div{
    display: inline-block;
    height: 1.2rem;
}
.wode .tu .box .tao div:nth-child(1) {
    width: 1.1rem;
    height: 1.1rem;
    border-radius: 50%;
    border: 4px solid #a8a4a9;
    text-align: center;
    line-height: 1.1rem;
    background-color: #fff;
    font-size: 0.54rem;
    color: #f74704;
}
.wode .tu .box .tao div:nth-child(2) {
    font-size: 0.23rem;
    color: #fff;
    margin-left: 0.35rem;
}
.wode .tu .box div.tips a {
    padding-right:.2rem; 
    font-size: 0.23rem;
    color: #fff;
    line-height: 1.2rem;
}
.wode .order {
    width: 100%;
    height: 0.88rem;
    border-bottom: 2px solid #e3e3e1;
    line-height: 0.88rem;
    background-color: #fff;
}

.wode .order p {
    font-size: 0.21rem;
    color: #000;
    float: left;
    font-weight: 600;
    margin-left: 0.36rem;
}
.wode .order a {
    font-size: 0.18rem;
    color: #fe9903;
    float: right;
    margin-right: 0.35rem;
}
.wode .order a i {
    color: #c1c1c1;
    font-size: 0.16rem;
}

.wode .situation {
    width: 100%;
    height: 1.15rem;
    background-color: #fff;
    margin-bottom: 0.09rem;
}
.wode .situation ul {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
}
.wode .situation ul li {
    width: 1.37rem;
    height: 100%;
    text-align: center;
    padding-top: 0.21rem;
    box-sizing: border-box;
}
.wode .situation ul li a {
    font-size: 0.40rem;
    color: #959595;
}
.wode .situation ul li p {
    color: #3b3b3b;
    font-size: 0.21rem;
    line-height: 0.32rem;
}
.wode .shopping {
    width: 100%;
    height: 2.9rem;
    background-color: #fff;
    margin-bottom: 0.09rem;
}
.wode .shopping ul {
    width: 100%;
    height: 100%;
}

.wode .shopping ul li {
    width: 100%;
    height: 0.73rem;
    border-bottom: 2px solid #f5f5f5;
    line-height: 0.73rem;
    padding-left: 0.33rem;
    box-sizing: border-box;
    position: relative;
    
}
.wode .shopping ul li p {
    font-size: 0.21rem;
    color: #000;
    font-weight: 600;
}
.wode .shopping ul li p i {
    font-size: 0.27rem;
    color: #b7b7b7;
    margin-right: 0.22rem;
    font-weight: 400;
}
.wode .shopping ul li a {
    font-size: 0.18rem;
    color: #cecece;
    margin-right: 0.35rem;
    position: absolute;
    right: 0;
    top: 0;
}

.wode .help {
    width: 100%;
    height: 2.9rem;
    background-color: #fff;
    padding-bottom: 0.3rem;
}
.wode .help ul {
    width: 100%;
    height: 100%;
}

.wode .help ul li {
    width: 100%;
    height: 0.73rem;
    border-bottom: 2px solid #f5f5f5;
    line-height: 0.73rem;
    padding-left: 0.33rem;
    box-sizing: border-box;
    position: relative;
    
}
.wode .help ul li p {
    font-size: 0.21rem;
    color: #000;
    font-weight: 600;
}
.wode .help ul li p i {
    display: inline-block;
    font-size: 0.27rem;
    color: #b7b7b7;
    margin-right: 0.22rem;
    font-weight: 400;
    width: 0.27rem;
    height: 0.27rem;
}
.wode .help ul li a {
    font-size: 0.18rem;
    color: #cecece;
    margin-right: 0.35rem;
    position: absolute;
    right: 0;
    top: 0;
}
</style>
