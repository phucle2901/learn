import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useNavigate } from "react-router-dom";


import { eExamLength as eExamLenTen  } from "../../data/gradeten/gradeten";
import { eExamLength as eExamLenEight } from "../../data/exam/exam";

function Popup({ setGradeExam, setRefeshData, setMenuActive ,descMenus}) {

  const navigate = useNavigate();
  const handleClick = (id,grade) => {
    //console.log("handleClick: ", handleClick);
    setGradeExam({examId:id,grade:grade});
    setMenuActive(0);    
    setRefeshData(true);
    navigate("/");
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
              <Tabs>
                <TabList>
                  <Tab>Đề thi</Tab>
                  <Tab>Ngữ pháp</Tab>
                </TabList>

                
               

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
              </Tabs>
            </MenuItems>
          </Menu>
        </div>
      </div>
    </div>
  );
}

export default Popup;
