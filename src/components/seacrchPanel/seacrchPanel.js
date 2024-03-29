import { useState, useEffect } from "react"

import "./seacrPanel.css"

const SeacrchPanel = ({ updateSeacrch, addRise, setRiseState, addActive }) => {



    const [inputValue, setInputValue] = useState("")

    useEffect(() => {
        updateSeacrch(inputValue)
    }, [inputValue])


    return (
        <div className="seacrchPanel">
            <input
                onChange={(e) => setInputValue(e.target.value)}
                className="form-control form-control-lg"
                type="text"
                value={inputValue}

                placeholder="Пошук працівника"
                aria-label=".form-control-lg example" />
            <button onClick={() => setRiseState([])} type="button" className="btn btn-primary">Всі працівники</button>
            <button onClick={addRise} type="button" className="btn btn-warning">На підвищення</button>
            <button onClick={addActive} type="button" className="btn btn-success">ЗП більше 1000$</button>
        </div>
    )
}

export default SeacrchPanel