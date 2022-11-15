import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {ChartsDisplay} from "./Components/ChartDisplay/chartsDisplay";
import './routes/root.css'
import ErrorPage from "./Error/ErrorPage";
import {SideBar} from "./Components/SideBar/sideBar";
import {routers} from "./routes/constants";
import Contact from "./Components/TESTcontact/contact";
import {ModelDisplay3D} from "./Components/ModelDisplay3D";
import {GeometryCube} from "./Components/ModelDisplay3D/cube";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
    {
        path: "/",
        element: <SideBar listBtn={routers}/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "main/:id",
                element: <Contact/>,
            },
            {
                path: "/",
                element: null,
            },
            {
                path: '/cube',
                element: <GeometryCube/>,

            }
        ]
    },

]);

/*children: routers.map((item)=>{
    if(item.typeName === TypeName.route)
        return {
            path: item.path,
            element: item.component,
        }*/

root.render(
        <RouterProvider router={router}/>
);


reportWebVitals();
