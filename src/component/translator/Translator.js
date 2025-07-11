import React, { useEffect, useState ,useRef} from 'react';

const Translator = () => {
    const [selectedWord,setSelectedWord]=useState("");
    const [translation,setTranslation]=useState("");
    const [popupPosition,setPopupPosition]=useState({x:0,y:0});
    const [showPopup,setShowPopup]=useState(false);
    const lastTapRef = useRef(0);
    const timeoutRef = useRef(null);
    useEffect(()=>{
        const handleDoubleClick=async(e)=>{
            const text=window.getSelection().toString().trim();

            console.log("x: ",e);
            console.log("text: ",text);
            if(text && /^[a-zA-Z]+$/.test(text)){
                setSelectedWord(text);
                setPopupPosition({x:e.layerX,y:e.pageY});
                setShowPopup(true);
                clearTimeout(timeoutRef.current);
                const translated=await translateToVietnamese(text);
                setTranslation(translated);
                timeoutRef.current = setTimeout(() => {
                    setShowPopup(false);
                  }, 5000);
            }else{
                setShowPopup(false);               
            }
        }
        const handleTouchEnd = async (e) => {
            e.preventDefault();
            const currentTime = new Date().getTime();
            const tapLength = currentTime - lastTapRef.current;
      
            if (tapLength < 300 && tapLength > 0) {
              const text = window.getSelection().toString().trim();
              if (text && /^[a-zA-Z]+$/.test(text)) {
                const touch = e.changedTouches[0];
                setSelectedWord(text);
                setPopupPosition({ x: touch.pageX, y: touch.pageY });
                setShowPopup(true);
                const translated = await translateToVietnamese(text);
                setTranslation(translated);
              } else {
                setShowPopup(false);
              }
            }
      
            lastTapRef.current = currentTime;
          };
        document.addEventListener("dblclick",handleDoubleClick);
        document.addEventListener("touchend", handleTouchEnd); // mobile
        return ()=>{
            document.removeEventListener("dblclick",handleDoubleClick);
            document.removeEventListener("touchend", handleTouchEnd);
        }
    },[]);
    const translateToVietnamese=async(text)=>{
        console.log(text);
        try{
            const res=await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(
          text
        )}&langpair=en|vi`);
        const data=await res.json();
        return data.responseData.translatedText;
        }catch(error){
            console.log( "Error");
        }
    }
    const handleClose = () => {
        setShowPopup(false);
        clearTimeout(timeoutRef.current);
      };
    return (        
        <div style={{ padding: "20px", position: "absolute", left:0 }}>
      {/* Floating Popup */}
      {showPopup && (
        <div
          style={{
            position: "absolute",
            left: popupPosition.x + 10,
            top: popupPosition.y + 10,
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            padding: "8px 12px",
            borderRadius: "6px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
            zIndex: 1000,
            maxWidth: "300px",
            minWidth:"150px"
          }}
        >
             <div style={{ display: "flex", justifyContent: "flex-end " }}>
           
            <button
              onClick={handleClose}
              style={{
                border: "none",
                background: "transparent",
                fontSize: "10px",
                marginLeft: "10px",
                cursor: "pointer",
              }}
            >
              ❌
            </button>
          </div>
          <strong>{selectedWord}</strong> → {translation}
        </div>
      )}
    </div>
    );
};

export default Translator;