export function answerSttring(val, isnum){
    if (!isnum) {
      return val;
    } else {
      if (val?.toString() === "1") {
        return "A";
      } else if (val?.toString() === "2") {
        return "B";
      } else if (val?.toString() === "3") {
        return "C";
      } else if (val?.toString() === "4") {
        return "D";
      }else{
        return val;
      }
    }
  };
  export function cleanSpace  (text) {
    if (typeof text === "undefined") {
      return "";
    }
    return text.replace(/\s+/g, " ").trim();
  };
  export function cleanLastChar  (str) {
    if (cleanSpace(str) === "") return str;
    return str.replace(/[^a-zA-Z]$/, "");
  };
  export function compareAnswer  (result, answer, isnum)  {
    if (isnum) {
      return parseFloat(result) === parseFloat(answer) + 1;
    } else {
      if (typeof answer === "undefined") return false;
      const cleaned = cleanSpace(answer);
      if (
        cleanLastChar(result).toString().toLowerCase() ===
        cleanLastChar(cleaned)?.toString().toLowerCase()
      ) {
        return true;
      }
      return false;
    }
  };
  
  export function fReplaceQuestion(originalString,num){
  let newindex=num;  
  const newString = originalString.replace(/\((\d+)\)/g, (match,i) => {
    newindex=newindex+1;
    return  "(" + newindex +")" ;
  });
  return newString;
}