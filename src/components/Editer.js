import React from "react"
import { useHistory } from "react-router-dom"


const Editer = ({editHandler}) => {
    const history = useHistory()

    return (
            <div>
                <input 
                    type="text" 
                    placeholder='edit todo..'
                />
                <button onClick={() => {editHandler()}}>change</button>
            </div>
    )
}

export default Editer