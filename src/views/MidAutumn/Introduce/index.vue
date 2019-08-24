<template>
  <div class="sign-ctr">
    <img class='bg' src="../../../image/Introduce_bg.png" alt="">
    <div class="dui-btn" @click="toExchange">
      <img src="../../../image/mid_dui_btn.png" alt="">
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
  watch: { },
  mounted () {
    let _search = puGetSearch()
    if (_search.code) {
      midLoginApiF({
        code: _search.code
      }).then((result) => {
        alert(result.token)
        setToken(result.token)
        console.log(result)
      }).catch((err) => {
        
      });
    } else {
      getWeCodeA()
    }
  }
}
</script>

<style lang="scss" scoped>
@import './index'
</style>
