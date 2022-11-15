import React, {useEffect, useState} from "react";
import {stocksApi} from "../API/api";

interface props {


}



export const useAddStock = (data?: props) => {
    const [stocks, setStocks] = useState<Object | null>(null);
    useEffect(() => {
        stocksApi.addListenerStocks().then((res) => {
            setStocks(res)
        })
    }, [])

    return {
        stocks
    }

}