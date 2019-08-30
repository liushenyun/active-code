import Vue from "vue";
import fetch from './index';
import packagePromise from './packagePromise'
import {
  midLoginApi, midPrizeDrawApi, userIsloginApi
} from './apiUrl';
import { APP_ID } from '../config'
import Validate from './Validate';
import { aesEncrypt } from "../utils/dtAes";
import isEmpty from "../utils/isEmpty";
import { send } from './formdata';

/* ==== 用户http请求提示 =====  */
// const SuccessTips = (con, callbck, type = 'success') => {
//   Vue.prototype.$message({
//     showClose: true,
//     message: con,
//     duration: 1500,
//     type: type
//   });
//   setTimeout(() => {
//     callbck && callbck()
//   }, 1400);
// };

// 判断用户是否登陆和关注
const userIsloginApiF = (data = {}, fun) => packagePromise((resolve, reject) => {
  // debugger
  fetch({
    url: userIsloginApi(),
    method: 'GET',
    data: {}
  }, fun)
    .then(msg => {
      console.log(msg)
      // debugger
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 中秋节登录
const midLoginApiF = (data, fun) => packagePromise((resolve, reject) => {
  fetch({
    url: midLoginApi(),
    method: 'POST',
    data
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 中秋节抽奖
const midPrizeDrawApiF = (data, fun) => packagePromise((resolve, reject) => {
  fetch({
    url: midPrizeDrawApi(),
    method: 'POST',
    data
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 获取微信code
const getWeCodeA = () => {
  let appid = APP_ID
  let REDIRECT_URI = encodeURIComponent(location.href)
  // let REDIRECT_URI = 'http://testweixin.51vip.biz/mid'
  let url = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect`
  location.replace(url)
}

export {
  // SuccessTips,
  getWeCodeA,
  midLoginApiF,
  midPrizeDrawApiF,
  userIsloginApiF
}
