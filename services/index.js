import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios"
import { useEffect, useState } from "react";
const axiosInstance = axios.create({
  baseURL: 'your_api_base_url', // Replace with your API base URL
});

axiosInstance.interceptors.request.use(
  config => {
    const token =  getAuthToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

export const LoginUser = async (data) => {
    console.log(data, "login user data");
    // console.log(process.env.NEXT_PUBLIC_REVIEW_BEE_NEXT)
        try {
        const res = await axios.post(`http://174.138.3.35/collect_review/public/index.php/api/login`, data, { headers:{ 'content-Type' : 'application/json',}})     
        //   console.log(res)
          // toast.success('Successfully Added')
          return res
        }
        catch (err) {
          console.log(err.response.data.message)
            toast.error(`${err.response.data.message}`)
          return err 
        }
      }
export const getPostDat = async (data) => {
console.log(data, "login user data");
// console.log(process.env.NEXT_PUBLIC_REVIEW_BEE_NEXT)
    try {
    const res = await axios.get(`http://jsonplaceholder.typicode.com/posts`, null, { headers:{ 'content-Type' : 'application/json',}})     
    //   console.log(res)
      // toast.success('Successfully Added')
      return res
    }
    catch (err) {
      console.log(err.response.data.message)
        toast.error(`${err.response.data.message}`)
      return err 
    }
  }

  export const getAllReview = async (data) => {
              try {
              const res = await axios.post(`http://174.138.3.35/collect_review/public/index.php/api/integration/get-all-review?page=1`, null, { 
                headers:{
                'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMzEyNzc2ZmFiZGQyYjllYTBiMWM1ODRjNmI0Mzg2NzQ5YmVlY2YwM2ZlMGIwOGE4NDgxMmFkYmRlNDcyZDNiNTE3NjkxY2RmOGNiYjQzNTAiLCJpYXQiOjE3MTM3NjQxMzIuNjEwMjM3LCJuYmYiOjE3MTM3NjQxMzIuNjEwMjQzLCJleHAiOjE3NDUzMDAxMzIuNTk2Njc2LCJzdWIiOiIxNSIsInNjb3BlcyI6W119.ejjZExqN7EhoXAp0p_wUeBVq6gzQlOGBNzAhmbXyKzCzVdL5pw5BcySlns1K2rLn5KoyVU8kw_-VJfT3RWe_UB83uakzz47-w1fd2a89NpwIY1e36eKbOFS9QLpX6xDzeiLou1RS06Lpw66ukD5MdsPJrooIiuleD_2KjEMfXjF0PRRn3khk0smi1ze4C7P1HCzWplXosG4OMSw_zeyBgVSDp3WNv7rHfOIFlt9vSjLk0BmdwhV5a61IA948txJQyMRmTAtXy06C7enSQ39S6DQiNPolCtHvJkqdkYE2A8nlQyVt-aeRUgwFPqXdlBXSwfe5E9FB5Pyis1OJykwxXM6b3e_VzoP6sCYH-8TO_3C38W-XHuiWVAnQdnc673HEK0j8evKMNotnjEJf4hLqsae4ufmJNOiOXdgANZL-gxdSllX7HVWh1H2pJk9clAI8ZhL0fe9qTMTrtpCoypc7jF_5tAyQFKnxI632cHHyjedVByA9Nog-a3_rqduMTmsvc8km4bo-ss1u84L_DrS4IrYoJnP3sEiRgI8dMDwHvwpaNm51tvVIY9oLBRRg3UFYxvq-TaR69WVatkgd2ilPFIu_818tTzjsopF95PBlV_09qurHSGMnH3nKq7tjqSlprgG3vZiKxHgsaikbjvpzdOnU8sSdtsO74HjmRyf4FmA`,
                'Accept': 'application/json',
                'Content-Type': 'application/json',          
              }})     
                console.log(res,"mlk214")
                // toast.success('Integrated Successfully') 
                return res
              }
              catch (err) {
                  // toast.error('error')
                return err 
              }
  }

  export const listCompany = async (data) => {
    axios.defaults.headers.common["Authorization"]=`Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMzEyNzc2ZmFiZGQyYjllYTBiMWM1ODRjNmI0Mzg2NzQ5YmVlY2YwM2ZlMGIwOGE4NDgxMmFkYmRlNDcyZDNiNTE3NjkxY2RmOGNiYjQzNTAiLCJpYXQiOjE3MTM3NjQxMzIuNjEwMjM3LCJuYmYiOjE3MTM3NjQxMzIuNjEwMjQzLCJleHAiOjE3NDUzMDAxMzIuNTk2Njc2LCJzdWIiOiIxNSIsInNjb3BlcyI6W119.ejjZExqN7EhoXAp0p_wUeBVq6gzQlOGBNzAhmbXyKzCzVdL5pw5BcySlns1K2rLn5KoyVU8kw_-VJfT3RWe_UB83uakzz47-w1fd2a89NpwIY1e36eKbOFS9QLpX6xDzeiLou1RS06Lpw66ukD5MdsPJrooIiuleD_2KjEMfXjF0PRRn3khk0smi1ze4C7P1HCzWplXosG4OMSw_zeyBgVSDp3WNv7rHfOIFlt9vSjLk0BmdwhV5a61IA948txJQyMRmTAtXy06C7enSQ39S6DQiNPolCtHvJkqdkYE2A8nlQyVt-aeRUgwFPqXdlBXSwfe5E9FB5Pyis1OJykwxXM6b3e_VzoP6sCYH-8TO_3C38W-XHuiWVAnQdnc673HEK0j8evKMNotnjEJf4hLqsae4ufmJNOiOXdgANZL-gxdSllX7HVWh1H2pJk9clAI8ZhL0fe9qTMTrtpCoypc7jF_5tAyQFKnxI632cHHyjedVByA9Nog-a3_rqduMTmsvc8km4bo-ss1u84L_DrS4IrYoJnP3sEiRgI8dMDwHvwpaNm51tvVIY9oLBRRg3UFYxvq-TaR69WVatkgd2ilPFIu_818tTzjsopF95PBlV_09qurHSGMnH3nKq7tjqSlprgG3vZiKxHgsaikbjvpzdOnU8sSdtsO74HjmRyf4FmA`
    try {
    const res = await axios.post(`http://174.138.3.35/collect_review/public/index.php/api/company/list`, 
      null, 
    { headers:{
      // "Authorization": `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMzEyNzc2ZmFiZGQyYjllYTBiMWM1ODRjNmI0Mzg2NzQ5YmVlY2YwM2ZlMGIwOGE4NDgxMmFkYmRlNDcyZDNiNTE3NjkxY2RmOGNiYjQzNTAiLCJpYXQiOjE3MTM3NjQxMzIuNjEwMjM3LCJuYmYiOjE3MTM3NjQxMzIuNjEwMjQzLCJleHAiOjE3NDUzMDAxMzIuNTk2Njc2LCJzdWIiOiIxNSIsInNjb3BlcyI6W119.ejjZExqN7EhoXAp0p_wUeBVq6gzQlOGBNzAhmbXyKzCzVdL5pw5BcySlns1K2rLn5KoyVU8kw_-VJfT3RWe_UB83uakzz47-w1fd2a89NpwIY1e36eKbOFS9QLpX6xDzeiLou1RS06Lpw66ukD5MdsPJrooIiuleD_2KjEMfXjF0PRRn3khk0smi1ze4C7P1HCzWplXosG4OMSw_zeyBgVSDp3WNv7rHfOIFlt9vSjLk0BmdwhV5a61IA948txJQyMRmTAtXy06C7enSQ39S6DQiNPolCtHvJkqdkYE2A8nlQyVt-aeRUgwFPqXdlBXSwfe5E9FB5Pyis1OJykwxXM6b3e_VzoP6sCYH-8TO_3C38W-XHuiWVAnQdnc673HEK0j8evKMNotnjEJf4hLqsae4ufmJNOiOXdgANZL-gxdSllX7HVWh1H2pJk9clAI8ZhL0fe9qTMTrtpCoypc7jF_5tAyQFKnxI632cHHyjedVByA9Nog-a3_rqduMTmsvc8km4bo-ss1u84L_DrS4IrYoJnP3sEiRgI8dMDwHvwpaNm51tvVIY9oLBRRg3UFYxvq-TaR69WVatkgd2ilPFIu_818tTzjsopF95PBlV_09qurHSGMnH3nKq7tjqSlprgG3vZiKxHgsaikbjvpzdOnU8sSdtsO74HjmRyf4FmA`,
      'Accept': 'application/json',
      'Content-Type': 'application/json',      
      }})     
      console.log(res)
      return res
    }
    catch (err) {
      return err 
    }
  }

export const listCompany1 = async (data) => {
  // axios.defaults.headers.common["Authorization"] = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMzEyNzc2ZmFiZGQyYjllYTBiMWM1ODRjNmI0Mzg2NzQ5YmVlY2YwM2ZlMGIwOGE4NDgxMmFkYmRlNDcyZDNiNTE3NjkxY2RmOGNiYjQzNTAiLCJpYXQiOjE3MTM3NjQxMzIuNjEwMjM3LCJuYmYiOjE3MTM3NjQxMzIuNjEwMjQzLCJleHAiOjE3NDUzMDAxMzIuNTk2Njc2LCJzdWIiOiIxNSIsInNjb3BlcyI6W119.ejjZExqN7EhoXAp0p_wUeBVq6gzQlOGBNzAhmbXyKzCzVdL5pw5BcySlns1K2rLn5KoyVU8kw_-VJfT3RWe_UB83uakzz47-w1fd2a89NpwIY1e36eKbOFS9QLpX6xDzeiLou1RS06Lpw66ukD5MdsPJrooIiuleD_2KjEMfXjF0PRRn3khk0smi1ze4C7P1HCzWplXosG4OMSw_zeyBgVSDp3WNv7rHfOIFlt9vSjLk0BmdwhV5a61IA948txJQyMRmTAtXy06C7enSQ39S6DQiNPolCtHvJkqdkYE2A8nlQyVt-aeRUgwFPqXdlBXSwfe5E9FB5Pyis1OJykwxXM6b3e_VzoP6sCYH-8TO_3C38W-XHuiWVAnQdnc673HEK0j8evKMNotnjEJf4hLqsae4ufmJNOiOXdgANZL-gxdSllX7HVWh1H2pJk9clAI8ZhL0fe9qTMTrtpCoypc7jF_5tAyQFKnxI632cHHyjedVByA9Nog-a3_rqduMTmsvc8km4bo-ss1u84L_DrS4IrYoJnP3sEiRgI8dMDwHvwpaNm51tvVIY9oLBRRg3UFYxvq-TaR69WVatkgd2ilPFIu_818tTzjsopF95PBlV_09qurHSGMnH3nKq7tjqSlprgG3vZiKxHgsaikbjvpzdOnU8sSdtsO74HjmRyf4FmA`
    try {
    const res = await axios.post(`http://10.0.2.2:4000/list`, 
      null, 
    { headers:{
      "Authorization": `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMzEyNzc2ZmFiZGQyYjllYTBiMWM1ODRjNmI0Mzg2NzQ5YmVlY2YwM2ZlMGIwOGE4NDgxMmFkYmRlNDcyZDNiNTE3NjkxY2RmOGNiYjQzNTAiLCJpYXQiOjE3MTM3NjQxMzIuNjEwMjM3LCJuYmYiOjE3MTM3NjQxMzIuNjEwMjQzLCJleHAiOjE3NDUzMDAxMzIuNTk2Njc2LCJzdWIiOiIxNSIsInNjb3BlcyI6W119.ejjZExqN7EhoXAp0p_wUeBVq6gzQlOGBNzAhmbXyKzCzVdL5pw5BcySlns1K2rLn5KoyVU8kw_-VJfT3RWe_UB83uakzz47-w1fd2a89NpwIY1e36eKbOFS9QLpX6xDzeiLou1RS06Lpw66ukD5MdsPJrooIiuleD_2KjEMfXjF0PRRn3khk0smi1ze4C7P1HCzWplXosG4OMSw_zeyBgVSDp3WNv7rHfOIFlt9vSjLk0BmdwhV5a61IA948txJQyMRmTAtXy06C7enSQ39S6DQiNPolCtHvJkqdkYE2A8nlQyVt-aeRUgwFPqXdlBXSwfe5E9FB5Pyis1OJykwxXM6b3e_VzoP6sCYH-8TO_3C38W-XHuiWVAnQdnc673HEK0j8evKMNotnjEJf4hLqsae4ufmJNOiOXdgANZL-gxdSllX7HVWh1H2pJk9clAI8ZhL0fe9qTMTrtpCoypc7jF_5tAyQFKnxI632cHHyjedVByA9Nog-a3_rqduMTmsvc8km4bo-ss1u84L_DrS4IrYoJnP3sEiRgI8dMDwHvwpaNm51tvVIY9oLBRRg3UFYxvq-TaR69WVatkgd2ilPFIu_818tTzjsopF95PBlV_09qurHSGMnH3nKq7tjqSlprgG3vZiKxHgsaikbjvpzdOnU8sSdtsO74HjmRyf4FmA`,
      'Accept': 'application/json',
      'Content-Type': 'application/json',      
      }})     
      console.log(res)
      return res
    }
    catch (err) {
      return err 
    }
  }
// export const listCompany = async (data) => {
//   try {
//     const response = await fetch('http://174.138.3.35/collect_review/public/index.php/api/company/list', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMzEyNzc2ZmFiZGQyYjllYTBiMWM1ODRjNmI0Mzg2NzQ5YmVlY2YwM2ZlMGIwOGE4NDgxMmFkYmRlNDcyZDNiNTE3NjkxY2RmOGNiYjQzNTAiLCJpYXQiOjE3MTM3NjQxMzIuNjEwMjM3LCJuYmYiOjE3MTM3NjQxMzIuNjEwMjQzLCJleHAiOjE3NDUzMDAxMzIuNTk2Njc2LCJzdWIiOiIxNSIsInNjb3BlcyI6W119.ejjZExqN7EhoXAp0p_wUeBVq6gzQlOGBNzAhmbXyKzCzVdL5pw5BcySlns1K2rLn5KoyVU8kw_-VJfT3RWe_UB83uakzz47-w1fd2a89NpwIY1e36eKbOFS9QLpX6xDzeiLou1RS06Lpw66ukD5MdsPJrooIiuleD_2KjEMfXjF0PRRn3khk0smi1ze4C7P1HCzWplXosG4OMSw_zeyBgVSDp3WNv7rHfOIFlt9vSjLk0BmdwhV5a61IA948txJQyMRmTAtXy06C7enSQ39S6DQiNPolCtHvJkqdkYE2A8nlQyVt-aeRUgwFPqXdlBXSwfe5E9FB5Pyis1OJykwxXM6b3e_VzoP6sCYH-8TO_3C38W-XHuiWVAnQdnc673HEK0j8evKMNotnjEJf4hLqsae4ufmJNOiOXdgANZL-gxdSllX7HVWh1H2pJk9clAI8ZhL0fe9qTMTrtpCoypc7jF_5tAyQFKnxI632cHHyjedVByA9Nog-a3_rqduMTmsvc8km4bo-ss1u84L_DrS4IrYoJnP3sEiRgI8dMDwHvwpaNm51tvVIY9oLBRRg3UFYxvq-TaR69WVatkgd2ilPFIu_818tTzjsopF95PBlV_09qurHSGMnH3nKq7tjqSlprgG3vZiKxHgsaikbjvpzdOnU8sSdtsO74HjmRyf4FmA'
//       },
//       body: JSON.stringify(data)
//     });
    
//     const res = await response.json();
//     console.log(res);
//     // toast.success(`${res.message}`);
//     return res;
//   } catch (err) {
//     // toast.error(`${err.message}`);
//     // toast.error('error');
//     return err;
//   }
// }
