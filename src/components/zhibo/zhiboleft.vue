<template>
  <div class="box1" id="zhiboleft">
    <div class="main1"  v-for="item in left">
        <div class="time">
            {{new Date(parseInt(item.enable_date) * 1000).toLocaleString().substr(0,17)}}
        </div>
        <div class="content1">
            <div class="left">
                <a :href="item.coupon_url"><img :src="item.img" alt="" /></a>
            </div>
            <div class="right">
                <p>{{item.title}}</p>
                <div class="price">
                    <b>劵后¥</b><span> {{item.coupon_buy_price}}</span>
                </div>
                <div class="old">
                    在售价 ¥{{item.price}}
                </div>
                <div class="zan">
                    <div class="right1">
                        <p>
                            <span>{{item.coupon_price}}元</span>
                            <b>领劵立减</b>
                        </p>
                    </div>
                    <div class="left1">
                        <a href="javascript:;" class="iconfont icon-552cc5d03ad3b"></a>
                        <p class="p">{{item.coupon_buy_num}}</p>
                    </div>
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
           left : []
      }
    },
    methods:{

    },
    beforeCreate : function(){
        var _this = this;
        this.$http.get("../../../static/api/zhiboleft.json").then(response => {
            console.dir(response.data.result.data);
            _this.left = response.data.result.data;
    })
  }
}
</script>
