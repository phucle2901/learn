import React from "react";

const Article = () => {
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
          <b>Mạo từ A, An, The</b>
        </h1>
        <div class="content-compare">
          <div class="compare">
            <div class="compare-item bg-[#f2a2e6]">
              <h1 class="compare-title text-center">Mạo từ A, An</h1>
              <ul class="compare-list">
                <li>  Dùng trước những danh từ số ít, đếm được, khi nó được nhắc tới lần đầu tiên. trong đó:
                    <ul class="ml-[15px]">
                    <li class="list-style-dot"><b>a</b> dùng trước những danh từ bắt đầu là một phụ âm</li>
                    <li class="list-style-dot"><b>an</b> dùng trước những danh từ bắt đầu là một nguyên âm</li>
                    </ul>                
                </li>
                <li>Dùng trước những danh từ khi nó mang ý nghĩa là một.                  
                </li>
                <li>Dùng trước những danh từ mang ý nghĩa nghề nghiệp.                 
                </li>
                <li>Dùng trong những cụm từ chỉ số lượng.
                </li>
                <li>Một số trường hợp ngoại lệ trong cách dùng a/an: <b>a</b> uniform, <b>a</b> university, <b>a</b> European, <b>a</b> one-way street, <b>a</b> one-dollar bill, <b>a</b> one-hundred-dollar bill, <b>a</b> one-thousand-dollar bill, <b>a</b> one-million-dollar bill,<b>an</b> hour, <b>an</b> M.P., <b>an</b> S.O.S, <b>an</b> X-ray, <b>an</b> H-bomb, <b>an</b> F.B.I., <b>an</b> M.I.T.                
                </li>                
              </ul>
              
            </div>
          </div>
          <div class="compare">
            <div class="compare-item bg-[#cbb8f5]">
              <h1 class="compare-title text-center">Mạo từ The</h1>
              <ul class="compare-list">
                <li>Dùng trước những danh từ được chắc đến lần thứ 2 trở đi.                
                </li>
                <li>Dùng trước những danh từ khi chúng được xác định bằng một mệnh đề/ mệnh đề quan hệ ở phía sau.
                </li>
                <li>Dùng trước những danh từ là duy nhật, độc nhất.
                </li>
                <li>Dùng trước số thứ tự, số thứ tự trong một dãy.
                </li>
                <li>Dùng trước tính từ để tạo thành danh từ chỉ người ở dạng số nhiều.
                </li>
                <li>Dùng trước tên các quốc gia có tận cùng là <b>-s</b> và một số quốc gia số ít.
                </li>
                <li>Dùng trước tên các loại nhậc cụ, nhưng phải dứng sau động từ <b>play</b>
                </li>
                <li>Dùng trước tên các địa điểm công cộng.
                </li>
                <li>Dùng trước danh từ chỉ tên riêng ở dạng số nhiều để chỉ cả gia đình dòng họ
                </li>
                <li>Dùng trước tính từ so sánh hơn nhất và so sánh kép.                 
                </li>
                <li>Dùng trước tên của sông , suối, biển, đại dương, sa mạc, dãy núi...
                </li>
                <li>Dùng trước những danh từ mà cả người nói và người nghe đều biết rõ về chúng.
                </li>
                <li>Dùng trước các buổi trong ngày.
                </li>
                <li>Dùng trước tên của các tờ báo.
                </li>
                <li>Dùng trước tên của các tổ chức.
                </li>
                <li>Dùng trước danh từ số ít tượng trưng cho một nhóm động vật, một loài hoặc đồ vật.
                </li>
                <li>Dùng trước danh từ chỉ phương hướng.
                </li>
                <li>Dùng trước danh từ + of +danh từ</li>
                <li>Dùng trong một số cụm từ cố định
                </li>
                <li>Dùng trước: <b>hospital/ Church/ school/ prison</b> khi nó mang một ý nghĩa khác</li>                
                
              </ul>
            </div>
            
          </div>

          <div class="compare">
            <div class="compare-item bg-[#d0f5ce]">
              <h1 class="compare-title text-center pb-[8px]">Không dùng mạo từ</h1>
              <ul class="compare-list">
                <li>Trước tên của các môn học</li>
                <li>Trước tên của các môn thể thao</li>
                <li>Trước danh từ số nhiều không đếm được.</li>
                <li>Trước tên các phương tiên giao thông, nhưng phải đứng sau giới từ <b>by</b></li>
                <li>Trước các danh từ chỉ màu sắc</li>
                <li>Sau tinh từ sở hữu hoặc sau danh từ sở hữu cách. My friend...</li>
                <li>Trước tên các bữa ăn trong ngày.</li>
                <li>Trước thứ, ngày, tháng, năm, mùa (nếu không xác định)</li>
                <li>Trước tên quốc gia (trừ các quốc gia có chữ tận cùng là <b>s</b> và một số quốc gia số ít), tên châu lục, tên núi, tên hồ, tên đường</li>
                <li>Trước danh từ  trưu tượng. Một số danh từ trừu tượng: joy (niềm vui), fear (nỗi sợ), beauty (vẻ đẹp)…</li>
                <li>Trước danh từ chỉ chung chung. Nói đến tất cả loại rau, không cụ thể loại rau nào.</li>
                <li>Trước tước hiệu. President Obama (Tổng thống Obama)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Article;
