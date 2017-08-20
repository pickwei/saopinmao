<template>
  <div class="trailer">
    <div class="top">
        <p>
            <i class="iconfont icon-shizhong"></i>已设置提醒的商品开枪后可点此查看抢购
        </p>
        <b class="iconfont icon-xiangyou"></b>
    </div>

    <div class="box" v-for="item in right">
        <div class="boz">
            <div class="le">
                <a href="javascript:;"><img :src="item.img" /></a>
            </div>
            <div class="ri">
                <p>{{item.title}}</p>

                <h4>在售价 ¥{{item.price}}</h4>
                <h5><b>¥</b>{{item.coupon_buy_price}} <span>劵后价</span></h5>

                <div class="price">
                    <div class="left">{{parseInt(item.coupon_price).toFixed(0)}}元劵</div>
                    <div class="right">
                        <span>想要</span>
                        <i class="iconfont icon-00aixin00"></i>
                    </div>
                </div>
                <div class="time">
                    <p><span>今天{{new Date(parseInt(item.enable_date) * 1000).toLocaleString().substr(9,5)}}</span>开始抢劵</p>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data(){
      return{
           right : []
      }
    },
    methods:{

    },
    beforeCreate : function(){
        var _this = this;
        this.$http.get("../../../static/api/zhiboright.json").then(response => {
            console.dir(response.data.result.data);
            _this.right = response.data.result.data;
    })
  }
}
</script>