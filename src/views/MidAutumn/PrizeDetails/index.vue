<template>
  <div class="PrizeDetails-ctr">
    <div class="p-top-img">
      <img v-if="codeType == 1" class="p-img" src="../../../image/d_01.png" alt="">
      <img v-else-if="codeType == 2" class="p-img" src="../../../image/d_02.png" alt="">
      <img v-else-if="codeType == 3" class="p-img" src="../../../image/d_03.png" alt="">
      <img v-else-if="codeType == 4" class="p-img" src="../../../image/d_04.png" alt="">
      <img v-else-if="codeType == 5" class="p-img" src="../../../image/d_05.png" alt="">
      <img v-else-if="codeType == 6" class="p-img" src="../../../image/d_06.png" alt="">
      <img v-else-if="codeType == 7" class="p-img" src="../../../image/d_07.png" alt="">
      <p v-if="codeType == 6" class="code-text">年卡兑换码：{{vipCode}}</p>
      <p v-else-if="codeType == 7" class="code-text">月卡兑换码：{{vipCode}}</p>
    </div>
    <div class="p-wrap">
        <div class="p-con">
          

          <div v-if="codeType == 6 || codeType == 7">
              <p>&nbsp;&nbsp; 1, 扫描小程序码,进入兑奖页面.</p>
              <p>&nbsp;&nbsp; 2, 输入月卡兑换码，成为{{codeType == 6? '年卡':'月卡'}}会员.</p>
          </div>

          <div v-else>
              <p>&nbsp;&nbsp; 1, 扫描“成氏商城”客服微信.</p>
              <p>&nbsp;&nbsp; 2, 发送获奖截图至客服微信上,告知获奖本人的相关信息（姓名、地址）,安排发放礼品.</p>
              <p>&nbsp;&nbsp; * 奖品发放时间：于活动结束后的5个工作日内.</p>
          </div>
         
        </div>
    </div>

    <div class="p-scan-code">
      <img v-if="codeType == 6 || codeType == 7" src="../../../image/scan_xiao.png" alt="">
      <img v-else src="../../../image/kf.png" alt="">
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'PrizeDetails',
  data () {
    return {
      vipCode: '',
      codeType: ''
    }
  },
  components: {  },
  methods: {},
  watch: { },
  mounted () {
    let { vipCode, codeType} = this.$route.params
    this.vipCode = vipCode
    this.codeType = codeType
  }
}
</script>

<style lang="scss" scoped>
@import './index'
</style>
