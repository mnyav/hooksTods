import "./list.css"
const List = ({ state, onToogleTop, onDeleteItem }) => {


    const newArr = state.map((item) => {

        let classNames = "list-group-item d-flex justify-content-between";
        if (item.top) (classNames += ' increase')
        if (item.active) (classNames += ' like')

        return (
            <li

                key={item.id + item.name}
                className={classNames}>
                <span onClick={(e) => onToogleTop(item.id, e.currentTarget.getAttribute('data-toggle'))}
                    data-toggle="top"
                    className="list-group-item-label">{item.name}</span>
                <span className="list-group-item-input">{item.cash}$</span>
                <div className='d-flex justify-content-center align-items-center'>
                    <button
                        onClick={(e) => onToogleTop(item.id, e.currentTarget.getAttribute('data-toggle'))}
                        type="button"
                        className="btn-cookie btn-sm"
                        data-toggle="active">
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                        onClick={() => onDeleteItem(item.id)}
                        className="btn-trash btn-sm ">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )

    })
    return (
        <div className="list">
            <ul
                className="list-group">
                {newArr}
            </ul>
        </div>
    )
}




export default List