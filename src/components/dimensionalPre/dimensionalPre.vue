/*
 * @Author: Willynn 
 * @Date: 2018-12-15 15:58:28 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-12-22 20:14:14
 */

 <template>
  <div>
      <div class="craeteTop">
        分维度展示
      </div>
      <div>区域平均分</div>
      <div ref="areAverage"></div>
      <div>年龄平均分</div>
      <div ref="ageAverage"></div>
      <div>类型积分</div>
      <div ref="typeAverage"></div>
  </div>
 </template>
 
 <script>
 export default {
   name: 'dimensionalPre',
   data() {
     return{
       // 区域平均分数据
       areAverageData: {},
       // 年龄平均分数据
       ageAverageData: {},
       // 类型积分数据
       typeAverageData: {}
     }
   },
   props:['echartsInfo'],
   watch:{
     echartsInfo: {
       handler(newVal, oldVal) {
         debugger;

       },
       deep: true
     }
   },
   created() {
     debugger;
     
   },
   methods: {
     // 先规整数据
     organizeData() {

     },
     // 画图
     Draw() {
       debugger;

     }
   }
 }
 </script>
 