import "./App.css";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import DefaultLayout from "./Layout";

import Exam from "./component/english/exam";
import Popup from "./component/popup/Popup";
import Gramma from "./component/gramma/Gramma";

import Translator from "./component/translator/Translator";


function App() {
  //const [examId, setExamId] = useState(0);
  const [refeshData, setRefeshData] = useState(true);
  const [gradeExam,setGradeExam]=useState({examId:0,grade:8});
  
  const menus = ["", "Gerund", "Comparative", "Article", "Quantifiers", "Makedo", "Conditional","Tagquestion","Form","Rewrite","Tenses","Coordination","Subjunctivemood"];
  const descMenus = ["", "Danh động từ và động từ nguyên mẫu", "So sánh", "Mạo từ A, An, The", "Lượng từ","Cách dùng Make, Do, Have, Get","Câu điều kiện","Câu hỏi đuôi", "Trật tự từ", "Cấu trúc viết lại câu","Thì động từ","Sự phối thì","Câu giả định"];
  const [menuActive, setMenuActive] = useState(() => {
    const saved = localStorage.getItem("menuActive");
    return saved ? JSON.parse(saved) : 0;
  }
  );
  //const apiUrl = process.env.REACT_APP_API_URL;
  const location = useLocation();

 

  //console.log("apiUrl: ", apiUrl);
  {
    /* https://flyer.vn/de-tieng-anh-lop-8-kem-dap-an/
      https://langgo.edu.vn/bai-tap-tieng-anh-lop-8 */
  }
  {
    /* <Question examId={1}/> */
  }
  useEffect(() => {
    if (location.pathname !== "/") {
      setRefeshData(true);
    } else {
      //setExamId(0);
      setGradeExam({examId:0,grade:8});
      setRefeshData(true);
    }
  }, [location.pathname]);
  useEffect(() => {
    localStorage.setItem("menuActive", JSON.stringify(menuActive));
  }, [menuActive]);
  const handleHomeClick = () => {
    setMenuActive(0);
    //setExamId(0);
    setGradeExam({examId:0,grade:8});
    setRefeshData(true);
    
  };
  
  return (
    <div className="App">
      <Popup
        gradeExam={gradeExam}
        setRefeshData={setRefeshData}
        setGradeExam={setGradeExam}
        setMenuActive={setMenuActive}
        descMenus={descMenus}
      />
      <Translator />
      <>
        <nav>
          <Link to="/" onClick={(e) => handleHomeClick()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 stroke-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </Link>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <DefaultLayout>
                {menuActive === 0 ? (
                  <Exam
                    gradeExam={gradeExam}
                    setGradeExam={setGradeExam}
                    refeshData={refeshData}
                    setRefeshData={setRefeshData}
                    
                  />
                ) : (
                  <Gramma
                    title={menus[menuActive]}
                    setMenuActive={setMenuActive}
                  />
                )}
              </DefaultLayout>
            }
          />
        </Routes>
      </>
    </div>
  );
}

export default App;
