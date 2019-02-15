import React from 'react'


const Character = (props) => {
    return (
        <li>
            {props.characterData.name}
        </li>
    )
}



export default Character;