<template>

    <div class="l_circleShadow_wrapper">
      <div id="circleShadow"></div>
    </div>

</template>

<script>
import echarts from 'echarts';

export default {
  name: 'LCircleShadow',
  data() {
    return {
      Echart: null,
    };
  },
  methods: {
    chartsInit() {
      if (!this.Echart) {
        this.Echart = this.$echarts.init(document.getElementById('circleShadow'));
      }

      const dataArr = 400;
      // const colorSet = {
      //   color: '#468EFD',
      // };
      const option = {
        xAxis: {
          splitLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          axisLine: {
            show: false,
          },
        },
        yAxis: {
          splitLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          axisLine: {
            show: false,
          },
        },

        series: [
        // 内圆
          {
            type: 'pie',
            radius: ['0', '65%'],
            center: ['50%', '50%'],
            z: 4,
            hoverAnimation: false,
            data: [{
              name: '积分',
              value: dataArr,
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(255,215,0,1)',
                  }, {
                    offset: 1,
                    color: 'rgba(255,215,0,.7) ',
                  }]),
                },
              },
              label: {
                normal: {
                  color: 'red',
                  align: 'center',
                  fontSize: 25,
                  fontWeight: '700',
                  formatter() {
                    return `${dataArr}`;
                  },
                  fontStyle: 'italic',
                  position: 'center',
                  show: true,
                },
              },
              labelLine: {
                show: false,
              },
            }],
          },
          // 刻度

          // 外一层圈
          {
            type: 'pie',
            radius: '80%',
            startAngle: 220,
            endAngle: -40,
            hoverAnimation: false,
            center: ['50%', '50%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
            },
            labelLine: {
              show: false,
            },
            data: [{
              value: 1,
            }],
            itemStyle: {
              normal: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0,
                    color: 'rgba(255,215,0,.3)',
                  }, {
                    offset: 1,
                    color: 'rgba(240,230,140,.4)',
                  }],
                },
              },
            },
          },
          {
            type: 'pie',
            radius: '95%',
            startAngle: 220,
            endAngle: -40,
            hoverAnimation: false,
            center: ['50%', '50%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
            },
            labelLine: {
              show: false,
            },
            data: [{
              value: 1,
            }],
            itemStyle: {
              normal: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0,
                    color: 'rgba(255,215,0,.3)',
                  }, {
                    offset: 1,
                    color: 'rgba(240,230,140,.4)',
                  }],
                },
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

<style lang="scss">
.l_circleShadow_wrapper{
  width:100%;
  height:100%;
  #circleShadow{
    width:100%;
    height:100%;
  }
}
</style>
