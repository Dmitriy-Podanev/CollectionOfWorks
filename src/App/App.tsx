import React from 'react';
import './App.css';
import '../Components/SideBar/sideBar.css'
import {SideBar} from "../Components/SideBar/sideBar";
import {ChartsDisplay} from "../Components/ChartDisplay/chartsDisplay";
import {routers} from "../routes/constants";
import {Header} from "../Components/Header";
import {Route, Routes} from "react-router-dom";

function App() {
    return (
       /* <Routes>*/
            <div className="App">
                <Header/>
                <SideBar listBtn={routers}/>
            </div>
           /* <Route path = '/main' element={<ChartDisplay/>}/>
            <Route path = '/chart' element={"123>"}/>
            <Route path = '/third' element={"1222223"}/>
            <Route path = '/' element={"Начальная"}/>*/
       /* </Routes>*/
    );
}

export default App;
