import React from 'react'



const Character = (props) => {

    const heightWeightStyle = {
        width: `${props.characterData.mass === 'unknown' ? 1 : props.characterData.mass}px`,
        height: `${props.characterData.height === 'unknown' ? 1 : props.characterData.height}px`,
    }
    return (
        <li className = "character">
            
            <h2>{props.characterData.name}</h2>
            <div style = {heightWeightStyle}>
                {/* <span className = 'height'>Height</span>
                <span className = 'mass'>Mass</span> */}
            </div>
        </li>
    )
}



export default Character;