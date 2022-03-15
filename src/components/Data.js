import "../styles/Data.css"

const Data = () => {
    return (
        <div className="wrapper_data">
            <div className="newWord">
            <p>Hello from Data</p>
            </div>
            <div className="time">
                <p>30</p>
            </div>
            <div className="action">
                <input className="input" type="text"></input>
                <button className="button">Next</button>
            </div>
        </div>
    )
}

export default Data