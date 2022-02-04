import "./app.css"
import AppInfo from "../appInfo/appInfo"
import SeacrchPanel from "../seacrchPanel/seacrchPanel"
import List from "../list/list"
import AddEmployee from "../addEmployee/addEmployee"
import { useState } from "react"

const App = () => {

    const arr = {
        data: [
            { id: 1, name: "Tom", cash: 1900, active: true, top: false },
            { id: 2, name: "Bob", cash: 2309, active: false, top: true },
            { id: 3, name: "Artur", cash: 909, active: false, top: true },
            { id: 4, name: "Tomas", cash: 499, active: true, top: false }
        ],
        filterTerm: "",
        riseItems: []

    }


    const [state, setState] = useState(arr.data);

    const [filterState, setFilterState] = useState(arr.filterTerm);

    const [RiseState, setRiseState] = useState(arr.riseItems);



    const seacrchWorkers = (data, filterTerm) => {

        if (filterTerm === "") {
            return data
        }


        return data.filter(element => {
            return element.name.toLowerCase().indexOf(filterTerm.toLowerCase()) > -1
        });
    }


    const sortState = seacrchWorkers(state, filterState)
    const updateSeacrch = (term) => {
        setFilterState(term)
    }


    const onToogleTop = (id, prop) => {

        const xxx = state.map(item => {
            if (item.id === id) {
                return { ...item, [prop]: !item[prop] }
            }
            return item
        })
        setState(xxx);


    }


    const onDeleteItem = (id) => {
        const xxx = state.filter(item => item.id !== id)
        setState(xxx);
    }

    const addRise = () => {

        const filt = sortState.filter((item) => {
            if (item.top) {
                return item.top
            }
        })
        setRiseState(filt);

    }
    const addActive = () => {

        const cash = sortState.filter((item) => {
            if (item.cash >= 1000) {
                return item.cash
            }
        })
        setRiseState(cash);

    }


    const filterList = RiseState.length === 0 ? sortState : RiseState
    return (
        <div className="app">

            <AppInfo state={state} />
            <SeacrchPanel addActive={addActive} setRiseState={setRiseState} addRise={addRise} updateSeacrch={updateSeacrch} />
            <List state={filterList} onDeleteItem={onDeleteItem} setState={setState} onToogleTop={onToogleTop} />
            <AddEmployee setState={setState} state={state} />
        </div>
    )
}




export default App