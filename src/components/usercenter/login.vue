<template>
  <div class="login">
    <div class="lang">
        <a href="javascript:;" @click="hui" class="iconfont icon-you"></a>
        <p>淘宝账户登录</p>
        <span>帮助</span>
    </div>
    <div class="phone ph1">
        <p>账户</p>
        <input placeholder="请输入用户名" v-model="username"/>
    </div>
    <div class="phone ph2">
        <p>登录密码</p>
        <input placeholder="请输入密码" type="password" v-model="password"/>
        <i class="iconfont icon-iconfonteyes"></i>
    </div>
    <div class="btn" @click="login">
        登录
    </div>
    <div class="zhi">
        <p>支付宝账户登录</p>
        <span>忘记密码?</span>
    </div>
    <div class="reg">
        <router-link to="/usercenter/register">免费注册</router-link>
    </div>
</div>
</template>

<script>
    export default {
        data: function(){
                return {
                    username: "",
                    password: ""
                }
        },
        methods: {
            login: function(){
                var 
                    username = "username"+this.username,
                    password = "password"+this.username;
                if(localStorage[username]==this.username&&localStorage[password]==this.password){
                    alert("登录成功");
                    this.$router.push("/usercenter");
                }else {
                    alert("用户名或密码错误");
                }
        },
            hui: function(){
                     this.$router.push("/usercenter");
                }
        },
        mounted: function(){
        var count = 0;
         $(".login .phone i").on("click",function(){
            count++;
            if(count%2 != 0){
                $(".login .phone.ph2 input").attr({
                    "type": "text"
                })
            }else {
                 $(".login .phone.ph2 input").attr({
                    "type": "password"
             })
            }
        })
    }
    }
</script>

<style scoped>
#fooBar{
    display: none;
}
.login {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 12;
    background-color: #eeeeee;
}
.login .lang {
    width: 100%;
    height: 1.02rem;
    line-height: 1.02rem;
    padding-left: 0.25rem;
    box-sizing: border-box;
    background-color: #fff;
    margin-bottom: 0.25rem;
}
.login .lang a {
    float: left;
    font-size: 0.35rem;
    color: #5e656c;
}
.login .lang p {
    font-size: 0.31rem;
    color: #303438;
    float: left;
}
.login .lang span {
    float: right;
    font-size: 0.31rem;
    color: #303438;
    margin-right: 0.4rem;
}
.login .phone {
    width: 100%;
    height: 0.88rem;
    line-height: 0.88rem;
    background-color: #fff;
    padding-left: 0.23rem;
    box-sizing: border-box;
    position: relative;
}
.login .phone p {
    font-size: 0.28rem;
    color: #000;
    font-weight: 500;
    float: left;
    width: 1.2rem;
}
.login .phone i {
    font-size: 0.25rem;
    color: #c8c8c8;
    position: absolute;
    right: 0.2rem;
    top: 0.05rem;
}
.login .phone input {
    width: 3.26rem;
    border: 0;
    height: 0.44rem;
    vertical-align: middle;
    font-size: 0.3rem;
    padding: 0.2rem 0;
    margin-left: 0.2rem;
    float: left;
}
.login .phone ::-webkit-input-placeholder {
    font-size: 0.31rem;
    color: #c8c8c8;
}
.login .btn {
    width: 6.04rem;
    height: 0.8rem;
    background-color: #ff5000;
    text-align: center;
    line-height: 0.8rem;
    font-size: 0.29rem;
    color:#eae1e1;
    margin: 0.44rem auto 0.31rem;
    border-radius: 8px;
}
.login .zhi {
    width: 100%;
    height: 0.2rem;
}
.login .zhi p {
    font-size: 0.2rem;
    color: #000;
    float: left;
    margin-left: 0.2rem;
}
.login .zhi span {
    font-size: 0.2rem;
    float: right;
    color: #000;
    margin-right: 0.2rem;   
}
.login .reg {
    width: 1.5rem;
    height: 0.48rem;
    border: 1px solid #ff5000;
    margin: 0.3rem auto;
    border-radius: 7px;
}
.login .reg a {
    display: inline-block;
    width: 100%;
    height: 100%;
    font-size: 0.25rem;
    color: #ff5000;
    text-align: center;
    line-height: 0.48rem;
    text-align: center;
}
</style>
