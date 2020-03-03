import React from 'react';
import {Link} from 'react-router-dom'
import firebase from '../firebase'

function Delete(id) {
    firebase.firestore().collection('Quizes').doc(id).delete();
}

const QuizItem = (props) => {
    
    return (
        <div className="card-panel">
            <li>
                <div className = "left-align">
                    {props.doc.title}
                    <p>Questions: 0</p>
                </div>
                <div className="right-align">
                    <Link to={"Editor/" + props.doc.id} className="btn">Edit</Link>
                    <button className="btn" onClick={(e) => Delete(props.doc.id)}>Delete</button>
                </div>
            </li>
        </div>
    )
}

export default QuizItem

