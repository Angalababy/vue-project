//封装发送ajax函数模块
//返回promise对象
//axios发送请求

import axios from 'axios'


export default function ajax(url,data={},method='GET') {
  return new Promise((resolve,reject)=>{
    let promise
    if(method==='GET'){
      promise= axios.get(url,{
        params:data
      })
    }else {
      promise=axios.post(url,data)
    }
    promise
      .then((response)=>{
        resolve(response.data)
      })
      .catch((err)=>{
        console.log(err);
      })
  })
}
