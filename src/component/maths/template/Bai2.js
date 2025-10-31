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
          <b>Tứ giác</b>
        </h1>        
        <p class="pt-5"><img alt='1' src={process.env.PUBLIC_URL + '/toan/Bai2_1.png'}/></p> 
        <p class="pt-5"><img alt='1' src={process.env.PUBLIC_URL + '/toan/Bai2_2.png'}/></p> 
        <p class="pt-5"><img alt='1' src={process.env.PUBLIC_URL + '/toan/Bai2_3.png'}/></p> 
        <p class="pt-5"><img alt='1' src={process.env.PUBLIC_URL + '/toan/Bai2_4.png'}/></p> 
        </div>
    );
};

export default Bai1;