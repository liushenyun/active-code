<template>
  <div class="exchange-ctr">
    <div class="code-con">
      <p id="content"> 11月8号上午10点，成氏商城试运行首次会员日活动推出仅2小时，就吸引了大量用户参与，
        导致服务器拥堵长达半小时。应广大会员用户的要求，商城团队连夜新开发多项功能如月卡升级功能，
        有用户反馈：此次活动力度甚至超过双11，1元就能买超值大物件，薅羊毛也不过如此......
      </p>

      <p><img src="../../image/fire.png">成氏商城会员日活动火热进行中<img src="../../image/fire.png"></p>
        <p class="num"><img src="../../image/laba.png">新老年卡会员1元购</p>
        <p class="num"><img src="../../image/laba.png">购物满额任性送金条</p>
        <p class="num"><img src="../../image/laba.png">多款商品拼团抄底价</p>
        <p class="num"><img src="../../image/laba.png">全场精品低至0.1折</p>
      <p class="bottom">会员日超级福利，倾情回馈，火热放送！</p>
      <div class="img" style="text-align: center;margin-top: 0.5rem">
        <img src="../../image/cheng2.png" alt="" style="height: 3rem;width: 3rem">
      </div>
    </div>

  </div>

</template>

<script>
// @ is an alias to /src
import wechat from "../../common/js/wechat";
import { jsConfigApi } from '../../service/apiUrl';

export default {
  name: 'Exchange',
  data () {
    return {

    }
  },
  components: {  },
  methods: {
      shareFriend () {
          let iners = [
              wechat.properties.interface.updateAppMessageShareData,
          ];
          let desc = this.description;
          if (desc == null || desc == '') {
              let dom = document.getElementById('content');
              let text = dom.innerText;
              desc = text.substring(0, 10);
          }
          let icon = "https://csfamily-1259120104.cos.ap-guangzhou.myqcloud.com/static/logo.jpg";
          let param = {
              title: this.title, // 分享标题
              link: location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
              imgUrl: icon,
              desc: desc
          };
          wechat.config(iners, jsConfigApi(), function (r) {
              wx.ready(function () {
                  wechat.updateTimelineShareData(param); //分享朋友圈
                  wechat.updateAppMessageShareData(param); //分享给好友
              });
          });
      },
  },
  watch: { },
  mounted () {
      this.shareFriend();
  }
}
</script>

<style lang="scss" scoped>
@import 'index'
</style>
