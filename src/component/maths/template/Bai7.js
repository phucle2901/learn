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
        <p>B1: xác định 2 điểm trên tọa độ là số nguyên: P1(0,5) và P2(3,3)</p>
        <p>B2: Thế vào công thức ta được: a =(3 - 5)/(3-0) = -2/3</p>

        <p class="font-bold">Ví dụ 2 : Tìm hệ số góc của đường thằng được hiển thị, y=4</p>
        <p><img alt='1' src={process.env.PUBLIC_URL + '/toan/Bai7_3.png'}/></p>
        <p>B1: xác định 2 điểm trên tọa độ là số nguyên: P1(0,4) và P2(3,4)</p>
        <p>B2: Thế vào công thức ta được: a =(4 - 4)/(3-0) = 0</p>

        <p class="font-bold">Ví dụ 3 : Tìm hệ số góc của đường thằng được hiển thị x=3</p>
        <p><img alt='1' src={process.env.PUBLIC_URL + '/toan/Bai7_4.png'}/></p>
        <p>B1: xác định 2 điểm trên tọa độ là số nguyên: P1(3,0) và P2(3,2)</p>
        <p>B2: Thế vào công thức ta được: a =(2 - 0)/(3-3) = không xác định</p>

        <p class="font-bold">Dấu của hệ số góc thể hiện như thế nào trên đường thằng?</p>
        <p>Trường hợp hệ số góc {'>'} 0 thì đường thẳng đi lên từ trái sang phải</p>
        <p>Trường hợp hệ số góc {'<'} 0 thì đường thẳng đi xuống từ trái sang phải</p>
        <p>Trường hợp hệ số góc {'='} 0 thì đường thẳng nằm ngang</p>
        <p>Trường hợp hệ số góc không xác định, trường hợp này là đường thẳng đứng</p>
        <p><img alt='1' src={process.env.PUBLIC_URL + '/toan/Bai7_5.png'}/></p>
        <p class="font-bold">2. Vẽ đồ thị đường thẳng khi biết tọa độ một điểm và hệ số góc</p>
        <p>B1: Cho tọa độ P(1, -1) và hệ số góc a= 3/4 (3= y2 -y1, 4=x2-x1)</p>
        <p><img alt='1' src={process.env.PUBLIC_URL + '/toan/Bai7_6.png'}/></p>
        <p>B2: Từ tọa độ P, và hệ số góc a, ta tính được tọa độ P1 bằng cách cộng tọa x của P với mẫu của hệ số góc, tọa độ y của P cộng với tử của hệ số góc</p>
        <p>x=1+4=5, y=-1+3=2 {'=>'} P1(5,-2)</p>
        <p><img alt='1' src={process.env.PUBLIC_URL + '/toan/Bai7_7.png'}/></p>
        <p>Nối P và P1 để được dường thẳng</p>
        <p><img alt='1' src={process.env.PUBLIC_URL + '/toan/Bai7_8.png'}/></p>
        <p><a href="https://math.libretexts.org/Courses/City_University_of_New_York/MAT1275_Basic/01%3A_Linear_Expressions_and_Equations/1.02%3A_Slope_of_a_Line" target='blank'>Link tham khảo</a></p>
        
        <p class="font-bold text-[1.7em]">Cách tìm phương trình đường thẳng</p>
        <p class="font-bold">1. Tìm phương trình đường thẳng khi biết hệ số góc và điểm cắt trục y</p>
        <p>Cho hệ số góc a=-9, điểm cắt trục y là (0,4)</p>
        <p>B1: a= -9 (gt) (1)</p>
        <p>B2: Từ điểm cắt trục y ta có được b= 4 (2)</p>
        
        <p>B3: Từ (1) và (2) {'=>'} y=-9x + 4</p>
        <p class="font-bold">2. Tìm phương trình đường thẳng khi biết hệ số góc và một điểm.</p>        
        <p>B1: xác định hệ số góc</p>
        <p>B2: Xác định điểm</p>
        <p>B3: Thay thế các giá trị vào phương trình: y-y1 = a(x - x1) trong đó x1, y1 là điểm đã cho</p>
        <p>Ví dụ: Cho hệ số góc là -1/3, và một điểm (6,-4)</p>
        <p>B1: a=-1/3</p>
        <p>B2: (6,-4)</p>
        <p>B3: thay vào công thức: (y-(-4))=-1/3(x-6) </p>
        <p>y+4=-1/3x + 2</p>
        <p>y=-1/3x -2</p>
        <p class="font-bold">3. Tìm phương trình đường thẳng khi biết 2 điểm.</p>
        <p>B1: tìm hệ số góc a=(y2 - y1)/(x2 -x1)</p>
        <p>B2: Chọn 1 điểm đã cho</p>
        <p>B3: Thế vào công thức (y - y1) = a(x - x1)</p>
        <p>Ví dụ: Cho điểm (-3, 5) và (-3, 4). Viêt phương trình đường thẳng. </p>
        <p>B1: Tìm hệ số góc a=(4 -5)/(-3 - (-3)) =-1/0  {'=>'} không xác định {'=>'} </p>
        <p>Đây là phương trình thẳng đứng. Cả 2 điểm điều có tọa độ là -3. Vậy phương trình đường thẳng là x=-3</p>
        <p>Ví dụ 2: cho 2 điểm (-3, -1) và (2, -2), tìm phương trình đường thẳng</p>
        <p>B1: Xác định hệ số góc a=(y2 - y1)/(x2- x1)=(-2-(-1))/(2- (-3))=-1/5</p>
        <p>B2: chọn điểm (-3, -1) để thế vào phương trình</p>
        <p>B3: y -y1 =a(x-x1) {'<=>'} y -(-1)=-1/5(x-(-3))</p>
        <p>y+1=-1/5(x+3)</p>
        <p>y+1=-1/5x - -3/5</p>
        <p>y= -1/5x -8/5</p>
        <p class="font-bold">4. Tìm phương trình đường thẳng song song với một đường thẳng.</p>
        <p>B1: xác định hệ số góc của phường thẳng đã cho</p>
        <p>B2: Xác định một điểm không nằm trên đường thẳng đã cho (Cách xác định: Cho x là một số bất kỳ, thế vào phương trình đường thẳng đã cho sẽ tìm được y, chọ y1 khác y) điểm nằm ngoài đường thẳng là (x,y1)</p>
        <p>B3: Thế vào công thức (y - y1) = a(x - x1)</p>
        <p>Ví dụ: Tìm phương trình đường thẳng song song với đường thẳng y=2x -3</p>
        <p>B1: Xác định hệ số góc a=2</p>
        <p>B2: chọn điểm nằm ngoài đường thẳng cho trước: cho x=-2, thay vào phương trình y=2(-2)-3=-7, điểm (-2,-7 sẽ nằm trên đường thẳng cho trước, vậy chọn điểm (-2,1) sẽ không nằm trên đường thẳng) </p>
        <p>B3: thế vào phương trình: y-y1=a(x-x1)</p>
        <p>y-1=2(x-(-2))</p>
        <p>y-1=2(x+2)</p>
        <p>y-1=2x +4</p>
        <p>y=2x +5</p>
        <p class="font-bold">5. Tìm phương trình đường thẳng vuông góc với một đường thẳng.</p>
        <p>B1: xác định hệ số góc của phường thẳng đã cho</p>
        <p>B2: Nghịch đão hệ số góc sẽ được hệ số góc của đường thẳng cần tìm</p>
        <p>B3: Xác định một điểm không nằm trên đường thẳng đã cho (Cách xác định: Cho x là một số bất kỳ, thế vào phương trình đường thẳng đã cho sẽ tìm được y, chọ y1 khác y) điểm nằm ngoài đường thẳng là (x,y1)</p>
        <p>B4: Thế vào công thức (y - y1) = a(x - x1)</p>
        <p><img alt='1' src={process.env.PUBLIC_URL + '/toan/Bai7_9.png'}/></p>
        <p><img alt='1' src={process.env.PUBLIC_URL + '/toan/Bai7_10.png'}/></p>
        <p><img alt='1' src={process.env.PUBLIC_URL + '/toan/Bai7_11.png'}/></p>
        <p></p>  

        </div>
    );
};

export default Bai7;