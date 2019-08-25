<template>
  <div class="exchange-ctr">
    <div class="code-con">
      <p class="code-title1">请输入10位兑换码</p>
      <input v-model="code" class="code-input" type="text" maxlength="10" placeholder="请输入兑换码" />
      <div class="code-btn" @click="duiA">立即兑换</div>
      <p class="code-title2">每张卡片可兑一次大奖</p>
    </div>

    <div class="dui-wrap" v-if="showPop">
      <div class="dui-img-wrap" @click="toDetails">
        <img v-if="codeType == 1" src="../../../image/j_01.png" alt="">
        <img v-else-if="codeType == 2" src="../../../image/j_02.png" alt="">
        <img v-else-if="codeType == 3" src="../../../image/j_03.png" alt="">
        <img v-else-if="codeType == 4" src="../../../image/j_04.png" alt="">
        <img v-else-if="codeType == 5" src="../../../image/j_05.png" alt="">
        <img v-else-if="codeType == 6" src="../../../image/j_06.png" alt="">
        <img v-else-if="codeType == 7" src="../../../image/j_07.png" alt="">
      </div>
      
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { midPrizeDrawApiF } from '@/service/requestFun'
import { getToken } from '@/common/js/ut.js'
export default {
  name: 'Exchange',
  data () {
    return {
      code: '',
      imgurl: `../../../image/j_01.png`,
      vipCode: '',
      codeType: '',
      showPop: false
    }
  },
  components: {  },
  methods: {
    toDetails() {
      this.$router.push({
        name: 'PrizeDetails',
        params: {
          codeType: this.codeType,
          vipCode: this.vipCode
          // codeType: this.codeType,
          // vipCode: this.vipCode
        }
      })
    },
    duiA() {
      let _code = this.code
      if (_code.length != 10) {
        this.$toast('兑换码必须是10位数')
        return
      }
      midPrizeDrawApiF({
        code: _code
      }).then((result) => {
        // 1:"JBL free X蓝牙无线耳机"
        // 2:"未易舒适护颈乳胶枕头"
        // 3:"成氏文化月饼-七星伴月"
        // 4:"成氏文化月饼-三生有幸"
        // 5:乳胶毛巾"
        // 6:成氏商城年卡会员"
        // 7:成氏商城月卡会员
        let { type, vipCode } = result
        this.codeType = type
        this.vipCode = vipCode
        this.showPop = true
      }).catch((err) => {
        
      });
    }
  },
  watch: { },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
@import './index'
</style>
