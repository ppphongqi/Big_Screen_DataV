<template>
  <div class="index">
    <div class="content">
      <div class="title_top">

        <div class="title_top_content">
          <dv-border-box-12>
            <div class="title_top_content_title">第三届云南教育装备展示会</div>
          </dv-border-box-12>
        </div>
        <div class="title_top_time">
          {{ time }}
        </div>
      </div>
      <div class="main_content">
        <div class="main_content_left">
          <dv-border-box-12><left /></dv-border-box-12>
          <!-- <left /> -->
        </div>
        <div class="main_content_middle">
          <dv-border-box-12><middle /></dv-border-box-12>
        </div>
        <div class="main_content_right">
          <dv-border-box-12><right /></dv-border-box-12>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import './index.scss';
// import moment from 'moment';
import left from '../Left/index.vue';
import middle from '../Middle/index.vue';
import right from '../Right/index.vue';

export default {
  data() {
    return {
      time: '',
    };
  },
  components: {
    left,
    middle,
    right,
  },
  computed: {

  },
  mounted() {

  },
  created() {
    // window.timer = setInterval(() => {
    //   this.time = moment().format('YYYY-MM-DD HH:mm:ss');
    // }, 1000);
  },
  beforeDestroy() {
    window.clearInterval(window.timer);
  },
};

</script>
