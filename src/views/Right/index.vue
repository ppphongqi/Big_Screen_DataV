<template>
  <div class="com_content">
    <Card title="直播" >
      <div class="living">
        <div class="living_top">
          <top-pie />
        </div>
        <div class="living_bottom">
          <div>总人次</div>
          <div>观看场次</div>
        </div>
        <div class="living_line">
          <top-line />
        </div>
      </div>
    </Card>
    <Card title="线上成果" >
      <div class="online_result">
        <bottom-bar />
      </div>
    </Card>
  </div>
</template>

<script>
import Card from '../../components/Card.vue';
import TopPie from './components/TopPie.vue';
import TopLine from './components/TopLine.vue';
import BottomBar from './components/BottomBar.vue';
import './index.scss';

export default {
  components: {
    Card, TopPie, TopLine, BottomBar,
  },
  name: 'right',
};
</script>
