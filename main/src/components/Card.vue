<template>
  <div class="card_wrapper">
    <div class="card_wrapper_title">{{ title }}</div>
    <div class="card_wrapper_content">
      <slot>

      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: {
    title: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.card_wrapper{
  width: 100%;
  margin-top:.15rem;
  &_title {
    width:95%;
    background: linear-gradient(to right, rgb(0,159,248) 0%,rgba(0,0,0, 0) 60%);
    // background: plum;
    font-weight: 600;
    text-align: left;
    padding-left:.1rem;
    line-height: .35rem;
    font-size: .2rem;
  }
}
</style>
