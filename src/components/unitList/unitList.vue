<template>
  <div>
    <div class="craeteTop">
      单位列表
    </div>
    <div class="unltlistBot">
      <!--所属分类-->
      <div class="unitLIstFl">
        <div>
          <span class="unitLIstspan">所属分类 </span>
          <Select v-model="model1" style="width:200px" >
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
          <!--属搜input go-->
          <span class="unitLIstspantwo">关键字 </span>
          <Input class="unltlistInput" v-model="value1" placeholder="搜索关键字..."/>
          <Button type="primary" >搜索</Button>
        </div>
       <div>
         <!--<Button type="primary" to="/CreateLeader">创建单位</Button>-->
         <Button  @click="modal2 = true" style="background: #2d8cf0 ;color:#fff">创建单位</Button>
         <Modal v-model="modal2" width="350">
           <p slot="header" style="color:#2d8cf0;text-align:center">
             创建单位
           </p>
           <div style="text-align:center">
             <div class="inputas">
               <span>单位编码</span>
               <div class="inputasrig">
                 <Input  class="inputs"  v-model="unitNo"   placeholder="请输入..."/>
                 <p>单位编码为单位唯一识别</p>

               </div>
             </div>
             <div class="inputas">
               <span>单位全称</span>
               <div class="inputasrig">
                 <Input class="inputs" v-model="unitName"  placeholder="请输入..." />
                 <p>单位全称，最长不能超过20个字</p>
               </div>
             </div>
             <div class="inputas">
               <span>单位简称</span>
               <div class="inputasrig">
                 <Input class="inputs"  v-model="unitSimpleName" placeholder="请输入..." />
                 <p>单位的简称，最多不能超过10个字</p>
               </div>
             </div>
             <!--镇办 区政府-->
             <div class="createZb">
               <Tabs :animated="false"  >
                 <TabPane label="镇办" name="镇办" >
                   <div>
                     <RadioGroup  v-model="part">
                       <Radio label="重点发展区域镇办" ></Radio>
                       <Radio label="生态发展区域镇办"></Radio>

                     </RadioGroup>
                   </div>
                 </TabPane>
                 <TabPane label="区级部门" name="区级部门" >
                   <div>
                     <RadioGroup v-model="part">
                       <Radio label="党群部门"></Radio>
                       <Radio label="政府经济部门"></Radio>
                       <Radio label="政府非经济部门"></Radio>
                       <Radio label="驻区单位"></Radio>
                     </RadioGroup>
                   </div>
                 </TabPane>
               </Tabs>
             </div>
           </div>
           <div slot="footer" style="text-align: center" >
             <!--<Button type="error" size="large" long :loading="modal_loading" @click="del">Delete</Button>-->
               <Button type="primary" @click="addUnit" >创建</Button>
           </div>
         </Modal>
       </div>
      </div>
      <!--单位明细列表-->
      <div >
        <Table border :columns="columns7" :data="data6" ></Table>
      </div>
      <!--分页器-->
      <div class="unltlistfyq">
        <Page :total="100" show-elevator />
      </div>
    </div>
  </div>
</template>

<script>
  import {addUnit} from '@/api/unitList';
    export default {
        name: "unitList",
      props:['tn'],
      computed:{
          fathathData(val){
            return this.tn
          }
      },
      watch:{
        fathathData(val){
          this.data6=val
        }
      },
      data () {
        return {
          value1: '',
          modal2: false,
          cityList: [
            {
              value: 'New York',
              label: 'New York'
            },
            {
              value: 'London',
              label: 'London'
            },
            {
              value: 'Sydney',
              label: 'Sydney'
            },
            {
              value: 'Ottawa',
              label: 'Ottawa'
            },
            {
              value: 'Paris',
              label: 'Paris'
            },
            {
              value: 'Canberra',
              label: 'Canberra'
            }
          ],
          data6:[],
          model1: '',
          columns7: [
            {
              title: '单位编码',
              key: 'a',
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
              title: '单位全称',
              key: 'b'
            },
            {
              title: '单位简介',
              key: 'c'
            },
            {
              title: '所属分类',
              key: 'd'
            },
            {
              title: '干部组成',
              key: 'e'
            },
            {
              title: '创建时间',
              key: 'f'
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
                      type: 'md-create',
                    },
                    style: {
                      marginRight: '5px',
                      color:"#2d8cf0",
                      fontSize:"18px",
                      cursor:"pointer",
                    },
                    on: {
                      click: (evt) => {
                        debugger
                        // 获取值
                        console.log(params);
                        var data = {
                          a:1,
                          b:1
                        }
                        this.$router.push({path:"chinaCompany", query:data})
                      }
                    }
                  },),
                  // add by lwj---2018.12.19---添加删除操作
                  h('Icon', {
                    props: {
                      type: 'md-remove'
                    },
                    style: {
                      marginRight: '5px',
                      color:"#2d8cf0",
                      fontSize:"18px",
                      cursor:"pointer",
                    },
                    on: {
                      click: () => {
                        debugger;

                      }
                    }
                  })
                ]);
              }
            }
          ],
          // add by lwj---2018.12.19
          unitNo:null,
          unitName:null,
          unitSimpleName:null,
          part:'重点发展区域镇办',

        }
      },
      methods:{
        selectBtn(val){
          console.log(val)
          this.$emit("btn6",val)
        },
        // 创建单位
        addUnit() {
          debugger;
          var unitNo = this.unitNo;
          var unitName = this.unitName;
          var unitSimpleName = this.unitSimpleName;
          var part = this.part;
          var form = {
            OrganCode:unitNo,
            OrganFullName:unitName,
            OrganShortName:unitSimpleName,
            OrganTypeID:part,
            AddUserID:1
          }
          addUnit(form).then(res => {
            debugger;
            
          })
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

  .unitLIstFl{
    padding:0 15px;
    height:70px;
    line-height: 70px;
    display: -webkit-flex;
    justify-content: space-between;
  }
   .ivu-select-selection{
      height:40px;
    }

  .unitLIstspan{
    margin-right:10px;
    font-size: 14px;
    color: #515a6e;
  }
  .unltlistInput{
    width:180px;
    margin:0px 30px 0 0px;
  }
  .unitLIstspantwo{
    margin:0 10px 0 70px;
    font-size: 14px;
    color: #515a6e;
  }
  .unltlistfyq{
    text-align: right;
    margin-right:15px;
    height:100px;
    line-height: 100px;
  }
  .createBtLf .inputas .inputs{
    width:50vh;
    line-height: 30px;
  }
  .inputas{
    margin-top: 30px;
    display: -webkit-flex;
    -webkit-justify-content: center;
  }
  .inputas span{
    margin-right:20px;
    margin-top:5px;
    display: block;
  }
  .inputas p{
    font-size: 14px;
    margin-top: 10px;
  }
  .inputasrig{
    text-align: left;
    width: 200px;
  }
  .createZb{
    margin-top: 30px;
  }
  .createAn{
    margin-top:40px;
  }

</style>
<style>
  .ivu-table-wrapper{
    margin:0 15px;
  }
  .createZb .ivu-tabs-bar{
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
  .ivu-input-large{
    height:30px;
  }
</style>
