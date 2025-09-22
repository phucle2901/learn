import React from 'react';
const Bai1 = () => {
    return (
        <div style={{
            padding: "0.8em",
            border: "1px solid #ccc",
            borderRadius: "5px",
            background: "#fff9f9",
            marginBottom: "1em",
          }}>
            <h1 class="text-center text-[1.7em] mb-5 text-shadow-h1">
          <b>Mol</b>
        </h1>
        <p><b>1. Khái niệm</b></p>
        <p>Mol là lượng chất có chứa 6,022.10<sup>23</sup> nguyên tử hoặc phân tử của chất đó.</p>
        <p>Hằng số Avogadro – kí hiệu N<sub>A</sub>=6,022.10<sup>23</sup></p>
        <p class="pcongthuc">Công thức tính số mol khi biết số nguyên tử/phân tử: <span class="congthuc font-bold"><span class="bang">n = </span><span class="phanso"><span class="tu">Số nguyên tử/Nguyên tử khối</span><span class="mau">6,022.10<sup>23</sup></span></span></span></p>
        <p><strong>2. </strong><strong>Khối lượng mol (M)</strong></p>

<ul>
	<li>Khối lượng mol (kí hiệu là M) của một chất là khối lượng tính bằng gam của 1 mol chất đó.</li>
</ul>

<p>Đơn vị khối lượng mol là gam/mol (hay gam.mol-1).</p>

<ul>
	<li>Khối lượng mol nguyên tử hay khối lượng mol phân tử của một chất có cùng trị số với khối lượng nguyên tử hay khối lượng phân tử của chất đó.</li>
</ul>

<ul>
	<li>Công thức chuyển đổi giữa số mol và khối lượng:</li>
</ul>
<p class="text-center"><b>m=n.M → n=m/M </b></p>

<p>Trong đó:</p>
<p> n là số mol chất (mol)</p>

<p> M: khối lượng mol của chất (gam/mol)</p>

<p> m: khối lượng chất (gam<strong>)</strong></p>

<p class="pt-5"><strong>3. Thể tích mol của chất khí</strong></p>

<ul class="ml-[15px]">
	<li class="list-style-square">Thể tích mol chất khí là thể tích của 1 mol chất khí đó.</li>
	<li class="list-style-square">Ở đkc (25◦C và 1 bar), thể tích mol của các chất khí đều bằng nhau và bằng 24,79 lít.</li>
	<li class="list-style-square">Công thức chuyển đổi giữa số mol và thể tích:</li>
</ul>
<p class="text-center"><b>V = n.24.79 → n=V/24.79</b></p>
<p>Trong đó: </p>
<p>n: là số mol chất khí (mol)</p>
<p> V: thể tích của chất khí ở đkc (lít)</p>
<p class="pt-5"><b>4. Tỉ khối chất khí</b></p>
<p>Để xác định khí A nặng hơn hay nhẹ hơn khí B bao nhiêu lần, ta dựa vào tỉ số giữa khối lượng mol của khí A (M<sub>A</sub>) và khối lượng mol của khí B (M<sub>B</sub>
) gọi là tỉ khối chất khí.</p>
<p class="pt-5 pb-5"><b>- Công thức:</b></p>
<p class="pcongthuc"><span class="congthuc font-bold"><span class="bang">d<sub>A/B</sub> = </span><span class="phanso"><span class="tu">M<sub>A</sub></span><span class="mau">M<sup>B</sup></span></span></span></p>
<p class="pt-5"><b>Trong đó:</b></p>
<p>d<sub>A/B</sub>: tỉ khối của khí A so với khí B</p>
<p>M<sub>A</sub>: khối lượng mol của khí A (gam/mol)</p>
<p>M<sub>B</sub>: khối lượng mol của khí B (gam/mol)</p>  
<p class="pcongthuc pt-5"><span class="congthuc font-bold"><span class="bang">d<sub>A/kk</sub> = </span><span class="phanso"><span class="tu">M<sub>A</sub></span><span class="mau">29</span></span></span></p>
<p class="pt-5"><b>Trong đó:</b></p>
<p>d<sub>A/kk</sub>: là tỉ khối của chất khí A đối với không khí</p>
<p>M<sub>A</sub>: khối lượng mol của khí A (gam/mol)</p>

<p class="pcongthuc">Nồng độ mol<span class="congthuc font-bold"><span class="bang">C<sub>M</sub> = </span><span class="phanso"><span class="tu">n</span><span class="mau">V</span></span></span></p>
<p class="pcongthuc">Nồng độ %<span class="congthuc font-bold"><span class="bang">C% = 100%</span><span class="phanso"><span class="tu">m<sub>ct</sub></span><span class="mau">m<sub>dd</sub></span></span></span></p>
        </div>

    );
};

export default Bai1;