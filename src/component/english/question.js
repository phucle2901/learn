import React, { useEffect, useState,useRef } from "react";
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
import {eRIGHTTENSE}  from  "../..//data/righttenseorform"

const Question = ({ examId  }) => {
  const scrollRef = useRef(null);
    const defaultArray = [2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0];
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const[savecocckies, setSaveCookies] = useState(() => {
      const saved = localStorage.getItem("myArray");
      return saved ? JSON.parse(saved) : defaultArray;
    });
    const [results, setResults] = useState({});
    const [refeshData,setRefeshData]=useState(true);
    const [isScroll, setIsScroll]=useState(false);
    

    
    useEffect(()=>{
      if (refeshData){
        setRefeshData(false);
        const tempCookies = [...savecocckies];
        function getRandomItems(array, count,extraIndex) {
          let copy = [...array]; // Make a copy to avoid mutating the original
          const result = [];
          const extraContent = eEXTRACONTENT[extraIndex];
        
          const startIndex = savecocckies[extraIndex] || 0;
          let index = startIndex;
    
          let itemsAdded = 0;
        
          //console.log('index',index,savecocckies,extraIndex);
          while (itemsAdded < count && count && copy.length > 0 ) {
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
            itemsAdded=itemsAdded+1;
            
          }
          const newIndex = (startIndex + itemsAdded) % array.length;
          //console.log('save',newIndex);
          //handleLocalStorage(extraIndex,newIndex); // Save the updated index to localStorage
          tempCookies[extraIndex] = newIndex;
          return result;
        }
    
        function getReadRandomItems(array, count,extraIndex) {
          const copy = [...array]; // Make a copy to avoid mutating the original
          const result = [];
          const extraContent = eEXTRACONTENT[extraIndex];
          const startIndex = savecocckies[extraIndex] || 0;
          let index = startIndex;
          let itemsAdded = 0;
    
          //console.log('index',index,savecocckies,extraIndex);
          while (itemsAdded < count && copy.length > 0) {
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
            itemsAdded=itemsAdded+1;
          }
          const newIndex = (startIndex + itemsAdded) % array.length;
          //console.log('save',newIndex);
          //handleLocalStorage(extraIndex,newIndex); // Save the updated index to localStorage
          tempCookies[extraIndex] = newIndex;
          return result;
        }

        let questionPlan = [];

        questionPlan.push(...getRandomItems(ePRONOUNCIATION, 2,0));     
        questionPlan.push(...getRandomItems(eWORDDIFFER, 2,1));
        questionPlan.push(...getRandomItems(eUNDERLINED, 3,2));
        questionPlan.push(...getRandomItems(eVOCABULARY, 9,3));
        questionPlan.push(...getRandomItems(eSUITABLE, 2,4));
        questionPlan.push(...getRandomItems(eCLOSEST, 2,5));
        questionPlan.push(...getRandomItems(eOPPOSITE, 2,6));
        questionPlan.push(...getReadRandomItems(eREAD, 1,8));
        questionPlan.push(...getRandomItems(eRIGHTTENSE, 4,7));
        questionPlan.push(...getRandomItems(eREARRANGE, 3,9 ));
        questionPlan.push(...getRandomItems(eREWRITE, 4,10));

        //console.log(questionPlan);

        questionPlan = questionPlan.map((item, index) => ({
          ...item,
          id: index + 1
        }));

        

        // Save all updates at once
        setSaveCookies(tempCookies);
        localStorage.setItem("myArray", JSON.stringify(tempCookies));

        setQuestions(questionPlan);
        setTimeout(() => {
          if (scrollRef.current) {
            console.log('ssssss');
            scrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
          }
        }, 0);
    }
      
    }, [refeshData])
    const handleRefesh=()=>{  
       
      setAnswers({});
      setSubmitted(false);
      setResults({});
      setRefeshData(true);
      //scrollToTop(); 
     
    }
    const handleScroll=(e)=>{
      const scrollTop = e.target.scrollTop;
      if(scrollTop>500){
        setIsScroll(true);
      }else{
        setIsScroll(false);
      }
    
     // You can also get scrollHeight, clientHeight, etc. from e.target

    }
    
    const scrollToTop = () => {
      console.log("scrollToTop");
      if (scrollRef.current) {        
        scrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
      }
    };
    const handleChange=(questionId,value)=>{
        setAnswers(prev=>({...prev,[questionId]:value}));
    }
    const handleRewrite=(questionId,value)=>{
        setAnswers(prev => ({ ...prev, [questionId]:value }));
    }
    const handleSubmit=()=>{
      let count=0;
      questions.forEach(q => {
        if(compareAnswer(q.answer,answers[q.id],q.options && q.options.length) ){
          count=count+1;
        }
      });
      
      setResults({score:count,total:questions.length});

      setSubmitted(true);
      scrollToTop();
        
    }
    // const handleLocalStorage = (index,value) => {
    //   const newArray = [...savecocckies];
    //   newArray[index] = value;
    //   console.log('newArray',newArray);
    //   setSaveCookies(newArray);
    //   localStorage.setItem("myArray", JSON.stringify(newArray));
    // }
    
    const answerSttring= (val,isnum) => {
     
        if(!isnum) {
            return val;
        }else{
           if(val?.toString()==="1"){
            return 'A';
           }else if(val?.toString()==="2"){
            return 'B';
           }else if(val?.toString()==="3"){
            return 'C';
           }else if(val?.toString()==="4"){
            return 'D';
           }
        }
    }    
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
    const compareAnswer = (result,answer,isnum) => {    
     
     if(isnum) {
       return parseFloat(result) === (parseFloat(answer)+1);
     }else{   
        if (typeof answer === "undefined") return false;     
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
        <div class="wrap-question" ref={scrollRef} onScroll={handleScroll}>
        {isScroll && (
          <div class="scrolltop" onClick={(e)=>scrollToTop()}></div>
        )}        
        {questions.map(q => (
        <div key={q.id} style={{
        marginBottom: "1em",
       
        padding: "0.8em",
        border: "1px solid #ccc",
        borderRadius: "5px",
        background: submitted
          ? (compareAnswer(q.answer,answers[q.id],q.options && q.options.length) )
            ? "#e0ffe0" // greenish for correct
            : "#ffe0e0" // reddish for incorrect
          : "#fff9f9"//#f9f9f9
      }}>
      {/* {q.answer}       */}
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
                <div key={`${q.id}-exp`}><p ><strong>Trả lời:</strong> {answerSttring(q.answer,q.options && q.options.length)}</p>
                <p dangerouslySetInnerHTML={{ __html: q.explanation }}></p>
                </div>
            )
        }
        </div>
        ))}
        {!submitted ? (
          <>
        <button onClick={handleSubmit} style={{ padding: "0.5em 1em" }} class="btn-shadow">
          <strong>Submit</strong>
        </button>        
        </>
         ):(
          <button onClick={handleRefesh} style={{ padding: "0.5em 1em" }} class="btn-shadow">
          <strong>Refesh</strong>
        </button>  
         )}
         </div>
         
         {submitted && (
        <div style={{ marginTop: "0.5em",color:"#fff" }}>
          <h3>Kết quả</h3>
          <p>Số câu trả lời đúng <strong>{results.score}</strong> trên tổng <strong>{results.total}</strong> câu.</p>
        </div>
        )}

        </>
    );
  }
  export default Question;