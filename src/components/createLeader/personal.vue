<template>
  <div class="personal">
    <div class="craeteTop">
      创建干部
    </div>

    <div class="createFlow" >
      <Row class="createFlows">
        <Col span="15" push="6">
          <Steps :current="current">
            <Step title="个人信息"></Step>
            <Step title="单位信息"></Step>
            <Step title="积分信息"></Step>
          </Steps>
        </Col>
      </Row>
    </div>

    <div class="createBt">
      <PerInfor v-show="index == 0" ref="PerInfor" @getPer="getPer"></PerInfor>
      <Unitinfor v-show="index == 1" ref="UnitInfor" @getUnit="getUnit"></Unitinfor>
      <IntInfor v-show="index == 2" ref="IntInfor" @getInt="getInt"></IntInfor>
    </div>
    <!--下一步-->
    <div class="createAn">
      <Button type="primary" @click="prev"  v-if="sh">上一步</Button>
      <Button type="primary" @click="show" v-if="str1">{{str}}</Button>

      <!--to="/Unitinfor"-->
    </div>
  </div>
</template>

<script>
  import PerInfor from "./perInfor";
  import Unitinfor from "./unitinfor";
  import IntInfor from "./intInfor"
    export default {
        name: "personal",
      components:{PerInfor,Unitinfor,IntInfor},
      data(){
          return{
            index:0,
            list:[1,2,3],
            str:'下一步',
            str1:true,
            sh:false,
            current: 0,
            // 个人信息
            personData:{},
            // 单位信息
            unitData:{},
            // 积分信息
            intData:{}
          }
      },
      methods:{
        // 获取个人信息
        getPer(data) {
          debugger;
          this.personData = data;
        },
        // 获取单位信息
        getUnit(data) {
          debugger;
          this.unitData = data;
        },
        // 获取积分信息
        getInt(data) {
          debugger;
          this.intData = data;
        },
        show(){
          debugger;
          if (this.current == 2) {
            this.current = 0;
          } else {
            this.current += 1;
          }
          if(this.index<=2){
            this.index = this.index+1;
            if(this.index==1){
              this.sh = true;
            }
            if(this.index==3){
              this.$router.push({name:'LeaderList'})
            }
          }
          if(this.index >1 ){
              this.str = '创建';
          }
          // 获取每个页面的值
          if(this.index == 1) {// 第一个页面
            // 调用子页面的方法
            this.$refs.PerInfor.showPerData();
          } else if(this.index == 2) {// 第二个页面
            // 调用子页面的方法
            this.$refs.UnitInfor.showUnitData();
          } else if(this.index == 3) {
            // 调用子页面的方法
            this.$refs.IntInfor.showIntData();
          }
        },
        prev(){
          this.index = this.index-1;
          if(this.index<2){
            this.sh = true;

            if(this.index<1){
              this.sh = false;
            }

          }

          if(this.index <2 ){
            this.str = '下一步';

          }
          if (this.current <= 2) {
            this.current -= 1;
          } if(this.current == 0){
            return
          }
        }
      }
    }

</script>

<style scoped>
  .personal{
    height:100%;
    background: #fff;
    /*overflow-y: scroll;*/
  }
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
  .createBt{
    width: 100%;
    /*height: 100%;*/
  }
  .createAn{
    text-align: center;
    margin-bottom:30px;
  }

  .createFlow{
    height:60px;
    margin: 0px 30px 0 30px;
    border-bottom: 1px solid  #f7f7f9;
    /*line-height: 70px;*/
    padding-top: 20px;
  }


</style>
<style>
  .ivu-col-span-15{
    width: 46.5%;
  }
  .ivu-col-push-6 {
    left: 6%;
  }
</style>
