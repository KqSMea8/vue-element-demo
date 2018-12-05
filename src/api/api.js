import axios from 'axios';

let base = 'http://192.168.1.133:8080/jpl-wechat';

export const requestLogin = params => {
    return axios.post(`${base}/login`, params).then(res => res.data);
};

export const getUserList = params => {
    return axios.get(`${base}/user/list`, {params: params});
};
//客房订单查询
export const getRoomList = params => {
    return axios.get(`${base}/demo/roomList.do`, {params: params});
};
//获取订单信息
export const getOrderInfo = params => {
	return axios.get(`${base}/manage/selectCkInfo.do`, {params: params});
};
//温泉订单查询
export const getHotList = params => {
    return axios.get(`${base}/demo/hotList.do`, {params: params});
};
//餐饮订单查询
export const getRestList = params => {
    return axios.get(`${base}/demo/restList.do`, {params: params});
};
//会议室订单查询
export const getMeetList = params => { 
    return axios.get(`${base}/demo/meetList.do`, {params: params});
};
//客源分析
export const reportCustSource = params => {
    return axios.get(`${base}/demo/reportCustSource.do`, {params: params});
};
//入住率分析
export const reportOccupancy = params => {
    return axios.get(`${base}/demo/reportOccupancy.do`, {params: params});
};

//操作
export const funDo = params => {
    return axios.get(`${base}/demo/funDo.do`, {params: params});
};

export const removeUser = params => {
    return axios.get(`${base}/user/remove`, {params: params});
};

export const batchRemoveUser = params => {
    return axios.get(`${base}/user/batchremove`, {params: params});
};

export const editUser = params => {
    return axios.get(`${base}/user/edit`, {params: params});
};

export const addUser = params => {
    return axios.get(`${base}/user/add`, {params: params});
};