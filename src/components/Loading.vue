<template>
  <transition name="fade">
    <div id="loading" v-if="isLoading">
      <div class="box">
        <img src="./loaders/circles.svg">
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'loading',
  computed: {
    ...mapGetters(['isLoading'])
  }
}
</script>

<style lang="scss">
@import "../common/css/rem";
@import "../common/css/mixin";
#loading{
  position: fixed;
	top: 0;
  left: 0;
	right: 0;
  bottom: 0;
  z-index: 9999;
  @include flex(center, center);
  background-color: rgba(255, 255, 255, 0.5);
  .box{
    height: rem(120);
    width: rem(120);
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>