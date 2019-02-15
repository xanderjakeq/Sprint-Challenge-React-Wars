import React from 'react'

import Character from './Character'

const Characters = (props) => {
    return (
        <div className = 'listContainer'>
            <ul className = 'characters'>
               {props.characters.map(character => {
                    return <Character key = {character.created} characterData = {character}/>
                })}
            </ul>
        </div>
    )
}

export default Characters;