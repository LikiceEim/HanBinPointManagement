<template>
    <div>
      <div class="craeteTop">
        干部列表
      </div>
      <div class="unltlistBot">
        <!--所属分类-->
        <div class="unitLIstFl">
          <div>
            <span class="unitLIstspan">单位分类 </span>
            <Select v-model="model1" style="width:200px"  >

              <Option  v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
            <span class="unitLIstspans">职位级别 </span>
            <Select v-model="model2" style="width:200px" >
              <!--@on-change="selectBtn"-->
              <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
            <!--属搜input go-->
            <span class="unitLIstspans">关键字 </span>
            <Input class="unltlistInput" v-model="value1" placeholder="搜索关键字..."/>
            <Button type="primary">搜索</Button>
          </div>
         <div>
           <Button to="CreateLeader" type="primary">创建干部</Button>
         </div>

        </div>
        <!--单位明细列表-->
        <div>
          <Table  border :columns="columns7" :data="data6"></Table>
        </div>
        <!--分页器-->
          <div class="unltlistfyq">
            <!--<div class="aaa">-->
            <Page :total="100"  show-total />
            <!--</div>-->

          </div>

      </div>
    </div>
</template>

<script>
    export default {
        name: "leaderList",
      props:['td'],
      computed:{
          fathathtd(val){
            // console.log(this.td)
            return this.td
          }
      },
      watch:{
        fathathtd(val){
          this.data6=val
        }
      },
      data () {
        return {

          cityList: [
            {
              value: 'qqq',
              label: 'qqq'
            },
            {
              value: 'www',
              label: 'www'
            },
            {
              value: 'eee',
              label: 'eee'
            },
            {
              value: 'sss',
              label: 'sss'
            },
            {
              value: 'ddd',
              label: 'ddd'
            },
            {
              value: 'ggg',
              label: 'ggg'
            }
          ],
          value1:"",
          data6:[],
          list:[],
          model1: '',
          model2: '',
          columns7: [
            {
              title: '姓名',
              key: 'name',
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
              title: '性别',
              key: 'sex'
            },
            {
              title: '出生年月',
              key: 'birth'
            },
            {
              title: '所在单位',
              key: 'unit'
            },
            {
              title: '现任职务',
              key: 'present'
            },
            {
              title: '级别',
              key: 'rank'
            },
            {
              title: '任职时间',
              key: 'time'
            },
            {
              title: '积分',
              key: 'integral'
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
                      click: () => {
                        // this.show(params.leaPerInfor)
                        // debugger
                        this.$router.push("LeaPerInfor")
                      }
                    }
                  },),
                ]);
              }
            }
          ],
        }
      },
      methods:{
        btn1(val){
          //debugger;
          console.log(val),
          this.list.push(val)
          // this.$emit("selectBtn",this.list)

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
    height: 70px;
    line-height: 70px;
    display:-webkit-flex;
    -webkit-justify-content: space-between;
  }
  .unitLIstspan{
    margin-right:10px;
    font-size: 14px;
    color: #515a6e;
  }
  .unitLIstspans{
    margin:0 10px 0 60px;
    font-size: 14px;
    color: #515a6e;
  }
  .unltlistInput{
    width:180px;
    margin:0px 10px 0 0px;
  }
  .unltlistfyq{
    margin-right:15px;
    line-height: 100px;
    text-align: right;
  }

</style>
<style>


</style>
