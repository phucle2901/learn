import React from "react";

const Quantifiers = () => {
  return (
    <div
      style={{
        padding: "0.8em",
        border: "1px solid #ccc",
        borderRadius: "5px",
        background: "#fff9f9",
        marginBottom: "1em",
      }}
    >
      <h1 class="text-center text-[1.7em] mb-5 text-shadow-h1">
        <b>Lượng từ</b>
      </h1>
      <div class="content-compare">
        <div class="compare">
          <div class="compare-item bg-[#f2a2e6]">
            <h1 class="compare-title text-center">
              Lượng từ với danh từ đếm được
            </h1>
            <ul class="compare-list">
              <li>
                <b>Many - Nhiều:</b>
                <ul class="ml-[15px]">
                  <li class="list-style-dot">
                    Dùng với danh từ đếm được số nhiều.
                  </li>
                  <li class="list-style-dot"><b>Khi chủ ngữ có chứa Many: </b><br/>Many (+ of)  + N (số nhiều)</li>
                  <li class="list-style-dot">
                    Many students attended the class. (Nhiều sinh viên đã tham
                    gia vào lớp học.)
                  </li>
                </ul>
              </li>
              <li>
                <b>a few/ few - Một vài/Ít:</b>
                <ul class="ml-[15px]">
                  <li class="list-style-dot">
                    "A few" có nghĩa là một số lượng nhỏ, nhưng đủ; "Few" nhấn
                    mạnh một số lượng rất ít, không đủ.
                  </li>
                  <li class="list-style-dot">
                    Few people know the answer. (Ít người biết câu trả lời.)
                    <br />A few people came to visit. (Một vài người đã đến
                    thăm.)
                  </li>
                </ul>
              </li>
              <li>
                <b>both - Cả hai:</b>
                <ul class="ml-[15px]">
                  <li class="list-style-dot">
                    Dùng để nói về hai người hoặc hai thứ.
                  </li>
                  <li class="list-style-dot">
                    Both books are interesting. (Cả hai cuốn sách đều thú vị.)
                  </li>
                </ul>
              </li>
              <li>
                <b>several - Một vài:</b>
                <ul class="ml-[15px]">
                  <li class="list-style-dot">
                    Dùng với danh từ đếm được, số nhiều, chỉ số lượng nhiều hơn
                    "a few" nhưng không cụ thể.
                  </li>
                  <li class="list-style-dot">
                    Several people are waiting for the bus. (Một vài người đang
                    chờ xe buýt.)
                  </li>
                </ul>
              </li>
              <li>
                <b>every/ each - Mỗi:</b>
                <ul class="ml-[15px]">
                  <li class="list-style-dot">
                    Dùng với danh từ đếm được, số ít; "Every" nhấn mạnh tất cả
                    các thành viên trong một nhóm, "Each" nhấn mạnh từng cá
                    nhân.
                  </li>
                  <li class="list-style-dot">
                    Every student has a book. (Mỗi sinh viên đều có một cuốn
                    sách.)
                    <br /> Each student received a different prize. (Mỗi sinh
                    viên đã nhận một giải thưởng khác nhau.)
                  </li>
                </ul>
              </li>
              
              {/* <li><b>Another: cái khác/ người khác</b>
              <ul class="ml-[15px]">              
              <li class="list-style-dot">Another + danh từ số it</li>
              <li class="list-style-dot">Another + one</li>
              <li class="list-style-dot">Another + số đếm + danh từ số nhièu</li>
              <li class="list-style-dot">Other được dùng như đại từ</li>
              </ul>  
              </li> */}
              <li>
                <b>a large/ great number of - Số lượng lớn:</b>
                <ul class="ml-[15px]">
                  <li class="list-style-dot">
                    Dùng với danh từ đếm được, số nhiều, chỉ một số lượng lớn.
                  </li>                  
                  <li class="list-style-dot">
                    A large/ A great number of tourists visit this city every
                    year. (Một lượng lớn du khách đến tham quan thành phố này
                    mỗi năm.)
                  </li>
                </ul>
              </li>
              <li>
                <b>a majority of - Phần lớn, đa số:</b>
                <ul class="ml-[15px]">
                  <li class="list-style-dot">
                    Dùng với danh từ đếm được, số nhiều, chỉ phần lớn trong một
                    nhóm.
                  </li>
                  <li class="list-style-dot">
                    A majority of the committee agreed on the decision. (Phần
                    lớn các thành viên trong ủy ban đã đồng ý với quyết định
                    này.)
                  </li>
                </ul>
              </li>
              <li>
                <b>a couple of - Một vài, một cặp:</b>
                <ul class="ml-[15px]">
                  <li class="list-style-dot">
                    
                    Dùng với danh từ đếm được, số nhiều, thường ám chỉ hai hoặc
                    vài cái.
                  </li>
                  <li class="list-style-dot">
                    I need a couple of hours to finish. (Tôi cần một vài giờ để
                    hoàn thành.)
                  </li>
                </ul>
              </li>
              <li>
                <b>a pair of - Một đôi:</b>
                <ul class="ml-[15px]">
                  <li class="list-style-dot">
                    Dùng với danh từ số ít hoặc số nhiều, chỉ hai vật đi chung
                    với nhau như giày, kính, v.v.
                  </li>
                  <li class="list-style-dot">
                    I bought a pair of shoes. (Tôi đã mua một đôi giày.)
                  </li>
                </ul>
              </li>
              <li><b>A number of - có một số:</b>
              <ul class="ml-[15px]">
              <li class="list-style-dot">Theo sau cụm này luôn là danh từ đếm được dạng số nhiều.</li>
              <li class="list-style-dot"><b>Khi chủ ngữ có chứa A number of: </b><br/>A number of + N (đếm được ở dạng số nhiều) + V (chia dạng số nhiều).<br/>The number of + N (dạng số nhiều) + V (dạng số ít).</li>
              <li class="list-style-dot">A large number of nations are in the developing process. (Một số quốc gia đang trong giai đoạn phát triển.)</li>
              </ul>

              </li>
            </ul>
          </div>
        </div>
        <div class="compare">
          <div class="compare-item bg-[#cbb8f5]">
            <h1 class="compare-title text-center">
              Lượng từ với danh từ không đếm được
            </h1>
            <ul class="compare-list">
              <li>
                <b>much - Nhiều</b>
                <ul class="ml-[15px]">
                  <li class="list-style-dot">
                    Dùng để chỉ một lượng lớn của danh từ không đếm được.
                  </li>
                  <li class="list-style-dot"><b>Khi chủ ngữ có chứa Much: </b><br/>Much (+ of) + N (không đếm được)</li>
                  <li class="list-style-dot">
                    There isn’t much water left in the cup. (Còn lại không nhiều
                    nước trong cốc.)
                  </li>
                </ul>
              </li>
              <li>
                <b>a little/ little - Một ít/ Ít:</b>
                <ul class="ml-[15px]">
                  <li class="list-style-dot">
                    "A little" chỉ một lượng nhỏ nhưng đủ; "Little" nhấn mạnh
                    một số lượng rất ít, không đủ.
                  </li>
                  <li class="list-style-dot">
                    Add a little salt to the dish. (Thêm một ít muối vào món
                    ăn.) <br />
                    There is little happiness for a reward. (Niềm vui khi dành
                    được giải thưởng rất ít ỏi.)
                  </li>
                </ul>
              </li>
             
              <li>
                <b>less - Ít hơn:</b>
                <ul class="ml-[15px]">
                  <li class="list-style-dot">
                    Dùng để so sánh về lượng của danh từ không đếm được.
                  </li>
                  <li class="list-style-dot">
                    We need less salt in this recipe. (Trong công thức nấu ăn
                    này, chúng ta cần ít muối hơn.)
                  </li>
                </ul>
              </li>
              <li>
                <b>a great deal of - Rất nhiều</b>
                <ul class="ml-[15px]">
                  <li class="list-style-dot">
                    Dùng để chỉ một lượng lớn của danh từ không đếm được.
                  </li>
                  <li class="list-style-dot">
                    Emi spent a great deal of time on the project. (Emi đã dành
                    rất nhiều thời gian cho dự án.)
                  </li>
                </ul>
              </li>
              <li>
                <b>a quantity of - Một lượng</b>
                <ul class="ml-[15px]">
                  <li class="list-style-dot">
                    Dùng để chỉ một lượng cụ thể của danh từ không đếm được.
                  </li>
                  <li class="list-style-dot">
                    We need a quantity of sugar for the recipe. (Theo công thức
                    nấu ăn, chúng tôi cần một lượng đường.)
                  </li>
                </ul>
              </li>
              <li>
                <b>a large/ great amount of - Một lượng lớn, nhiều:</b>
                <ul class="ml-[15px]">
                  <li class="list-style-dot">
                    Dùng để chỉ một lượng lớn của danh từ không đếm được.
                  </li>
                  <li class="list-style-dot">A large amount of + N (không đếm được) + V (chia dạng số ít)</li>
                  <li class="list-style-dot">
                    Linda would like to buy a large/ great amount of soda.
                    (Linda muốn mua một lượng nước ngọt lớn.)
                  </li>
                </ul>
              </li>
              <li>
                <b>a bit (of) - Một chút, một vài:</b>
                <ul class="ml-[15px]">
                  <li class="list-style-dot">
                    Dùng để chỉ một lượng nhỏ của danh từ không đếm được.
                  </li>
                  <li class="list-style-dot">
                    I need a bit of advice on this problem. (Tôi cần một vài lời
                    khuyên về vấn đề này.)
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div class="compare">
          <div class="compare-item bg-[#d0f5ce]">
            <h1 class="compare-title text-center pb-[8px]">
              Lượng từ với cả hai loại danh từ trên
            </h1>
            <ul class="compare-list">
              <li>
                <b>a lot of/ lots of - Nhiều:</b>
                <ul class="ml-[15px]">
                  <li class="list-style-dot">
                    Dùng để chỉ một số lượng lớn của danh từ đếm được và không
                    đếm được.
                  </li>
                  <li class="list-style-dot"><b>Khi chủ ngữ có chứa a lot of/ lots of:</b> <br/>
                  A lot of/ Lots of + N (đếm được dạng số nhiều) + V (chia dạng số nhiều)
                  <br/>A lot of/ Lots of + Đại từ + V (chia theo đại từ)</li>
                  
                  <li class="list-style-dot">
                    There are a lot of pencils on the table. (Có nhiều bút chì
                    trên bàn.)
                    <br />
                    We have lots of time to complete the task. (Chúng tôi có
                    nhiều thời gian để hoàn thành nhiệm vụ.)
                  </li>
                </ul>
              </li>
              <li>
                <b>some - Một chút/một số:</b>
                <ul class="ml-[15px]">
                  <li class="list-style-dot">
                    Dùng để chỉ một lượng không xác định nhưng thường là một
                    lượng nhỏ, dùng với cả danh từ đếm được và không đếm được.
                  </li>
                  <li class="list-style-dot"><b>Khi chủ ngữ có chứa Some</b><br/>Some + danh từ đếm được (dạng số nhiều) + V (chia ở số nhiều)<br/>Some + danh từ không đếm được + V (chia ở số ít)</li>
                  <li class="list-style-dot">
                    Can I have some apple juice? (Tôi có thể xin một ít nước ép
                    táo không?)
                    <br />
                    We need some people for the event. (Chúng tôi cần một số
                    người cho sự kiện.)
                  </li>
                </ul>
              </li>
              <li>
                <b>any - Bất kỳ:</b>
                <ul class="ml-[15px]">
                  <li class="list-style-dot">
                    Dùng trong câu <b>phủ định và câu hỏi</b>, hoặc với
                    <b>các từ nghi vấn</b>, với cả danh từ đếm được và không đếm
                    được.
                  </li>
                  <li class="list-style-dot"><b>Khi chủ ngữ có chứa Any: </b><br/>Any + N (đếm được số nhiều) + V (chia ở số nhiều)</li>
                  <li class="list-style-dot">
                    Do you have any questions? (Bạn có câu hỏi nào không?)
                    <br />I don’t have any money left. (Tôi không còn tiền nữa.)
                  </li>
                </ul>
              </li>
              <li><b>other: cái khác/ người khác</b>
              <ul class="ml-[15px]">
              <li class="list-style-dot">Other + Danh từ không đếm được</li>
              <li class="list-style-dot">Other + danh từ số nhiều</li>
              <li class="list-style-dot">Other + onces</li>
              <li class="list-style-dot">Other được dùng như đại từ</li>
              </ul>  
              </li>
              <li>
                <b>plenty of - Rất nhiều:</b>
                <ul class="ml-[15px]">
                  <li class="list-style-dot">
                    Dùng để chỉ một lượng rất lớn, với cả danh từ đếm được và
                    không đếm được.
                  </li>
                  <li class="list-style-dot"><b>Khi chủ ngữ có chứa Plenty of:</b> <br/> Plenty of + N (đếm được ở dạng số nhiều) + V (chia dạng số nhiều) <br/>Plenty of + N (không đếm được) + V (chia dạng số ít)</li>
                  <li class="list-style-dot">
                    There are plenty of cats in the house. (Có rất nhiều mèo
                    trong phòng.)
                  </li>
                </ul>
              </li>
              <li>
                <b>most/ most of - Hầu hết:</b>
                <ul class="ml-[15px]">
                  <li class="list-style-dot">
                    Dùng để chỉ phần lớn trong một nhóm của danh từ đếm được
                    hoặc không đếm được.</li>
                    <li class="list-style-dot">Most + N = most of + the/ tính từ sở hữu + N </li>
                    <li class="list-style-dot"><b>Lưu ý:</b> <br/>
                    <b>MOSTLY</b> (chủ yếu là): dùng như một trạng từ<br/>
                    <b>ALMOST</b> (gần như): dùng như một trạng từ bở trợ cho động từ, danh từ và tính từ
                    </li>                   
                  
                  <li class="list-style-dot">
                    Most people like to eat banana. (Hầu hết mọi người thích ăn
                    chuối.)
                    <br />
                    Most of the students failed the exam. (Hầu hết các sinh viên
                    đã trượt kỳ thi.)
                  </li>
                </ul>
              </li>
              
              <li>
                <b>all - Tất cả:</b>
                <ul class="ml-[15px]">
                  <li class="list-style-dot">
                    Dùng để chỉ toàn bộ, cho cả danh từ đếm được hoặc không đếm
                    được.
                  </li>
                  <li class="list-style-dot">
                    All the cookies were eaten. (Tất cả các bánh quy đã bị ăn
                    hết.)
                  </li>
                </ul>
              </li>
              <li>
                <b>enough - Đủ:</b>
                <ul class="ml-[15px]">
                  <li class="list-style-dot">
                    Dùng để chỉ một lượng đủ để đáp ứng nhu cầu, với cả danh từ
                    đếm được và không đếm được.
                  </li>
                  <li class="list-style-dot">
                    We have enough tables for students. (Chúng tôi có đủ bàn cho
                    tất cả học sinh.)
                  </li>
                </ul>
              </li>
              <li>
                <b>no - Không có:</b>
                <ul class="ml-[15px]">
                  <li class="list-style-dot">
                    Dùng để chỉ việc không có thứ gì, với cả danh từ đếm được và
                    không đếm được.
                  </li>
                  <li class="list-style-dot"><b>Khi chủ ngữ có chứa No:</b> <br/>No + danh từ số ít + V (số ít)<br/>No + danh từ số nhiều + V (số nhiều)</li>                  
                  <li class="list-style-dot">
                    There is no salt in the coffee. (Không có muối trong cà
                    phê.)
                  </li>
                </ul>
              </li>
              <li>
                <b>none - Không có cái nào:</b>
                <ul class="ml-[15px]">
                  <li class="list-style-dot">
                    Dùng để chỉ việc không có bất kỳ thứ gì trong số lượng đã đề
                    cập, với cả danh từ đếm được và không đếm được.
                  </li>
                  <li class="list-style-dot">
                    None of the answers were false. (Không có câu trả lời nào là
                    sai.)
                  </li>
                </ul>
              </li>
              <li><b>Neither/ either: không</b>
              <ul class="ml-[15px]">
              <li class="list-style-dot">Neither dùng trong câu khẳng  định</li>
              <li class="list-style-dot">Either dùng trong câu phủ định</li>              
              </ul>
              </li>             
            </ul>
          </div>
        </div>        
      </div>
      <p class="text-[1.7em] mb-5 mt-5 text-shadow-h1"><b>Phân biệt các cấu trúc của “lot”</b></p>
      <div class="content-compare mt-5">
      <table class="table-type1"><thead><tr><th>Từ</th><th>Ý nghĩa</th><th>Cách dùng</th></tr></thead><tbody><tr><td>A lot of và Lots of</td><td>“nhiều”, “ một số lượng lớn”</td><td>– Bổ sung nghĩa cho danh từ.<br/>– Đều có thể đi với danh từ đếm được và danh từ không đếm được.&nbsp;<br/>– Chỉ dùng trong văn nói.</td></tr><tr></tr><tr><td>A lot</td><td>“nhiều”, “thường xuyên”</td><td>– Dùng để bổ sung nghĩa cho động từ.<br/>– Dùng trong văn nói.</td></tr><tr><td>The lot</td><td>“tất cả”, “bãi đỗ xe”</td><td>– Không phải dùng để bổ sung ý nghĩa.<br/>– Dùng được trong cả văn nói và văn viết.</td></tr></tbody></table>
      </div> 
      <p class="text-[1.7em] mb-5 mt-5 text-shadow-h1"><b>Phân biệt "other" và "others"</b></p>
      <ul class="ml-[15px]">
        <li class="list-style-dot">Theo sau <b>"other"</b> thường là một danh từ hay một đại từ</li>
        <li class="list-style-dot"><b>"Others"</b>, bản thân nó là một đại từ  và theo sau nó không có bất kì một danh từ nào cả.</li>
      </ul>
      <p class="text-[1.7em] mb-5 mt-5 text-shadow-h1"><b>Phân biệt "The other" và "the others"</b></p>
      <ul class="ml-[15px]">        
        <li class="list-style-dot"><b>The other</b>: cái còn lại trong 2 cái, hoặc người còn lại trong 2 người</li>
        <li class="list-style-dot"><b>The others: </b>những cái còn lại hoặc những người còn lại trong một nhóm có nhiều thứ hoặc nhiều người</li>
      </ul>

    </div>
  );
};

export default Quantifiers;
