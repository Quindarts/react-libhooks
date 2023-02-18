export const getValueSessionStorage = (key)=>{
    return sessionStorage.getItem(key);
}
export const setValueSessionStorage = (key,value)=>{
    sessionStorage.setItem(key,value);
}