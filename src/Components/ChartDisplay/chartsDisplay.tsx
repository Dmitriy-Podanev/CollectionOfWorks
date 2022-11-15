import React, {useEffect} from "react";
import {useStocksChartList} from "../../hooks/useStocksChartList";
import {Chart} from "../Chart";
import {Button} from "@material-ui/core";

interface props {

}

export const ChartsDisplay: React.FC<props> = (a: props) => {
    // const [stocks, setStocks] = useState<Object | null>(null);
    const {stocks = null} = useStocksChartList();


    useEffect(() => {

        return () => {

        }
    }, []);

    /*  const handleStocksChange = (list: Object) =>{

      }*/

    if (stocks === null) {
        Chart({stocks});
        return (<div>
            <p>Вы не выбрали ни одного графика!</p>
            <Button>Добавить</Button>
        </div>)
    }

    return (
        <>
            <div>
                <h1>Список доступных инструментов</h1>
                <div id='chart'/>

                {/* // <div>{stocks as any}</div>*/}
            </div>
        </>
    )
}