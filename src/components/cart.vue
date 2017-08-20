<template>
  <div id="cart">
    <div class="shopping">
      <div class="top">
          购物车
      </div>
      <div class="main">
          <a heaf="javascript:;">
              <img src="../assets/imgs/shopping-1.png" />
          </a>
          <p>亲,还未登录淘宝账号登录后下单享优惠</p>
          <span>
              授权淘宝账号登录
          </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cart'
}
</script>

<style scoped>
 .shopping {
    width: 100%;
    height: 100%;
}
.shopping .top {
    width: 100%;
    height: 0.81rem;
    text-align: center;
    line-height: 0.81rem;
    font-size: 0.25rem;
    color: #000;
    border-bottom: 2px solid #e9e7e6;
}
.shopping .main {
    width: 100%;
    height: auto;
    text-align: center;
    padding-top: 0.5rem;
    box-sizing: border-box;
}

.shopping .main p {
    font-size: 0.21rem;
    color: #bebebe;
    width: 2.14rem;
    margin: 0.7rem auto 0.19rem;
    line-height: 0.25rem;
}
.shopping .main span {
    display: block;
    width: 2.08rem;
    height: 0.49rem;
    border: 3px solid #da8fc7;
    margin: 0 auto;
    border-radius: 0.18rem;
    font-size: 0.2rem;
    color: #ed41a0;
    line-height: 0.49rem;
} 
</style>
