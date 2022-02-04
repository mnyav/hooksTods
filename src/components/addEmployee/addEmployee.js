import { useState } from "react"


import "./addEmployee.css"
const AddEmployee = ({ state, setState }) => {
    const [stateForm, setStateForm] = useState("");
    const [stateCash, setStatecash] = useState("");



    const onSubmit = (e) => {
        e.preventDefault();
        if (!stateForm || !stateCash) {
            return
        }

        const newWorcers = [{
            id: Number(new Date()),
            name: stateForm,
            cash: stateCash,
            top: false
        }]

        setState([...state, ...newWorcers])

        setStateForm("");
        setStatecash("");


    }



    return (
        <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form
                onSubmit={onSubmit}
                className="add-form d-flex">

                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Как его зовут?"
                    value={stateForm}
                    onChange={(e) => setStateForm(e.target.value)} />

                <input type="number"
                    className="form-control new-post-label"
                    placeholder="З/П в $?"
                    value={stateCash}
                    onChange={(e) => setStatecash(e.target.value)} />

                <button type="submit"
                    className="btn btn-outline-light">Добавить</button>
            </form>
        </div>
    )
}

export default AddEmployee