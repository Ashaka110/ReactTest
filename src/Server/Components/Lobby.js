import React, {useState, useEffect} from 'react'

    const Student = (props) =>{

        return (
            <div className={"col s4 card "}>
                    <span> {props.student.UserName} </span> 
            </div>
        )
    }

const Lobby = (props) =>
{

    //let students = ['Josh', 'Lee', 'Scott', 'James', 'Gary', 'Tim']
    let code = props.code;

    const Submit= (e) => {
        e.preventDefault();
        props.Ready();
    }

    const StudentList = () =>{
        if (props.students.length == 0) {
            //console.log(props.students)
            return <div>Waiting for players...</div>
        } else {
            //console.log(props.students)
            return props.students.map((student, id) => <Student student={student} key={id} />)
        }

    }


    return(

        <div>
            <div className="card-panel" >
                <h1>Passcode: <code>{code}</code></h1>

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

                <button className={"btn "  + (props.students.length > 0 ? "" : "disabled") }
                    onClick={(e)=>Submit(e)}>Ready</button>

            </div>
            <div className="row">
                { StudentList() }
            </div>
        </div>
    )

}


export default Lobby