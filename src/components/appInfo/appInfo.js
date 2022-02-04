import "./appInfo.css"


const AppInfo = ({ state }) => {
    const rise = state.filter((item) => {
        if (item.top) {
            return item.top
        }
    })
    const active = state.filter((item) => {
        if (item.active) {
            return item.active
        }
    })



    return (
        <div className="add_info ">
            <p className="h1">На підвищення: {active.length}</p>
            <p className="h2">Загальне число працівників: {state.length}</p>
            <p className="h3">Премію отримають: {rise.length}</p>

        </div>
    )
}

export default AppInfo;