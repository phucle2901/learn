import React, { useEffect, useState } from "react";
import {eQUESTIONS} from '../../data/english';
const Question = ({ examId  }) => {
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [result, setResult] = useState(null);

    useEffect(()=>{
        setQuestions(eQUESTIONS);
    }, [examId])
    const handleChange=(questionId,value)=>{
        // setAnswers(prev => ({ ...prev, [qid]: value }));  
        setAnswers(prev=>({...prev,[questionId]:value}));
    }
    const handleSubmit=()=>{
        setSubmitted(true);
        console.log(questions);
        console.log(answers);
    }
    
    return (
        
        <>      
        {questions.map(q => (
        <div key={q.id} style={{
        marginBottom: "1.5em",
        padding: "1em",
        border: "1px solid #ccc",
        borderRadius: "8px",
        background: submitted
          ? answers[q.id]=== (q.answer-1)
            ? "#e0ffe0" // greenish for correct
            : "#ffe0e0" // reddish for incorrect
          : "#f9f9f9"
      }}>
        <p><strong>{q.question}</strong></p>
        {q.options.map((opt,index) => (
            
            <label key={index} style={{ display: "block" }}>
            <input
                type="radio"
                name={`q-${q.id}`}
                value={index}
                disabled={submitted}
                checked={answers[q.id] === index}
                onChange={() => handleChange(q.id,index)}
            />
            {opt}          
            
            </label>
        ))}
       {submitted && (
                <p key={`${q.id}-exp`}>{q.explanation} {answers[q.id]} {q.answer}</p>
            )
        }
        </div>
        ))}
        {!submitted && (
        <button onClick={handleSubmit} style={{ padding: "0.5em 1em" }}>
          Submit
        </button>
         )}
         {submitted && result && (
        <div style={{ marginTop: "1em" }}>
          <h3>Result</h3>
          <p>You scored <strong>{result.score}</strong> out of <strong>{result.total}</strong>.</p>
        </div>
        )}

        </>
    );
  }
  export default Question;