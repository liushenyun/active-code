import { Domain } from '../config/index'

// 中秋节活动登陆
const midLoginApi = () => `${Domain}/api/wx/user/web/login`

// 中秋节抽奖
const midPrizeDrawApi = () => `${Domain}/api/prize/draw`

// 获取jsapi配置
const jsConfigApi = () => `${Domain}/wx/js/config`

export {
  jsConfigApi,
  midLoginApi,
  midPrizeDrawApi
};
