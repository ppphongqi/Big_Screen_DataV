<template>
  <div class="com_content">
    <Card title="展商统计">
      <div class="commercial">
      </div>
    </Card>
    <Card title="展品统计" >
      <div class="statistics"></div>
    </Card>
    <Card title="排行" >
      <div class="rank">

      </div>
    </Card>
  </div>
</template>

<script>
import './index.scss';
import Card from '../../components/Card.vue';

export default {
  name: 'left',
  components: {
    Card,
  },
};
</script>
