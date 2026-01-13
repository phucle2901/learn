import React from 'react';
// https://vietjack.com/vat-ly-lop-8/cach-giai-bai-tap-ve-may-nen-thuy-luc-cuc-hay.jsp#google_vignette
const Bai4 = () => {
    return (
        <div class="leading-[35px]" style={{
            padding: "0.8em",
            border: "1px solid #ccc",
            borderRadius: "5px",
            background: "#ffffff",
            marginBottom: "1em",
            
          }}>
          <h1 class="text-center text-[1.7em] mb-5 text-shadow-h1">
          <b>Áp suất chất lỏng và chất khí</b>          
        </h1>  
        <p>- Chất lỏng tĩnh và chất khí tĩnh luôn gây lực ép lên thành bình và bề mặt các vật nhúng trong nó. Lực ép này tỷ lệ với diện tích bị ép</p>
          <p>- Tại mỗi điểm trong chất lỏng và chất khí, áp suất theo mọi hướng đều có giá trị như nhau.</p>
          <p class="font-bold">Nguyên lý thủy tĩnh:</p>
          <p>Độ chênh lệch áp suất giữa 2 chất trong lòng chất lỏng tĩnh được đo bằng tích của trọng lượng riêng của chất lỏng với khoảng cách theo phương thẳng đứng giữa hai điểm đó.</p> 
          <p>P<sub>A</sub> - P<sub>B</sub> = d.h</p>
          <p>* Hệ quả</p>
          <p>+ Trong chất lỏng tất cả những điểm cùng nằm trên một mặt phẳng nằm ngang đều chịu chung một áp suất.</p>
<p>+ Áp suất của một chất lỏng tĩnh lên đáy bình bằng tích của trọng lượng riêng của chất lỏng nhân với chiều cao của cột chất lỏng ( Tính từ mặt thoáng chất lỏng đến điểm cần xét). Áp suất này không phụ thuộc vào hình dạng bình chứa.</p>
<p>P = d.h</p>

<p><img alt='1' src={process.env.PUBLIC_URL + '/ly/Bai4_14.png'}/></p>

        </div>
    );
};

export default Bai4;