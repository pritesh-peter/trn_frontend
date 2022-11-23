import axios from "axios";



export const BASE_URL = 'http://localhost:9090/api/v1/';
// export const SMS_URL = 'http://10.20.30.7:2080/banksmart-thirdparty-sms-api-web/message/sendMessage?'
export const SMS_URL = 'http://10.20.30.7:2080';

export const myAxios = axios.create({
    baseURL:BASE_URL
});
export const sendSms =   axios.create({
    baseURL:SMS_URL,
    mode: 'no-cors',
})