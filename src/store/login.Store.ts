import React from "react";
// 登录模块
import { makeAutoObservable } from "mobx";
import { http } from "../utils/http";

class LoginStore {
  token = "";
  constructor() {
    makeAutoObservable(this);
  }
  // 登录
  login = async ({ mobile, code }) => {
    const res = await http.post("http://geek.itheima.net/v1_0/authorizations", {
      mobile,
      code,
    });
    this.token = res.data.token;
  };
}
export default LoginStore;
