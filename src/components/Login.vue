<template>
  <div class="login">
    <div class="login-box">
      <div class="box-top"><h3>欢迎使用 HC Fcst 系统</h3></div>
      <div class="box-main">
        <div class="userName">
          <span>用户名 :</span
          ><el-input v-model="userName" placeholder="请输入用户名"></el-input>
        </div>
        <div class="password">
          <span>密 码 :</span>
          <el-input
            placeholder="请输入密码"
            v-model="passWord"
            show-password
          ></el-input>
        </div>
        <div class="btn">
          <el-button type="primary" class="sign" @click="sign">登录</el-button>
          <el-button type="warning" class="reset">重置</el-button>
        </div>
      </div>
      <div class="notes">
        <p>1、用户名处请填写姓名或工号</p>
        <p>2、密码初始为<span>各位身份证的后4位</span>，登陆后请及时修改密码</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  methods: {
    sign() {
      this.$router.push("/home");
    }
  },
  data() {
    return {
      userName: "",
      passWord: ""
    };
  }
};
</script>

<style>
.login {
  width: 100vw;
  height: 100vh;
  background-color: #204a7d;
  position: relative;
}
.login-box {
  width: 30%;
  background-color: #e8ebf0;
  margin: 0 auto;
  position: absolute;
  top: 30%;
  left: 20%;
  margin-left: 15%;
  border-radius: 5px;
  box-shadow: 0 10px 22px #53749b;
}
.login-box .box-top {
  text-align: center;
  padding: 0 60px;
}
.login-box .box-top h3 {
  color: #ffffff;
  background-color: #315a86;
  line-height: 60px;
  border-radius: 0 0 5px 5px;
}
.box-main {
  margin: 0 auto;
  text-align: center;
}
.box-main div {
  margin: 10px 0;
}
.box-main .el-input {
  width: 50%;
}
.box-main .userName span {
  margin-right: 10px;
}
.box-main .password span {
  margin-right: 18px;
}
.box-main .btn .el-button--primary,
.el-button + .el-button {
  width: 90px;
}
.login-box .notes {
  margin: 30px 0;
  padding-left: 30px;
}
.login-box .notes p {
  font-size: 14px;
  line-height: 20px;
}
.login-box .notes p span {
  color: red;
}
</style>
