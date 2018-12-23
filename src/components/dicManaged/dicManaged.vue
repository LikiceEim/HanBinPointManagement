<template>
    <div>
      <div class="craeteTop">
        字典管理
      </div>
      <div>
        <Tabs class="labels" :animated="false" @on-click="handClickIntegral" >
        <TabPane name="addTabPane" label="工作实绩正向加分规则" class="bd-botttom">
          <ul>
            <li class="lists"><h3>加分规则1</h3> <span>获得市级以上荣誉称号</span><span>+</span><span>10</span>
              <h3>
                <Button  @click="bjbtn">编辑</Button>
                <Button  @click="deleteBtn">删除</Button>
                <Modal  width="300"
                        title="编辑加分规格"
                        v-model="modal10"
                        class-name="vertical-center-modal">
                  <div style="text-align:center">
                    <div class="ps">
                      <span>规范名称</span>
                      <Input  class="input" placeholder="请输入..." style="width: 200px"/>
                    </div>
                    <div class="ps">
                      <span>加分值</span>
                      <Input  class="input" placeholder="请输入..." style="width: 200px"/>
                    </div>
                  </div>
                  <div slot="footer" style="text-align: center">
                    <Button type="error">删除</Button>
                    <Button type="primary">保存</Button>
                  </div>
                </Modal>
              </h3>
            </li>
          </ul>
        </TabPane>
        <TabPane name="divTabPane" label="工作痕迹负向减分规则">
          <li class="lists"><h3>加分规则1</h3> <span>获得市级以上荣誉称号</span><span>+10</span><h3>编辑</h3></li>
          <li class="lists"><h3>加分规则1</h3> <span>获得市级以上荣誉称号</span><span>+10</span><h3>编辑</h3></li>
          <li class="lists"><h3>加分规则1</h3> <span>获得市级以上荣誉称号</span><span>+10</span><h3>编辑</h3></li>
          <li class="lists"><h3>加分规则1</h3> <span>获得市级以上荣誉称号</span><span>+10</span><h3>编辑</h3></li>
          <li class="lists"><h3>加分规则1</h3> <span>获得市级以上荣誉称号</span><span>+10</span><h3>编辑</h3></li>
        </TabPane>
      </Tabs>
          <!--新增图标-->
        <div class="IconBoxs">
          <div class="IconBox" @click="tjbtn">
            <Button v-show="addCicle" style="border: none;background: 0"  >
              <!--@click="modal10 = true"-->
              <Icon class="Icons" type="ios-add-circle" />
              <span>新增加分规则</span>
            </Button>
            <Button v-show="divCicle" style="border: none;background: 0">
              <Icon class="Icons" type="ios-add-circle" />
              <span>新增减分规则</span>
            </Button>
              <Modal  width="300"
                      title="编辑加分规格"
                      v-model="modal11"
                      class-name="vertical-center-modal">
                <div style="text-align:center">
                  <div class="ps">
                    <span>规范名称</span>
                    <Input v-model="inpname" class="input" placeholder="请输入..." style="width: 200px"/>
                  </div>
                  <div class="ps">
                    <span>加分值</span>
                    <Input v-model="inpval" class="input" placeholder="请输入..." style="width: 200px"/>
                  </div>
                </div>
                <div slot="footer" style="text-align: center">
                  <Button type="primary">添加</Button>
                </div>
              </Modal>

            <!--<Button  @click="xjbtn">编辑</Button>-->


          </div>
        </div>
      </div>
    </div>
</template>

<script>

    export default {
        name: "dicManaged",
      data(){
          return{
            modal10: false,
            modal11  : false,
            // 加分项
            addCicle:true,
            divCicle:false,
            inpname:null,
            inpval:null
          }
      },
      methods:{
        // 点击面板
        handClickIntegral(name) {
          debugger;
          if(name == 'addTabPane'){
            this.addCicle = true;
            this.divCicle = false;
          } else if(name == 'divTabPane') {
            this.addCicle = false;
            this.divCicle = true;
          }
        },
       bjbtn(){
          this.modal10=true
        },
        // 新增加分、减分项
        tjbtn(){
          debugger;
          this.modal11=true;
          var name = this.inpname;
          var value = this.inpval;
          var type;
          if(this.addCicle == true) {// 新增增分项
            type = 1;
          } else if(this.divCicle == true) {// 新增减分项
            type = 2;
          }
          // 调用新增接口

        },
        // 删除
        deleteBtn(){

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
  .labels{
    width: 700px;
    margin: 40px auto;
  }
  .bd-botttom li{
    height: 52px;
    border-bottom: 1px dashed slategray;
  }
  .lists h3{
    display: inline-block;
    font-size: 14px;
  }
  .lists span:nth-child(3){
    margin:0 0;
  }
  .lists span:nth-child(4){
    margin-left:0;
  }
  .lists span{
    margin:0 100px;
  }
  .IconBoxs{
    width: 700px;
    margin:0 auto;
  }
  .Icons{
    font-size: 30px;
    color: #2d8cf0;
  }
  .IconBox{
    width:280px;
    font-size: 14px;
    color: #2d8cf0;
  }
  .ps{
    width: 100%;
    height:60px;
    line-height:60px;
    text-align: center;
    display: -webkit-flex;
    -webkit-align-items: center;
  }
  .ps span{
    text-align: left;
    width: 24%;
    font-size:14px;
    color: black;
    display: block;
  }
  .ps .input{
    width: 70%;
    display: block;
  }
</style>
<style>

  .ivu-modal-header-inner{
    font-size: 18px;
  }
  /*删除下划线*/
  .ivu-tabs-bar{
   border-bottom: 0px solid #dcdee2;
    margin-bottom: 16px;
}
  .ivu-tabs-nav-container{
    font-size: 16px;
  }
</style>
