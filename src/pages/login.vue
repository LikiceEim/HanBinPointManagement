<template>
  <div class="loginCenter">
    <div class="login-con">
      <card>
        <p slot="title">
          <Icon type="log-in"></Icon>
          欢迎登录
        </p>
        <div class="form-con">
            <Form  ref="loginForm" :model="form" :rules="rules" @keyup.enter.native="onlogin">
            <FormItem prop="userName">
              <Input placeholder="请输入用户名" v-model="form.userName">
                <span slot="prepend">
                  <Icon :size="16" type="md-person" />
                </span>
              </Input>
            </FormItem>
            <FormItem prop="password">
              <Input type="password"  placeholder="请输入密码" v-model="form.password" >
                <span slot="prepend">
                  <Icon  :size="16" type="ios-unlock" />
                </span>
              </Input>
            </FormItem>
            <FormItem>
              <Button @click="onlogin" type="primary" long>登录</Button>
            </FormItem>
          </Form>
          <!--<p class="login-tip">输入任意用户名和密码即可</p>-->
        </div>
      </card>
    </div>
  </div>

</template>

<script>
  import crypto from 'crypto'
  // add by lwj---2018.12.16---接口
  import { loginFun } from '@/api/login'
  export default {
    name: "login",
    data(){
        return{
          // const validePass = (rule, value, callback) => {
          //   var pass = /^1[3-9][0-9]{9}$/;
          //   if (!pass.test(value)) {
          //     callback(new Error('请输入正确格式的密码'));
          //   } else {
          //     callback();
          //   }
          // },
          form: {
            userName: '',
            password: ''
          },
          rules: {
            userName: [
              { required: true, message: '账号不能为空', trigger: 'blur' }
            ],
            password: [
              { required: true, message: '密码不能为空', trigger: 'blur' },
              { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' },
              // {validator:validePass}
            ]
          }
        }
    },
    methods: {
      // onlogin(){
      //   // debugger
      //   this.$router.push("/HomePages")
      // }
      onlogin(){ //login登录
        debugger;
        // this.$storage.removeStorage("token");
        this.$refs.loginForm.validate((valid) => {
          if (valid) {
            // var bmd5=this.form.password;
            // var md5 = crypto.createHash("md5");
            // md5.update(bmd5);//this.pw2这是你要加密的密码
            // var pw = md5.digest('hex');//pw这就是你加密完的密码，这个往后台传就行了
            // var _data = {
            //   userAccount:this.form.userName,
            //   userPassword:pw
            // };
            var _data = {
              UserName:this.form.userName,
              PWD:this.form.password
            };
            this.$router.push("/HomePages")
            loginFun(_data).then(res => {
              debugger;
              if(res){
                this.$router.push("/HomePages")
              }
            })
            // this.$util.ajax({
            //   url:'/OAuth/token/console',
            //   method: 'POST',
            //   data: _data
            // }).then(res=>{
            //   if(res.data.code==1){
            //     this.$storage.setStorage("token",res.data.data.token);
            //     this.$storage.setStorage("access",res.data.data.userInfo.accountType);
            //     this.$storage.setStorage("userId",res.data.data.userInfo.userId);
            //     this.$Message.success('登录成功!');
            //     this.$router.push("/HomePages")
            //   }
            //   else{
            //     this.$Message.warning(res.data.msg);
            //   }
            // })
          }
        })
      }
    }
  }
</script>

<style scoped>
  .loginCenter{
    width: 100%;
    height: 100%;
    background: url(../assets/image/timg.jpg) no-repeat 0 0;
    background-size: 100% 100%;
    position: relative;
  }
  .login-con {
    position: absolute;
    right: 160px;
    top: 50%;
    -webkit-transform: translateY(-60%);
    transform: translateY(-60%);
    width: 300px;
  }



</style>
