<template>
  <div class="l_circle_wrapper">
    <div id="l_circle"></div>
  </div>
</template>

<script>
export default {
  name: 'LCircle',
  data() {
    return {
      Echart: null,
    };
  },
  methods: {
    chartsInit() {
      if (!this.Echart) {
        this.Echart = this.$echarts.init(document.getElementById('l_circle'));
      }
      const handred = 1600;
      const point = 1600;

      const option = {
        title: {
          // eslint-disable-next-line no-useless-concat
          text: `${point}` + '\n' + '㎡',
          x: 'center',
          y: 'center',
          textStyle: {
            fontWeight: 'bolder',
            color: '#00e04c',
            fontSize: '18',
            fontStyle: 'italic',
          },
        },
        tooltip: {
          formatter(params) {
            return `${params.name}：${params.percent} %`;
          },
        },
        legend: {
          show: false,
          itemGap: 12,
          data: ['占比', '剩余'],
        },

        series: [{
          name: 'circle',
          type: 'pie',
          clockWise: true,
          radius: ['60%', '90%'],
          itemStyle: {
            normal: {
              label: {
                show: false,
              },
              labelLine: {
                show: false,
              },
            },
          },
          hoverAnimation: false,
          data: [{
            value: point,
            name: '占比',
            itemStyle: {
              normal: {
                color: { // 颜色渐变
                  colorStops: [{
                    offset: 0,
                    color: '#00e04c', // 0% 处的颜色
                  }, {
                    offset: 1,
                    color: '#00e04c', // 100% 处的颜色1
                  }],
                },
                label: {
                  show: false,
                },
                labelLine: {
                  show: false,
                },
              },
            },
          }, {
            name: '剩余',
            value: handred - point,
            itemStyle: {
              normal: {
                color: '#DFEFFE',
              },
            },
          }],
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
.l_circle_wrapper{
  width:100%;
  height:100%;
  #l_circle{
    width:100%;
    height:100%;
  }
}
</style>
