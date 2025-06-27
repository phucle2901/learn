import './App.css';
import  {  useState } from "react";
import DefaultLayout from './Layout';

import Exam from './component/english/exam';
import Popup from './component/popup/Popup';
import { eExam  }  from './data/exam/exam'

import Translator from './component/translator/Translator';

function App() {
  const [examId,setExamId]=useState(0);
  const [refeshData, setRefeshData] = useState(true); 
  const numExams=eExam.length;
  return (
    <div className="App"> 
      <Popup setExamId={setExamId} setRefeshData={setRefeshData} numExams={numExams}/>
      <Translator/>
      <DefaultLayout >
      {/* https://flyer.vn/de-tieng-anh-lop-8-kem-dap-an/
      https://langgo.edu.vn/bai-tap-tieng-anh-lop-8 */}
        {/* <Question examId={1}/> */}
        <Exam examId={examId} setExamId={setExamId} refeshData={refeshData} setRefeshData={setRefeshData} />
      </DefaultLayout>
    </div>
  );
}

export default App;
