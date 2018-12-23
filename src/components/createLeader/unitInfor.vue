<template>
  <div class="personal">
    <div class="centers">
      <div class="personals">
        <span> 单位信息</span>
      </div>
      <div class="personalList">
        <!--镇办 区政府-->
        <div class="createZb">
          <Tabs class="createZbs" :animated="false" >
            <TabPane label="镇办" name="镇办">
              <div>
                <RadioGroup v-model="part">
                  <Radio label="重点发展区域镇办"></Radio>
                  <Radio label="生态发展区域镇办"></Radio>
                </RadioGroup>
              </div>
            </TabPane>
            <TabPane label="区级部门" name="区级部门">
              <div>
                <RadioGroup  v-model="part">
                  <Radio label="党群部门"></Radio>
                  <Radio label="政府经济部门"></Radio>
                  <Radio label="政府非经济部门"></Radio>
                  <Radio label="驻区单位  "></Radio>
                </RadioGroup>
              </div>
            </TabPane>
          </Tabs>
        </div>
        <!--&lt;!&ndash;input框&ndash;&gt;-->
        <div class="personalName">
          <span class="personalspantwo">所在单位</span>
          <div style="text-align:left ">
            <Input  class="input" v-model="unit" />
            <p>单位简称，最长不超过10个字</p>
          </div>
        </div>
        <div class="personalName">
          <span class="personalspantwo">现任职务</span>
          <Input  class="input" v-model="duties" />
        </div>
        <div class="personalName">
          <span class="personalspanone">级别</span>
          <Input  class="input" v-model="level" />
        </div>

        <div class="years">
          <span>任职时间</span>
          <Row>
            <DatePicker class="yearsYear" type="year" placeholder="Select year" style="width: 200px"></DatePicker>
            <DatePicker type="month"  placeholder="Select month" style="width: 200px" v-model="time"></DatePicker>
          </Row>
        </div>
        <!--分管工作文本域-->
        <div class="textareaas">
          <span>分管工作</span>
          <Input v-model="chargeWork" class="textareas" type="textarea" :rows="4" placeholder="Enter something..." />
        </div>
      </div>
    </div>
  </div>
  </template>


<script>
    export default {
        name: "unitInfor",
      data(){
          return{
            chargeWork:'',// 分管工作
            time: '',// 任职时间
            level: '',// 级别
            duties:'',// 现任职务
            unit: '',// 所在单位
            part: '重点发展区域镇办',// 单位信息
          }
      },
      methods:{
        // 获取值
        showUnitData() {
          debugger;
          var part = this.part;
          var unit = this.unit;
          var duties = this.duties;
          var level = this.level;
          var time = this.time;
          var chargeWork = this.chargeWork;
          var form = {
            part,
            unit,
            duties,
            level,
            time,
            chargeWork
          }
          this.$emit('getUnit',form);
        }
      }

    }

</script>

<style scoped>
  .personal{
    margin:30px auto 0;
    text-align: center;
    display: -webkit-flex;
    -webkit-justify-content: center;
  }
  .centers{
    margin: 0 auto;
  }
  .personals{
    width:100%;
  }
  .personals span{
    width: 90px;
    font-size: 14px;
    color: darkgray;
    display: block;
    padding-left: 2px;
    border-left:3px solid #4990e2;
  }
  .personalList{
    text-align: center;
    margin: 20px auto;
    /*height: 100%;*/
    width: 100%;
  }
  .personalList span{
    color: black;
    font-size: 16px;
    /*text-align: left;*/
  }
  .personalList p{
    font-size: 14px;
    color:darkgray;
  }

  .createZb{
    margin: 30px 0;
  }
/*input框样式*/
  .input{
    width:420px;
    line-height: 60px;
  }
  .personalName{
    display: -webkit-flex;
    -webkit-justify-content:flex-start;
    margin:12px 0;
  }
  .personalName .personalspanone{
    margin-right:88px;
    margin-top: 15px;
  }
  .personalName .personalspantwo{
    margin-right:52px;
    margin-top: 15px;
  }
/*选择时间*/
  .years{
    margin-top: 20px;
    width: 100%;
    display: -webkit-flex;

  }
  .years .yearsYear{
    margin-left: 60px;
    margin-right:13px;
  }
  .years span{
    display: block;
    /*margin:30px 0 20px 0;*/
  }
  /*文本域*/
  .textareaas{
    display: -webkit-flex;
    justify-content: flex-start;
    align-items: center;
    margin: 35px 0;
  }
  .textareaas span{
    display: block;
    margin-right:60px;
  }
  .textareas{
    width: 420px;
  }
</style>
<style>
  .ivu-tabs-bar{
    border-bottom: 0px solid #dcdee2;
  }
  .ivu-tabs-nav{
    float:none;
    font-size: 16px;
  }
  .ivu-radio-wrapper{
    font-size: 14px;
  }
  .ivu-tabs-nav-scroll{
    display: inline-block;
  }

/*时间修改*/

  .ivu-row{
    display: flex;
    justify-content: center;
  }
</style>
