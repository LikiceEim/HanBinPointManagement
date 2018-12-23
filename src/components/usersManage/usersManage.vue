<template>
  <div>
    <div class="craeteTop">
      <p>用户管理</p>
    </div>
    <div class="unltlistBot">
      <!--input 搜索框-->
      <div class="logHeader">
        <span>单位分类</span>
        <Select class="ivSelect" v-model="UnitClassification" style="width:200px">
          <Option v-for="item in UnitClassificationOption" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>

        <span>职位级别</span>
        <Select class="ivSelect" v-model="PositionClassification" style="width:200px">
          <Option v-for="item in PositionClassificationOption" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>

        <span>性别</span>
        <Select class="ivSelect" v-model="sex" style="width:200px">
          <Option v-for="item in sexOption" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <span>关键字</span>
        <Input class="unltlistInput" v-model="value1" placeholder="搜索关键字..." style="width:200px;" />
        <Button class="primary" type="primary" >搜索</Button>
        <div class="ivButton">
          <Button class="ivButtons" @click="xjbtn">新建账户</Button>
          <Modal  width="570"
                  title="账户设置"
                  v-model="modal10"
                  class-name="vertical-center-modal">

            <div style="text-align:center">
              <div class="ps">
                <span>账户ID</span>
                <Input calss="iv-input" placeholder="请输入..." clearable style="width: 240px"  v-model="id"/>
              </div>
              <div class="ps">
                <span>密码</span>
                <Input calss="iv-input" type="password" placeholder="请输入..." clearable style="width: 240px"  v-model="pwd"/>
              </div>
              <div class="ps">
                <span>确认密码</span>
                <Input calss="iv-input" type="password" placeholder="请输入..." clearable style="width: 240px"  v-model="pwdagain"/>
              </div>
              <div class="ps" style="height:150px;">
                <span>单位分类</span>
                <Tabs :animated="false"  >
                  <TabPane label="镇办" name="镇办" >
                    <div>
                      <!-- <Select v-model="addUnitClassificationArea" style="width:200px">
                        <Option v-for="item in addUnitClassificationOptionArea" :value="item.value" :key="item.value">{{ item.label }}</Option>
                      </Select> -->
                      <RadioGroup  v-model="area">
                        <span @click="handClickUnitPart(1)">
                          <Radio label="1" value="1">
                            <span>重点发展区域镇办</span>
                          </Radio>
                       </span>
                       <span @click="handClickUnitPart(2)">
                        <Radio label="2" value="2">
                          <span>生态发展区域镇办</span>
                        </Radio>
                       </span>
                     </RadioGroup>
                    </div>
                  </TabPane>
                  <TabPane label="区级部门" name="区级部门" >
                    <!-- <Select v-model="addUnitClassificationPart" style="width:200px">
                      <Option v-for="item in addUnitClassificationOptionPart" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select> -->
                    <RadioGroup  v-model="area">
                      <span @click="handClickUnitPart(3)">
                        <Radio label="3" value="3">
                          <span>党群部门</span>
                        </Radio>
                       </span>
                       <span @click="handClickUnitPart(4)">
                        <Radio label="4" value="4">
                          <span>政府经济部门</span>
                        </Radio>
                       </span>
                       <span @click="handClickUnitPart(5)">
                        <Radio label="5" value="5">
                          <span>政府非经济部门</span>
                        </Radio>
                       </span>
                       <span @click="handClickUnitPart(6)">
                        <Radio label="6" value="6">
                          <span>驻区单位</span>
                        </Radio>
                       </span>
                     </RadioGroup>
                  </TabPane>
                </Tabs>
              </div>
              <div class="ps">
                <span>单位名称</span>
                <Input calss="iv-input" placeholder="请输入..." clearable style="width: 240px" v-model="time" />
              </div>
              <div class="ps">
                <span>角色</span>
                <RadioGroup calss="iv-input" v-model="addsystem">
                  <Radio label="1" value="1">
                    <span>驻区单位</span>
                  </Radio>
                  <Radio label="2" value="2">
                    <span>系统操作员</span>
                  </Radio>
                  <Radio label="3" value="3">
                    <span>二级管理员</span>
                  </Radio>
                </RadioGroup>
              </div>
            </div>
            <div slot="footer" style="text-align: center">
              <!-- <Button>禁用</Button> -->
              <!-- <Button type="error">删除</Button> -->
              <Button type="primary" @click="SaveUser">保存</Button>
            </div>
          </Modal>
        </div>
      </div>
    </div>
    <!--表格-->
    <div>
      <Table  border :columns="columns7" :data="data6"></Table>
    </div>
    <!--分页器-->
    <div class="unltlistfyq">
      <Page :total="100" show-elevator />
    </div>
  </div>

</template>

<script>
  import { addUserList, queryUsersList } from '@/api/usersManage'
    export default {
      name: "usersManage",
      props:['users'],

      computed:{
          fathusers(val){

            return this.users;
          }
      },
      watch:{
        fathusers(val){
          // console.log(val)
         this.data6=val
        }
      },

      data(){

          return{
            // 单位分类
            UnitClassification:null,
            UnitClassificationOption:[
              {
                value: '1',
                label: '重点发展区域镇办'
              }, 
              {
                value: '2',
                label: '生态发展区域镇办'
              },
              {
                value: '3',
                label: '党群部门'
              },
              {
                value: '4',
                label: '政府经济部门'
              },
              {
                value: '5',
                label: '政府非经济部门'
              },
              {
                value: '6',
                label: '驻区单位'
              }
            ],
            // 添加单位分类
            addUnitClassificationArea:1,
            addUnitClassificationOptionArea:[
              {
                value: 1,
                label: '重点发展区域镇办'
              }, 
              {
                value: 2,
                label: '生态发展区域镇办'
              }
            ],
            addUnitClassificationPart:3,
            addUnitClassificationOptionPart:[
              {
                value: 3,
                label: '党群部门'
              },
              {
                value: 4,
                label: '政府经济部门'
              },
              {
                value: 5,
                label: '政府非经济部门'
              },
              {
                value: 6,
                label: '驻区单位'
              }
            ],
            // 职位分类
            PositionClassification: null,
            PositionClassificationOption:[
              {
                value: 1,
                label: 'ex1'
              },
              {
                value: 2,
                label: 'ex2'
              }
            ],
            // 性别分类
            sex: null,
            sexOption:[
              {
                value: 1,
                label: '男'
              },
              {
                value: 2,
                label: '女'
              }
            ],
            modal10: false,
            // 角色
            addsystem: '系统管理员',
            // 账号id
            id:"",
            // 单位名称
            time:"",
            // 密码
            pwd: null,
            // 确认密码
            pwdagain: null,
            columns7: [
              {
                title: '账户ID',
                key: 'id',
                // render: (h, params) => {
                //   return h('div', [
                //     h('Icon', {
                //       props: {
                //         type: 'person'
                //       }
                //     }),
                //     h('strong', params.row.name)
                //   ]);
                // }
              },
              {
                title: '单位名称',
                key: 'unit'
              },
              {
                title: '身份',
                key: 'borders'
              },
              {
                title: '账户状态',
                key: 'states '
              },
              {
                title: '创建时间',
                key: 'time'
              },
              {
                title: '操作',
                key: 'action',
                width: 150,
                align: 'center',
                render: (h, params) => {
                  return h('div', [
                    h('Icon', {
                      props: {
                        type: 'md-create',// 编辑
                      },
                      style: {
                        marginRight: '5px',
                        color:"#1296db",
                        fontSize:"18px",
                        cursor:"pointer"
                      },
                      on: {
                        click: () => {
                          this.show(params)
                        }
                      }
                    },),
                    h('Icon',{
                      props:{
                        type:'md-remove',// 删除
                      },
                      style: {
                        marginRight: '5px',
                        color:"#1296db",
                        fontSize:"18px",
                        cursor:"pointer"
                      },
                      on: {
                        click: () => {
                          this.removeUser(params);
                        }
                      }
                    }),
                    h('Icon',{
                      props: {
                        type:'md-key',// 重置密码
                      },
                      style: {
                        marginRight: '5px',
                        color:"#1296db",
                        fontSize:"18px",
                        cursor:"pointer"
                      },
                      on: {
                        click: () => {
                          this.resetPWD(params);
                        }
                      }
                    }),
                    h('Icon', {
                      props: {
                        type: 'md-close',// 禁用
                      },
                      style: {
                        marginRight: '5px',
                        color:"#1296db",
                        fontSize:"18px",
                        cursor:"pointer"
                      },
                      on: {
                        click: () => {
                          this.forbidUser(params);
                        }
                      }
                    })
                  ]);
                }
              }
            ],
            data6: []
          }
        },
      methods: {
        // 点击单位分类
        handClickUnitPart(id){
          debugger;

        },
        // 新建用户
        SaveUser(){
          debugger;
          var UserToken = this.id;
          var PWD = this.pwd;
          var Gender = parseInt(this.area);
          var OrganizationID = parseInt(this.time);
          var RoleID = parseInt(this.addsystem);
          var AddUserID = 1;
          var data = {
            UserToken,
            PWD,
            Gender,
            OrganizationID,
            RoleID,
            AddUserID
          }
          addUserList(data).then(res => {
            debugger;
            
          })
          
        },
        // 新建用户
          xjbtn(){
            debugger;
            this.modal10=true
            this.id="";
            this.time="";
          },
          // 编辑用户
        show (val) {
          console.log(val.row.id)
          // this.$Modal.info({
          //   title: 'User Info',
          //   content: `账户ID：${this.data6[index].id}<br>单位名称：${this.data6[index].unit}<br>身份：${this.data6[index].border}`
          // })
          this.id=val.row.id;
          this.time=val.row.time;
          this.modal10=true
        },
        // 重置密码
        resetPWD(val) {

        },
        // 删除用户
        removeUser(val) {

        },
        // 禁用用户
        forbidUser(val) {

        },
        remove (index) {
          this.data6.splice(index, 1);
        }
      }

    }
</script>

<style scoped>
  .craeteTop{
    width:100%;
    height:65px;
    background: #cdd0d4;
    line-height: 65px;
    padding: 0 60px;
    color: #323232;
  }
  .craeteTop p{
    float:left;
    font-size: 24px;
    font-weight: 600;
  }
  .logHeader{
    margin:0 15px;
    height:70px;
    line-height: 70px;
    display: flex;
  }
  .logHeader span{
    font-size: 14px;
    color: #515a6e;
  }

  .unltlistfyq{
    text-align: right;
    margin-right:15px;
    height:100px;
    line-height: 100px;
  }
  .unltlistInput{
    margin-left:10px;
  }
  .ivSelect{
    margin: 0 45px 0 10px;
  }
  .primary{
    margin-left:30px;
  }
  .ivButton{
    float:right;
  }
  .ivButtons{
    width: 100px;
    height: 40px;
    background: #2d8cf0;
    border-radius: 5px;
    color: #fff;
    border: none;
  }
  .ps{
    width: 100%;
    height: 60px;
    line-height: 60px;
    text-align: center;
    display:-webkit-flex;
    -webkit-align-items: center;
  }
  .ps span{
    width: 20%;
    font-size:16px;
    color: black;
    margin-right: 30px;
    display: block;
  }
  .ps .iv-input{
    width: 80%;
    display: block;
  }
  .unltlistfyq{
    text-align: right;
    margin-right:15px;
    height:100px;
    line-height: 100px;
  }

</style>
<style>

  .ivu-table-wrapper{
    margin-top:2px;
  }
</style>
