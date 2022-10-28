import React from 'react'
import './index.scss'

export default ({ name, image, weaknesses, types, classification, weight }) => {
    return <div className='Pokemon'>
        <div>
            <h1 className='pokemon-names'>{name}</h1>
            <h1>Weaknesses: {weaknesses.join(" | ")}</h1>
            <h1>Types: {types.join(" | ")}</h1>
            <h1>Classification: {classification}</h1>

        </div>
        <div className='image-wrapper'>
            <img className="pokemon-image" src={image} />
            <p className='p-1'>Max-weight: {weight.maximum}</p>
            <p className='p-2'>Min-weight: {weight.minimum}</p>
        </div>

    </div>
}