import axios from 'axios'
import React, { useEffect } from 'react'

function GetDataWomen() {

    useEffect(() => {

        axios.get('http://localhost:5029/api/WomenShoe')
            .then(Response => {
                console.log(Response.data);

            })
            .catch(error => {

                console.log("Get Data Error", error)
            })

    })

    return (
        <div>

        </div>
    )
}

export default GetDataWomen
