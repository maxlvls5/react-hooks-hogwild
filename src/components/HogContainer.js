import React from 'react'
import HogTile from './HogTile'

export default function HogContainer({ hogData }) {

    return (
        <div className="ui grid container">

            {hogData.map(hog => <HogTile key={hog.id} data={hog} data={hog} />)}

        </div>


    )
}
