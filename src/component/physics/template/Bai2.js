import React from 'react';

const Bai2 = () => {
    return (
        <div class="leading-[35px]" style={{
            padding: "0.8em",
            border: "1px solid #ccc",
            borderRadius: "5px",
            background: "#ffffff",
            marginBottom: "1em",
            
          }}>
        <h1 class="text-center text-[1.7em] mb-5 text-shadow-h1">
          <b>Cách chuyển đổi đơn vị</b>
        </h1> 
          <p class="pt-5">Cách chuyển từ đơn vị g/cm<sup>3</sup> sang kg/m<sup>3</sup></p>
          <p class="pt-5 font-bold">B1: Chuyển g sang kg:</p>
          <p class="pt-5">1 g = 0,001 kg (chia cho 1000)</p>
          <p class="pt-5 font-bold">B2: Chuyển cm<sup>3</sup> sang m<sup>3</sup>:</p>
          <p class="pt-5">1 cm<sup>3</sup> = 0,000001 m<sup>3</sup> (chia cho 1 000 000)</p>
          <p class="pt-5 font-bold">B3: Kết hợp cả hai bước trên:</p>
        <p class="pt-5">1 g/cm<sup>3</sup> = 0,001 kg / 0,000001 m<sup>3</sup> = 1000 kg/m<sup>3</sup></p>

        </div>
    );
};

export default Bai2;