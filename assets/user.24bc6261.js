import{bs as r,bv as s,bx as t}from"./index.140ed43d.js";import{u as o}from"./tagView.201cac15.js";const u=r("user",{state:()=>({username:"",roles:[]}),getters:{getUserName(e){return e.username},getUserRoles(e){return e.roles},getFirstCharacterOfUserName(e){return e.username?e.username.charAt(0).toUpperCase():""}},actions:{setLoginToken(e){s.set("access_token",e)},setUserInfo(e){this.username=e.username,this.roles=e.roles},setLogout(){this.username="",this.roles=[],s.remove("access_token"),s.remove("user"),s.clear(),o().removeAllTagView(),t.push({name:"Login"})}}});export{u};