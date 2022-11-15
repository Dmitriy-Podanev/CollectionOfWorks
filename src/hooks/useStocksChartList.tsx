import React, {useEffect, useState} from "react";
import {stocksApi} from "../API/api";

interface props {


}



export const useStocksChartList = (data?: props) => {
    const [stocks, setStocks] = useState<Object | null>(null);
    useEffect(() => {
        stocksApi.getListStocks().then((res) => {
            setStocks(res)
        })
    }, [])

    return {
        stocks
    }

}