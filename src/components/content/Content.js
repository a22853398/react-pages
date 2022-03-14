import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "./about/About";
import Contact from "./contact/Contact";
import Kura from "./kura/Kura";
import Home from "./home/Home";
import Tool from "./tool/Tool";

//実際運用時のパスと開発時のパス設定、gh-pagesには実際運用時のパスが正常に作動しない
const routerBasename = process.env.NODE_ENV === 'development' ? '/' : '/react-pages';


//各項目とページとのRoute管理
function Content(){
    return (
        <div>
            <BrowserRouter basename= {routerBasename}>
                <Routes>
                    <Route path="/about" element={<About/>} />
                    <Route path="/contact" element={<Contact/>} />
                    <Route path="/kura" element={<Kura/>} />
                    <Route path="/home" element={<Home/>} />
                    <Route path="/tool" element={<Tool/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};
export default Content;