import React from 'react'

const Standby = (props) =>
{
    return(

        <div className="card-panel" >
                        <div className="preloader-wrapper big active">
                            <div className="spinner-layer spinner-blue-only">
                                <div className="circle-clipper left">
                                    <div className="circle"></div>
                                </div><div className="gap-patch">
                                    <div className="circle"></div>
                                </div><div className="circle-clipper right">
                                    <div className="circle"></div>
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <br></br>
            <h4>Waiting for host...</h4>

        </div>
    )

}


export default Standby