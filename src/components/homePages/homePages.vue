<template>
  <div>
    <div class="homeTop">
      <div class="homeDiv">
        <img src="../../assets/image/home1.gif" alt="">
        <div class="homes">
          <h4>35</h4>
          <span>单位</span>
        </div>
      </div>
      <div class="homeDiv">
        <img src="../../assets/image/home1.gif" alt="">
        <div class="homes">
          <h4>35</h4>
          <span>单位</span>
        </div>
      </div>
      <div class="homeDiv">
        <img src="../../assets/image/home1.gif" alt="">
        <div class="homes">
          <h4>35</h4>
          <span>单位</span>
        </div>
      </div>
      <div class="homeDiv">
        <img src="../../assets/image/home1.gif" alt="">
        <div class="homes">
          <h4>35</h4>
          <span>单位</span>
        </div>
      </div>
    </div>
    <!--<div class="homeBot">-->
      <!--<div class="homeBot-lf">-->

      <!--</div>-->
      <!--<div class="homeBot-ri">-->
        <!--<div class="honeBot-ech">-->
          <!--<div class="honeBot-ech-one">-->
            <!--fdfd-->
          <!--</div>-->
          <!--<div id="myChart" class="honeBot-ech-one">-->
          <!--</div>-->
          <!--<div class="honeBot-ech-one">-->
            <!--fdf-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
  </div>
</template>

<script>
    export default {
      name: "homePages",
      data() {
        return {
          theme1: 'light',
        }
      },
      mounted(){
        // this.drawLine();
      },
    //   methods:{
    //     drawLine(){
    //       // 基于准备好的dom，初始化echarts实例
    //       let myChart = this.$echarts.init(document.getElementById('myChart'));
    //       myChart.setOption({
    //         title: { text: '项目计量统计' },
    //         legend:{ name:"住宅", name:"办公"},
    //         xAxis: {
    //           type: 'category',
    //           data: ['12/07', '12/08', '12/09', '12/10', '12/11'],
    //           axisTick:{
    //             show:false,
    //           }
    //
    //         },
    //         yAxis: {
    //           type: 'value'
    //         },
    //         series: [{
    //           name:"住宅",
    //           data: [820, 932, 901, 934, 1290],
    //           type: 'line',
    //           smooth: true
    //         },{
    //           name:"办公",
    //           data: [932, 1032, 661, 1234, 1090],
    //           type: 'line',
    //           smooth: true
    //         }]
    //       })
    //     }
    //   }
    //     // methods:{
    //   //   btn1(){
    //   //     // debugger;
    //   //       console.log(this.value1);
    //   //   }
    //   // }
     }
</script>

<style scoped>
.homeTop{
  width: 100%;
  height: 125px;
  background: #eff0f6;
  display: -webkit-flex;
  -webkit-justify-content: space-between;
  -webkit-align-items: center;
}
.homeDiv{
  display: -webkit-flex;
  /*width: 25%;*/
}
.homeDiv img{
    width: 170px;
    height: 98px;
    display: block;
  }
  .homes{
    display: -webkit-flex;
    width: 170px;
    height: 98px;
    flex-direction: column;
    -webkit-justify-content: center;
    -webkit-align-items: center;
    background: #fff;
  }
  .homes h4{
  font-size: 40px;
  }
  .homes span{
    font-size: 18px;
    display: block;
  }
  .homeBot{
    width: 100%;
    height: 100%;
    background: aqua;
    display: -webkit-flex;
  }
  .homeBot-lf{
    width: 35%;
    height: 500px;
    background: antiquewhite;
  }
.homeBot-ri{
  width: 65%;
  height: 500px;
  background: skyblue;
}
  .honeBot-ech{
    height: 40%;
    width: 100%;
    background: aliceblue;
    display: -webkit-flex;
  }
  .honeBot-ech-one{
    height: 100%;
    border: 1px solid red;
    width: 33.3%;
  }
</style>
