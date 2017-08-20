<template>
     <div>
       <div class="boxlist">
	<div class="input">
		<a href="javascript:;" class="iconfont icon-icon"></a>
		<input class="in" type="text" placeholder="搜索领劵更省钱" />
	</div>
	<div class="list">
		<div class="left" id="left">
			<ul>
				<li v-for="(item , index) in fenlei" @click="count = index" :class='{"act": (count==index)?true:false}' >{{item.data.top.name}}</li>
			</ul>
		</div>
		 <div class="right" :class="{rights: !index}" v-for="(item,index) in fenlei">
			<div class="top">
				 <a href="javascript:;"><img :src="fenlei[count].data.top.head_img" alt="" /></a> 
			</div>
			 <p class="p">{{fenlei[count].data.cat_list.title}}</p> 
			<div class="box">
				 <ul>
					<li v-for="item1 in fenlei[count].data.cat_list.data">
						<a href="javascript:;"><img :src="item1.img"/></a>
						<p>{{item1.title}}</p>
					</li>
				</ul> 
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
           fenlei: {},
           count: 0
      }
    },
     mounted: function () {
		var listHeight = document.documentElement.clientHeight - $(".input").height() - $("footer").height();
		$(".list").css({
			height: listHeight
		})
		setTimeout(function () {
			var boxHeight = listHeight - $(".boxlist .list .right .top").height() - $(".boxlist .list .right .p").height();
			$(".boxlist .list .right .box").css({
				height: boxHeight
			})
		}, 500)
	},
    beforeCreate : function(){
        var _this=this;
        this.$http.get("static/api/fenlei.json").then(response => {
            console.dir(response.data.result);
            _this.fenlei = response.data.result
    })
  }
}
</script>

<style>
.input {
  width: 100%;
  height: 0.81rem;
  line-height: 0.81rem;
  text-align: center;
  position: fixed;
  left: 0;
  top: 0;
  border-bottom: 1px solid #e7e7e7;
  background-color: #fff;
}
.input a {
  position: absolute;
  width: 0.17rem;
  height: 0.43rem;
  line-height: 0.43rem;
  font-size: 0.22rem;
  left: 2.21rem;
  top: 0.2rem;
  color: #a8a8a8;
}
.input .in {
  width: 6.04rem;
  height: 0.43rem;
  border-radius: 0.1rem;
  background-color: #f1f1f1;
  text-align: center;
  border: 0;
  font-size: 0.18rem;
  box-sizing: border-box;
}
.input .in::-webkit-input-placeholder {
  font-size: 0.18rem;
  color: #9d9d9d;
}
.list {
  width: 100%;
  height: 531.266px;
  position: fixed;
  left: 0;
  top: 0.83rem;
}
.list .left {
  width: 1.3rem;
  height: 100%;
  float: left;
  overflow-y: scroll;
}
/*#left {
  position: relative;
  overflow: hidden;
}*/
.list .left ul {
  width: 100%;
  height: auto;
  /*position: absolute;*/
}
.list .left ul li {
  position: relative;
  width: 100%;
  height: 0.83rem;
  text-align: center;
  line-height: 0.83rem;
  color: #000;
  font-size: 0.21rem;
  background-color: #f9f9f9;
}
.list .left ul .act {
  color: #ef088c;
  background-color: #fff;
}
.list .left ul .act:after {
  content: "";
  width: 0.05rem;
  height: 100%;
  background-color: #df007c;
  position: absolute;
  left: 0;
  top: 0;
}
.list .right {
  width: 78.1%;
  float: left;
  text-align: center;
  display: block;
}
.list .rights {
  width: 78.1%;
  display: block;
}
.list .right .top {
  box-sizing: border-box;
  padding-left: 0.26rem;
  width: 100%;
  height: 1.92rem;
  padding-top: 0.27rem;
  overflow: hidden;
  border-radius: 0.06rem;
  margin-bottom: 0.12rem;
}
.list .right .top img {
  width: 95%;
}
.list .right p {
  line-height: 0.41rem;
  color: #7c7c7c;
  font-size: 0.18rem;
  margin-bottom: 3px;
}
.list .right .box {
  width: 100%;
  overflow-y: scroll;
}
.list .right .box ul {
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 0.2rem;
}
.list .right .box ul li {
  width: 33.33%;
  height: 1.62rem;
  padding-top: 0.23rem;
  box-sizing: border-box;
}
.list .right .box ul li img {
  width: 0.6rem;
}
.list .right .box ul li p {
  color: #000;
  font-size: 0.2rem;
}
</style>
