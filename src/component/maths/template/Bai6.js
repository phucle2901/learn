import React from 'react';
import SVGComponent from '../../../icons/SVGComponent';

const Bai6 = () => {
    return (
        <div class="leading-[35px]" style={{
            padding: "0.8em",
            border: "1px solid #ccc",
            borderRadius: "5px",
            background: "#ffffff",
            marginBottom: "1em",
            
          }}>
            <h1 class="text-center text-[1.7em] mb-5 text-shadow-h1">
          <b>TÌM GIÁ TRỊ LỚN NHẤT, NHỎ NHẤT CUA BIỂU THỨC</b>
        </h1> 
        <h2 class="font-bold">A. Phương pháp giải</h2>
        <p>+ Với mọi x<sup>2</sup> {'>'} = 0</p>
        <p>+ Với mọi a; b ta có: (a+b)<sup>2</sup> {'>'}= 0.  Dấu = xảy ra khi a + b = 0</p>
        <p>+ Với mọi a; b ta có: (a-b)<sup>2</sup> {'>'}= 0.  Dấu = xảy ra khi a - b = 0</p>
        <p><b>Cho biểu thức A(x):</b></p>
        <p>+ Nếu A(x) {'>'}= a thì giá trị nhỏ nhất của biểu thức A(x) là a.</p>
        <p>+ Nếu A(x) {'<'}= a thì giá trị lớn nhất của biểu thức A(x) là a.</p>
        <p>+ Nếu A(x) {'<'}= a và A(x) {'>'} 0 thì 1/A(x) {'>'} = a</p>
        <p>+ Nếu A(x) {'>'}= a {'>'}  0 thì 1/A(x) {'<'} = 1/a</p>
        <p>+ Với mọi A; B ta có: A<sup>2</sup> + B<sup>2</sup> {'>'}= 0</p>
        <p>Bất đẳng thức Cosi: "Cho 2 số không âm a, b; ta có bất đẳng thức (a+b)/2 {'>'} = <span class="square-roof">ab</span>"</p>
        <p>Dấu "=" xảy ra khi và chỉ khi a=b</p>
        <p>+ Bất đẳng thức (ac + bd)<sup>2</sup> {'<'}= (a<sup>2</sup> + b<sup>2</sup>)(c<sup>2</sup> + d<sup>2</sup>) (Bất đẳng thức Bunhiacopxki)</p>
        <p>Dầu "=" cỉ xảy ra khi và chỉ khi a/c = b/d </p>
        <p>+ |a| + |b| {'>'} = |a +b|. Dấu "=" xảy ra khi và chỉ khi ab{'>'}=0 </p>
        <p>Bất đẳng thức Bernonlly </p>
        <p>Với a{'>'} =0 : (1+a)<sup>n</sup> {'>'}=1+na với mọi n thuộc N</p>
        <p>Dấu "=" xảy ra khi và chỉ khi a=0</p>
         <h2><b>MỘT SỐ PHƯƠNG PHÁP CƠ BẢN</b></h2> 
         <p class="font-bold">Phương pháp 1. Sử dụng phép biến đổi đồng nhất</p>
         <p>Bằng cách nhóm, thêm, bớt, tách các hạng tử một cách hợp lý, ta biến đổi biểu thức đã cho về
         tổng các biểu thức không âm (hoặc không dương) và những hằng số . Từ đó :</p>
         <p> 1. Để tìm Max f(x,y,...) trên miền D ta chỉ ra :</p>
         <p>f(x,y,...){'<'}=M,  với (x<sub>0</sub>,y<sub>0</sub>,...) thuộc R, sao cho f(x<sub>0</sub>,y<sub>0</sub>,...)=M </p>
         <p> 2. Để tìm Min f(x,y,...) trên miền D ta chỉ ra :</p>
         <p>f(x,y,...){'>'}=m,  với (x<sub>0</sub>,y<sub>0</sub>,...) thuộc R, sao cho f(x<sub>0</sub>,y<sub>0</sub>,...)=m </p>
         <p class="text-[#0000ff] font-bold">Phương pháp giải các bài toán tìm giá trị lớn nhất, nhỏ nhất của một biểu thức đại số
         bằng cách đưa về dạng A(x) {'>'}= 0  hoặc A(x) {'<'}= 0 </p>
         <p>
         - Để tìm giá trị nhỏ nhất của một biểu thức A(x) ta cần:<br/>
+ Chứng minh rằng A(x)  {'>'}= k với k là hằng số.<br/>
+ Chỉ ra dấu "=" có thể xảy ra.<br/>
- Để tìm giá trị lớn nhất của một biểu thức A(x) ta cần:<br/>
+ Chứng minh rằng A(x)  {'<'}= k với k là hằng số.<br/>
+ Chỉ ra dấu "=" có thể xảy ra
         </p>
         <p class="font-bold">Dạng 1. Tìm GTNN và GTLN của đa thức bậc hai đơn giản</p>
         <p class="font-bold">Phương pháp: Áp dụng hằng đẳng thức bình phương của một tổng và hiệu</p>
         <p class="font-bold">Dạng 2. Tìm GTNN và GTLN của đa thức bậc bốn đơn giản</p>
          <p>Phương pháp:<br/>
a. Phân tích thành các biểu thức tương đồng để đặt ẩn phụ.<br/>
b. Sử dụng phương pháp nhóm hợp lý làm xuất hiện nhân tử để đặt ẩn phụ.<br/>
c. Sử dụng các hằng đẳng thức (a+b)<sup>2</sup>, (a-b)<sup>2</sup>, (a+b+c)<sup>2</sup></p>
          <p><b>Dạng 3. Tìm GTNN và GTLN của biểu thức dạng A/B</b></p>
          <p>Dạng 3.1 Biểu thức dạng A=m/(ax<sup>2 + bx +c</sup>) với m là hằng số hoặc m đã xác định được âm
hoặc dương:</p>
          <p>Phương pháp giải:</p>
          <p class="pt-5"><img alt='1' src={process.env.PUBLIC_URL + '/toan/Bai6_1.png'}/></p>
          <p class="pt-5"><img alt='1' src={process.env.PUBLIC_URL + '/toan/Bai6_2.png'}/></p>

        <h2 class="font-bold">B. Ví dụ minh họa</h2>
        <p>1. Tìm giá trị lớn nhất của biểu thức: A=6x - x<sup>2</sup></p>
        <p><b>Giải:</b></p>
        <p>
        Ta có: A=6x-x<sup>2</sup> = -(x<sup>2</sup>- 6x)<br/>
        = -(x<sup>2</sup> - 6x + 9 - 9)<br/>
        = -(x-3)<sup>2</sup> + 9<br/>
        Với mọi x ta có (x-3)<sup>2</sup> {'>'}= 0<br/>
        ={'>'} -(x-3)<sup>2</sup> {'<'}= 0<br/>
        ={'>'} A= -(x-3)<sup>2</sup> + 9 {'<'}= 9<br/>
        Vậy giá trị lớn nhất của biểu thức A là 9, dấu "=" xảy ra khi x=3.
        </p>
        <p>2. Tìm giá trị lớn nhất của biểu thức: B=6 - 8x - x<sup>2</sup></p>
        <p><b>Giải:</b></p>
        <p>
        Ta có: B=6 - 8x - x<sup>2</sup> = -(x<sup>2</sup> + 8x - 6)<br/>
        = -(x<sup>2</sup> + 8x + 16 - 16 - 6)<br/>
        = -(x + 4)<sup>2</sup> + 22<br/>
        Với mọi x ta có (x + 4)<sup>2</sup> {'>'}= 0<br/>
        ={'>'} -(x + 4)<sup>2</sup> {'<'}= 0<br/>
        ={'>'} B= -(x + 4)<sup>2</sup> + 22 {'<'}= 22<br/>
        Vậy giá trị lớn nhất của biểu thức B là 22, dấu "=" xảy ra khi x=-4.
        </p>
        <p class="pt-5"><img alt='1' src={process.env.PUBLIC_URL + '/toan/giatrilonnhatnhonhat.png'}/></p>
        <p class="pt-5"><img alt='2' src={process.env.PUBLIC_URL + '/toan/giatrilonnhatnhonhat1.png'}/></p>
        </div>
    );
};

export default Bai6;