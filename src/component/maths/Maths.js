import React, { useEffect, useState,useRef } from "react";
import {
    answerSttring,
    fReplaceQuestion,
    compareAnswer,
  } from "../function/index";

const Maths = ({title}) => {
  const defaultArray = [2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const scrollRef = useRef(null);
    const [content, setContent] = useState(null); // State to hold the content of the exercise
    const [isScroll, setIsScroll] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]); 
    const [indexEx, setIndexEx] = useState(-1); 
    const [savecocckies, setSaveCookies] = useState(() => {
        const saved = localStorage.getItem("myArray");
        return saved ? JSON.parse(saved) : defaultArray;
      });
    //let answers=[];
    useEffect(() => {
      setAnswers([]);
      let questionPlan = [];
      const setupFirst = (question) => {
        let newQuestion = question.map((item, index) => ({
          ...item,
          id: index + 1,
        }));
    
        return newQuestion;
      };
        if (title!=='') {
          const loadData = async () => {
            const module=await import(`../../data/maths/${title}`);
            for (let i = 0; i < module.math.length; i++) {
                questionPlan.push({
                  ...questionPlan,
                  question: setupFirst(module.math[i].questions),
                });
                console.log(questionPlan);
                
            }
            setQuestions(questionPlan);
            
          };
            const loadContent = async () => {
                const module = await import(`./template/${title}` );                
                const eComparative = module.default;               
                setContent(eComparative);
                
              };
              loadContent();
              loadData();
              setTimeout(() => {
                if (scrollRef.current) {
                  scrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
                }
              }, 0);
        }
    },[title]);
    const handleScroll = (e) => {
        const scrollTop = e.target.scrollTop;
        if (scrollTop > 500) {
          setIsScroll(true);
        } else {
          setIsScroll(false);
        }
      };
    const updateAnswer = ( len,value) => {
      const newAnswers=[];
      for (let i =0; i < len; i++) {
        newAnswers.push(value);
      }
      if(answers.length===0){
        setAnswers(newAnswers);
      }

    }
    const handleSubmit = (index) => {     
            setIndexEx(index);
            //answers[index]=1;
            setAnswers(prev => {
              const newAnswers = [...prev];
              newAnswers[index] = 1;
              return newAnswers;
            });

            console.log(answers);                  
    };
    return (
        <>
        <div class="wrap-question" ref={scrollRef} onScroll={handleScroll}>       
        {content}
        
        <p class="mt-3  mb-3 text-white font-bold text-2xl"><strong>Bài tập</strong></p>
        {questions.map((qs,count) =>
          <div key={count}>
          {updateAnswer(qs.question.length,0)}
          {qs.question.map((q, indexQ) => (                     
            <div
              key={q.id}
              style={{
                marginBottom: "1em",

                padding: "0.8em",
                border: "1px solid #ccc",
                borderRadius: "5px",  
                background: "#ffffff",              
              }}
            >       
                      
              {q.extra && q.extra.length > 0 && (
                <div
                  className="extra-content"
                  dangerouslySetInnerHTML={{
                    __html: fReplaceQuestion(q.extra, indexQ),
                  }}
                ></div>
              )}
              <div
                class="question pb-[5px]"
                dangerouslySetInnerHTML={{
                  __html: "<b>Bài " + q.id + ":</b> " + q.question,
                }}
              >                
              </div>
              
              <div key={`${q.id}-exp`} className={answers[indexQ]===0?'hidden ':''}>
                    <p class="mt-3">
                      <strong>Hướng dẫn:</strong>                     
                    </p>
                    <p class="mt-3" dangerouslySetInnerHTML={{ __html: q.explanation }}></p>
              </div>             
              <button
              onClick={(e)=>handleSubmit(indexQ)}
              style={{ padding: "0.5em 1em" }}
              class="btn-shadow mb-3 mt-5"  >
              <strong>Xem hướng dẫn</strong>
              </button>
              
            </div>
          ))}
          
        </div>
        )}
        </div>
        </>
    );
};

export default Maths;