import React from "react";
import {ChartsDisplay} from "../Components/ChartDisplay/chartsDisplay";
import {Stocks} from "../type/stocksType";
import {ModelDisplay3D} from "../Components/ModelDisplay3D";
import {GeometryCube} from "../Components/ModelDisplay3D/cube";
import {TodoList} from "../Components/TodoTasks/TodoList/todoList";


export const TypeName: Stocks.typeNameMenu = {
    route: "route",
    button: "button",
    list: 'list'
}

export interface menuBtn {
    title: string,
    id: string | number,
    typeName: keyof Stocks.typeNameMenu,
    path: string,
    children?: menuBtn[],
    component?: React.FC
}

export const routers: menuBtn[] = [
    {
        title: "Главная страница",
        id: 'main',
        typeName: TypeName.route,
        path: '/',
        component: null,

    },
    {
        title: "Чарт графиков",
        id: 'chart',
        typeName: TypeName.route,
        path: '/chart',
        component: null,
    },
    {
        title: "Анимация",
        id: '3dModel',
        typeName: TypeName.list,
        path: '/main/3dModel',
        children: [{
            title: 'Кубик',
            typeName: TypeName.route,
            path: '/cube',
            id: 'cube',
            component: GeometryCube,
        }]
        //component: ModelDisplay3D,
    },
    {
        title:'Todo List',
        id: 'TodoList',
        path: '/main/TodoList',
        typeName: TypeName.route,
        component: TodoList
    }


]


