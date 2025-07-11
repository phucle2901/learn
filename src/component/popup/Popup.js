import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
//import 'react-tabs/style/react-tabs.css';
import { useNavigate } from "react-router-dom";

function Popup({ setExamId, setRefeshData, numExams }) {
  const navigate = useNavigate();
  const handleClick = (id) => {
    console.log("handleClick: ", handleClick);
    setExamId(id);
    setRefeshData(true);
    navigate("/");
  };

  let links = [];
  for (let i = 0; i < numExams; i++) {
    links.push({ label: "Đề số " + (i + 1), id: i + 1 });
  }
  // { label: 'Đề giữa kỳ 1 - Đề 1',id:1 },

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
                  {links.map((link) => (
                    <MenuItem
                      key={link.id}
                      className="block no-underline hover:underline "
                    >
                      <a
                        href="#"
                        onClick={(e) => {
                          handleClick(link.id);
                        }}
                      >
                        {link.label}
                      </a>
                    </MenuItem>
                  ))}
                </TabPanel>
                <TabPanel>
                  <MenuItem
                    key={1}
                    className="block no-underline hover:underline "
                  >
                    <Link
                      to="/gerund"
                      className="block no-underline hover:underline"
                    >
                      Danh động từ và động từ nguyên mẫu
                    </Link>
                  </MenuItem>
                  <MenuItem
                    key={2}
                    className="block no-underline hover:underline "
                  >
                    <Link
                      to="/comparative"
                      className="block no-underline hover:underline"
                    >
                      So sánh
                    </Link>
                  </MenuItem>
                  <MenuItem
                    key={3}
                    className="block no-underline hover:underline "
                  >
                    <Link
                      to="/article"
                      className="block no-underline hover:underline"
                    >
                      Mạo từ a, an, the
                    </Link>
                  </MenuItem>
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
