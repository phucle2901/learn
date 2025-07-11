import React, { useEffect, useState } from "react";
import {
    answerSttring,
    fReplaceQuestion,
    compareAnswer,
  } from "../../component/function/index";
const Gramma = ({title}) => {
    const [questions, setQuestions] = useState([]);
     const [answers, setAnswers] = useState([]);  
    const [indexEx, setIndexEx] = useState(-1); 
    const [content, setContent] = useState(null); // State to hold the content of the exercise
    

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
                console.log('load exercise grama');
                const module=await import(`../../data/gramma/${title}`)
                // questionPlan.push(...module.gramma[0].questions);
                //console.log(module.gramma.length);
                //console.log(module.gramma[0].questions);

                for (let i = 0; i < module.gramma.length; i++) {
                    //console.log(module.gramma[i].questions);
                    questionPlan.push({
                      ...questionPlan,
                      question: setupFirst(module.gramma[i].questions),
                    });
                    console.log(questionPlan);
                }
                console.log(questionPlan); // use it here
                setQuestions(questionPlan);
              };
            const loadContent = async () => {
                const module = await import(`./template/${title}` );
                const eComparative = module.default;
                setContent(eComparative);
                
              };
            loadContent();
            loadData();
        }
    }, [title]);

   
    
      const handleChange = (row,questionId, value) => {
        //setAnswers((prev) => ({ ...prev, [questionId]: value }));
        updateAnswer(row, questionId, value);
      };
      const handleRewrite = (row,questionId,value) => {
        //setAnswers((prev) => ({ ...prev, [questionId]: value }));
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
        console.log(answers[index],index);
        //setResults({ score: count, total: questions.length });
    
        //setSubmitted(true);
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

    return (
        <>
        <div class="wrap-question">
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