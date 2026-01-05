import React from 'react';

const Bai3 = () => {
    return (
        <div class="leading-[35px]" style={{
            padding: "0.8em",
            border: "1px solid #ccc",
            borderRadius: "5px",
            background: "#ffffff",
            marginBottom: "1em",
            
          }}>
         <h1 class="text-center text-[1.7em] mb-5 text-shadow-h1">
          <b>Lực đẩy Archimedes</b>
        </h1>   
        <p><b>Định luật Archimedes:</b></p>  
        <p class="pt-5">Một vật đặt trong chất lỏng chịu tác dụng của một lực đẩy hướng thẳng đứng từ dưới lên trên có độ lớn tính bằng</p>
        <p class="pt-5">Công thức tính độ lớn của lực đẩy Archimedes: F<sub>A</sub>=d.V</p>
        <p class="pt-5">Trong đó:</p>
        <p class="pt-5">F<sub>A</sub>: Lực đẩy Archimedes (N)</p>
        <p class="pt-5">d: Khối lượng riêng của chất lỏng (kg/m<sup>3</sup>)</p>
        <p class="pt-5">V: Thể tích phần chất lỏng bị vật chiếm chỗ (m<sup>3</sup>)</p>
        <p><b>Điều kiện để vật nổi, vật chìm</b></p>
        <p>Nếu ta thả một vật ở trong lòng chất lỏng thì:</p>
        <p>+ Chìm xuống khi lực đẩy Archimedes nhỏ hơn trọng lượng của vật (FA `{'<'} P).</p>
        <p>+ Nổi lên khi lực đẩy Archimedes lớn hơn trong lượng của vật (FA `{'>'} P).</p>
        <p>+ Một vật sẽ chìm xuống chất lỏng nếu trọng lượng riêng của vật lớn hơn trọng lượng riêng của chất lỏng, vật sẽ nổi nếu trọng lượng riêng của vật nhỏ hơn trọng lượng riêng của chất lỏng.</p>
        <p>Chú ý:</p>
        <p>- Trường hợp vật đã nằm yên ở đáy bình: P = F<sub>A</sub> + F' </p>
        <p>Trong đó: F' là lực do đáy bình tác dụng lên vật.</p>
        <p> Trường hợp vật nằm yên trên mặt chất lỏng: P = F<sub>A</sub></p>
        <p>Khi vật nằm yên, các lực tác dụng vào vật phải cân bằng nhau.</p>
        <p>Khi vật nổi lên trên mặt chất lỏng thì F<sub>A</sub>= d.V</p>
        <p>Trong đó: V là thể tích của phần vật chìm trong chất lỏng (không phải thể tích của vật)</p>
        </div>
    );
};

export default Bai3;