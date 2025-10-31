import React from 'react';

const Bai5 = () => {
    return (
        <div class="leading-[35px]" style={{
            padding: "0.8em",
            border: "1px solid #ccc",
            borderRadius: "5px",
            background: "#ffffff",
            marginBottom: "1em",
            
          }}>
            <h1 class="text-center text-[1.7em] mb-5 text-shadow-h1">
          <b>Pha chế dung dịch</b>
        </h1>
        <p class="font-bold text-[18px]">1. Pha chế dung dịch theo nồng độ cho trước</p>
        <p class="text-[18px]"><b>Bước 1:</b> Tính các đại lượng cần dùng</p>
        <p class="text-[18px]"><b>Bước 2:</b> Pha chế dung dịch theo các đại lượng cần xác định</p>
        <p class="pt-5"><img alt='1' src={process.env.PUBLIC_URL + '/hoa/bai5_1.jpg'}/></p>
        <p class="pt-5"><img alt='2' src={process.env.PUBLIC_URL + '/hoa/bai5_2.jpg'}/></p>
        <p class="font-bold text-[18px]">2. Pha loãng hoặc cô đặc một dung dịch theo nồng độ cho trước</p>
        <p class="font-bold text-[18px]">a. Đặc điểm:</p>
        <p class="text-[18px]">- Khi pha loãng, nồng độ dung dịch giảm. Còn cô đặc, nồng độ dung dịch tăng.</p>
        <p class="text-[18px]">- Dù pha loãng hay cô đặc, khối lượng chất tan luôn luôn không thay đổi.</p>
        <p class="font-bold text-[18px]">b. Cách làm:</p>
        <p class="text-[18px]">- Vì khối lượng chất tan không đổi dù pha loãng hay cô đặc nên:</p>
        <p class="text-[18px]">+ Đối với bài tập nồng độ %: m<sub>dd(1)</sub>. C%<sub>(1)</sub>= m<sub>dd(2)</sub>. C%<sub>(2)</sub></p>
        <p class="text-[18px]">+ Đối với bài tập nồng độ mol: V<sub>dd(1)</sub>. C<sub>M(1)</sub> = V<sub>dd(2)</sub>. C<sub>M(2)</sub></p>
        <p class="text-[18px]">Tổng quát: Pha V<sub>2</sub>(ml) dung dịch A có nồng độ C<sub>M2</sub>(M) từ dung dịch A có nồng độ C<sub>M1</sub>(M)</p>
        <p class="font-bold text-[18px]">Bước 1:Tính toán</p>
        <p class="text-[18px]">- Tìm số mol chất tan có trong V2(ml) dung dịch A nồng độ C<sub>M2</sub>(M): n = C<sub>M2</sub>.V<sub>2</sub></p>
        <p class="text-[18px]">- Vì pha loãng dung dịch là thêm nước cất ={'>'} số mol chất tan là không thay đổi.</p>
        <p class="text-[18px]">- Tính thể tích dung dịch A nồng độ CM1(M):</p>
        <p class="pcongthuc"><span class="congthuc font-bold"><span class="bang">V<sub>1</sub> = </span><span class="phanso"><span class="tu">m</span><span class="mau">C<sub>M1</sub></span></span></span></p>
        <p class="text-[18px]">={'>'} Thể tích nước cần thêm là: V<sub>nước</sub>= V<sub>2</sub>– V<sub>1</sub></p>
        <p class="text-[18px]"><b>Bước 2:</b> Pha chế dung dịch</p>
        <p class="text-[18px] pt-5 font-bold">Ví dụ minh họa</p>
        <p class="text-[18px]"><b>Ví dụ 1:</b> Từ muối CuSO4, nước cất và những dụng cụ cần thiết hãy tính toán và giới thiệu cách pha chế 50 gam dung dịch CuSO4 có nồng độ 20%.</p>
        <p class="text-[18px]"><b>Giải</b></p>
        <p class="text-[18px]">Xác định thành phần dung dịch gồm chất tan là CuSO4 và dung môi là nước.</p>
        <p class="text-[18px] font-bold">Bước 1: Tính toán:</p>
        <p class="text-[18px]">- Khối lượng chất tan:</p>
        <p class="inline-flex"><span class="congthuc font-bold"><span class="bang">m<sub>CuSO<sub>4</sub></sub>=</span><span class="phanso"><span class="tu">m<sub><sub>(tt)</sub></sub>*C%</span><span class="mau">100</span></span></span></p> = (50*20)/100=10 (g)
        <p class="text-[18px]">- Khối lượng dung môi (nước):m<sub>H<sub>2</sub>O</sub> = m<sub>dd</sub> - m<sub>ct</sub> =50-10=40(g)</p>
        <p class="text-[18px] font-bold">Bước 2: Pha chế:</p>
        <p class="text-[18px]">- Cân lấy 10 gam CuSO<sub>4</sub> khan cho vào cốc thủy tinh dung tích 100 mL.</p>
        <p class="text-[18px]">- Cân lấy 40 gam hoặc đo bằng ống đong 40 mL nước và đổ dần vào cốc thủy tinh.</p>
        <p class="text-[18px]">- Khuấy nhẹ sẽ thu được 50 gam dung dịch CuSO<sub>4</sub> có nồng độ 20%.</p>
        <p class="text-[18px] pt-5"><b>Ví dụ 2:</b> Từ muối CuSO<sub>4</sub>, nước cất và những dụng cụ cần thiết hãy tính toán và giới thiệu cách pha chế 50 mL dung dịch CuSO<sub>4</sub> 0,5M.</p>
        <p class="text-[18px]"><b>Giải</b></p>
        <p class="text-[18px] font-bold">Bước 1: Tính toán</p>
        <p class="text-[18px]">- Đổi 50 mL = 0,05 lít;</p>
        <p class="text-[18px]">- Số mol chất tan là: n<sub>CuSo<sub>4</sub></sub>=C<sub>M</sub>.V = 0.5*0.05=0.025 (mol)</p>
        <p class="text-[18px]">- Khối lượng chất tan: m<sub>CuSO<sub>4</sub></sub> = n. M= 0.025*160 = 4(g)</p>
        <p class="text-[18px] font-bold">Bước 2: Pha chế:</p>
        <p class="text-[18px]">- Cân lấy 4 gam CuSo<sub>4</sub> khan cho vào cốc thủy tinh dung tích 100 mL.</p>
        <p class="text-[18px]">- Đổ dần dần nước vào cốc thuỷ tinh và khuấy nhẹ cho đủ 50 mL dung dịch.</p>
        <p class="text-[18px]">- Thu được 50 mL dung dịch CuSo<sub>4</sub> có nồng độ 0,5M.</p>
        <p></p>
        <p class="text-[18px] font-bold pt-5">Tổng quan về nồng độ dung dịch:</p>
        <p class="pt-5"><img alt='1' src={process.env.PUBLIC_URL + '/hoa/bai5_3.jpg'}/></p>
        <p></p>
        <p class="pt-5"><img alt='1' src={process.env.PUBLIC_URL + '/hoa/bai5_4.jpg'}/></p>
        <p></p>
        <p class="pt-5"><img alt='1' src={process.env.PUBLIC_URL + '/hoa/bai5_5.jpg'}/></p>
        </div>
    );
};

export default Bai5;