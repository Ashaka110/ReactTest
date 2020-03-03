import React, {useState, useEffect} from 'react'
import firebase from '../firebase'
import QuizList from '../QuizList/QuizList'
import QuestionList from './QuestionList'
import QuestionForm from './QuestionForm'




function QuizEditor(props){
    const [doc, setDoc] = useState({data: ()=>{return {title: ''};}});
    const [Questions, setQuestions] = useState([]);
    const [QuestNum, setQuestNum] = useState(0);
    const [rand, setRand] = useState(0);

    console.log("Editor");

    useEffect(()=>{
        firebase.firestore().collection('Quizes').doc(props.match.params.id).get().then(doc => {
            setDoc(doc);
            setQuestions (doc.data().Questions);
        })
    },[])

    const addQuestion= () => {
        setQuestions([... Questions, {
            Question: '', A: '', B: '', C: '', D: '', Aans: false, Bans: false, Cans: false, Dans: false
        } ])
    }

    const deleteQuestion = (num) => {
        console.log('deleting ' + num);
        const newA =(Questions.slice(0,num).concat(Questions.slice(num+1, Questions.length)));
        setQuestions(newA);
    }

    const changeQuestion = (num) => {
        setQuestNum(num);
    }

    const swapQuestions = (A, B) => {

    }

    const updateQuestion = (id, value) => {
        var q = Questions;
        q[QuestNum][id] = value;
        setQuestions(q);
        console.log(q);
        setQuestNum(QuestNum);
        setRand(Math.random());
    }

    const save = () => {
        firebase.firestore().collection('Quizes').doc(props.match.params.id).update({
            Questions
        })
    }
    if(Questions.length == 0){
        return <div> Loading...</div>
    }

    console.log(Questions);
    return(
        <div>
            <div>
                <h1> Quiz  {doc.data().title}</h1>
                <div onClick={(e) => save()} className="btn right-align">Save</div>
            </div>

            <div className="row">
                <div className="card col s4">
                    <QuestionList Questions={Questions} Delete={deleteQuestion} 
                    AddQuestion={addQuestion} Swap={swapQuestions} Change={changeQuestion}/>
                </div>

                <div className="col s8">
                    <QuestionForm Question={Questions[QuestNum]} Questions={Questions} setQuestions={setQuestions} Num={QuestNum} Update={updateQuestion}/>
                </div>
            </div>
        </div>
    )    

}

export default QuizEditor