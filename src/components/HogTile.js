import React, { useState } from 'react'

const HogTile = ({ data }) => {
    const [showDetails, setShowDetails] = useState(false)


    console.log(data)

    const { name, image, greased, specialty, weight } = data

    function render() {
        if (showDetails) {
            return (
                <div>
                    <ul>
                        <li> {greased ? "greasy" : "dry"} </li>
                        <li> specialty: {specialty} </li>
                        <li> weight: {weight} </li>
                    </ul>
                </div >
            )
        } else {
            return (
                <div>
                    <h3> {name} </h3>
                    <img height='150' width='150' src={image} />
                </div>
            )
        }
    }
    return (
        <div onClick={() => setShowDetails(!showDetails)} className="ui eight wide column">
            {render()}
        </div>
    )
}
export default HogTile