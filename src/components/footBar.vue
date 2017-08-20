<template>
  <div id="footBar">
		<footer>
			<nav>
				<ul>
	    	<router-link class="home" to="/home" tag='li'>
	    		<a href="javascript:;">
                    <div class="iconfont icon-shouye" ></div>
                    <p>首页</p>
                </a>
	    	</router-link>
	    	<router-link class="home" to="/zhibo" tag='li'>
	    		<a href="javascript:;">
                    <div class="iconfont icon-zhiboshoucang"></div>
                    <p>券直播</p>
                </a>
	    	</router-link>
	    	<router-link class="home" to="/fenlei" tag='li'>
	    		<a href="javascript:;">
                    <div class="iconfont icon-fenlei" ></div>
                    <p>分类</p>
                </a>
	    	</router-link>
	    	<router-link class="home" to="/cart" tag='li'>
	    		<a href="javascript:;">
                    <div class="iconfont icon-gouwuche" ></div>
                    <p>购物车</p>
                </a>
	    	</router-link>
	    	<router-link class="home" to="/usercenter" tag='li'>
	    		<a href="javascript:;">
                    <div class="iconfont icon-gerenxinxi" ></div>
                    <p>个人中心</p>
                </a>
	    	</router-link>
	    </ul>
			</nav>
		</footer>

		
  </div>

</template>

<script>
export default {
  name: 'footBar'
}
</script>

<style scoped>
#footBar{
	background: #f3f4f6;
  /* height: 0.76rem; */
  overflow: hidden;
}
footer {
	border-top: 1px solid #efefef;
	border-bottom: 1px solid #efefef;
  position: fixed;
  width: 100%;
  height: 0.76rem;
  background: #fff;
  left: 0;
  bottom: 0;
  z-index: 1;
}
footer nav ul {
  display: flex;
}
footer nav ul li {
  flex: 1;
}

footer nav ul li a {
  display: block;
  height: 0.98rem;
  text-align: center;
  color: #757575;
  box-sizing: border-box;
}
footer nav ul li a .iconfont {
  line-height: 0.52rem;
  font-size: 0.3rem;
}
footer nav ul li a p {
  line-height: 0.22rem;
  font-family: "microsoft yahei";
  font-size: 0.16rem;
}
footer nav ul li.router-link-active a {
  color: #ff65c7;
}
footer nav ul li.router-link-active a p {
  color: #ff65c7;
}
</style>
