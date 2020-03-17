import React, {useState, useEffect} from 'react'
import firebase from '../../firebase'

const Join = (props) =>
{
    const [name, setName] = useState('')
    const [id, setId] = useState('')

    const submit= (e) => {
        e.preventDefault();

        firebase.firestore().collection('Session').where('Passcode', '==', id).get().then((snap) => {
            if (snap.docs.length > 0) {
                JoinRoom(snap.docs[0].id, snap.docs[0].data().QuizID)
            } else {
                console.log("Room not found: " + id);
            }
        })

    }

    const JoinRoom= (id, quizID) => {
        //Register Student
        firebase.firestore().collection('Session').doc(id).collection('Student').add({
            UserName: name
        }).then((sdoc) => {
            let studentID = sdoc.id;
            props.submit(id, sdoc.id, quizID);
        })

    }

    return(

        <div id="joinPage" className="card-panel" >
            <form id="join-room-form" onSubmit={(e) =>{submit(e)}}>
                <input name="nickname" type="text" placeholder="Nickname"value={name} onChange={e=> setName(e.currentTarget.value)}/>
                <input name="roomId" type="text" placeholder="Room ID"value={id} onChange={e=> setId(e.currentTarget.value)}/>
                <button className="btn" >Join Room</button>
            </form>
        </div>
    )

}


export default Join