<template>
  <div class="bar_wrapper">
    <div id="bar"></div>
  </div>
</template>

<script>
import echarts from 'echarts';

export default {
  name: 'BottomBar',
  data() {
    return {
      Echart: null,
    };
  },
  methods: {
    chartsInit() {
      if (!this.Echart) {
        this.Echart = this.$echarts.init(document.getElementById('bar'));
      }
      const data = [{
        name: '类别1',
        value: 175.17,
      },
      {
        name: '类别2',
        value: 148.35,
      },
      {
        name: '系列3',
        value: 95.36,
      },
      ];
      const xAxisData = [];
      const seriesData1 = [];
      // let sum = 0;
      const barTopColor = ['#02c3f1', '#53e568', '#a154e9'];
      const barBottomColor = ['rgba(2,195,241,0.1)', 'rgba(83, 229, 104, 0.1)', 'rgba(161, 84, 233, 0.1)'];
      data.forEach((item) => {
        xAxisData.push(item.name);
        seriesData1.push(item.value);
        // sum += item.value;
      });
      const option = {
        title: {
          text: '单位%',
          top: 20,
          left: 'center',
          textStyle: {
            color: '#fff',
            fontSize: 20,
          },
        },
        grid: {
          top: '25%',
          bottom: '15%',
        },
        xAxis: {
          data: xAxisData,
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          textStyle: {
            fontSize: 20,
            fontweight: 600,
          },
          axisLabel: {
            show: true,
            margin: 25,
            align: 'center',
            formatter(params) {
              return `{b|${params}}`;
            },
            textStyle: {
              fontSize: 20,
              fontWeight: 600,
              color: '#ffffff',
              rich: {
                a: {
                  fontSize: 12,
                  color: '#ffffff',
                },
                b: {
                  height: 20,
                  fontSize: 14,
                  color: '#ffffff',
                },
              },
            },
          },
          interval: 0,
        },
        yAxis: {
          splitLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
        },
        series: [{
          name: '柱顶部',
          type: 'pictorialBar',
          symbolSize: [26, 10],
          symbolOffset: [0, -5],
          z: 12,
          itemStyle: {
            normal: {
              color(params) {
                return barTopColor[params.dataIndex];
              },
            },
          },
          label: {
            show: true,
            position: 'top',
            fontSize: 16,
          },
          symbolPosition: 'end',
          data: seriesData1,
        }, {
          name: '柱底部',
          type: 'pictorialBar',
          symbolSize: [26, 10],
          symbolOffset: [0, 5],
          z: 12,
          itemStyle: {
            normal: {
              color(params) {
                return barTopColor[params.dataIndex];
              },
            },
          },
          data: seriesData1,
        }, {
          name: '第一圈',
          type: 'pictorialBar',
          symbolSize: [47, 16],
          symbolOffset: [0, 11],
          z: 11,
          itemStyle: {
            normal: {
              color: 'transparent',
              borderColor: '#3ACDC5',
              borderWidth: 2,
            },
          },
          data: seriesData1,
        }, {
          name: '第二圈',
          type: 'pictorialBar',
          symbolSize: [62, 22],
          symbolOffset: [0, 17],
          z: 10,
          itemStyle: {
            normal: {
              color: 'transparent',
              borderColor: barTopColor[0],
              borderWidth: 2,
            },
          },
          data: seriesData1,
        }, {
          type: 'bar',
          itemStyle: {
            normal: {
              color(params) {
                return new echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [{
                    offset: 1,
                    color: barTopColor[params.dataIndex],
                  },
                  {
                    offset: 0,
                    color: barBottomColor[params.dataIndex],
                  },
                  ],
                );
              },
              opacity: 0.8,
            },
          },
          z: 16,
          silent: true,
          barWidth: 26,
          barGap: '-100%', // Make series be overlap
          data: seriesData1,
        }],
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
.bar_wrapper{
  width:100%;
  height:100%;
  #bar{
    width:100%;
    height:100%;
  }
}
</style>
