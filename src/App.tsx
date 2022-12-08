import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import "./styles/tailwind.css";
import "./app.css";
import { ViewportProvider } from "./hooks/viewortContext";
import Rem from "./pages/REM";

// import webpack from './assets/imgs/Webpack.webp'

function App() {
  return (
    //路由配置
    <ViewportProvider>
      <BrowserRouter>
        <div className="App">
          <Routes>
            {/* 创建路由path和组件对应关系 */}
            <Route path="/" element={<Rem />}></Route>
            <Route path="/layout" element={<Layout />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </ViewportProvider>
  );
}
export default App;
