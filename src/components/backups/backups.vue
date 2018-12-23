<template>
  <div>
    <div class="craeteTop">
      <p>备份还原</p>
    </div>
    <div>
      <!--input 搜索框-->
      <div class="unitLIstFl">
        <div class="logHeader">
          <span>身份</span>
          <Select class="ivSelect" v-model="model1"   style="width:200px">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>

          <span>时间</span>
          <Select class="ivSelect" v-model="model1"  style="width:200px">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>

          <div class="ivButton">
            <Button class="ivButtons" @click="modal10 = true">新建备份</Button>
            <Modal width="370"
                   title="新增备份"
                   v-model="modal10"
                   class-name="vertical-center-modal">

              <div style="text-align:center">
                <div class="ps">
                  <span class="ps-span">备份模板</span>
                  <div class="iv-ps">
                    <Button>新增单位备份</Button>
                    <Button type="primary">新增干部备份</Button>
                  </div>

                </div>
                <div class="ps">
                  <span class="ps-span">所属分类</span>
                  <div class="iv-ps">
                    <Select v-model="model1"   style="width:210px">
                      <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                  </div>
                </div>
              </div>
              <div slot="footer" style="text-align: center">
                <!--<Button type="error" size="large" long :loading="modal_loading" @click="del">Delete</Button>-->
                <Button class="add">增加</Button>
              </div>
            </Modal>
          </div>
        </div>

      </div>

    </div>
    <div >
      <Table  border :columns="columns7" :data="data6" style="text-align: center"></Table>
    </div>
    <div class="unltlistfyq">
      <Page :total="100" show-elevator />
    </div>
  </div>

</template>

<script>
    export default {
        name: "backups",
      data(){
          return{
            modal10: false,
            value1:"",
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
            model1: '',
            columns7: [
              {
                title: '时间节点',
                key: 'time',
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
                title: '模板备份',
                key: 'bf'
              },
              {
                title: '大小',
                key: 'size'
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
                        cursor:"pointer"
                      },
                      on: {
                        click: () => {
                          this.show(params.index)
                        }
                      }
                    },),
                  ]);
                }
              }
            ],
            data6: [
              {
                time: 'John Brown',
                bf: 18,
                size: 'New York No. 1 Lake Park',
              },
              {
                time: 'yaunyangn',
                bf: 38,
                size: ' Park',

              },
              {
                time: 'John ',
                bf: 28,
                size: '212df1',
              },
            ]
          }
      } ,
      // methods: {
      //   show (index) {
      //     this.$Modal.info({
      //       title: 'User Info',
      //       content: `账户ID：${this.data6[index].id}<br>单位名称：${this.data6[index].unit}<br>身份：${this.data6[index].border}`
      //     })
      //   },
      //   remove (index) {
      //     this.data6.splice(index, 1);
      //   }
      // }
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
  .unitLIstFl{
    margin: 0 15px;
    height: 70px;
    line-height: 70px;
  }
  .logHeader span{
    font-size: 14px;
    color: #515a6e;
  }
  .ivSelect{
    margin:20px 50px 20px 15px;
  }
  .ps{
    width: 100%;
    height: 80px;
    line-height: 80px;
    text-align: center;
    display: -webkit-flex;
  }
  .ps span{
    width: 25%;
    font-size:14px;
    color: black;
  }
  /*.ps .ps-span {*/
    /*margin-right:15px;*/
  /*}*/
  .ps .iv-ps{
    width: 75%;
    text-align: left;
  }
  .ivButtons{
    width: 100px;
    height: 40px;
    background: #2d8cf0;
    border-radius: 5px;
    border: none;
    color: #fff;
    font-size: 14px;
  }
  .ivButton{
    float:right;
  }
  .ivu-table ivu-table-default ivu-table-border{
    font-size: 30px;
  }
  .add{
    width: 80px;
    height: 40px;
    background: #2d8cf0;
    border-radius: 5px;
    border: none;
    color: white;
  }
  .unltlistfyq{
    text-align: right;
    margin-right:15px;
    height:100px;
    line-height: 100px;
  }
</style>
<style>

</style>
