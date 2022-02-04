import React from 'react'
import HogTile from './HogTile'

export default function HogContainer({ hogData }) {

    return (
        <div>

            {hogData.map}( => {<HogTile />})}
            })
        </div>


    )
}
