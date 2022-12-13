import { Form, Input, Button, Checkbox, Card } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../../store";
import "./index.less";

const Login = () => {
  const mobilerules = [
    {
      pattern: /^1[3-9]\d{9}$/,
      message: "手机号码格式不对",
      validateTrigger: "onBlur",
    },
    { required: true, message: "请输入手机号" },
  ];
  const [checked, setChecked] = useState(true);
  const codeRules = [
    { len: 6, message: "验证码6个字符", validateTrigger: "onBlur" },
    { required: true, message: "请输入验证码" },
  ];
  // 获取跳转实例对象
  const navigate = useNavigate();
  const { loginStore } = useStore();
  const handleLoginBtn = async (values: any) => {
    const { mobile, code } = values;
    try {
      const res = await loginStore.login({ mobile, code });
      console.log(res);
      navigate("/main");
    } catch (error) {
      console.log("登录失败");
    }
  };
  return (
    <div className="login">
      <Card className="login-container">
        <div className="login-container-title">AshtarteKk-React</div>
        <Form onFinish={handleLoginBtn}>
          <Form.Item name="mobile" rules={mobilerules}>
            <Input size="large" placeholder="请输入手机号" />
          </Form.Item>
          <Form.Item name="code" rules={codeRules}>
            <Input size="large" placeholder="请输入验证码" maxLength={6} />
          </Form.Item>
          <Form.Item name="remember" valuePropName="checked">
            <Checkbox
              className="login-checkbox-label"
              checked={true}
              onClick={() => {
                setChecked(true);
              }}
            >
              我已阅读并同意「用户协议」和「隐私条款」
            </Checkbox>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
