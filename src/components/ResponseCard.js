import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";


function ResponseCard ({response}) {
    function handleClick (e) {
        history.push(`/questions/${response.id}`)
    }
   const history = useHistory()
    console.log(response)
    return (
    
        <div>
            <button onClick={handleClick}>{response.question}</button>
        </div>
    )
}

export default ResponseCard