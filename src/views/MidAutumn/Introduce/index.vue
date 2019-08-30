<template>
  <div class="sign-ctr">
    <img class='bg' src="../../../image/Introduce_bg.png" alt="">
    <div class="dui-btn" @click="toExchange">
      <img src="../../../image/mid_dui_btn.png" alt="">
    </div>
    <div class="show-code" v-if="!isSubscribe">
      <div class="show-code-wrap">
        <p>请先关注公众号，再进行抽奖</p>
        <img src="../../../image/scan_er.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import puGetSearch from '@/utils/puGetSearch'
import { getWeCodeA } from '@/service/requestFun.js'
import { midLoginApiF, activityPayApiF } from '@/service/requestFun'
import { setToken, getToken } from '@/common/js/ut'
// @ is an alias to /src
export default {
  name: 'Introduce',
  data () {
    return {
      isSubscribe: true
    }
  },
  components: {},
  methods: {
    toExchange() {
      this.$router.push({
        name: 'Exchange'
      })
    }
  },
  beforeRouteLeave(to, from, next) {
    history.pushState(null, null, location.search.replace(/code/g, 'XX'))
    next()
  },
  watch: { },
  mounted () {}
}
</script>

<style lang="scss" scoped>
@import './index'
</style>
