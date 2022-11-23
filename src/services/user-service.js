import { myAxios } from "./helper";
import { sendSms } from "./helper";


export const signUp=async (user)=> {
    console.log(user.name);
    if(user.name===""){(user.name=null)}
    return await myAxios.post('/auth/register', user).then((response)=>response.data);
}


export const sendSmsUrl = async (eodMsg) =>{

    // const headers = {
    //     // "Content-Type": "application/json",
    //     'Access-Control-Allow-Origin' : 'http://10.20.30.7:2080',
    //     "Content-Type":'text/xml',
    //     'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    
    //   };
 console.log("sendSMS alert service==============");
 console.log(eodMsg);  
 console.log(eodMsg.name); 
 console.log(eodMsg.contactNum.length); 
 console.log(eodMsg.eodMessage); 
//  sendSms.head(headers);
   for(let i=0;i<(eodMsg.contactNum.length);i++){
    let testmsg = `/banksmart-thirdparty-sms-api-web/message/sendMessage?username=shine&password=$hin3@2019&mobileNumber=${eodMsg.contactNum[i]}&message=${eodMsg.eodMessage}`
    sendingSms(testmsg);
    // console.log(testmsg);
  }
    return null;
}

 const  sendingSms = async (testmsg) =>{
    const headers = {
        // "Content-Type": "application/json",
        'Access-Control-Allow-Origin' : 'http://10.20.30.7:2080',
        "Content-Type":'text/xml',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
      };
    await sendSms.get(testmsg,headers).then((response)=>console.log(response))
}

export const loginUser = async (loginDetail)=> {
    return await myAxios.post('/auth/login',loginDetail).then((response)=>response.data)
}