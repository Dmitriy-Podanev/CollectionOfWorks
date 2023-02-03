import React, {MouseEventHandler} from "react";

interface props {
    text?: string
    onClick: (type:string)=> void,
    children: React.ReactNode
}

interface props2 {
    text?: string
    onClick: (type:string)=> void,
    children: React.ReactNode
}
interface props3333 {
    text?: string
    onClick: (type:string)=> void,
    children: React.ReactNode
}


export const FilterLink = ({text, onClick, children}:props) => {
    return (
        <span className={'filterLink'} onClick={onClick as unknown as MouseEventHandler<HTMLDivElement>}>
            {children}
        </span>
    )
}