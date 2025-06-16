import React, { useEffect, useState } from "react";
import {ePRONOUNCIATION} from '../../data/pronunciation';
import { eCLOSEST } from "../../data/closest";
import { eOPPOSITE } from "../../data/opposite";
import { eREAD } from "../../data/read";
import { eREARRANGE} from "../../data/rearrange";
import { eREWRITE } from "../../data/rewrite";
import { eSUITABLE } from "../../data/suitable";
import { eUNDERLINED } from "../../data/underlined";
import { eVOCABULARY } from "../../data/vocabulary";
import { eWORDDIFFER } from "../../data/word_differ";
import { eEXTRACONTENT } from "../../data/extracontent";

const Question = ({ examId  }) => {
    const defaultArray = [2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const[savecocckies, setSaveCookies] = useState(() => {
      const saved = localStorage.getItem("myArray");
      return saved ? JSON.parse(saved) : defaultArray;
    });
    const [result, setResult] = useState(null);



    function getRandomItems(array, count,extraIndex) {
      let copy = [...array]; // Make a copy to avoid mutating the original
      const result = [];
      const extraContent = eEXTRACONTENT[extraIndex];
      let index = savecocckies[extraIndex];
     
      console.log('index',index,savecocckies,copy.length);
      while (result.length < count && copy.length > 0 ) {
      //   //const index = Math.floor(Math.random() * copy.length);        
         if(index >= copy.length) index = 0; // Reset index if it exceeds the array length
      //   if( index > 0 && copy[index].explanation === '') continue; // Skip if the id matches newindex        
        
      //   //const item = copy.splice(index, 1)[0]; 
        const item = copy[index];       
        const extraValue = result.length===0 ? extraContent: '';
        result.push({
          ...item,
          extra: extraValue
        });  
         index= index + 1; // Increment index and wrap around if it exceeds the length
       
        
      }
      
      handleLocalStorage(extraIndex,(index+1)>array.length?0:index); // Save the updated index to localStorage
      return result;
    }

    function getReadRandomItems(array, count,extraIndex) {
      const copy = [...array]; // Make a copy to avoid mutating the original
      const result = [];
      const extraContent = eEXTRACONTENT[extraIndex];
      let index = savecocckies[extraIndex];
     
      while (result.length < count && copy.length > 0) {
        //const index = Math.floor(Math.random() * copy.length);
        if(index >= copy.length) index = 0;
        if( copy[index].content === '') continue; // Skip if the id matches newindex
        //result.push(copy.splice(index, 1)[0]);
        const items = copy[index]; 

        items.questions.forEach((item, sindex) => {
          const extraValue = result.length===0 && sindex===0 ? extraContent + items.content : '';
          result.push({
            ...item,
            extra: extraValue
          });
        });
        index= index + 1;
      }
      handleLocalStorage(extraIndex,(index+1)>array.length?0:index); // Save the updated index to localStorage
      return result;
    }
    

    
    useEffect(()=>{
     let questionPlan = [];

      // questionPlan.push(...getRandomItems(ePRONOUNCIATION, 2,0));     
      // questionPlan.push(...getRandomItems(eWORDDIFFER, 2,1));
      // questionPlan.push(...getRandomItems(eUNDERLINED, 3,2));
      // questionPlan.push(...getRandomItems(eVOCABULARY, 9,3));
      // questionPlan.push(...getRandomItems(eSUITABLE, 2,4));
      // questionPlan.push(...getRandomItems(eCLOSEST, 2,5));
      // questionPlan.push(...getRandomItems(eOPPOSITE, 2,6));
      //questionPlan.push(...getReadRandomItems(eREAD, 1,8));
      //questionPlan.push(...getRandomItems(eREARRANGE, 3,9 ));
      questionPlan.push(...getRandomItems(eREWRITE, 4,10));

      console.log(questionPlan);

      questionPlan = questionPlan.map((item, index) => ({
        ...item,
        id: index + 1
      }));
      console.log(questionPlan);

      setQuestions(questionPlan);
    }, [examId])
    const handleChange=(questionId,value)=>{
        // setAnswers(prev => ({ ...prev, [qid]: value }));
        setAnswers(prev=>({...prev,[questionId]:value}));
    }
    const handleRewrite=(questionId,value)=>{
        setAnswers(prev => ({ ...prev, [questionId]:value }));
    }
    const handleSubmit=()=>{
        setSubmitted(true);
        console.log(questions);
        console.log(answers);
    }
    const handleLocalStorage = (index,value) => {
      const newArray = [...savecocckies];
      newArray[index] = value;
      console.log('newArray',newArray);
      setSaveCookies(newArray);
      localStorage.setItem("myArray", JSON.stringify(newArray));
    }
    
    const answerSttring= (val) => {
        if(val? typeof val === 'string' : false) {
            return val;
        }else{
           if(val===1){
            return 'A';
           }else if(val===2){
            return 'B';
           }else if(val===3){
            return 'C';
           }else if(val===4){
            return 'D';
           }
        }
    }
    const isNumeric = (str) => {
      return typeof str === "string" && str.trim() !== "" && !isNaN(str);
    };
    const cleanSpace = (text) => {
      if (typeof text === "undefined") {
        return '';
      }
      return text.replace(/\s+/g, " ").trim();
    };
    const cleanLastChar = (str) => {
      if(cleanSpace(str)==='') return str;
      return str.replace(/[^a-zA-Z]$/, "");
    };
    const compareAnswer = (result,answer) => {
     if(isNumeric(result) && isNumeric(answer)) {
        return parseFloat(result) === parseFloat(answer);
     }else{        
        const cleaned = cleanSpace(answer);
        if(cleanLastChar(result).toString().toLowerCase() === cleanLastChar(cleaned)?.toString().toLowerCase()) {
          return true;
        }
        return false;

     }
    }

    return (
      // background: submitted
      // ? ((q.options.length>0 && answers[q.id]?.toString()=== (q.answer-1).toString())|| (q.options.length===0 && answers[q.id]=== q.answer))
        <>
        {questions.map(q => (
        <div key={q.id} style={{
        marginBottom: "1em",
        padding: "0.8em",
        border: "1px solid #ccc",
        borderRadius: "8px",
        background: submitted
          ? (compareAnswer(q.answer,answers[q.id]) )
            ? "#e0ffe0" // greenish for correct
            : "#ffe0e0" // reddish for incorrect
          : "#f9f9f9"
      }}>
      {q.answer}      
       {q.extra && q.extra.length > 0 && (
        <div className="extra-content" dangerouslySetInnerHTML={{ __html: q.extra }}></div>
       )}
        <div class='question' dangerouslySetInnerHTML={{ __html: '<b>Question ' + q.id +':</b> '+ q.question }}></div>
        {q.options && q.options.length > 0 ? (
        q.options.map((opt,index) => (

            <label key={index} style={{ display: "block" }}>
            <input
                type="radio"
                name={`q-${q.id}`}
                value={index}
                disabled={submitted}
                checked={answers[q.id] === index}
                onChange={() => handleChange(q.id,index)}
            />
            <span dangerouslySetInnerHTML={{ __html: opt }}></span>
            </label>
        ))
        ) : (
        <><span dangerouslySetInnerHTML={{ __html: q.rewrite }}></span> <input class='rewrite' onChange={(e)=>handleRewrite(q.id,e.target.value)}  /> </>)}
       {submitted && (
                <div key={`${q.id}-exp`}><p ><strong>Tra lời:</strong> {answerSttring(q.answer)}</p>
                <p dangerouslySetInnerHTML={{ __html: q.explanation }}></p>
                </div>
            )
        }
        </div>
        ))}
        {!submitted && (
          <>
        <button onClick={handleSubmit} style={{ padding: "0.5em 1em" }}>
          Submit
        </button>        
        </>
         )}
         {submitted && (
          <><p>{answers[40]?.toString()}</p>

          </>
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