import React from 'react';

const recipe = () => {
    return (
        <div>
            <p>Mũ tên phản ứng hóa học và chất xúc tác</p>
            <p class="inline-flex"><span class="congthuc font-bold "><span class="phanso"><span class="block leading-[5px]"><sup>t<sup>o</sup></sup></span><span class="mau leading-[5px]">→</span></span></span></p>

            <p>Công thức thập phân</p>
            <p class="pcongthuc"><span class="congthuc font-bold"><span class="bang">H = </span><span class="phanso"><span class="tu">m<sub>tt</sub></span><span class="mau">m<sub>lt</sub></span></span><span class="bang">x100%</span></span></p>


            <p>load image</p>
            <p class="pt-5"><img src={process.env.PUBLIC_URL + '/hoa/2.jpg'}/></p>
            
            <p>dau suy ra</p>
            ={'>'}

        </div>
    );
};

export default recipe;