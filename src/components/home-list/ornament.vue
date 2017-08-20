<template>
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
</template>
<script>
export default {
  name: 'mother',
  data(){
      return{
           list : []
      }
  },
  methods:{
      
  },
  beforeCreate : function(){
        var _this = this;
        this.$http.get("static/api/home-list/ornament.json").then(response => {
            console.dir(response.data.result.data);
            _this.list = response.data.result.data;
        })
  }
}
</script>