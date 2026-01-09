import React from 'react';

const Bai7 = () => {
    return (
        <div class="leading-[35px]" style={{
            padding: "0.8em",
            border: "1px solid #ccc",
            borderRadius: "5px",
            background: "#ffffff",
            marginBottom: "1em",
            
          }}>
             <h1 class="text-center text-[1.7em] mb-5 text-shadow-h1">
          <b>HÀM SỐ BẬC NHẤT</b>
        </h1>  
        <p>Cho phương trình y=ax + b</p>
        <p>Hệ số góc của đường thẳng là góc được tạo bởi đường thằng y= ax +b và trục Ox, a gọi là hệ số góc.</p>
        <p class="pt-5"><img alt='1' src={process.env.PUBLIC_URL + '/toan/Bai7_1.png'}/></p>

        <p class="pt-5"><b>1. Tìm hệ số góc của đường thằng từ 2 diểm bất kỳ nằm trên đường thẳng </b></p>
        <p>Cho 2 điểm A(x1,y1) và B(x2,y2) nằm trên đường thẳng, </p>
        <p class="pcongthuc"><span class="congthuc font-bold"><span class="bang">a (hệ số góc của đường thẳng) = </span><span class="phanso"><span class="tu">y2 - y1</span><span class="mau">x2 -x1</span></span><span class="bang"></span></span></p>
        <p class="font-bold">Trường hợp y= b, thì hệ số góc là 0</p>
        <p class="font-bold">Trường hợp x= a, thì hệ số góc không xác định</p>
        <p class="font-bold">Ví dụ 1 : Tìm hệ số góc của đường thằng được hiển thị</p>
        <p><img alt='1' src={process.env.PUBLIC_URL + '/toan/Bai7_2.png'}/></p>
        <p><u><b>B1:</b></u> xác định 2 điểm trên tọa độ là số nguyên: P1(0,5) và P2(3,3)</p>
        <p><u><b>B2:</b></u> Thế vào công thức ta được: a =(3 - 5)/(3-0) = -2/3</p>

        <p class="font-bold">Ví dụ 2 : Tìm hệ số góc của đường thằng được hiển thị, y=4</p>
        <p><img alt='1' src={process.env.PUBLIC_URL + '/toan/Bai7_3.png'}/></p>
        <p><u><b>B1:</b></u> xác định 2 điểm trên tọa độ là số nguyên: P1(0,4) và P2(3,4)</p>
        <p><u><b>B2:</b></u> Thế vào công thức ta được: a =(4 - 4)/(3-0) = 0</p>

        <p class="font-bold">Ví dụ 3 : Tìm hệ số góc của đường thằng được hiển thị x=3</p>
        <p><img alt='1' src={process.env.PUBLIC_URL + '/toan/Bai7_4.png'}/></p>
        <p><u><b>B1:</b></u> xác định 2 điểm trên tọa độ là số nguyên: P1(3,0) và P2(3,2)</p>
        <p><u><b>B2:</b></u> Thế vào công thức ta được: a =(2 - 0)/(3-3) = không xác định</p>

        <p class="font-bold">Dấu của hệ số góc thể hiện như thế nào trên đường thằng?</p>
        <p>Trường hợp hệ số góc {'>'} 0 thì đường thẳng đi lên từ trái sang phải</p>
        <p>Trường hợp hệ số góc {'<'} 0 thì đường thẳng đi xuống từ trái sang phải</p>
        <p>Trường hợp hệ số góc {'='} 0 thì đường thẳng nằm ngang</p>
        <p>Trường hợp hệ số góc không xác định, trường hợp này là đường thẳng đứng</p>
        <p><img alt='1' src={process.env.PUBLIC_URL + '/toan/Bai7_5.png'}/></p>
        <p class="font-bold">2. Vẽ đồ thị đường thẳng khi biết tọa độ một điểm và hệ số góc</p>
        <p><u><b>B1:</b></u> Cho tọa độ P(1, -1) và hệ số góc a= 3/4 (3= y2 -y1, 4=x2-x1)</p>
        <p><img alt='1' src={process.env.PUBLIC_URL + '/toan/Bai7_6.png'}/></p>
        <p><u><b>B2:</b></u> Từ tọa độ P, và hệ số góc a, ta tính được tọa độ P1 bằng cách cộng tọa x của P với mẫu của hệ số góc, tọa độ y của P cộng với tử của hệ số góc</p>
        <p>x=1+4=5, y=-1+3=2 {'=>'} P1(5,-2)</p>
        <p><img alt='1' src={process.env.PUBLIC_URL + '/toan/Bai7_7.png'}/></p>
        <p>Nối P và P1 để được dường thẳng</p>
        <p><img alt='1' src={process.env.PUBLIC_URL + '/toan/Bai7_8.png'}/></p>
        <p><a class="text-blue-600 no-underline hover:underline" href="https://math.libretexts.org/Courses/City_University_of_New_York/MAT1275_Basic/01%3A_Linear_Expressions_and_Equations/1.02%3A_Slope_of_a_Line" target='blank'>Link tham khảo</a></p>
        
        <p class="font-bold text-[1.7em]">Cách tìm phương trình đường thẳng</p>
        <p class="font-bold text-blue-800 underline  text-[1.2em] underline  text-[1.2em]">1. Tìm phương trình đường thẳng khi biết hệ số góc và điểm cắt trục y</p>
        <p>Cho hệ số góc a=-9, điểm cắt trục y là (0,4)</p>
        <p><u><b>B1:</b></u> a= -9 (gt) (1)</p>
        <p><u><b>B2:</b></u> Từ điểm cắt trục y ta có được b= 4 (2)</p>
        
        <p><u><b>B3:</b></u> Từ (1) và (2) {'=>'} y=-9x + 4</p>
        <p class="font-bold text-blue-800 underline  text-[1.2em] underline  text-[1.2em]">2. Tìm phương trình đường thẳng khi biết hệ số góc và một điểm.</p>        
        <p><u><u><b>B1:</b></u></u> xác định hệ số góc</p>
        <p><u><b>B2:</b></u> Xác định điểm</p>
        <p><u><b>B3:</b></u> Thay thế các giá trị vào phương trình: y-y1 = a(x - x1) trong đó x1, y1 là điểm đã cho</p>
        <p><b >Ví dụ:</b> Cho hệ số góc là -1/3, và một điểm (6,-4)</p>
        <p><u><b>B1:</b></u> a=-1/3</p>
        <p><u><b>B2:</b></u> (6,-4)</p>
        <p><u><b>B3:</b></u> thay vào công thức: (y-(-4))=-1/3(x-6) </p>
        <p>y+4=-1/3x + 2</p>
        <p>y=-1/3x -2</p>
        <p class="font-bold text-blue-800 underline  text-[1.2em]">3. Tìm phương trình đường thẳng khi biết 2 điểm.</p>
        <p><u><b>B1:</b></u> tìm hệ số góc a=(y2 - y1)/(x2 -x1)</p>
        <p><u><b>B2:</b></u> Chọn 1 điểm đã cho</p>
        <p><u><b>B3:</b></u> Thế vào công thức (y - y1) = a(x - x1)</p>
        <p><u><b>Ví dụ:</b></u> Cho điểm (-3, 5) và (-3, 4). Viêt phương trình đường thẳng. </p>
        <p><u><b>B1:</b></u> Tìm hệ số góc a=(4 -5)/(-3 - (-3)) =-1/0  {'=>'} không xác định {'=>'} </p>
        <p>Đây là phương trình thẳng đứng. Cả 2 điểm điều có tọa độ là -3. Vậy phương trình đường thẳng là x=-3</p>
        <p>Ví dụ 2: cho 2 điểm (-3, -1) và (2, -2), tìm phương trình đường thẳng</p>
        <p><u><b>B1:</b></u> Xác định hệ số góc a=(y2 - y1)/(x2- x1)=(-2-(-1))/(2- (-3))=-1/5</p>
        <p><u><b>B2:</b></u> chọn điểm (-3, -1) để thế vào phương trình</p>
        <p><u><b>B3:</b></u> y -y1 =a(x-x1) {'<=>'} y -(-1)=-1/5(x-(-3))</p>
        <p>y+1=-1/5(x+3)</p>
        <p>y+1=-1/5x - -3/5</p>
        <p>y= -1/5x -8/5</p>
        <p class="font-bold text-blue-800 underline  text-[1.2em]">4. Tìm phương trình đường thẳng song song với một đường thẳng.</p>
        <p><u><b>B1:</b></u> xác định hệ số góc của phường thẳng đã cho</p>
        <p><u><b>B2:</b></u> Xác định một điểm không nằm trên đường thẳng đã cho (Cách xác định: Cho x là một số bất kỳ, thế vào phương trình đường thẳng đã cho sẽ tìm được y, chọ y1 khác y) điểm nằm ngoài đường thẳng là (x,y1)</p>
        <p><u><b>B3:</b></u> Thế vào công thức (y - y1) = a(x - x1)</p>
        <p><u><b>Ví dụ:</b></u> Tìm phương trình đường thẳng song song với đường thẳng y=2x -3</p>
        <p><u><b>B1:</b></u> Xác định hệ số góc a=2</p>
        <p><u><b>B2:</b></u> chọn điểm nằm ngoài đường thẳng cho trước: cho x=-2, thay vào phương trình y=2(-2)-3=-7, điểm (-2,-7 sẽ nằm trên đường thẳng cho trước, vậy chọn điểm (-2,1) sẽ không nằm trên đường thẳng) </p>
        <p><u><b>B3:</b></u> thế vào phương trình: y-y1=a(x-x1)</p>
        <p>y-1=2(x-(-2))</p>
        <p>y-1=2(x+2)</p>
        <p>y-1=2x +4</p>
        <p>y=2x +5</p>
        <p class="font-bold text-blue-800 underline  text-[1.2em] underline">5. Tìm phương trình đường thẳng vuông góc với một đường thẳng.</p>
        <p><u><b>B1:</b></u> xác định hệ số góc của phường thẳng đã cho a</p>
        <p><u><b>B2:</b></u> hệ số góc của đường thẳng cần tìm =-(1/a)</p>
        <p><u><b>B3:</b></u> Xác định một điểm không nằm trên đường thẳng đã cho (Cách xác định: Cho x là một số bất kỳ, thế vào phương trình đường thẳng đã cho sẽ tìm được y, chọ y1 khác y) điểm nằm ngoài đường thẳng là (x,y1)</p>
        <p><u><b>B4:</b></u> Thế vào công thức (y - y1) = a(x - x1)</p>
        <p><img alt='1' src={process.env.PUBLIC_URL + '/toan/Bai7_9.png'}/></p>
        <p><img alt='1' src={process.env.PUBLIC_URL + '/toan/Bai7_10.png'}/></p>
        <p><img alt='1' src={process.env.PUBLIC_URL + '/toan/Bai7_11.png'}/></p>
        <p class="font-bold text-blue-800 underline  text-[1.2em]">6. Tìm giao điểm của 2 đường thẳng.</p>
        <p><b><u>Cách 1:</u></b>: Vẽ đồ thị của 2 đường thẳng, tìm điểm giao nhau của 3 đường thẳng đó </p>
        <p><b><u>Cách 2:</u></b></p>
        <p>Giả sử có 2 đường thẳng y=ax+b và y1=a1x+b1</p>
        <p>Để 2 đường thẳng giao nhau thì a khác a1 </p>
        <p>y=y1 {'<=>'} ax + b = a1x + b1</p>
        <p>Tìm giá trị của x từ phương trình</p>
        <p>Thế giá trị x vào một trong 2 phương trình để tìm giá trị y</p>
        <p><u><b>Ví dụ: Tìm điểm giao nhau của 2 đường thẳng y=3x -1 và y=-x+7</b></u></p>
        <p>Hệ số góc của đường thẳng thứ 1 là 3 và đường thẳng 2 là -1 là khác nhau {'=>'} 2 đường thẳng này giao nhau</p>
        <p>3x -1 = -x +7</p>
        <p>4x =8</p>
        <p>x=2</p>
        <p>Thế x=2 vào phương trình y=3x -1 để tìm y</p>
        <p>y=3(2) -1 =6 -1 =5</p>
        <p>Vậy điểm giao nhau của 2 đường thẳng là (2,5)</p>          
        <p></p> 


        </div>
    );
};

export default Bai7;