<template>
     <div>
    <div class="swiper-container" style="height: 2.68rem">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in banner">
                <a href="javascript:;"><img :src="item.img" /></a>
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
    <div class="listt">
        <ul>
            <li v-for="(item,index) in fen">
                <a href="javascript:;" @click="det(index)"><img :src="item.img" /></a>
                <p>{{item.title}}</p>
            </li>
        </ul>
    </div>
    <div class="topp">
        <a href="javascript:;"><img src="../../assets/imgs/2.png" /></a>
    </div>
    <div class="gull">
        <ul>
            <li v-for="item in list">
                <a :href="item.coupon_url"><img :src="item.img" /></a>
                <p>{{item.title}}</p>
                <div class="t"><span><i>¥</i> {{item.price}}</span><b>劵后价</b></div>
                <s>¥{{(item.price/item.coupon_buy_price*10).toFixed(2)}}</s>
                <div class="yi">{{item.coupon_buy_num}}人已买</div>
            </li>
        </ul>
    </div>
</div>
</template>
<script>
import Swiper from '../../../static/js/swiper-3.4.1.min.js'
export default {
   name: 'jingxuan',
   data : function(){
        return {
            banner : [],
            fen: [],
            list: []
        }
    },
    beforeCreate : function(){
        var _this = this;
        this.$http.get("static/api/jingxuan.json").then(response => {
            console.dir(response.data.result.data);
            console.dir(response.data.result.activity.banner);
            console.dir(response.data.result);
            _this.list = response.data.result.data;
            _this.banner = response.data.result.activity.banner;
            _this.fen = response.data.result.activity.list;
        })
    },
    methods : {
        det : function(data){
            router.push({path:"/details",query:{dat:data}});
        }
    },
    mounted: function(){
        setTimeout(function(){
			var mySwiper = new Swiper ('.swiper-container', {
                autoplay: 3000,
				loop: true,
				pagination: '.swiper-pagination',
			})
		},1000)
    }
}
</script>
<style>
.listt {
  width: 100%;
  height: 3.04rem;
}
.listt ul {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}
.listt ul li {
  width: 25%;
  height: 50%;
  text-align: center;
  padding-top: 0.23rem;
  box-sizing: border-box;
}
.listt ul li img {
  width: 0.9rem;
}
.listt ul li p {
  font-size: 0.18rem;
  color: #656565;
  line-height: 0.28rem;
}
</style>
