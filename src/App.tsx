import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ViewportProvider } from "./hooks/viewortContext";
import Rem from "./pages/REM";
import Main from "./pages/PCLayout/Main";

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
            <Route path="/main" element={<Main />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </ViewportProvider>
  );
}
export default App;
