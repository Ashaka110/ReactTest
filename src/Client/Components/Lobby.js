import React, {useState, useEffect} from 'react'

const Lobby = (props) =>
{
    const [name, setName] = useState('')
    const [id, setId] = useState('')

    const submit= (e) => {
        e.preventDefault();

        props.submit();
    }


    return(

        <div id="joinPage" className="card-panel" >
            <h1>Lobby</h1>

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


export default Lobby