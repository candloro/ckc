import request from '@/utils/request.js'

/* 钱包登录 */
export const login = (walletData) => {
  return request({
    url: '/auth/login',
    method: 'post',
    data: walletData,
  })
}

/* 查询阶段信息 */
export const getStagesInfo = () => {
  return request({
    url: '/stages/current-and-next',
    method: 'get',
  })
}

/* 查询算力挖矿奖励 */
export const getMiningRewards = () => {
  return request({
    url: '/Miners/rewards',
    method: 'get',
  })
}

/* 获取奖励 */
export const getHoldersRewards = (address) => {
  return request({
    url: `/holders/rewards?address=${address}`,
    method: 'get',
  })
}

/* 获取用户信息 */
export const getUserInfo = (address) => {
  return request({
    url: `/users/info?address=${address}`,
    method: 'get',
  })
}

/* 绑定邀请码 */
export const bindInviteCode = (inviteCode) => {
  return request({
    url: '/users/bindInviteCode',
    method: 'post',
    data: { inviteCode },
  })
}

/* 获取交易记录 */
export const getTransactionsList = ({address ,type }) => {
	console.log(type,"type");
  return request({
    url: `/transactions/list?address=${address}&type=${type}`,
    method: 'get',
  })
}
