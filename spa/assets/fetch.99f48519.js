import{c}from"./myApi.75a72cec.js";import{bu as o,bx as a}from"./index.79763ed7.js";const n=c({baseUrl:"",options:{async beforeFetch({options:s}){const t=o.getItem("access_token");return t&&(s.headers={Authorization:`Bearer ${t}`}),{options:s}},afterFetch({data:s,response:t}){return{data:s,response:t}},onFetchError({data:s,error:t,response:r}){const e={message:"unknow error",icon:"warning",color:"warning",position:"top",timeout:1500};switch((t.code==="ECONNABORTED"||t.message.indexOf("timeout")!==-1||t.message==="Network Error")&&(e.message="\u7DB2\u8DEF\u7570\u5E38",a.create(e)),r==null?void 0:r.status){case 403:e.message="(403)",a.create(e);break;case 404:e.message="(404)",a.create(e);break;case 408:e.message="(408)",a.create(e);break;case 500:e.message="(500)",a.create(e);break;case 501:e.message="(501)",a.create(e);break;case 502:e.message="(502)",a.create(e);break;case 503:e.message="(503)",a.create(e);break;case 504:e.message="(504)",a.create(e);break;case 505:e.message="(505)",a.create(e);break;default:a.create(e);break}return{data:s,error:t}}},fetchOptions:{mode:"cors"}});export{n as u};
