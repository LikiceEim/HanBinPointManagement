<template>
    <div>
      <div class="craeteTop">
        旬阳县招商局
      </div>
      <div class="comCenter">
        <div class="cenLeft">
          <div class="createBt">
            <!--创建input-->
            <div class="inputas">
              <span>单位编码</span>
              <div class="inputasrig">
                <Input  class="inputs" style="width:420px" v-model="value1" @on-blur="btn1" placeholder="请输入..."/>
                <p>单位的编码为单位唯一识别ID, 不能重复</p>
              </div>

            </div>
            <div class="inputas">
              <span>单位全称</span>
              <div class="inputasrig">
                <Input class="inputs" style="width:420px"  v-model="value2" @on-blur="btn2" placeholder="请输入..." />
                <p>单位的全称，最长不能超过20个字</p>
              </div>
            </div>
            <div class="inputas">
              <span>单位简称</span>
              <div class="inputasrig">
                <Input class="inputs" style="width:420px" v-model="value3" @on-blur="btn3" placeholder="请输入..." />
                <p>单位的简称，最多不能超过10个字</p>
              </div>
            </div>
            <!--镇办 区政府-->
            <div class="createZb">
              <Tabs :animated="false" @on-click="tabBtn1" >
                <TabPane label="镇办" name="镇办" >
                  <div>
                    <RadioGroup  @on-change="butt1">
                      <Radio label="重点发展区域镇办" ></Radio>
                      <Radio label="生态发展区域镇办"></Radio>

                    </RadioGroup>
                  </div>
                </TabPane>
                <TabPane label="区级部门" name="区级部门">
                  <div>
                    <RadioGroup @on-change="butt2"  >
                      <Radio label="党群部门"></Radio>
                      <Radio label="政府经济部门"></Radio>
                      <Radio label="政府非经济部门"></Radio>
                      <Radio label="驻区单位"></Radio>
                    </RadioGroup>
                  </div>
                </TabPane>
              </Tabs>
            </div>
            <!--创建按钮-->
            <div class="createAn">
              <Button type="primary" size="large" @click="gxbtn">更新</Button>
              <div>
                <Button size="large" @click="modal1 = true">删除</Button>
                <!--<Modal-->
                  <!--v-model="modal1"-->
                  <!--title="删除单位"-->
                  <!--@on-ok="ok"-->
                  <!--@on-cancel="cancel">-->
                  <!--<p class="createAns">确定删除该单位信息？</p>-->
                  <!--<p>删除后单位旗下相应干部信息就不存在了！谨慎操作</p>-->
                  <!--<p>-->
                    <!--<Button type="primary" size="large">更新</Button>-->
                    <!--<Button size="large" >删除</Button>-->
                  <!--</p>-->
                <!--</Modal>-->
                <Modal v-model="modal1" width="500"
                  title="删除单位"
                  @on-ok="ok"
                  @on-cancel="cancel">

                  <div style="text-align:center">
                    <p class="createAns">确定删除该单位信息？</p>
                    <p>删除后单位旗下相应干部信息就不存在了！谨慎操作</p>

                  </div>
                  <div slot="footer">
                    <Button type="primary" size="large">更新</Button>
                    <Button size="large" >删除</Button>
                  </div>
                </Modal>
              </div>
            </div>
          </div>
        </div>
        <div class="cenRig">
            <div class="cennum">
              <span>干部总人数</span>
              <h3>24</h3>
            </div>
          <!--单位明细列表-->
          <div>
            <Table border :columns="columns1" :data="data1" tooltip></Table>
          </div>
          <div class="cenMore">
            <Button  type="primary" size="large" @click="go()">more >></Button>
          </div>
        </div>

      </div>
    </div>
</template>

<script>
    export default {
        name: "chinaCompany",
      data () {
        return {
          value1: '',
          value2: '',
          value3: '',
          list:[],
          modal1: false,
          columns1: [
            {
              title: 'Name',
              key: 'name'
            },
            {
              title: 'Sex',
              key: 'sex'
            },
            {
              title: 'Time',
              key: 'time'
            },
            {
              title: 'Xr',
              key: 'xr'
            },
            {
              title: 'Jb',
              key: 'jb'
            },
            {
              title: 'Rztime',
              key: 'retime'
            },
            {
              title: 'Jf',
              key: 'jf'
            }
          ],
          data1: [
            {
              name: 'John Brown',
              sex: 18,
              time: 'New York No. 1 Lake Park',
              xr: '2016-10-03',
              jb: 18,
              retime: 'New York No. 1 Lake Park',
              jf: '2016-10-03'
            },
            {
              name: ' Brown',
              sex: 4,
              time: 'New York No. 1 Lake Park',
              xr: '2016-10-03',
              jb: 18,
              retime: 'New York No. 1 Lake Park',
              jf: '2016-10-03'
            },
            {
              name: 'wn',
              sex: 2,
              time: 'New York No. 1 Lake Park',
              xr: '2016-10-03',
              jb: 18,
              retime: 'New York No. 1 Lake Park',
              jf: '2016-10-03'
            },
            {
              name: 'Jwn',
              sex:43,
              time: 'New York No. 1 Lake Park',
              xr: '2016-10-03',
              jb: 18,
              retime: 'New York No. 1 Lake Park',
              jf: '2016-10-03'
            },

          ]
        }
      },
      created() {
        debugger;
        var data = this.$route.query;
        
      },
      methods:{
        btn1(val){
          // console.log(val)
          this.list.push(val.srcElement.value)
        },
        btn2(val){

          this.list.push(val.srcElement.value)
        },
        btn3(val){
          this.list.push(val.srcElement.value)

        },
        tabBtn1(val){
          console.log(this.map)
        },
        butt1(val){
          this.list.push(val)
        },
        butt2(val){
          this.list.push(val)
          console.log(this.list)
        },
        gxbtn(){
          this.$router.push("UnitList")
          // this.$axios({
          //   url:"url",
          //   method:"post",
          //   data:{CjList:this.list}
          // }).then((res)=>{
          //   console.log(res)
          // })
        },
        go(){
          this.$router.push("LeaderList")
        },
        ok () {
          this.$Message.info('Clicked ok');
        },
        cancel () {
          this.$Message.info('Clicked cancel');
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
    background:  #cdd0d4;
    line-height: 65px;
    padding-left: 60px;
    color: #323232;
  }

.comCenter{
  width: 100%;
  height: 100%;
  display: -webkit-flex;
}
  .cenLeft{
    width: 50%;
    height: 100%;
    padding:30px 0 70px;
    border-right:1px solid #d7d7d7;
    margin-top:15px;
  }
  .cenRig{
    width: 50%;
    height: 100%;
    margin:20px 30px;
     }
  .createBt{
    text-align: center;
  }
  .createBt .inputas .inputs{
    width:50vh;
    line-height: 30px;
  }
  .inputas{
    margin-top: 40px;
    display: -webkit-flex;
    -webkit-justify-content: center;
  }
  .inputas span{
    margin-right:20px;
    display: block;
  }
  .inputas p{
    font-size: 14px;
    margin-top: 10px;
    color: #a9a9a9;
  }
  .inputasrig{
    text-align: left;
  }
  .createZb{
    margin-top: 30px;
  }
  .createAn{
    margin-top:50px;
    display: -webkit-flex;
    justify-content: center;
  }
  .createAn Button{
    margin-right: 10px;
  }
  .createAns{
    font-size: 24px;
    color: black;
  }
  .cennum{
       width: 100%;
       height: 200px;
       line-height: 200px;
      display: -webkit-flex;
    margin-left: 30px;
     }
  .cennum span{
   color: black;
    font-size: 26px;
  }
  .cennum h3{
    color: black;
    font-size: 36px;
    margin-left: 30px;
  }
  .cenMore{
    margin-top: 30px;
    text-align: right;
  }
</style>
<style>
  .createZb .ivu-tabs-bar{
    border-bottom: 0px solid #dcdee2;
  }
  .ivu-tabs-nav{
    float:none;
    font-size: 16px;
  }
  /*.nav-text ivu-tabs-nav .ivu-tabs-ink-bar{*/
    /*left:1127px;*/
  /*}*/
  .ivu-radio-wrapper{
    font-size: 14px;
  }
  .ivu-tabs-nav-scroll{
    display: inline-block;
  }
  /*.ivu-btn-primary{*/
    /*width: 130px;*/
  /*}*/
  .ivu-btn-large{
    width: 130px;
  }
  .ivu-btn>span{

  }
  .ivu-modal-body{
    height: 150px;
    line-height: 60px;
  }
  /*.ivu-input{*/
    /*height: 50px;*/
  /*}*/
</style>
