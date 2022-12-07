import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./pages/Layout";

// import webpack from './assets/imgs/Webpack.webp'

function App() {
  return (
    //路由配置
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* 创建路由path和组件对应关系 */}
          <Route path="/login" element={<Login />}></Route>
          <Route path="/layout" element={<Layout />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
