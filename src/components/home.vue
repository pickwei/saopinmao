<template>
  <div id="app">
     <div>
        <header>
            <a href="javascript:;"><img src="../assets/imgs/1.png" /></a>
            <a href="javascript:;" class="iconfont icon-icon"></a>
            <input type="text" placeholder="搜索领劵更省钱"/>
        </header>
        <div class="fenlei" id="fen">
            <ul id="list">
                <router-link to="/home/jingxuan"  tag="li">
                    <a href="javascript:;">今日精选</a>
                </router-link>
                <router-link to="/home/nvzhuang"  tag="li">
                    <a href="javascript:;">女装</a>
                </router-link>
                <router-link to="/home/meizhuang"  tag="li">
                    <a href="javascript:;">美妆</a>
                </router-link>
                <router-link to="/home/mother"  tag="li">
                    <a href="javascript:;">母婴</a>
                </router-link>
                <router-link to="/home/baihuo"  tag="li">
                    <a href="javascript:;">百货</a>
                </router-link>
                <router-link to="/home/ornament"  tag="li">
                    <a href="javascript:;">配饰</a>
                </router-link>
            </ul>
        </div>
        <div class="htop iconfont icon-huidaodingbu" @click="hui"></div>
        <router-view></router-view>
    </div>  
  </div>
</template>

<script>
import baihuo from  './home-list/baihuo'
import jingxuan from  './home-list/jingxuan'
import meizhuang from  './home-list/meizhuang'
import mother from  './home-list/mother'
import nvzhuang from  './home-list/nvzhuang'
import ornament from  './home-list/ornament'

export default {
  name: 'home',
  data(){
      return{

      }
  },
  methods:{
       hui(){

       }
  }
}
</script>

<style>
header {
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  position: relative;
  border-bottom: 1px solid #f0f0f0;
}
header img {
  vertical-align: middle;
  margin-left: 0.28rem;
  width: 1rem;
}
header input {
  vertical-align: middle;
  width: 72%;
  height: 0.56rem;
  border-radius: 0.2rem;
  border: none;
  background-color: #f1f1f1;
  padding-left: 0.44rem;
  box-sizing: border-box;
  margin-left: 0.2rem;
  padding-top: 0.05rem;
}
header input::-webkit-input-placeholder {
  color: #969696;
  font-size: 0.18rem;
  line-height: 0.35rem;
}
header .iconfont {
  position: absolute;
  top: 0.02rem;
  left: 1.7rem;
  font-size: 0.22rem;
  color: #a5a5a5;
}
.fenlei {
  height: 0.72rem;
  width: 100%;
  overflow: hidden;
}
#fen {
	width: 100%;
	position: relative;
	overflow: hidden;
}
.fenlei ul {
  height: 100%;
  width: 100%;
  display: flex;
  position: absolute;
}
.fenlei ul li {
  width: 1.28rem;
  height: 0.68rem;
  line-height: 0.68rem;
  text-align: center;
  float: left;
}
.fenlei ul li a {
  font-size: 0.22rem;
  color: #000;
}
.fenlei ul .router-link-active {
  border-bottom: 2px solid #ba0461;
}
.fenlei ul .router-link-active a {
  color: #d41175;
}
.swiper-container .swiper-wrapper .swiper-slide img {
  width: 100%;
}

.topp {
  width: 100%;
  height: 0.6rem !important;
}
.topp img {
  width: 100%;
}
.htop {
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;
  background-color: #fff;
  text-align: center;
  line-height: 0.4rem;
  position: fixed;
  right: 0.2rem;
  bottom: 1.05rem;
  border: 1px solid #eee;
  display: none;
}
.gull ul{
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #eeeded;
  margin-bottom: 1rem;
}

.gull ul li{
    width: 49%;
    height: 4.6rem;
    float: left;
    background-color: #fff;
    margin-bottom: 0.1rem;
}
.gull ul li img{
    width: 100%;
}
.gull ul li p {
  color: #000;
  font-size: 0.22rem;
  margin-left: 0.1rem;
  line-height: 0.42rem;
  margin-top: 0.16rem;
}
.gull ul li .t span {
    color: #e61f91;
    font-size: 0.27rem;
    margin-left: 0.1rem;
}
.gull ul li s {
  font-size: 0.2rem;
  margin-left: 0.1rem;
}
.gull ul li .t {
  width: 100%;
  height: 0.44rem;
  line-height: 0.44rem;
}
.gull ul li .t b {
  display: inline-block;
  width: 0.63rem;
  height: 0.25rem;
  border-radius: 0.05rem;
  border: 2px solid #e15da6;
  text-align: center;
  line-height: 0.28rem;
  font-size: 0.14rem;
  color: #e15da6;
  margin-left: 0.15rem;
}
.gull ul li .t i {
  font-size: 0.18rem;
  font-style: normal;
}

</style>
