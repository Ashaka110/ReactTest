import React, {useState} from 'react'
import firebase from '../firebase'

const QuizCreateForm = () =>{
    const [title, setTitle] = useState('')

    function onSubmit(e){
        e.preventDefault()

        const questionstub = [{
            Question: '', A: '', B: '', C: '', D: '', Aans: false, Bans: false, Cans: false, Dans: false
        }]

        firebase.firestore().collection('Quizes').add({
            title,
            Questions: questionstub
        }).then(()=>{
            setTitle('')
        })

    }
    return (
        <form onSubmit={onSubmit}>
            <h6>Create Quiz</h6>
            <div className="input-field">
                <input type = "text" id="title" value={title} onChange={e=> setTitle(e.currentTarget.value)}/>
                <label htmlFor="title">Quiz Name</label>
            </div>
             
             <button className="btn">Create</button>


        </form>
    )
}

export default QuizCreateForm