import React from 'react';
//https://khotrithucso.com/doc/p/tong-hop-kien-thuc-hoa-9-386717
const Bai3 = () => {
    return (
        <div style={{
            padding: "0.8em",
            border: "1px solid #ccc",
            borderRadius: "5px",
            background: "#ffffff",
            marginBottom: "1em",
          }}>
          <h1 class="text-center text-[1.7em] mb-5 text-shadow-h1">
          <b>Hợp chất hóa họa</b>
        </h1>
        <p><b>I. Kim loại</b></p>
        <p class="pt-5"><img src={process.env.PUBLIC_URL + '/hoa/2.jpg'}/></p>
        <p class="pt-5"><img src={process.env.PUBLIC_URL + '/hoa/3.jpg'}/></p>
        <p ><b>Ghi chú:</b></p>
        <p>- Thường chỉ gặp 5 oxit bazơ tan đƣợc trong nƣớc là Li2O, Na2O, K2O, CaO, 
        BaO. Đây cũng là các oxit bazơ có thể tác dụng với oxit axit. </p>
        <p class="pb-5">- Đối với bazơ, có các tính chất chung cho cả 2 loại nhƣng có những tính 
        chất chỉ của Kiềm hoặc bazơ không tan </p>
        <p class="pt-5"><img src={process.env.PUBLIC_URL + '/hoa/4.jpg'}/></p>
        <p class="pt-5"><img src={process.env.PUBLIC_URL + '/hoa/5.jpg'}/></p>
        <p class="pt-5"><img src={process.env.PUBLIC_URL + '/hoa/6.jpg'}/></p>
        <p class="pt-5"><img src={process.env.PUBLIC_URL + '/hoa/7.jpg'}/></p> 
        <p class="pt-5"><img src={process.env.PUBLIC_URL + '/hoa/71.jpg'}/></p> 
        <p  class="pt-5"><b>II. Phi kim</b></p>
        <p class="pt-5"><img src={process.env.PUBLIC_URL + '/hoa/8.jpg'}/></p>
        <p class="pt-5"><img src={process.env.PUBLIC_URL + '/hoa/9.jpg'}/></p>
        </div>
       
    );
};

export default Bai3;