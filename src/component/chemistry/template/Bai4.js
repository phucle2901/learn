import React from 'react';

const Bai4 = () => {
    return (
        <div style={{
            padding: "0.8em",
            border: "1px solid #ccc",
            borderRadius: "5px",
            background: "#ffffff",
            marginBottom: "1em",
          }}>
            <h1 class="text-center text-[1.7em] mb-5 text-shadow-h1">
          <b>Hiệu suất phản ứng</b>
        </h1>
        <p>Hiệu suất phản ứng (kí hiệu là H) là tỉ số giữa số lượng sản phẩm thu được theo thực tế và lượng sản phẩm thu được theo lí thuyết.</p>
        <p>Thông thường, hiệu suất phản ứng biểu thị theo phần trăm và được tính theo biểu thức:</p>
        <p class="pcongthuc"><span class="congthuc font-bold"><span class="bang">H = </span><span class="phanso"><span class="tu">m<sub>tt</sub></span><span class="mau">m<sub>lt</sub></span></span><span class="bang">x100%</span></span></p>
        <p>Trong đó:</p>
        <p>- m<sup>tt</sup> là khối lượng chất (g) thu được theo thực tế.</p>
        <p>- m<sup>lt</sup> là khối lượng chất (g) thu được theo lí thuyết (tính theo phương trình).</p>
        <p>- H là hiệu suất phản ứng (%).</p>
        <p>Hiệu suất phản ứng thường nhỏ hơn 100%. Nếu hiệu suất phản ứng là 100% tức là phản ứng hoá học xảy ra hoàn toàn.</p>
        <p>Lưu ý: Ngoài ra, có thể tính hiệu suất theo số mol: </p>
        <p class="pcongthuc"><span class="congthuc font-bold"><span class="bang">H = </span><span class="phanso"><span class="tu">n<sub>tt</sub></span><span class="mau">n<sub>lt</sub></span></span><span class="bang">x100%</span></span></p>
        <p>Trong đó:</p>
        <p>- n<sup>tt</sup> là số mol chất thu được theo thực tế;</p>
        <p>- n<sup>lt</sup> là số mol chất thu được theo lí thuyết (theo phương trình).</p>
        <p class="font-bold pt-5">Ví dụ minh họa:</p>
        <p>Cho 8 gam iron(III) oxide tác dụng với khí hydrogen dư ở nhiệt độ cao, thu được 4,2 gam iron.</p>
        <p>Phản ứng xảy ra như sau: Fe<sub>2</sub>O<sub>3</sub>  + 3H<sub>2</sub> <p class="inline-flex"><span class="congthuc font-bold "><span class="phanso"><span class="block leading-[5px]"><sup>t<sup>o</sup></sup></span><span class="mau leading-[5px]">→</span></span></span></p> 2Fe + 3H<sub>2</sub>O </p>
        <p>Tình hiệu suất phản ứng theo 2 cách.</p>
        <p class="font-bold pt-5 pb-5">Hướng dẫn giải</p>
        <p  class="font-bold">Cách 1: Tính hiệu suất phản ứng từ khối lượng chất sản phẩm theo lí thuyết và thực tế</p>
        <p>Bước 1: Tính lượng Fe thu được theo lí thuyết.</p>
        <p>Số mol Fe2O3:</p>
        <p class="inline-flex"><span class="congthuc font-bold"><span class="bang">n<sub>Fe<sub>2</sub>O<sub>3</sub></sub>=</span><span class="phanso"><span class="tu">m<sub>Fe<sub>2</sub>O<sub>3</sub></sub></span><span class="mau">M<sub>Fe<sub>2</sub>O<sub>3</sub></sub></span></span></span></p> = 8/160=0.05 (mol)
        <p>Theo phương trình hoá học:</p>
        <p>1 mol Fe2O3 tham gia phản ứng sẽ thu được 2 mol Fe.</p>
        <p>Vậy: 0,05 mol Fe2O3 ……………………………. 0,1 mol Fe.</p>
        <p>Khối lượng Fe thu được theo lí thuyết: mFe = nFe. MFe = 0,1 . 56 = 5,6 (gam).</p>
        <p>Bước 2: Tính hiệu suất phản ứng.</p>
        <p class="inline-flex"><span class="congthuc font-bold"><span class="bang">H = </span><span class="phanso"><span class="tu">m<sub>tt</sub></span><span class="mau">m<sup>lt</sup></span></span><span class="bang">x100%</span></span></p>= (4.2/5.6) x 100% = 75%
        <p class="font-bold pt-5">Cách 2: Tính hiệu suất phản ứng từ số mol chất sản phẩm theo lí thuyết và thực tế</p>
        <p>Tương tự bước 1 ở cách 1, có số mol Fe thu được theo lí thuyết là 0,1 mol.</p>
        <p>Số mol Fe thực tế:</p>
        <p class="inline-flex"><span class="congthuc font-bold"><span class="bang">n<sub>Fe<sub>(tt)</sub></sub>=</span><span class="phanso"><span class="tu">m<sub>Fe<sub>(tt)</sub></sub></span><span class="mau">M<sub>Fe</sub></span></span></span></p> = 4.2/56=0.075 (mol)
        <p>Bước 2: Hiệu suất phản ứng:</p>
        <p class="inline-flex"><span class="congthuc font-bold"><span class="bang">H = </span><span class="phanso"><span class="tu">n<sub>Fe<sub>(tt)</sub></sub></span><span class="mau">n<sub>Fe<sub>(lt)</sub></sub></span></span><span class="bang">x100%</span></span></p>= (0.075/0.1) x 100% = 75%
        <p></p>
        <p></p>
        <p></p>
        </div>
    );
};

export default Bai4;