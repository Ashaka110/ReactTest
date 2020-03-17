import React from 'react'
import firebase from '../../firebase'

const Launch = (props) =>
{
    let name = props.name;
    let questNum = props.num;

    const Submit= (e) => {

        e.preventDefault(); 

        let roomJoinId = Math.random().toString(36).substring(2, 6);

        //check if ID is in use
        firebase.firestore().collection('Session').where('Passcode', '==', roomJoinId).get().then((snap) => {
            if (snap.docs.length > 0) {
                //TODO handle collision - unlikely
                console.log("room ID in use: " + roomJoinId); 
            } else {
                CreateRoom(roomJoinId);
            }
        })

    }

    const CreateRoom = (id) => {
        //Register Session
        firebase.firestore().collection('Session').add({
            CurrentQuestion: 0,
            Passcode: id.toString(),
            Lobby: true,
            Results: false,
            Endgame: false,
            QuizID: props.QuizID
        }).then((doc) => {
            props.Start(doc.id, id);
        })
    }



    return(

        <div id="joinPage" className="card-panel" >
            <form id="join-room-form" onSubmit={(e) =>{Submit(e)}}>
                <h1>{name}</h1>
                <h4>Questions: {questNum}</h4>
                <br></br>
                <br></br>
                <button className="btn" >Start Game</button>
            </form>
        </div>
    )
}


export default Launch