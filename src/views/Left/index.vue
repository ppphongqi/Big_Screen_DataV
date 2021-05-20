<template>
  <div class="com_content">
    <Card title="展商统计">
      <div class="commercial">
        <div class="commercial_items">
          <dv-border-box-8 :reverse="true" class="pie_border">
            <l-top-pie />
          </dv-border-box-8>
          <el-button  round>400人</el-button>
        </div>
        <div class="commercial_items">
          <dv-border-box-8 :reverse="true" class="pie_border">
            <l-circle />
          </dv-border-box-8>
          <el-button  round>面积</el-button>
        </div>
        <div class="commercial_items">
          <dv-border-box-8 :reverse="true" class="pie_border">
            <LCircleShadow />
          </dv-border-box-8>
          <el-button  round>VR总数</el-button>
        </div>
        <div class="commercial_items">
          <dv-border-box-8 :reverse="true" class="pie_border">
            <!-- <l-top-pie /> -->
          </dv-border-box-8>
          <el-button  round>观众总数</el-button>
        </div>
      </div>
    </Card>
    <Card title="展品统计" >
      <div class="statistics">
        <div class="s_items" v-for="item in statisticsList" :key="item.id">
          <div class="s_items_left">
            <div class="s_items_left_img" >
              <dv-border-box-8 :reverse="true" class="img_wrapper">
                <img :src="require(`../../assets/${item.id}.jpg`)" class="img"/>
              </dv-border-box-8>
            </div>
            <div class="s_items_left_content">
              {{ item.content }}
            </div>
          </div>
          <div class="s_items_right"
          :class="{
            'font-red': item.count > 60,
            'font-blue': item.count > 50 && item.count <= 60,
            'font-yellow':  item.count > 0 && item.count <= 30,
            'font-green': item.count > 30 && item.count <= 50
            }">
            {{ item.count }}%
          </div>
        </div>
      </div>
    </Card>
    <Card title="排行" >
      <div class="rank">
        <dv-scroll-board :config="config" style="width:100%;height:100%" headerBGC="rgb(0,0,0)" />
      </div>
    </Card>
  </div>
</template>

<script>
import './index.scss';
import Card from '../../components/Card.vue';
import LTopPie from './components/LTopPie.vue';
import LCircle from './components/LCircle.vue';
import LCircleShadow from './components/LCircleShadow.vue';

export default {
  name: 'left',
  data() {
    return {
      config: {
        header: ['展品', '观看量', '好评量'],
        data: [
          ['中小学教材', '2800', '1900'],
          ['高校教材', '2700', '1800'],
          ['职教教材', '2600', '1700'],
          ['小学教材', '2500', '1600'],
          ['多媒体', '2400', '1500'],
          ['小学教材', '2300', '1400'],
          ['职教教材', '2200', '1300'],
          ['中小学教材', '2100', '1200'],
          ['高校教材', '2000', '1100'],
          ['大学教材', '1900', '1000'],
        ],
        // index: true,
        columnWidth: [250],
        align: ['center', 'center', 'center'],
        headerBGC: 'rgba( 255,255,255 , 0.1)',
        oddRowBGC: 'rgb(92,81,138)',
        evenRowBGC: 'rgb(32,41,83)',
      },
      statisticsList: [
        {
          id: 1,
          content: '高校、职教、中小学教学仪器及成套设备',
          count: 80,
        },
        {
          id: 2,
          content: '高校、职教、中小学教学仪器及成套设备',
          count: 30,
        },
        {
          id: 3,
          content: '在线教育',
          count: 70,
        },
        {
          id: 4,
          content: '多媒体教学设备',
          count: 50,
        },
        {
          id: 5,
          content: '智慧校园',
          count: 60,
        },
      ],
    };
  },
  components: {
    Card, LTopPie, LCircle, LCircleShadow,
  },
};
</script>
