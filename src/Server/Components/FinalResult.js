import React from 'react'

const FinalResult = (props) =>
{
    const Submit= (e) => {
        e.preventDefault();
        props.Ready();
    }

    return(

        <div className="card-panel" >
            <h1>Final Results</h1>
            <br></br>
        </div>
    )
}


export default FinalResult