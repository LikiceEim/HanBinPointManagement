<template>
    <div class="personal">
      <div class="centers">
        <div class="personals">
          <span> 个人信息</span>
        </div>
        <div class="personalList">
          <!--姓名-->
          <div class="personalName">
            <span class="personalspanone">姓名</span>
            <div style="text-align:left ">
              <Input  class="input" @on-blur="btn1" v-model="value1" />
              <p>姓名和省份证上保持一致</p>
            </div>
          </div>
          <!--性别-->
          <div class="sexs">
            <span>性别</span>
            <RadioGroup class="sex" v-model="button4" @on-change="butt2" type="button" >
              <Radio  label="男" class="man"></Radio>
              <Radio label="女" class="man"></Radio>
            </RadioGroup>
          </div>
          <!--身份证号-->
          <div class="personalName">
            <span class="personalspantwo">身份证号</span>
            <div style="text-align:left ">
              <Input  class="input" @on-blur="btn2" v-model="value2"/>
              <p>干部身份的唯一标识</p>
            </div>
          </div>

          <!--选择出生年月-->
          <div class="years">
            <span>出生年月</span>
            <Row>
              <DatePicker class="yearsYear" type="year" placeholder="Select year" style="width: 200px"></DatePicker>
              <DatePicker type="month"  placeholder="Select month" v-model="birthday" style="width: 200px"></DatePicker>
            </Row>
          </div>
        </div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "PerInfor",
      data(){
        return{
          button4:"男",
          list:[],
          value1:"",
          value2:"",
          birthday:''
        }
      },
      methods:{
        // 获取值
        showPerData() {
          debugger;
          var name = this.value1;
          var sex = this.button4;
          var idCard = this.value2;
          var birthday = this.birthday;
          var form = {
            name, sex, idCard, birthday
          }
          this.$emit('getPer',form)
        },
        //   go(){
        //   this.$router.push("/Unitinfor")
        // },
        btn1(val){
          console.log(val.srcElement.value)
          this.list.push(val.srcElement.value)
        },
        btn2(val){
          console.log(val.srcElement.value)
          this.list.push(val.srcElement.value)
          console.log(this.list)
        },
        butt2(val){
          console.log(val)
          this.list.push(val)

        }

      }
    }
</script>

<style scoped>
  .personal{
    margin:30px auto;
    text-align: center;
    display: -webkit-flex;
    -webkit-justify-content: center;
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
    width: 100%;
  }
  .personalList span{
    color: black;
    font-size: 16px;
  }
  .personalList p{
    font-size: 14px;
    color:darkgray;
  }
  .personalName{
    display: -webkit-flex;
    -webkit-justify-content:flex-start;
  }
  .personalName .personalspanone{
   margin-right:50px;
    margin-top: 15px;
  }
  .personalName .personalspantwo{
    margin-right:20px;
    margin-top: 15px;
  }
  .sexs{
    height: 100px;
    line-height: 100px;
    text-align: left;
  }
  .sexs span{
    color: black;
    margin-right: 175px;
  }
  .input{
    width:420px;
    line-height: 60px;
  }
  .man{
    margin-right: 57px;
    width:55px;
    text-align: center;
  }
  .years{
    margin-top: 50px;
    width: 100%;
    display: -webkit-flex;

  }
 .years .yearsYear{
   margin-left: 20px;
   margin-right: 25px;
 }
  .years span{
    display: block;
  }
  .createAn{
    margin-top:20px;
  }
</style>
<style>

  .ivu-radio-group-button.ivu-radio-group-large .ivu-radio-wrapper{
    text-align: center;
  }


</style>
