import React from 'react'

export const GifGridItem = ({ title, url}) => {
    return (
        <div className="card animate__flip">
            <h2>{ title }</h2>
            <img src={url} alt={`imagenes`} ></img>
        </div>
    )
}
