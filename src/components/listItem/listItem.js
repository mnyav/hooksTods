import "./ListItem.css"

const listItem = ({ state }) => {


    return state.forEach((item, i) => {
        <li key={Number(new Date())} className="list-group-item d-flex justify-content-between">
            <span className="list-group-item-label">{item.name}</span>
            <span className="list-group-item-input">{item.cash}</span>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm ">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                    className="btn-trash btn-sm ">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>


    })



}

export default listItem