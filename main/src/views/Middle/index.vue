<template>
  <div class="com_content">
    <Card title="动态" >
      <div class="info">
        <img src="../../assets/公告.png" alt="" class="info_img">
        <div class="info_content">
          云南东络科技有限公司 李先生 138*****214 3分钟前提交了需求单
        </div>
      </div>
    </Card>
    <Card title="观展图" >
      <div class="view">
        <el-carousel :interval="10000" indicator-position="none" class="carousel">
          <el-carousel-item v-for="item in [0] " :key="item">
            <!-- <h3>{{ item }}</h3> -->
            <img :src="require(`../../assets/carousel/${item+1}.png`)" alt="" class="carousel_img">
          </el-carousel-item>
        </el-carousel>
        <div class="view_buttons">
          <a href="#">6 号馆</a>
          <a href="#">5 号馆</a>
        </div>
      </div>
    </Card>
    <Card title="新闻动态" >
      <div class="views">
        <div class="views_left">
          <img :src="require(`../../assets/views/${meetting}.jpeg`)" />
          <span>第二、三届云南省教育装备展示会衔接会</span>
        </div>
        <div class="views_right">
          <div class="views_right_items" v-for="(item, index) in itemsList" :key="item">
            <div class="views_right_items_img">
              <img
                :src="require(`../../assets/views/${index + 1}.jpeg`)"
                alt=""
                class="img_wrapper" />
            </div>
            <div class="views_right_items_content">
              {{ item.content }}
            </div>
          </div>
        </div>
      </div>
    </Card>
  </div>
</template>

<script>
import Card from '../../components/Card.vue';
import './index.scss';

export default {
  components: { Card },
  name: 'middle',
  data() {
    return {
      itemsList: [
        {
          content: '云南省教育装备培训高峰论坛',
        },
        {
          content: '新技术、新产品、新成果发布会',
        },
        {
          content: '第三届云南教育装备展示会开幕式',
        },
      ],
      meetting: 'meetting',
    };
  },
};
</script>
