<template>
  <div>
    <div class="craeteTop">
      干部个人信息
    </div>
    <div class="leacen">
      <!--左边部分-->
      <div class="leaLef">
        <!--左上部分-->
        <div class="leaLefTop">
          <div class="leaName">
            <h3>张某某</h3>
            <Icon class="letIos1" type="md-person" />
          </div>
          <div class="leaIos" @click="iconBtn">
            <Icon type="md-create" />
          </div>
        </div>
        <!--左下部分-->
        <div class="letLefBott">
          <div class="letLi">
            <div class="letLiBox">
              <h3>姓  名</h3>
              <span>张某某</span>
            </div>
            <div class="letLiBox">
              <h3>性   别</h3>
              <span>男</span>
            </div>
         </div>
         <div class="letLi">
            <div class="letLiBox">
              <h3>出生年月</h3>
              <span>1993262</span>
            </div>
            <div class="letLiBox">
              <h3>身份号码</h3>
              <span>610526111111111111</span>
            </div>
         </div>
         <div class="letLi">
            <div class="letLiBox">
              <h3>单位全称</h3>
              <span>陕西安康市旬阳县招商局</span>
            </div>
            <div class="letLiBox">
              <h3>单位简介</h3>
              <span>旬阳县招商局</span>
            </div>
         </div>
         <div class="letLi">
            <div class="letLiBox">
              <h3>单位类型</h3>
              <span>政府非经济类型</span>
            </div>
            <div class="letLiBox">
              <h3>任职职位</h3>
              <span>局长</span>
            </div>
         </div>

        </div>
      </div>
      <!--右边部分-->
      <div class="learig">
        <div class="leaRigTop">
          <div class="leaName">
            <h3>70</h3>
            <Icon class="jb" type="ios-trophy" />
          </div>
          <div class="leaIos" @click="iconBtnrig">
            <Icon type="md-create" class="letIos1" />
          </div>
        </div>
        <div class="leaRigTot">
          <div class="letLi">
            <div class="letLiBox">
              <h3>基础分</h3>
              <span>60</span>
            </div>
          </div>
          <div class="letLi">
            <div class="letLiBox">
              <h3>调整分</h3>
              <span>12</span>
            </div>
          </div>
          <div class="letLiss">
            <div class="letLis">
               <h4><span>+</span> 1</h4>
               <p>工作态度积极</p>
            </div>
            <div class="letLis">
              <h4><span>+</span> 10</h4>
              <p>2016年荣获重大项目推进建设先进个人荣誉</p>
            </div>
          </div>
          <div class="letLi">
            <div class="letLiBox">
              <h3>其他积分</h3>
              <span>8</span>
            </div>
          </div>
          <div class="letLiss">
            <div class="letLis">
              <h4><span>+</span> 1</h4>
              <p>工作态度积极</p>
            </div>
            <div class="letLis">
              <h4><span>+</span> 10</h4>
              <p>2016年荣获重大项目推进建设先进个人荣誉</p>
            </div>
          </div>

        </div>
        <div class="but">

          <Button type="primary" to="IntCreate">积分申请</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

    export default {
        name: "leaPerInfor",
      methods:{
        //   go(){
        //   this.$router.push("intCreate")
        // }
        iconBtn(){
          // debugger
          this.$router.push("CreateLeader")
        },
        iconBtnrig(){
          this.$router.push("IntCreate")
        }
      }
    }
</script>

<style scoped>
  .craeteTop{
    width:100%;
    height:65px;
    font-size: 24px;
    font-weight: 600;
    background: #cdd0d4;
    line-height: 65px;
    padding-left: 60px;
    color: #323232;
  }
  .leacen{
    width:100%;
    height:100%;

  }
  .leaLef{
       width: 50%;
       height:100%;
       float:left;
       padding: 60px 60px;
     }
  .learig{
    width: 50%;
    height:100%;
    float:left;
    padding: 60px 60px;
  }
  .leaLefTop{
    display: -webkit-flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  }
  .leaName{
    height:50px;
    line-height: 50px;
  }
  .leaName h3{
    font-size: 22px;
    display: inline-block;
  }
  .leaName .letIos1{
    font-size:20px;
    color:#1296db;
    padding-bottom: 5px;
  }
  .leaName .jb{
    color:#f5cc07;
    font-size:22px;
    padding-bottom: 5px;
  }
  .leaRigTop{
    display: -webkit-flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
  }
  .leaIos{
    font-size: 22px;
    color: #bfbfbf;
    cursor:pointer;
  }
  .letLi{
    display: -webkit-flex;
    align-items: center;
    padding-top: 15px;
   border-bottom: 1px dashed black;
  }
  .letLiBox{
    text-align: left;
    width: 50%;
    height:35px;
  }
  .letLiBox h3{
    display: inline-block;
    font-weight: 100;
    margin-right: -20px;
    font-size:16px;
    width: 50%;
  }
  .letLiBox span{
    font-size: 14px;
    width: 50%;
  }
  .letLis{
    display:-webkit-flex;
  }
  .letLis h4{
   margin:0 50px 0 350px;
  }
  .but{
    width: 100%;
    height: 80px;
    text-align: center;
    line-height: 80px;
    margin-top: 50px;

  }
  .letLiss {
    padding-bottom: 15px;
    border-bottom: 1px dashed #f8f8f9;
  }
  .but button{
    width: 150px;
    height: 60px;
    background: blue;
    border-radius: 5%;
    outline:none;
    border: 0;
    color: white;
    cursor:pointer;
  }

</style>
