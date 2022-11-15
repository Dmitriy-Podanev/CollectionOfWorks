import React from "react";
import {menuBtn, TypeName} from "../../routes/constants";
import {Link, NavLink, Outlet} from "react-router-dom";
import {Button, List, ListSubheader} from "@material-ui/core";
import {ListItemButton, ListItemIcon, ListItemText, Collapse} from '@mui/material'
import NestedList from "./nestedList";
import {getTemplateBtn} from "./helper";


interface props {
    listBtn: Object[],
}

const styleActive = {
    textDecoration: 'none',
    color: 'red'
}


export const SideBar: React.FC<props> = ({listBtn}: props) => {
    const [openList, setOpenList] = React.useState(true);

    const handleClick = () => {
        setOpenList(!openList);
    };



    return (
        <>
            <List
                // sx={{width: '100%', maxWidth: 360, bgcolor: '#f7f7f7'}}
                component="div"
                id={'sidebar'}
                aria-labelledby="nested-list-subheader"
            >

                <ul>
                    {listBtn.map((item) => {
                        let btn: menuBtn = item as menuBtn;
                        return getTemplateBtn(btn);
                    })}
                </ul>


            </List>
            <div id='detail'>
                <Outlet/> {/*здесь будут вложенные компоненты, которые прилетают из children корневого файла*/}
            </div>
        </>


    )
}


/*
<div id='sidebar'>
    <nav>
        <ul>{listBtn.map((item) => {
            let btn: menuBtn = item as menuBtn;
            return getTemplateBtn(btn);
        })}</ul>
    </nav>
</div>
<div id='detail'>
    <Outlet/> {/!*здесь будут вложенные компоненты, которые прилетают из children корневого файла*!/}
</div>*/
