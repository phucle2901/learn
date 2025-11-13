import React from 'react';

const Bai7 = () => {
    return (
        <div style={{
            padding: "0.8em",
            border: "1px solid #ccc",
            borderRadius: "5px",
            background: "#ffffff",
            marginBottom: "1em",
          }}>
          <h1 class="text-center text-[1.7em] mb-5 text-shadow-h1">
          <b>Cách nhận biết các chất</b>
        </h1>        
        <p class="pt-5"><img src={process.env.PUBLIC_URL + '/hoa/bai3_1.png'}/></p>
        <p class="pt-5"><img src={process.env.PUBLIC_URL + '/hoa/bai3_2.png'}/></p>
        <p class="pt-5"><img src={process.env.PUBLIC_URL + '/hoa/bai3_3.png'}/></p>
        <p class="pt-5"><img src={process.env.PUBLIC_URL + '/hoa/bai3_4.png'}/></p>
        <p class="pt-5"><img src={process.env.PUBLIC_URL + '/hoa/bai3_5.png'}/></p>
        <p class="pt-5"><img src={process.env.PUBLIC_URL + '/hoa/bai3_6.png'}/></p>
        </div>
       
    );
};

export default Bai7;