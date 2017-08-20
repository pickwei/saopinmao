<template>
  <div id="app">
    <div class="zhibo" id="zhi">
        <p class="top">
            扫品猫
        </p>
    <div class="xuan">
        <router-link class="left" tag="div" to="/zhibo/left">
            <p>
                劵直播
            </p>
        </router-link>
        <router-link class="right" tag="div" to="/zhibo/right">
            <p>
                精彩预告
            </p>
        </router-link>
    </div>
    <router-view></router-view>
    
</div>
  </div>
</template>

<script>

export default {
  name: 'zhibo'
}
</script>

<style>
.zhibo {
    width: 100%;
    height: auto;
}
.zhibo .trailer {
    width: 100%;
    height: auto;
    background-color: #eeeeee;
    padding-bottom: 0.93rem;
}
.zhibo .trailer .top {
  position: relative;
  height: 0.57rem;
  width: 100%;
  background-color: #fee8f4;
  margin-bottom: 0.09rem;
}
.zhibo .trailer .top p {
  height: 100%;
  float: left;
  line-height: 0.57rem;
  font-size: 0.23rem;
  color: #e454ac;
  text-align: left;
  padding-left: 0.2rem;
  box-sizing: border-box;
}
.zhibo .trailer .top p i {
  font-size: 0.4rem;
  vertical-align: middle;
}

.zhibo .trailer .top b {
  display: inline-block;
  height: 0.2rem;
  font-size: 0.2rem;
  color: #c62f7e;
  position: absolute;
  right: 0.2rem;
  top: -0.18rem;
}

.zhibo .trailer .box {
  width: 100%;
  height: auto;
  margin-bottom: 0.09rem;
  margin-top: 0.09rem;
  background-color: #fff;
}
.zhibo .trailer .box .boz{
  width: 100%;
  height: 2.88rem;
}
.zhibo .trailer .box .boz .le{
  width: 48%;
  height: 2.88rem;
  float: left;
}
.zhibo .trailer .box .boz .le img{
  width: 100%;
  height: 100%;
}
.zhibo .trailer .box .boz .ri {
  height: 100%;
  width: 52%;
  float: left;
  padding-left: 0.23rem;
  box-sizing: border-box;
}
.zhibo .trailer .box .boz .ri p {
  font-size: 0.21rem;
  color: #000;
  line-height: 0.67rem;
  margin-bottom: 0.48rem;
}
.zhibo .trailer .box .boz .ri h4 {
  font-size: 0.18rem;
  color: #9b9b9b;
  line-height: 0.31rem;
}
.zhibo .trailer .box .boz .ri h5 {
  color: #ea2c90;
  font-size: 0.25rem;
  font-weight: 400;
  height: 0.41rem;
  line-height: 0.41rem;
  margin-bottom: 0.17rem;
}
.zhibo .trailer .box .boz .ri h5 b {
  font-size: 0.16rem;
}
.zhibo .trailer .box .boz .ri h5 span {
  width: 0.56rem;
  height: 0.24rem;
  display: inline-block;
  border: 2px solid #bf4f89;
  font-size: 0.13rem;
  color: #f758ac;
  line-height: 0.24rem;
  text-align: center;
  border-radius: 0.04rem;
  vertical-align: middle;
}
.zhibo .trailer .box .boz .ri .price {
  width: 2.5rem;
  height: 0.32rem;
  border: 2px solid #f7e3ef;
  margin-bottom: 0.14rem;
}
.zhibo .trailer .box .boz .ri .price .left {
  width: 0.73rem;
  height: 100%;
  background-color: #ffe1f0;
  font-size: 0.19rem;
  color: #ba0e70;
  text-align: center;
  line-height: 0.32rem;
  float: left;
}
.zhibo .trailer .box .boz .ri .price .right{
  width: 1.77rem;
  float: left;
  text-align: center;
  line-height: 0.32rem;
  height: 100%;
  font-size: 0.19rem;
  color: #ba0e70;
}
.zhibo .trailer .box .boz .ri .price .right span{
  margin-right: 0.02rem;
}
.zhibo .trailer .box .boz .ri .price .right i{
  font-size: 0.2rem;
}
.zhibo .trailer .box .boz .ri .time p {
  color: #858585;
  font-size: 0.18rem;
  margin: 0;
  line-height: 0.18rem;
}
.zhibo .trailer .box .boz .ri .time p span {
  color: #ffa00c;
}

.top {
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  font-size: 0.24rem;
  color: #000;
  text-align: center;
}
.xuan {
  width: 100%;
  height: 0.72rem;
}
.xuan .left {
  float: left;
  width: 50%;
  height: 100%;
}
.xuan .left p {
  width: 1rem;
  height: 0.69rem;
  font-size: 0.22rem;
  color: #000;
  margin: 0 auto;
  text-align: center;
  line-height: 0.72rem;
}
.xuan .right {
  float: left;
  width: 50%;
  height: 100%;
}
.xuan .right p {
  width: 1rem;
  height: 0.69rem;
  font-size: 0.22rem;
  color: #000;
  line-height: 0.72rem;
  margin: 0 auto;
  text-align: center;
}
.xuan .router-link-active p {
  color: #ff8ace;
  border-bottom: 2px solid #ed0b82;
}
.box1 {
  background-color: #eeeeee;
  width: 100%;
  height: auto;
  padding-bottom: 1.5rem;
}
.box1 .main1 {
  width: 100%;
  height: 3.12rem;
}
.box1 .main1 .time {
  height: 0.53rem;
  width: 100%;
  font-size: 0.18rem;
  text-align: center;
  line-height: 0.53rem;
  color: #959595;
  background-color: #eeeeee;
  border: 0;
  clear: both;
}
.box1 .main1 .content1 {
  margin-left: 0.50rem;
  border-radius: 0.2rem;
  width: 5.55rem;
  height: 2.6rem;
  background-color: #fff;
  padding-left: 0.18rem;
  padding-top: 0.18rem;
  box-sizing: border-box;
}
.box1 .main1 .content1 .left {
  width: 2.26rem;
  float: left;
  height: 2.44rem;
}
.box1 .main1 .content1 .left img {
  width: 2.26rem;
}
.box1 .main1 .content1 .right {
  float: left;
  height: 100%;
  width: auto;
  margin-left: 0.17rem;
}
.box1 .main1 .content1 .right p {
  width: 100%;
  height: 0.52rem;
  line-height: 0.52rem;
  font-size: 0.21rem;
  color: #000;
  margin-bottom: 0.3rem;
}
.box1 .main1 .content1 .right .price {
  height: 0.37rem;
}
.box1 .main1 .content1 .right .price b {
  font-size: 0.18rem;
  color: #fe55b5;
}
.box1 .main1 .content1 .right .price span {
  font-size: 0.25rem;
  color: #fe55b5;
}
.box1 .main1 .content1 .right .old {
  height: 0.31rem;
  line-height: 0.31rem;
  font-size: 0.18rem;
  color: #9b9b9b;
}
.box1 .main1 .content1 .right .zan {
  height: 0.6rem;
  line-height: 0.6rem;
}
.box1 .main1 .content1 .right .zan .right1 {
  height: 0.6rem;
  padding-top: 0.13rem;
  box-sizing: border-box;
  float: left;
}
.box1 .main1 .content1 .right .zan .right1 p {
  width: 1.53rem;
  height: 0.32rem;
  line-height: 0.32rem;
  border: 2px solid #fddcec;
  border-radius: 0.04rem;
}
.box1 .main1 .content1 .right .zan .right1 p span {
  display: inline-block;
  width: 0.46rem;
  height: 100%;
  background-color: #fee8f4;
  text-align: center;
  line-height: 0.32rem;
  font-size: 0.17rem;
  color: #f246aa;
}
.box1 .main1 .content1 .right .zan .right1 p b {
  width: 1rem;
  display: inline-block;
  height: 100%;
  line-height: 0.32rem;
  text-align: center;
  font-size: 0.18rem;
  color: #f246aa;
  font-weight: 400;
}
.box1 .main1 .content1 .right .zan .left1 {
  height: 100%;
  float: right;
  margin-left: 0.45rem;
  position: relative;
  padding-left: 0.30rem;
  box-sizing: border-box;
}
.box1 .main1 .content1 .right .zan .left1 a {
  font-size: 0.26rem;
  color: #fe8e8d;
  position: absolute;
  left: 0;
}
.box1 .main1 .content1 .right .zan .left1 .p {
  height: 100%;
  line-height: 0.6rem;
  margin: 0;
  font-size: 0.19rem;
  color: #fb0003;
}

</style>
