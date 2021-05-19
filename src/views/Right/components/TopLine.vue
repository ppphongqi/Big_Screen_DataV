<template>
  <div class="line_wrapper" >
    <div id="line"></div>
  </div>
</template>

<script>
export default {
  name: 'TopLine',
  data() {
    return {
      Echart: null,
    };
  },
  methods: {
    chartsInit() {
      if (!this.Echart) {
        this.Echart = this.$echarts.init(document.getElementById('line'));
      }
      const echarts = this.$echarts;
      const colorList = ['#9E87FF', '#73DDFF', '#fe9a8b', '#F56948', '#9E87FF'];
      const option = {
        title: {
          textStyle: {
            fontSize: 12,
            fontWeight: 400,
          },
          left: 'center',
          top: '5%',
        },
        legend: {
          icon: 'circle',
          top: '90%',
          left: '35%',
          itemWidth: 6,
          itemGap: 20,
          textStyle: {
            color: '#fff',
            fontSize: 15,
            fontWeight: 600,
          },
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            label: {
              show: true,
              backgroundColor: '#fff',
              color: '#556677',
              borderColor: 'rgba(0,0,0,0)',
              shadowColor: 'rgba(0,0,0,0)',
              shadowOffsetY: 0,
            },
            lineStyle: {
              width: 0,
            },
          },
          backgroundColor: '#fff',
          textStyle: {
            color: '#5c6c7c',
          },
          padding: [10, 10],
          extraCssText: 'box-shadow: 1px 0 2px 0 rgba(163,163,163,0.5)',
        },
        grid: {
          top: '15%',
        },
        xAxis: [{
          type: 'category',
          data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月'],
          axisLine: {
            lineStyle: {
              color: '#DCE2E8',
            },
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: 'dashed',
            },
          },
          axisLabel: {
            interval: 0,
            textStyle: {
              color: '#fff',
            },
            // 默认x轴字体大小
            fontSize: 12,
            fontWeight: 600,
            // margin:文字到x轴的距离
            margin: 15,
          },
          //           axisPointer: {
          //             label: {
          //               // padding: [11, 5, 7],
          //               padding: [0, 0, 10, 0],
          //               margin: 15,
          //               // 移入时的字体大小
          //               fontSize: 12,
          //               backgroundColor: {
          //                 type: 'linear',
          //                 x: 0,
          //                 y: 0,
          //                 x2: 0,
          //                 y2: 1,
          //                 colorStops: [{
          //                   offset: 0,
          //                   color: '#fff', // 0% 处的颜色
          //                 }, {
          //                   // offset: 0.9,
          //                   offset: 0.86,
          //                   /*
          // 0.86 = （文字 + 文字距下边线的距离）/（文字 + 文字距下边线的距离 + 下边线的宽度）

          //                         */
          //                   color: '#fff', // 0% 处的颜色
          //                 }, {
          //                   offset: 0.86,
          //                   color: '#33c0cd', // 0% 处的颜色
          //                 }, {
          //                   offset: 1,
          //                   color: '#33c0cd', // 100% 处的颜色
          //                 }],
          //                 global: false, // 缺省为 false
          //               },
          //             },
          //           },
          //           boundaryGap: false,
        }],
        yAxis: [{
          type: 'value',
          axisLabel: {
            textStyle: {
              color: '#fff',
            },
            fontSize: 15,
            fontWeight: 600,
          },
          nameTextStyle: {
            color: '#666',
            fontSize: 15,
            lineHeight: 40,
          },
          splitLine: {
            lineStyle: {
              type: 'dashed',
              color: '#E9E9E9',
            },
          },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
        }, {
          type: 'value',
          position: 'left',
          axisTick: {
            show: false,
          },
          axisLabel: {
            textStyle: {
              color: '#556677',
            },
            formatter: '{value}',
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#DCE2E8',
            },
          },
          splitLine: {
            show: false,
          },
        }],
        series: [{
          name: '总人次',
          type: 'line',
          data: [10, 10, 30, 12, 15, 3, 7],
          symbolSize: 1,
          symbol: 'circle',
          smooth: true,
          yAxisIndex: 0,
          showSymbol: false,
          lineStyle: {
            width: 5,
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 0,
              color: '#FF8C00',
            },
            {
              offset: 1,
              color: '#CD853F',
            },
            ]),
          },
          itemStyle: {
            normal: {
              color: colorList[0],
              borderColor: colorList[0],
            },
          },
        }, {
          name: '总场次',
          type: 'line',
          data: [5, 12, 11, 14, 25, 16, 10],
          symbolSize: 1,
          symbol: 'circle',
          smooth: true,
          yAxisIndex: 0,
          showSymbol: false,
          lineStyle: {
            width: 5,
            color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [{
              offset: 0,
              color: '#32CD32',
            },
            {
              offset: 1,
              color: '#00FF00',
            },
            ]),
          },
          itemStyle: {
            normal: {
              color: colorList[1],
              borderColor: colorList[1],
            },
          },
        },
        ],
      };
      this.Echart.setOption(option);
    },
  },
  mounted() {
    this.chartsInit();
  },
};
</script>

<style lang="scss" scoped>
.line_wrapper{
  width:100%;
  height:100%;
  #line{
    width:100%;
    height:100%;
  }
}
</style>
