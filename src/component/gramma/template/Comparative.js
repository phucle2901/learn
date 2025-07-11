import React from "react";

const Comparative= () => {
  return (
    <>
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
          <b>
            Các dạng so sánh
          </b>
        </h1>
        <div class="content-compare">
        <div class="compare">
        <div class="compare-item bg-[#f2a2e6]">
            <h1 class="compare-title text-center">So sánh hơn</h1>
          <ul class="compare-list">
            <li>Với tính từ/ trạng từ ngắn 1 âm tiết:<br/>S+ V + Adj/ Adv + -er + than.</li>
            <li>Với tính từ, trạng từ dài từ 2 âm tiết trở lên:<br/>S + V + more + Adj/ Adv + than.</li>            
          </ul>          
          <p class="font-bold">(*) Lưu ý:</p>
          <ul class="compare-list">
            <li class="list-style-dot">Tính từ, trạng từ ngắn là những từ có 1 âm tiết, những từ có 2 âm tiết khi có đuôi kết thúc là “-y, -le, -et, -ow, -er”.</li>
            <li class="list-style-dot">Tính từ/ trạng từ kết thúc bằng đuôi “-y” thì đổi thành “-i” rồi thêm đuôi “-er”.</li>
            <li class="list-style-dot">Tính từ kết thúc bằng đuôi “-e” thì thêm đuôi “-r”.</li>
            <li class="list-style-dot">Tính từ ngắn kết thúc bằng phụ âm, trước phụ âm là nguyên âm thì gấp đôi phụ âm rồi thêm đuôi “-er”.</li>
            <li class="list-style-dot">Một số từ giúp tăng mạnh/ giảm nhẹ cường độ so sánh hơn: 
              <ul class="ml-[15px]">
                <li class="list-style-square">Tăng mạnh: Far, much, a lot, lots, a great deal, a good deal.</li>
                <li class="list-style-square">Giảm nhẹ: A bit, a little, slightly.</li>
              </ul>
            </li>
          </ul>
          <p class="font-bold">(*) Một số tính từ và trạng từ bất quy tắc:</p>
          <ul class="compare-list">
          <li >Good/ well &rarr; better (tốt &rarr; tốt hơn)</li>
          <li>Bad/ badly &rarr; worse (xấu &rarr; xấu hơn)</li>
          <li>Many/ much &rarr; more (nhiều &rarr; nhiều hơn)</li>
          <li>Few &rarr; fewer (ít &rarr; ít hơn, danh từ đếm được)</li>
          <li>Little &rarr; less (ít &rarr; ít hơn, danh từ không đếm được)</li>
          <li>Old &rarr; older (cổ/ cũ/ già &rarr; cổ/ cũ/ già hơn)</li>
          <li>Old &rarr; elder (lớn tuổi &rarr; lớn tuổi hơn)</li>
          <li>Far &rarr; farther (xa &rarr; xa hơn)</li>
          <li>Far &rarr; further (Chỉ mức độ ví dụ như mạnh, nhiều &rarr; mạnh hơn, nhiều hơn)</li>         
          </ul>
         
          </div>

          </div>
          <div class="compare">
            <div class="compare-item bg-[#cbb8f5]">          
              <h1 class="compare-title text-center">So sánh bằng</h1>
              <ul class="compare-list">
                <li>Với tính từ, trạng từ:<br/>S + V + as/ so + Adj/ Adv + as + O/ N/ Pronoun.</li>
                <li>Với danh từ:  
                  <ul class="ml-[15px]">
                    <li class="list-style-dot">S + V + the same + N + as + N/ Pronoun.</li>
                    <li class="list-style-dot">S + V + as + many/ much/ little/ few + N + as + N/ Pronoun.</li>
                    <li class="list-style-dot">S + V + as/ such + adj + (a/ an) + N + as + N/ Pronoun.</li>
                  </ul>
                </li>
              </ul>
            </div>
            
            <div class="compare-item  mt-3 bg-[#b4e2f5]">
              <h1 class="compare-title text-center">So sánh nhất</h1>
              <ul class="compare-list">
                <li>Với tính từ/ trạng từ ngắn 1 âm tiết:<br/>S + V + the + Adj/ Adv + -est</li>
                <li>Với tính từ/ trạng từ dài từ 2 âm tiết trở lên:<br/>S + V + the + most + Adj/ Adv</li>
              </ul>
              <p class="font-bold pb-[8px]">(*) Lưu ý:</p>
              <p>Để nhấn mạnh tính từ khi sử dụng cấu trúc so sánh nhất, ta thêm “very”, “by far” trước tính từ so sánh.</p>
              <p class="pb-[8px] pt-[8px]">(*) Một số tính từ không dùng trong so sánh hơn, so sánh nhất: Unique (khác biệt), extreme (cực kì), perfect (hoàn hảo), top (đứng đầu), prime (nguyên tố), primary (sơ cấp), absolute (hoàn toàn), supreme (tối cao), entire (toàn bộ).</p>
            </div>
          </div>
          
          <div class="compare">
          <div class="compare-item bg-[#d0f5ce]">
          <h1 class="compare-title text-center pb-[8px]">So sánh bội</h1>
          <p>S + V + bội số + as + much/ many/ adj/ adv + (N) + as + N/ Pronoun.</p>
          <p class="font-bold">(*) Bội số: Twice, three times, etc.</p>
          <h1 class="compare-title text-center pb-[8px] pt-[8px]">So sánh hơn kém</h1>
          <p>Of the two N(s) + S + to be/ V the + so sánh hơn kém</p>
          <h1 class="compare-title text-center pb-[8px] pt-[8px]">So sánh kép càng … càng …</h1>
          <p>Cấu trúc này được sử dụng khi muốn diễn tả  – sự thay đổi tính chất của đối tượng A sẽ dẫn tới sự thay đổi song song một tính chất khác của đối tượng A hoặc của đối tượng B khác.</p>
          <ul class="compare-list">
            <li>Với tính từ, trạng từ ngắn:<br/>S + V + Adj/ Adv + er + and + adj/ adv + -er</li>
            <li>Với tính từ, trạng từ dài: <br/>S + V + more and more + Adj/ Adv</li>
            <li>Với danh từ: <br/>More and more + (N) + S + V</li>
          </ul>
          <h1 class="compare-title text-center pb-[8px] pt-[8px]">So sánh kép 2 vế</h1>
          <ul class="compare-list">
          <li>Với tính từ, trạng từ: <br/>The + so sánh hơn + S + V, the + so sánh hơn + S + V.</li>
          <li>Với danh từ: <br/>The more/ less + N + S + V, the more/ less + N + S + V.</li>
          <li>Với động từ: <br/>The more + S + V, the more + S + V.</li>
          </ul>
          </div>
          </div>
        </div>        
        
      </div>
    </>
  );
};

export default Comparative;
