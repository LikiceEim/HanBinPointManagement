<template>
  <div class="headers">
   <div class="headerTop">
     <h3>汉滨区干部积分管理系统</h3>
     <div class="system" @mouseenter="enterBtn" @mouseleave="leaveBtn">
       <p>系统账户名</p>
       <div class="iv-icons">
         <Icon class="iv-icon" type="md-arrow-dropdown" size="24"  style="color:#2d8cf0"/>
         <img src="../assets/image/icos1.gif" alt="">
       </div>
       <div class="systenHover" v-show="show==true" @mouseenter="enterBtn()" @mouseleave="leaveBtn()">
         <ul>
           <!--<li  :class="red" v-for="list in lis"  @mouseenter="enterBtn(list)" @mouseleave="leaveBtn(list)">{{list.name}}</li>-->
           <li >修改密码</li>
           <router-link to="/Login" tag="li">退出登录</router-link>
         </ul>
       </div>

     </div>

   </div>


  </div>
</template>

<script>
    export default {
        name: "headers",
      data(){
          return{
            isred:true,
            show:false,
          }
      },methods:{
        enterBtn(){
          // debugger;
          this.show=true;

        },leaveBtn(){
          this.show=false;
        },
      }
    }
</script>

<style scoped>
  .headers{
    height:100%;
  }
  .headerTop{
    width:100%;
    height:100%;
    background: #fff;
    display: -webkit-flex;
    justify-content: space-between;
    padding:0 65px;
    box-sizing: border-box;
    align-items: center;
  }
  .headerTop h3{
    color: #ff6c60;
    font-size: 28px;
  }
  .system{
    height: 60px;
    border-radius:5px;
    display:-webkit-flex;
    justify-content: space-around;
    align-items: center;
    cursor:pointer;
  }
  .system p{
    font-size: 12px;
    color: #2d8cf0;
  }
  .system .iv-icons{
    font-size: 12px;
    color: black;
    display: -webkit-flex;
    -webkit-align-items: center;
  }
  .system .iv-icons img{
    display: block;
    border-radius: 50%;
  }
  .system .iv-icons .iv-icon{
    display: block;
  }

  .systenHover{
    height: 90px;
    line-height: 90px;
    display: -webkit-flex;
    justify-content: center;
    -webkit-align-items: center;
    flex-direction: column;
    position: absolute;
    top:60px;
    right:50px;
    z-index: 999;
    cursor:pointer;
    background: #fff;
    border-radius: 5px;
    /*opacity: 0.9;*/
  }
  .systenHover li{
    font-size: 14px;
    color: black;
    display: block;
    height:30px;
    line-height: 30px;
    padding:0 40px;
    text-align: center;
  }
  .systenHover li:hover{
    background: #9e9ea6;
  }
</style>
