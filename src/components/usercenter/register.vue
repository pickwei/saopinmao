<template>
   <div class="register">
    <div class="lang">
        <a href="javascript:;" class="iconfont icon-you"></a>
        <p>免费注册</p>
        <span>帮助</span>
    </div>
    <div class="area">
        <p>国家地区</p>
        <div class="area_r">
            <span>中国大陆+86</span>
            <i class="iconfont icon-arrow-right"></i>
        </div>
    </div>
    <div class="phone ph1">
        <p>用户名</p>
        <input placeholder="请输入用户名" v-model="username" />
        
    </div>
    <h4 class="h1">{{tishi}}</h4>
    <div class="phone ph2">
        <p>密码</p>
        <input placeholder="请输入密码" type="password" v-model="password"/>
    </div>
    <h4 class="h2">{{ps}}</h4>    
    <div class="btn" @click="regist">
        注册
    </div>
    <div class="xiang">
        <p>已阅读并同意以下协议，<span>接受或免除限制责任、诉讼管辖约定</span>等粗体下划线标示条款，愿意同步创建支付宝账户。</p>
        <h3>
            <span>《淘宝平台服务协议》</span>
            <span>《支付宝服务协议》</span>
        </h3>
    </div>
   </div>
</template>

<script>
    export default {
        data: function(){
        return {
            username: "",
            password: "",
            use: [],
            tishi: "",
            ps : "",
            one: false,
            two: false,
            three: true
        }
    },
    mounted: function(){
        $(".register .lang a").on("click",function(){
            window.history.go(-1);
        })
    },
    methods : {
        regist: function(){
            var userN = /^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){4,19}$/;
            if(!userN.test(this.username)){
                this.tishi = "用户名输入不合法";
                this.one = false;
            }else {
                this.one = true;
                this.tishi = "";
            }
            var passW = /^.{6,15}$/;
            if(!passW.test(this.password)){
                this.ps = "密码输入不合法";
                this.two = false;
            }else {
                this.two = true;
                this.ps = "";
            }
            for(var i=0;i<localStorage.length;i++){
                var key = localStorage.key(i);
                if(localStorage[key]==this.username){
                    this.tishi = "用户名已注册";
                    this.three = false;
                    return;
                }else{
                    this.three = true;
                }
            }
            console.log(this.one,this.two,this.three)
            if(this.one&&this.two&&this.three){
                var 
                    username = "username"+this.username,
                    password = "password"+this.username;
                localStorage[password] = this.password;
                localStorage[username] = this.username;
                alert("注册成功");
                // window.history.go(-1);
                this.$router.push("/usercenter/login");
            }
        }
    }
    }
</script>

<style scoped>
#footBar{
    display: none;
}
 .register {
     padding-bottom:2rem; 
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 12;
    background-color: #eeeeee;
}
.register .lang {
    width: 100%;
    height: 1.02rem;
    line-height: 1.02rem;
    padding-left: 0.25rem;
    box-sizing: border-box;
    background-color: #fff;
    margin-bottom: 0.25rem;
}
.register .lang a {
    float: left;
    font-size: 0.35rem;
    color: #5e656c;
}
.register .lang p {
    font-size: 0.31rem;
    color: #303438;
    float: left;
}
.register .lang span {
    float: right;
    font-size: 0.31rem;
    color: #303438;
    margin-right: 0.4rem;
}
.register .area {
    width: 100%;
    height: 0.95rem;
    background-color: #fff;
    line-height: 0.95rem;
    padding-left: 0.23rem;
    box-sizing: border-box;
    border-bottom: 1px solid #d8d8d8;
}
.register .area p {
    font-size: 0.29rem;
    color: #000;
    float: left;
}
.register .area .area_r {
    height: 100%;
    float: right;
    margin-right: 0.21rem;
}
.register .area .area_r span {
    color: #656565;
    font-size: 0.25rem;
}
.register .area .area_r i { 
    color: #a9a9a9;
    font-size: 0.32rem;
}
.register .phone {
    width: 100%;
    height: 0.88rem;
    line-height: 0.88rem;
    background-color: #fff;
    padding-left: 0.23rem;
    box-sizing: border-box;
}
.register h4 {
    width: 100%;
    height: 0.4rem;
    font-size: 0.23rem;
    color: #f00;
    padding-left: 1.8rem;
    box-sizing: border-box;
    line-height: 0.4rem;
    font-weight: 400;
    background-color: #fff; 
}
.register .phone p {
    font-size: 0.28rem;
    color: #000;
    font-weight: 500;
    width: 0.9rem;    
    float: left;
}
.register .phone input {
    width: 3.26rem;
    border: 0;
    height: 0.44rem;
    vertical-align: middle;
    font-size: 0.2rem;
    margin-left: 0.2rem;
}
.register .phone ::-webkit-input-placeholder {
    font-size: 0.31rem;
    color: #c8c8c8;
}
.register .btn {
    width: 6.04rem;
    height: 0.8rem;
    background-color: #ff5000;
    text-align: center;
    line-height: 0.8rem;
    font-size: 0.29rem;
    color: #fff;
    margin: 0.26rem auto 0.31rem;
    border-radius: 8px;
}
.register .xiang {
    width: 100%;
    padding-left: 0.18rem;
    padding-right: 0.18rem;
    box-sizing: border-box;
}
.register .xiang p{
    font-size: 0.25rem;
    color: #8e8e8e;
}
.register .xiang p span {
    font-weight: 600;
    text-decoration: underline;
}
.register .xiang h3 span {
    font-size: 0.24rem;
    color: #576267;
    font-weight: 400;
}
</style>
