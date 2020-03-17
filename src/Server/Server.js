import React, {useState, useEffect} from 'react'
import firebase from '../firebase'
import Question from './Components/Question';
import Lobby from './Components/Lobby';
import QuestionResult from './Components/QuestionResult';
import Launch from './Components/Launch';
import FinalResult from './Components/FinalResult';


const Server = (props) =>{
    const [doc, setDoc] = useState({data: ()=>{return {title: ''};}});
    const [Questions, setQuestions] = useState([]);
    const [QuestNum, setQuestNum] = useState(0);

    const [page, setPage] = useState("launch");
    const [name, setName] = useState('')
    const [quiz, setQuiz] = useState('')
    const [passcode, setPasscode] = useState("launch");
    const [sessionID, setSessionID] = useState("launch");

    const [studentDocs, setStudentDocs] = useState([]);


    useEffect(()=>{
        firebase.firestore().collection('Quizes').doc(props.match.params.id).get().then(doc => {
            setDoc(doc);
            setQuestions (doc.data().Questions);
        })
    },[props.match.params.id])

    const StudentUpdate = (snap) =>{
        const newStudents = snap.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }))
            
            console.log(newStudents)
        setStudentDocs(newStudents);
    }

    const Start = (session, pass) => {
        setPage("lobby");
        setSessionID(session);
        setPasscode(pass);


        //Listen for students
        firebase.firestore().collection('Session').doc(session).collection('Student').onSnapshot(snap => {
            StudentUpdate(snap);
        })

    }

    const LobbyReady = () => {
        setPage("question");
        setQuestNum(0);

        firebase.firestore().collection('Session').doc(sessionID).update({
            Lobby: false,
            Results: false,
            Endgame: false,
        })
    }

    const QuestionReady = () => {
        setPage("QuestionResult");

        firebase.firestore().collection('Session').doc(sessionID).update({
            Lobby: false,
            Results: true,
            Endgame: false,
        })
    }

    const ResultsReady = () => {
        if(QuestNum+1 >= Questions.length){
            setPage("FinalResults");
            firebase.firestore().collection('Session').doc(sessionID).update({
                Lobby: false,
                Results: false,
                Endgame: true,
            })
        }else{
            setPage("question");
            setQuestNum(QuestNum + 1);

            firebase.firestore().collection('Session').doc(sessionID).update({
                Lobby: false,
                Results: false,
                Endgame: false,
                CurrentQuestion: QuestNum+1
            })
        }
    }
    
    if(page === "launch"){
        return <div><Launch name ={doc.data().title} num={Questions.length} QuizID={props.match.params.id} Start={Start}/></div>
    }else if(page === "lobby"){
        return <div><Lobby Ready={LobbyReady} code={passcode} students={studentDocs} /></div>
    }else if(page === "question"){
        return <div><Question Ready={QuestionReady} Question={Questions[QuestNum]} /></div>
    }else if(page === "QuestionResult"){
        return <div><QuestionResult Ready={ResultsReady} Question={Questions[QuestNum]}/></div>
    }else if(page === "FinalResults"){
        return <div><FinalResult /></div>
    }

    return <div>{props.match.params.id}</div>
}

export default Server