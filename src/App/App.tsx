import React from 'react';
import './App.css';
import '../Components/SideBar/sideBar.css'
import {SideBar} from "../Components/SideBar/sideBar";
import {ChartsDisplay} from "../Components/ChartDisplay/chartsDisplay";
import {routers} from "../routes/constants";
import {Header} from "../Components/Header";
import {Route, Routes} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "../store/rootReducer";

function App() {
    return (
       /* <Routes>*/
        <Provider store={store}>
            <div className="App">
                <Header/>
                <SideBar listBtn={routers}/>
            </div>
        </Provider>
           /* <Route path = '/main' element={<ChartDisplay/>}/>
            <Route path = '/chart' element={"123>"}/>
            <Route path = '/third' element={"1222223"}/>
            <Route path = '/' element={"Начальная"}/>*/
       /* </Routes>*/
    );
}

export default App;
