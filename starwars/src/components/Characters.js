import React from 'react'

import Character from './Character'

const Characters = (props) => {
    return (
        <div>
            <ul>
               {props.characters.map(character => {
                    return <Character key = {character.created} characterData = {character}/>
                })}
            </ul>
            <button onClick = {props.prev}>Prev</button>
            <button onClick = {props.next}>Next</button>
        </div>
    )
}

export default Characters;