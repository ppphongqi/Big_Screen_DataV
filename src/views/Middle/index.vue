<template>
  <div class="com_content">
    <Card title="动态" >
      <div class="info"></div>
    </Card>
    <Card title="观展图" >
      <div class="view"></div>
    </Card>
    <Card title="新闻动态" >
      <div class="views"></div>
    </Card>
  </div>
</template>

<script>
import Card from '../../components/Card.vue';
import './index.scss';

export default {
  components: { Card },
  name: 'middle',
};
</script>
