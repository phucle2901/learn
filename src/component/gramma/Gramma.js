import React, { useEffect, useState,useRef } from "react";
import {
    answerSttring,
    fReplaceQuestion,
    compareAnswer,
  } from "../../component/function/index";
const Gramma = ({title}) => {
    const scrollRef = useRef(null);
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);  
    const [indexEx, setIndexEx] = useState(-1); 
    const [content, setContent] = useState(null); // State to hold the content of the exercise
    const [isScroll, setIsScroll] = useState(false);

    useEffect(() => {
      setAnswers([]); // Reset answers when title changes
      setIndexEx(-1); // Reset index when title changes
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
                const module=await import(`../../data/gramma/${title}`);
                for (let i = 0; i < module.gramma.length; i++) {
                    questionPlan.push({
                      ...questionPlan,
                      question: setupFirst(module.gramma[i].questions),
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
    }, [title]);

   
    
      const handleChange = (row,questionId, value) => {
        updateAnswer(row, questionId, value);
      };
      const handleRewrite = (row,questionId,value) => {
        updateAnswer(row, questionId, value);
      };
      const handleSubmit = (index) => {
        setIndexEx(index);
        let count = 0;
        questions[index].question.forEach((q) => {
          if (
            compareAnswer(q.answer, answers[index]?.[q.id], q.options && q.options.length)
          ) {
            count = count + 1;
          }
        });       
      };
      const handleRefesh = (index) => {
        updateRefreshAnswer(index);
        setIndexEx(-1);
       
      };
      const updateRefreshAnswer = (row) => {
        setAnswers(prev => {
          const newAnswers = [...prev];
          // Ensure the row exists
          if (!newAnswers[row]) {
            newAnswers[row] = []; // Create new row
          }  
          return newAnswers;
        });
      };
      const updateAnswer = (row, col, value) => {
        setAnswers(prev => {
          const newAnswers = [...prev];
      
          // Ensure the row exists
          if (!newAnswers[row]) {
            newAnswers[row] = []; // Create new row
          }
      
          // Copy the row before modifying
          newAnswers[row] = [...newAnswers[row]];
          newAnswers[row][col] = value;
      
          return newAnswers;
        });
      };
      const handleScroll = (e) => {
        const scrollTop = e.target.scrollTop;
        if (scrollTop > 500) {
          setIsScroll(true);
        } else {
          setIsScroll(false);
        }
      };
    return (
        <>
        <div class="wrap-question" ref={scrollRef} onScroll={handleScroll}>
            {content}
            <p class="mt-3  mb-3 text-white font-bold text-2xl">
                        <strong>Bài tập</strong>
                      </p>
                    <>      
                    
                      {questions.map((qs,count) =>
                        <div key={count}>
                        {qs.question.map((q, indexQ) => (
                          <div
                            key={q.id}
                            style={{
                              marginBottom: "1em",
            
                              padding: "0.8em",
                              border: "1px solid #ccc",
                              borderRadius: "5px",
                              background: count=== indexEx
                                ? compareAnswer(
                                    q.answer, 
                                    answers[count]?.[q.id],
                                    q.options && q.options.length
                                  )
                                  ? "#e0ffe0" // greenish for correct
                                  : "#ffe0e0" // reddish for incorrect
                                : "#fff9f9", //#f9f9f9
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
                                __html: "<b>Question " + q.id + ":</b> " + q.question,
                              }}
                            ></div>
                            {q.options && q.options.length > 0 ? (
                              q.options.map((opt, index) => (
                                <label key={index} style={{ display: "block" }}>
                                  <input
                                    type="radio"
                                    name={`q-${count}-${q.id}`}
                                    value={index}
                                    disabled={count=== indexEx}
                                    checked={answers[count]?.[q.id] === index}
                                    onChange={() => handleChange(count ,q.id,index)}
                                  /> <span dangerouslySetInnerHTML={{ __html: opt }}></span>
                                </label>
                              ))
                            ) : (
                              <>
                                <div className="wrap-rewrite flex content-start">
                                  <span
                                    dangerouslySetInnerHTML={{ __html: q.rewrite }}
                                  ></span> <textarea
                                    rows={2}
                                    class="rewrite"
                                    onChange={(e) => handleRewrite(count,q.id, e.target.value)}
                                  />
                                  <span
                                    dangerouslySetInnerHTML={{ __html: q.lastwrite }}
                                  ></span>
                                </div>
                              </>
                            )}               
                            { count===indexEx && (
                              <div key={`${q.id}-exp`}>
                                <p class="mt-3">
                                  <strong>Trả lời: </strong>
                                  {answerSttring(q.answer, q.options && q.options.length)}
                                </p>
                                <p class="mt-3" dangerouslySetInnerHTML={{ __html: q.explanation }}></p>
                              </div>
                            )}
                          </div>
                        ))}
                        {indexEx!==count ? (
                        <>
                          <button
                            onClick={(e)=>handleSubmit(count)}
                            style={{ padding: "0.5em 1em" }}
                            class="btn-shadow mb-3"
                          >
                            <strong>Submit</strong>
                          </button>
                        </>
                      ) : (
                        <button
                          onClick={(e)=>handleRefesh(count)}
                          style={{ padding: "0.5em 1em" }}
                          class="btn-shadow mb-3"
                        >
                          <strong>Refesh</strong>
                        </button>
                      )}
                      </div>
                      )}
                      
                    </>
        </div>
        </>
    );
};

export default Gramma;