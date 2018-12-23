<template>
  <div class="intCreate">
    <div class="intCre">
      <div class="craeteTop">
        积分申请
      </div>

      <div class="inputas">
        <span>选项</span>
        <div>
          <RadioGroup v-model="scoreType" type="button" @on-change="handChangeType">
            <Radio label="选择加分"></Radio>
            <Radio label="选择减分"></Radio>
          </RadioGroup>
        </div>
      </div>

      <div class="craeteBot">
        <div class="select">
          <h3>调整分</h3>
          <div class="iv-selectszong">
            <div class="iv-selects" v-show="addScoreDiv">
              <Select v-model="addScore" style="width:200px">
                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
              </Select>
              <span class="selespan">12项工作痕迹负项加分</span>
            </div>
            <div class="iv-selects" v-show="divScoreDiv">
              <Select v-model="divScore" style="width:200px;">
                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
              </Select>
              <span class="selespan">12项工作痕迹负项减分</span>
            </div>
          </div>
        </div>

        <!--分值input框-->
        <div class="inputas" >
          <span>分值</span>
          <div class="iv-inputs" style="text-align:left ">
            <Input  class="inputs"/>
            <p>正值为加分，负值为减分</p>
          </div>
        </div>

        <!--文本域-->
        <div class="textareas">
          <span>摘要</span>
          <div class="iv-textareas">
            <Input class="textareass" v-model="value6" type="textarea" :rows="4" placeholder="Enter something..." />
          </div>

        </div>

        <!--input框-->
        <div class="inputas">
          <span>其他分</span>
          <div class="iv-inputs">
            <Input size="large" class="inputs"/>
          </div>

        </div>
        <div class="inputas">
          <span>分值</span>
          <div class="iv-inputs">
            <Input size="large" class="inputs"/>
          </div>
        </div>
        <!--文本域-->
        <div class="textareas">
          <span>摘要</span>
          <div class="iv-textareas">
            <Input class="textareass" v-model="value6" type="textarea" :rows="4" placeholder="Enter something..." />
          </div>

        </div>

        <!-- add by lwj -上传文件 -->
        <div>
          <Upload
            ref="upload"
            :before-upload="handleUpload"
            :on-success="uploadSuccess"
            action="//jsonplaceholder.typicode.com/posts/">
            <Button icon="ios-cloud-upload-outline">浏览</Button>
          </Upload>
        </div>

        <div v-if="isEmpty==false">文件:{{file.name}}</div>
        <!-- add by lwj -上传文件 -->

        <!--点击按钮-->
        <div class="butt">
          <Button type="success" long @click="upload">点击上传文件</Button>
          <h4>支持.doc .xls .jpg .png格式文件</h4>
        </div>
        <div>
          <Button class="submit" @click="submitForm" type="primary">提交</Button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
      name: "intCreate",
      data () {
        return {
          // 判断对象是否是空
          isEmpty:true,
          // 文件
          file: {},
          // 返回的文件地址
          fileAddress: '',
          // 选择加分
          scoreType:'选择加分',
          // 加分div显示
          addScoreDiv:true,
          // 加分下拉框
          addScore:null,
          // 减分div显示
          divScoreDiv:false,
          // 减分下拉框
          divScore:null,
          value6:"",
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
          model11: '',
          model12: []
        }
      },
      created() {
        debugger;
        var a = this.file;
      },
      methods: {
        // 提交整个表单
        submitForm() {
          debugger;
          
        },
        // 上传文件前的事件钩子
        handleUpload(file) {
          // 选择文件后 这里判断文件类型 保存文件 自定义一个keyid 值 方便后面删除操作
          let keyID = Math.random().toString().substr(2);
          file['keyID'] = keyID;
          // 保存文件到总展示文件数据里
          this.file = file;
          // 保存文件到需要上传的文件数组里
          // this.uploadFile.push(file)
          // 返回 falsa 停止自动上传 我们需要手动上传
          // 判断不为空
          if(Object.keys(this.file).length == 0) {
            this.isEmpty = true;
          } else {
            this.isEmpty = false;
          }
          return false;
        },
        // 上传
        upload() {
          debugger;
          this.$refs.upload.post(this,file);
        },
        // 上传成功回调
        uploadSuccess() {
          debugger;

        },
        // 改变加分、减分类型
        handChangeType(val) {
          debugger;
          if(val == '选择加分') {// 点击的是选择加分类型
            this.addScoreDiv = true;
            this.divScoreDiv = false;
          } else if(val == '选择减分') {// 点击的是选择减分类型
            this.addScoreDiv = false;
            this.divScoreDiv = true;
          }
        }
      }
    }
</script>

<style scoped>
  .intCreate{
    width:100%;
    /*margin:0 auto;*/

  }
  .intCre{
    width:50%;
    margin:0 auto;
    border:1px solid #fff;
    background:#f5f7f9 ;
    text-align: center;
    display: -webkit-flex;
    flex-direction: column;
    align-items: center;
  }
  .craeteTop{
    width:100%;
    height:65px;
    font-size: 24px;
    font-weight: 600;
    background: #cdd0d4;
    line-height: 65px;
    color: #323232;
  }
  .craeteBot{
    width:100%;
    background: #f5f7f9;
    margin:0 auto;
    display: -webkit-flex;
    flex-direction: column;
    text-align: center;
    padding-top: 30px;
    align-items: center;
  }
  .select{
    display: -webkit-flex;
    align-items: center;
    margin:20px 0;
    width: 60%;
  }
  .select h3{
    width: 15%;
    color: black;
    /*margin-right: 35px;*/
    text-align: left;
    font-weight: 100;
    font-size: 16px;

  }
  .select .iv-selectszong{
    display: -webkit-flex;
    width: 85%;
    text-align: left;
  }

  .iv-selects{
    display: -webkit-flex;
    text-align: left;flex-direction: column;
  }
  .iv-selects .selespan{
    font-size: 14px;
    margin-top: 10px;
    color: darkgray;
    display: block;
  }

  /*input框样式*/
  .inputas{
    width: 60%;
    margin-top: 15px;
    display: -webkit-flex;
  }
  .iv-inputs{
    width: 85%;
    text-align: left;
  }
  .inputas span{
    width: 15%;
    display: block;
    /*margin-right:50px;*/
    margin-top: 15px;
    text-align: left;
  }
  .inputas p{
    /*width: 15%;*/
    font-size: 14px;
    color:darkgray;
  }
  .inputs{
    width: 420px;
    line-height: 45px;
  }

  /*文本域*/
  .textareas{
    display: -webkit-flex;
    justify-content: flex-start;
    align-items: center;
    margin: 15px 0;
    width: 60%;
  }
  .textareas span{
    display: block;
    /*margin-right:60px;*/
    text-align: left;
    width: 15%;
  }
  .iv-textareas{
    width: 85%;
    text-align: left;
  }
  .textareass{
    width: 420px;
  }
  .butt{
    margin-top:10px;
  }
  .butt h4{
    margin-top:5px;
    color: #bfbfbf;
    font-size: 14px;
  }
  .submit{
    margin:30px 0;
  }

</style>
<style>
  /*.ivu-col ivu-col-span-12{*/

  /*}*/
  /*.ivu-select-multiple .ivu-select-input{*/
    /*height: 52px;*/
  /*}*/
  .ivu-radio-wrapper{
    font-size: 16px;
  }
  .ivu-tabs-nav-scroll{
    display: inline-block;
  }

  .ivu-btn-success{
    width: 45%;
    background-color: #bfbfbf;
    border-color: #bfbfbf;
  }
  /*.ivu-btn-primary{*/
    /*width: 150px;*/
  /*}*/

</style>
