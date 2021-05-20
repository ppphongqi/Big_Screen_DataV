/* eslint-disable */
<template>
  <div class="pie_wrapper" >
    <div id="double_pie"></div>
  </div>
</template>

<script>
import 'echarts-liquidfill';
// import echarts from 'echarts';

export default {
  name: 'TopPie',
  data() {
    return {
      Echart: null,
      value1: 0.6,
      value2: 0.4,
    };
  },
  methods: {
    chartsInit() {
      if (!this.Echart) {
        this.Echart = this.$echarts.init(document.getElementById('double_pie'));
      }
      // const value1 = 0.6;
      // const value2
      // const data = [value, value, value];
      const option = {
        title: [
          {
            text: `${(this.value1 * 100).toFixed(0)}%`,
            left: '25%',
            top: '35%',
            textAlign: 'center',
            textStyle: {
              fontSize: '40',
              fontWeight: '500',
              color: '#FFFF00',
              textAlign: 'center',
              textBorderColor: 'rgba(0, 0, 0, 0)',
              textShadowBlur: '0',
              textShadowOffsetX: 0,
              textShadowOffsetY: 1,
            },
          },
          {
            text: `${(this.value2 * 100).toFixed(0)}%`,
            left: '75%',
            top: '35%',
            textAlign: 'center',
            textStyle: {
              fontSize: '40',
              fontWeight: '500',
              color: '#66CDAA',
              textAlign: 'center',
              textBorderColor: 'rgba(0, 0, 0, 0)',
              textShadowBlur: '0',
              textShadowOffsetX: 0,
              textShadowOffsetY: 1,
            },
          },
        ],
        series: [
          {
            type: 'liquidFill',
            radius: '100%',
            z: 6,
            center: ['25%', '50%'],
            color: ['#5E2612', '#8B4513', '#B22222'],
            data: [this.value1, this.value1 - 0.1, this.value1 - 0.1],
            backgroundStyle: {
              borderWidth: 1,
              color: 'transparent',
            },
            label: {
              normal: {
                formatter: '',
              },
            },
            outline: {
              show: true,
              itemStyle: {
                borderWidth: 0,
              },
              borderDistance: 0,
            },
          },
          {
            type: 'liquidFill',
            radius: '100%',
            z: 6,
            center: ['75%', '50%'],
            color: ['#734A12', '#228B22', '#006400'],
            data: [this.value2, this.value2 - 0.1, this.value2 - 0.1],
            // data: [0.6, { value: 0.5, direction: 'left' }, 0.4, 0.3],
            backgroundStyle: {
              borderWidth: 1,
              color: 'transparent',
            },
            label: {
              normal: {
                formatter: '',
              },
            },
            outline: {
              show: true,
              itemStyle: {
                borderWidth: 0,
              },
              borderDistance: 0,
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
.pie_wrapper{
  width:100%;
  height:100%;
  #double_pie{
    width:100%;
    height:100%;
  }
}
</style>
