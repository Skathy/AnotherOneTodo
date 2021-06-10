import { Link } from "react-router-dom"

const Editer = () => {
    return (
        <div>
            <h2>new page!</h2>
            <input type="text" value='Hello, bish'/>
            <Link to='/'>Edit!</Link>
            {/* <button>edit!</button> */}
        </div>
    )
}

export default Editer