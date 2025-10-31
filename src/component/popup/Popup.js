import React,{useState,useEffect} from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useNavigate } from "react-router-dom";


import { eExamLength as eExamLenTen  } from "../../data/gradeten/gradeten";
import { eExamLength as eExamLenEight } from "../../data/exam/exam";

function Popup({ setGradeExam, setRefeshData, setMenuActive ,descMenus,uniqueExam,setUniqueID,setTypeSubject,typeSubject,nameChemistry,nameMath}) {
  const [showTab,setShowTab]=useState(0);
  const [defaultTab,setDefaultTab]=useState(3);
  const navigate = useNavigate();
  const handleClick = (id,grade) => {
    // console.log("handleClick: ", handleClick);
    setGradeExam({examId:id,grade:grade});
    setMenuActive(0);    
    setRefeshData(true);
    navigate("/");
  };
  const handleUniqueClick = (index) => {    
    setUniqueID(index)
    handleClick(0,8);
    
  };
  let links = [];
  if (eExamLenEight > 0) {
    for (let i = 0; i < eExamLenEight; i++) {
      links.push({ label: "Đề số " + (i + 1), id: i + 1 });
    }
  }
  // { label: 'Đề giữa kỳ 1 - Đề 1',id:1 },

  let examList = [];
  if (eExamLenTen > 0) {
    for (let i = 0; i < eExamLenTen; i++) {
    examList.push({ label: "Đề số a " + (i + 1), id: i + 1 });
    }
  }
 
  const handleChange=(index)=>{
    console.log("handleChange: ",index);
    if(index===0 || index===3 || index===4 || index===5){
      setMenuActive(1);  
      setShowTab(0);
      (index===0)?setDefaultTab(3):setDefaultTab(index);
      setTypeSubject(1);
      
    }else if(index===1 || index===6 || index===7){  
      setMenuActive(1);    
      setTypeSubject(2);   
      (index===1)?setDefaultTab(6):setDefaultTab(index);
      setShowTab(1);
        
    }else if(index===2 || index===8 || index===9){
      setMenuActive(1);    
      setTypeSubject(3);   
      (index===2)?setDefaultTab(8):setDefaultTab(index);
      setShowTab(2);
    }
    
  }
  useEffect(() => {  
    if(typeSubject===2){
      setDefaultTab(6);
      setShowTab(1);
    }else if(typeSubject===3){
      setDefaultTab(8);
      setShowTab(2);
    }else{
      setDefaultTab(3);
      setShowTab(0);
    }
  },[typeSubject]);
  
  return (
    <div class="popup-menu">
      <div className="flex  w-full justify-end ">
        <div className="flex gap-10">        

          <Menu>         
            <MenuButton className="bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </MenuButton>
            <MenuItems
              anchor="bottom"
              className="bg-[#ffebae] p-2 mr-20 z-99999 sub-menu"
            >
              <Tabs selectedIndex={defaultTab}  onSelect={(index) => handleChange(index)} >
                <TabList>
                  <Tab key={1}>Anh văn</Tab>
                  <Tab key={2}>Hóa học</Tab>
                  <Tab key={3}>Toán học</Tab>
                  <Tab key={4} className={showTab!==0?'hidden ':''}>Đề thi</Tab>
                  <Tab key={5} className={showTab!==0?'hidden':''}>Dạng bài tập</Tab>
                  <Tab key={6} className={showTab!==0?'hidden ':''}>Ngữ pháp</Tab>
                  <Tab key={7} className={showTab!==1?'hidden ':''}>Lý thuyết</Tab>
                  <Tab key={8} className={showTab!==1?'hidden':''}>Bài tập</Tab>
                  <Tab key={9} className={showTab!==2?'hidden ':''}>Lý thuyết</Tab>
                  <Tab key={10} className={showTab!==2?'hidden':''}>Bài tập</Tab>
                </TabList>

                <TabPanel>
                </TabPanel>
                <TabPanel>

                </TabPanel>
                <TabPanel>
                </TabPanel>
                <TabPanel>
                {eExamLenEight>0 && (
                  <MenuItem><p>Đề thi lớp 8</p></MenuItem>
                )}
                {links.map((link) => (
                  <MenuItem
                    key={link.id}
                    className="block no-underline hover:underline "
                  >
                    <Link  onClick={(e) => {  handleClick(link.id,8); }} >
                      {link.label}
                    </Link>
                  </MenuItem>
                ))}   
                {eExamLenTen>0 && (
                  <MenuItem><p>Đề thi lớp 10</p></MenuItem>
                )}
                {eExamLenTen>0 && examList.map((link) => (
                 
                  <MenuItem
                    key={link.id}
                    className="block no-underline hover:underline "
                  >
                    <Link  onClick={(e) => {  handleClick(link.id,10); }} >
                      {link.label}
                    </Link>
                  </MenuItem>
                  
                  
                ))}    

              </TabPanel>
              <TabPanel>
               {uniqueExam.map((menu, index) => (
                    <MenuItem
                      key={index}
                      className="block no-underline hover:underline "
                    >
                      <Link onClick={() => { handleUniqueClick(index); }}>
                        {menu}
                      </Link>
                    </MenuItem>
                  ))}       
              </TabPanel>
                <TabPanel>
                  {descMenus.map((menu, index) => (
                    <MenuItem
                      key={index}
                      className="block no-underline hover:underline "
                    >
                      <Link onClick={() => { setMenuActive(index); }}>
                        {menu}
                      </Link>
                    </MenuItem>
                  ))}                  
                </TabPanel>
                <TabPanel>Lý thuyết hóa
                {nameChemistry.map((menu, index) => (
                    <MenuItem
                      key={index}
                      className="block no-underline hover:underline "
                    >
                      <Link onClick={() => { setMenuActive(index); setTypeSubject(2);}}>
                        {menu}
                      </Link>
                    </MenuItem>
                  ))}    
                </TabPanel>
                <TabPanel>Bài tập hóa</TabPanel>
                <TabPanel>Lý thuyết toán
                {nameMath.map((menu, index) => (
                    <MenuItem
                      key={index}
                      className="block no-underline hover:underline "
                    >
                      <Link onClick={() => { setMenuActive(index); setTypeSubject(3);}}>
                        {menu}
                      </Link>
                    </MenuItem>
                  ))} 
                </TabPanel>
                <TabPanel>Bài tập toán</TabPanel>
              </Tabs>
            </MenuItems>
          </Menu>
        </div>
      </div>
    </div>
  );
}

export default Popup;
