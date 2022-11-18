//isLoggedIn

export const isLoggedIn =()=>{
    let data = localStorage.getItem("data");
    if(data) return true;
    else return false;
}

//doLogin=> data=> set to localstorage


export const doLogin =(data) => {
    localStorage.setItem("data",JSON.stringify(data));
}

//doLogout => remove from localStorage

export const doLogout =() => {
    localStorage.removeItem("data");
}