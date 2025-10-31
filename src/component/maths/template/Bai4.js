import React from 'react';

const Bai1 = () => {
    return (
        <div style={{
            padding: "0.8em",
            border: "1px solid #ccc",
            borderRadius: "5px",
            background: "#ffffff",
            marginBottom: "1em",
          }}>
           <h1 class="text-center text-[1.7em] mb-5 text-shadow-h1">
          <b>Tam giác đồng dạng</b>
        </h1>        
        <p class="pt-5"><img alt='1' src={process.env.PUBLIC_URL + '/toan/Bai4_1.png'}/></p> 
        <p class="pt-5"><img alt='1' src={process.env.PUBLIC_URL + '/toan/Bai4_2.png'}/></p> 
        <p class="pt-5"><img alt='1' src={process.env.PUBLIC_URL + '/toan/Bai4_3.png'}/></p> 
        <p class="pt-5"><img alt='1' src={process.env.PUBLIC_URL + '/toan/Bai4_4.png'}/></p> 
        <p class="pt-5"><img alt='1' src={process.env.PUBLIC_URL + '/toan/Bai4_5.png'}/></p>
        <p class="pt-5"><img alt='1' src={process.env.PUBLIC_URL + '/toan/Bai4_6.png'}/></p>
        </div>
    );
};

export default Bai1;