<template>
  <div class="logManage">
    <div class="craeteTop">
      日志管理
    </div>
    <div >
      <div class="unitLIstFl">
        <!--input 搜索框-->
        <div class="logHeader">
          <span>身份</span>
          <Select class="ivSelect" v-model="model1" style="width:200px">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>

          <span>时间</span>
          <Select class="ivSelect" v-model="model1"  style="width:200px">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>

          <Input class="unltlistInput" v-model="value1" placeholder="搜索关键字..." style="width:200px;" />
          <Button type="primary" >搜索</Button>
        </div>
      </div>


      <!--表格-->
      <div>
        <Table  border :columns="columns7" :data="data6"></Table>
      </div>
      <!--分页器-->
      <div>
        <div class="unltlistfyq">
          <Page :total="100" show-elevator />
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import {queryLog} from '@/api/logManage'
    export default {
      name: "logManage",
      data () {
        return {
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
              title: '身份',
              key: 'body',
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
              title: '账户',
              key: 'state'
            },
            {
              title: '所在单位',
              key: 'unit'
            },
            {
              title: '访问IP',
              key: 'IP'
            },
            {
              title: '方式',
              key: 'gets'
            },{
              title: '操作日志',
              key: 'users'
            },{
              title: '访问时间',
              key: 'time'
            },
          ],
          data6: [
            {
              body: 'John Brown',
              state: 18,
              unit:'fdd',
              IP: 'New York No. 1 Lake Park',
              gets: '33',
              users: 'New ',
              time: 'Newere232',
            },
            {
              body: 'John fsadBrown',
              state: 32,
              unit:'fdd',
              IP: 'New York No. 1 Lake Park',
              gets: 'Newdfa1 Lake Park',
              users: 'N234 York No. 1 Lake Park',
              time: 'N342343e Park',
            },
          ]
        };
      },
      created() {
        this.queryData();
      },
      methods: {
        // 初始化查询数据
        queryData() {
          debugger;
          
        },
        show (index) {
          this.$Modal.info({
            title: 'User Info',
            content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
          })
        },
        remove (index) {
          this.data6.splice(index, 1);
        }
      }
  }

</script>

<style scoped>
  .logManage{
    /*padding:20px 15px 0;*/
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
  .unltlistInput{
    margin:20px 15px 20px 60px;
  }
  .unltlistfyq{
    text-align: right;
    margin-right:15px;
    height:100px;
    line-height: 100px;
  }
</style>
