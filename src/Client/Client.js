import React, {useState, useEffect} from 'react'
import firebase from '../firebase'

import Join from './Components/Join';
import Lobby from './Components/Lobby';
import Question from './Components/Question';
import Standby from './Components/Standby';
import Results from './Components/Results';
import FinalResults from './Components/FinalResults';

const Client = () =>{
    const [page, setPage] = useState("join");
    const [quiz, setQuiz] = useState("join");
    const [questNum, setQuestNum] = useState(0);
    const [Questions, setQuestions] = useState([]);

    const [sessionID, setSessionID] = useState();
    const [studentID, setStudentID] = useState();
    const [sessionData, setSessionData] = useState("join");
    const [responses, setResponces] = useState([]);

    const OnSessionUpdate = (doc) => {

        setQuestNum(doc.data().CurrentQuestion);

        if (doc.data().Lobby) {
            setPage('lobby');
        } else if (doc.data().Results) {
            setPage('results');
        } else if (doc.data().Endgame) {
            setPage('final');
        } else {
            setPage('question');
        }
    }

    
    const OnJoinRoom = (roomID, studentID, quizID) => {
        setPage('lobby');
        setSessionID(roomID);
        setStudentID(studentID);
        
        firebase.firestore().collection('Quizes').doc(quizID).get().then(doc => {
            setQuestions (doc.data().Questions);
        })


        //Listen for session updates
        firebase.firestore().collection('Session').doc(roomID).onSnapshot(snap => {
            OnSessionUpdate(snap);
        })
    }

    const OnQuestionSubmit = (id) => {
        setPage('standby');

        let r = responses;
        r[questNum] = id;

        for (var i = 0; i < r.length; i++) {
            if (!r[i])
                r[i] = "";
        }
        
        setResponces(r);
        firebase.firestore().collection('Session').doc(sessionID).collection('Student').doc(studentID).update({
            response: r
        })

    }


    if(page == "join"){
        return  <Join submit={OnJoinRoom} />
    }else if(page == 'lobby'){
        return <div><Lobby/></div>
    } else if (page == 'question') {
        return <div><Question submit={OnQuestionSubmit} Question={Questions[questNum]}/></div>
    } else if (page == 'standby') {
        return <div><Standby /></div>
    } else if (page == 'results') {
        return <div><Results /></div>
    } else if (page == 'final') {
        return <div><FinalResults /></div>
    }

    return <div></div>

}

export default Client