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
        <dv-scroll-board :config="config" style="width:100%;height:93%" />
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
          ['<span style="color:#37a2da;">行1列1</span>', '行1列2', '行1列3'],
          ['行2列1', '<span style="color:#32c5e9;">行2列2</span>', '行2列3'],
          ['行3列1', '行3列2', '<span style="color:#67e0e3;">行3列3</span>'],
          ['行4列1', '<span style="color:#9fe6b8;">行4列2</span>', '行4列3'],
          ['<span style="color:#ffdb5c;">行5列1</span>', '行5列2', '行5列3'],
          ['行6列1', '<span style="color:#ff9f7f;">行6列2</span>', '行6列3'],
          ['行7列1', '行7列2', '<span style="color:#fb7293;">行7列3</span>'],
          ['行8列1', '<span style="color:#e062ae;">行8列2</span>', '行8列3'],
          ['<span style="color:#e690d1;">行9列1</span>', '行9列2', '行9列3'],
          ['行10列1', '<span style="color:#e7bcf3;">行10列2</span>', '行10列3'],
        ],
        // index: true,
        columnWidth: [250, 100, 100],
        align: ['center'],
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
