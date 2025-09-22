import React, { useEffect, useState, useRef } from "react";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import {answerSttring,fReplaceQuestion,compareAnswer} from "../../component/function/index";

import { ePRONOUNCIATION } from "../../data/pronunciation";
import { eCLOSEST } from "../../data/closest";
import { eOPPOSITE } from "../../data/opposite";
import { eREAD } from "../../data/read";
import { eREARRANGE } from "../../data/rearrange";
import { eREWRITE } from "../../data/rewrite";
import { eSUITABLE } from "../../data/suitable";
import { eUNDERLINED } from "../../data/underlined";
import { eVOCABULARY } from "../../data/vocabulary";
import { eWORDDIFFER } from "../../data/word_differ";
import { eEXTRACONTENT } from "../../data/extracontent";
import { eRIGHTTENSE } from "../..//data/righttenseorform";


const Exam = ({setGradeExam,refeshData,setRefeshData,gradeExam,uniqueID}) => {
console.log("gradeExam=",gradeExam);
  const scrollRef = useRef(null);
  const playerRef = useRef(null);
  const defaultArray = [2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [savecocckies, setSaveCookies] = useState(() => {
    const saved = localStorage.getItem("myArray");
    return saved ? JSON.parse(saved) : defaultArray;
  });
  const [results, setResults] = useState({});
  
  const [isScroll, setIsScroll] = useState(false);
  
  useEffect(() => {    
    if (refeshData) {
      setQuestions([]);
      pauseMedia();
      setAnswers({});
      setSubmitted(false);
      setResults({});
      setRefeshData(false);
      const tempCookies = [...savecocckies];
      function getRandomItems(array, count, extraIndex) {
        const result = [];
        const extraContent = eEXTRACONTENT[extraIndex];
        const startIndex = savecocckies[extraIndex] || 0;

        let copy = [...array]; // Make a copy to avoid mutating the original
        let index = startIndex;
        let itemsAdded = 0;

        
        while (itemsAdded < count && count && copy.length > 0) {         
          if (index >= copy.length) index = 0; // Reset index if it exceeds the array length         
          const item = copy[index];
          const extraValue = result.length === 0 ? extraContent : "";
          result.push({
            ...item,
            extra: extraValue,
          });
          index = index + 1; // Increment index and wrap around if it exceeds the length
          itemsAdded = itemsAdded + 1;
        }
        const newIndex = (startIndex + itemsAdded) % array.length;
        tempCookies[extraIndex] = newIndex;
        return result;
      }

      function getReadRandomItems(array, count, extraIndex) {
        const copy = [...array]; // Make a copy to avoid mutating the original
        const result = [];
        const extraContent = eEXTRACONTENT[extraIndex];
        const startIndex = savecocckies[extraIndex] || 0;
        let index = startIndex;
        let itemsAdded = 0;

       
        while (itemsAdded < count && copy.length > 0) {
          if (index >= copy.length) index = 0;
          if (copy[index].content === "") continue; // Skip if the id matches newindex
          const items = copy[index];

          items.questions.forEach((item, sindex) => {
            const extraValue =
              result.length === 0 && sindex === 0
                ? extraContent + items.content
                : "";
            result.push({
              ...item,
              extra: extraValue,
            });
          });
          index = index + 1;
          itemsAdded = itemsAdded + 1;
        }
        const newIndex = (startIndex + itemsAdded) % array.length;
        tempCookies[extraIndex] = newIndex;
        return result;
      }
      const setupFirst=()=>{
        questionPlan = questionPlan.map((item, index) => ({
            ...item,
            id: index + 1,
          }));

          // Save all updates at once
          setSaveCookies(tempCookies);
          localStorage.setItem("myArray", JSON.stringify(tempCookies));

          setQuestions(questionPlan);
          setTimeout(() => {
            if (scrollRef.current) {
              scrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
            }
          }, 0);
      }

      let questionPlan = [];

    if(gradeExam.examId>0){
        const loadData = async () => {          
            let module;
            if(gradeExam.grade===8){
              module=await import('../../data/exam/exam.js');
            }else{
              module=await import('../../data/gradeten/gradeten');
            }
            console.log("grade=====",gradeExam.grade);
            questionPlan.push(...module.eExam[gradeExam.examId-1].questions);
            console.log(module.eExam.length);
            console.log(module.eExam[gradeExam.examId-1].questions);
            setupFirst();
          };
        loadData();
    }else{   

      if(uniqueID===-1){
        questionPlan.push(...getRandomItems(ePRONOUNCIATION, 2, 0));
        questionPlan.push(...getRandomItems(eWORDDIFFER, 2, 1));
        questionPlan.push(...getRandomItems(eUNDERLINED, 3, 2));
        questionPlan.push(...getRandomItems(eVOCABULARY, 10, 3));
        questionPlan.push(...getRandomItems(eSUITABLE, 2, 4));
        questionPlan.push(...getRandomItems(eCLOSEST, 2, 5));
        questionPlan.push(...getRandomItems(eOPPOSITE, 2, 6));
        questionPlan.push(...getReadRandomItems(eREAD, 1, 8));
        questionPlan.push(...getRandomItems(eRIGHTTENSE, 4, 7));
        questionPlan.push(...getRandomItems(eREARRANGE, 3, 9));
        questionPlan.push(...getRandomItems(eREWRITE, 5, 10));
      }else{
        console.log("uniqueID: "+uniqueID);
        if(uniqueID===0){
          questionPlan.push(...getRandomItems(ePRONOUNCIATION, 10, 0));
        }else if(uniqueID===1){
          questionPlan.push(...getRandomItems(eWORDDIFFER, 10, 1));
        }else if(uniqueID===2){
          questionPlan.push(...getRandomItems(eUNDERLINED, 10, 2));
        }else if(uniqueID===3){
          questionPlan.push(...getRandomItems(eVOCABULARY, 20, 3));
        }else if(uniqueID===4){
          questionPlan.push(...getRandomItems(eSUITABLE, 10, 4));
        }else if(uniqueID===5){
          questionPlan.push(...getRandomItems(eCLOSEST, 10, 5));
        }else if(uniqueID===6){
          questionPlan.push(...getRandomItems(eOPPOSITE, 10, 6));
        }else if(uniqueID===7){
          questionPlan.push(...getReadRandomItems(eREAD, 1, 8));
        }else if(uniqueID===8){
          questionPlan.push(...getRandomItems(eRIGHTTENSE, 10, 7));
        }else if(uniqueID===9){
          questionPlan.push(...getRandomItems(eREARRANGE, 10, 9));
        }else if(uniqueID===10){
          questionPlan.push(...getRandomItems(eREWRITE, 10, 10));        
        }

      }
        setupFirst();     
    }
    }
  }, [gradeExam]);//examId
  const handleRefesh = () => {
    if(gradeExam.examId===0){
      setGradeExam({examId:-1,grade:8});
    }else {
      setGradeExam({examId:0,grade:8});
    }
    
    pauseMedia();
    setAnswers({});
    setSubmitted(false);
    setResults({});
    setRefeshData(true);
    //scrollToTop();
  };
  const handleScroll = (e) => {
    const scrollTop = e.target.scrollTop;
    if (scrollTop > 500) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }

    // You can also get scrollHeight, clientHeight, etc. from e.target
  };
  const pauseMedia=()=>{
    if (playerRef.current) {
      playerRef.current.audio.current.pause();
    }
  }

  const scrollToTop = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  const handleChange = (questionId, value) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };
  const handleRewrite = (questionId, value) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };
  const handleSubmit = () => {
    pauseMedia();
    let count = 0;
    questions.forEach((q) => {
      if (
        compareAnswer(q.answer, answers[q.id], q.options && q.options.length)
      ) {
        count = count + 1;
      }
    });

    setResults({ score: count, total: questions.length });

    setSubmitted(true);
    scrollToTop();
  };
 
  return (
   
    <>   
      <div class="wrap-question" ref={scrollRef} onScroll={handleScroll}>       
        {questions.map((q,indexQ) => (
          <div
            key={q.id}
            style={{
              marginBottom: "1em",

              padding: "0.8em",
              border: "1px solid #ccc",
              borderRadius: "5px",
              background: submitted
                ? compareAnswer(
                    q.answer,
                    answers[q.id],
                    q.options && q.options.length
                  )
                  ? "#e0ffe0" // greenish for correct
                  : "#ffe0e0" // reddish for incorrect
                : "#fff9f9", //#f9f9f9
            }}
          >
            {/* {q.answer}       */}
            {q.extra && q.extra.length > 0 && (
              <div
                className="extra-content"
                dangerouslySetInnerHTML={{ __html: fReplaceQuestion(q.extra,indexQ) }}
              ></div>
            )}
            {q.media && q.media.length>0 && (
              
              <AudioPlayer class="width-audio"   ref={playerRef}             
                src={q.media}
                
                // other props here
              />
            )}
            <div
              class="question pb-[5px]"
              dangerouslySetInnerHTML={{
                __html: "<b>Question " + q.id + ":</b> " + q.question,
              }}
            ></div>
            {q.options && q.options.length > 0 ? (
              q.options.map((opt, index) => (
                <label key={index} style={{ display: "block" }}>
                  <input
                    type="radio"
                    name={`q-${q.id}`}
                    value={index}
                    disabled={submitted}
                    checked={answers[q.id] === index}
                    onChange={() => handleChange(q.id, index)}
                  /> <span dangerouslySetInnerHTML={{ __html:  opt }}></span>
                </label>
              ))
            ) : (
              <>
                <div className="wrap-rewrite flex content-start">
                <span dangerouslySetInnerHTML={{ __html: q.rewrite }}></span>&nbsp;
                <textarea 
                  rows={2}
                  className={"rewrite" + (q.lastwrite === undefined  ? " " : !q.lastwrite ? " ": " text-short")}
                  onChange={(e) => handleRewrite(q.id, e.target.value)}
                />&nbsp;
                <span dangerouslySetInnerHTML={{ __html: q.lastwrite }}></span>
                </div>
              </>
            )}
            {submitted && (
              <div key={`${q.id}-exp`}>
                <p>
                  <strong>Trả lời: </strong>
                  {answerSttring(q.answer, q.options && q.options.length)}
                </p>
                <p dangerouslySetInnerHTML={{ __html: q.explanation }}></p>
              </div>
            )}
          </div>
        ))}
        {!submitted ? (
          <>
            <button
              onClick={handleSubmit}
              style={{ padding: "0.5em 1em" }}
              class="btn-shadow"
            >
              <strong>Submit</strong>
            </button>
          </>
        ) : (
          <button
            onClick={handleRefesh}
            style={{ padding: "0.5em 1em" }}
            class="btn-shadow"
          >
            <strong>Refesh</strong>
          </button>
        )}
      </div>

      {submitted && (
        <div style={{ marginTop: "0.5em", color: "#fff" }}>
          <h3>Kết quả: Số câu trả lời đúng <strong> {results.score} </strong> trên tổng
          <strong> {results.total} </strong> câu.</h3>
         
        </div>
      )}
    </>
  );
};
export default Exam;
