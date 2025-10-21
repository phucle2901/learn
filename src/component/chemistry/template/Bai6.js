import React from 'react';

const Bai6 = () => {
    return (
        <div style={{
            padding: "0.8em",
            border: "1px solid #ccc",
            borderRadius: "5px",
            background: "#ffffff",
            marginBottom: "1em",
          }}>
          <h1 class="text-center text-[1.7em] mb-5 text-shadow-h1">
          <b>Đơn chất, hợp chất, phân tử</b>
        </h1>  
        <p>Trong  hợp chất 2 nguyên tố A<sub>x</sub>b<sub>y</sub></p>
        <p>Ta dựa vào nguyên tắc: "Tích của chỉ số vớ ihoa1 trị của nguyên tố này bằng tích của chỉ số với hóa trị của nguyên tố kia": x*a = y*b (a là hóa trị của A, b là hóa trị của B; B có thể là nhóm nguyên tử)</p>
        <p>Đề làm bài tập dạng tìm hóa trị, ta làm như sau:</p>
        <p>1. viết công thức dạng chung AxBy</p>
        <p>2. Đặt đẳng thức x*hóa trị của A = y* hóa trị của B</p>
        <p>3. Chuyển thành tỷ lệ: x/y =Hóa trị của B / Hóa trị của A = b/a =b'/a'</p>
        <p>Chọn a', b' là những số nguyên dương và có tỳ lệ b'/a' là tối giản, suy ra x=b (hoặc b') và y= a (hoặc a')</p>
        <p class="pt-5 font-bold">Ví dụ:</p>
        <p>Tìm công thức hóa học của S và O, biết S có hóa trị IX, O có hóa trị II</p>
        <p class="pt-5 font-bold">Giải</p>
        <p>Công thức hóa học : SxOy</p>
        <p>Lập đẳng thức: IV*x=II*y ={'>'}= x/y = II/IV = 1/3 ={'>'} x=1, y=3</p>
        <p>CTHH: SO3</p>
        </div>
    );
};

export default Bai6;