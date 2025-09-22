import React, { useEffect, useState,useRef } from "react";
import {
    answerSttring,
    fReplaceQuestion,
    compareAnswer,
  } from "../../component/function/index";

const Chemistry = ({title}) => {
  const defaultArray = [2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const scrollRef = useRef(null);
    const [content, setContent] = useState(null); // State to hold the content of the exercise
    const [isScroll, setIsScroll] = useState(false);
    const [savecocckies, setSaveCookies] = useState(() => {
        const saved = localStorage.getItem("myArray");
        return saved ? JSON.parse(saved) : defaultArray;
      });
    useEffect(() => {
        
        if (title!=='') {
            
            const loadContent = async () => {
                const module = await import(`./template/${title}` );                
                const eComparative = module.default;               
                setContent(eComparative);
                
              };
              loadContent();
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
    return (
        <>
        <div class="wrap-question" ref={scrollRef} onScroll={handleScroll}>       
        {content}
        </div>
        
        </>
    );
};

export default Chemistry;