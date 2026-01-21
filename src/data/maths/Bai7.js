export const math = [
  {      
      semester: 1,
      grade: 8,
      questions: [
          {
              id: 41,
              extra: ``,
              question: `<p>Hai xe khởi hành cùng một lúc từ hai địa điểm A và B cách nhau 140 km và sau 2 giờ thì gặp nhau. Tính vận tốc của mỗi xe biết xe đi từ A có vận tốc lớn hơn xe đi từ B là 10 km/h ?</p>
        `,
              options: [],
              answer: ``,
              rewrite: ``,
              lastwrite: ``,
              explanation: `<p>Gọi vận tốc xe đi từ A là x ( km/h) (x > 10)</br>
      Vận tốc xe đi từ B : x - 10 (km/h)</br>
Quãng đường xe đi từ A đi được trog 2h: 2x (km)</br>
Quãng đường xe đi từ B đi được trog 2h: 2( x - 10 ) (km)</br>
Theo đề bài ta có phương trình:</br>
2x + 2 (x - 10) =140</br>
<=> 2x + 2x - 20 = 140</br>
<=> 4x = 160</br>
<=> x = 40 ( TMĐK)</br>
Vậy vận tốc xe đi từ A là 40 km/h</br>
       Vận tốc xe đi từ B= 40 - 10 = 30 km/h.</p>`,
            },
            {
              id: 41,
              extra: ``,
              question: `<p>Một người đi xe máy từ A đến B với vận tốc  40 km/h . Đến B người đó làm việc trong 3 giờ rồi quay về A với vận tốc 30km/h . Biết thời gian tổng cộng hết 6 giờ 30 phút . Tính quãng đường AB ?</p>
        `,
              options: [],
              answer: ``,
              rewrite: ``,
              lastwrite: ``,
              explanation: `<p>Gọi x là quãng đường từ A đến B</br>
              Tổng thời gian đi và về là 6.5 - 3=3.5</br>
              VẬy thời gian người đó đi từ A đến B và từ B về A là : x/40 + x/30=3.5</br>
                <=> (3x + 4x)/120 = 3.5</br>
                <=> 7x = 3.5.120</br>
                <=> x = 60 (km)</br>
              </p>`,
            },
            {
              id: 41,
              extra: ``,
              question: `<p>Một ôtô dự định đi quãng đường AB dài 60km trong một thời gian nhất định. Ôtô đi nữa đọan đường đầu với vận tốc lớn hơn dự định là 10km/h, và đi nữa đoạn đường sau với vận tốc bé hơn dự định là 6km/h. Biết ôtô đến B đúng thời gian đã định. Tính thời gian ôtô dự định đi hết quãng đường AB ?</p>
        `,
              options: [],
              answer: ``,
              rewrite: ``,
              lastwrite: ``,
              explanation: `<p>Gọi x và vận tốc dự tính của o6to6 đi hết quãng đường AB</br>
              VẬy thời gian đi hết quãng đường dự tính là: 60/x (1)</br>
              Nữa quãng đường oto đi với vận tốc x +10, thì mất 30/(x+10) giờ (2)</br>
              Nữa quãng dường sau oto đi với vận tốc x-6, thì mất 30/(x-6) giờ (3)</br>
              Vì thời gia đi thực tế và thời gian dự định là như nhau nên:</br>
              60/x = 30/(x+10) + 30/(x-6)
              Giải phương thình ta được x=30 km/h</br>
              VẬy thời gian dự định là: 60/30=2 h</p>`,
            },
            {
              id: 41,
              extra: ``,
              question: `<p>Một xí nghiệp dự định sản xuất 1500 sản phẩm trong 30 ngày. Nhưng nhờ tổ chức lao động hợp lí nên đã sản xuất mỗi ngày vượt 15 sản phẩm. Do đó xí nghiệp đã sản xuất không vượt mức dự định 255 sản phẩm mà còn hoàn thành trước thời hạn. Hỏi thực tế xí nghiệp đã rút ngắn được bao nhiêu ngày ?</p>
        `,
              options: [],
              answer: ``,
              rewrite: ``,
              lastwrite: ``,
              explanation: `<p>Theo dự định, mỗi ngày xí nghiệp sản xuất được:</br>
Thực tế, mỗi ngày xí nghiệp sản xuất được:</br>
      50 + 15 = 65 (sản phẩm)</br>
Tổng số sản phẩm thực tế xí nghiệm sản xuất được:</br>
      1500 + 255 = 1755 (sản phẩm)</br>
Thời gian thực tế xí nghiệm sản xuất là:</br>
      1755 : 65 = 27 (ngày)</br>
Vậy số ngày được rút ngắn so với dự định là:</br>
      30 – 27 = 3 (ngày)
              </p>`,
            },
            {
              id: 41,
              extra: ``,
              question: `<p>Một hợp kim đồng và thiếc có khối lượng 12kg, chứa 45% đồng. Hỏi phải thêm vào đó bao nhiêu thiếc nguyên chất để được hợp kim mới có chứa 40% đồng ?</p>
        `,
              options: [],
              answer: ``,
              rewrite: ``,
              lastwrite: ``,
              explanation: `<p>Khối lượng đồng chứa trong hợp khim ban đầu là: 12*0.45=5.4 kg</br>
              Khối lượng thiết ban đầu là: 12-5.4=6.6 kg</br>
              Gọi x là khôi lượng thiếc cần thêm vào</br>
              Khối lượng hợp kim mới là: 12 + x</br>
              Theo đề bài, lượng đồng trong hợp kim mới chiếm 40%, nên ta có phương trình: 5.4=(12+x).0.4
              Giải phương trình ta được x=1.5 kg</p>`,
            },
            {
              id: 41,
              extra: ``,
              question: `<p>Biết rằng 200g một dung dịch chứa 50g muối. Hỏi phải pha thêm bao nhiêu gam nước vào dung dịch đó để được một dung dịch chứa 20% muối ? </p>
        `,
              options: [],
              answer: ``,
              rewrite: ``,
              lastwrite: ``,
              explanation: `<p>
              Gọi x (gam) là khối lượng nước cần pha thêm (x>0)). Khi đó, khối lượng dung dịch mới sẽ là: 200 +x</br>
              Nồng độ dung dịch sau khi pha loãng là 20%=50/(200 +x)*100</br>
              Giải phương trình ta được x=50g</p>`,
            },
            {
              id: 41,
              extra: ``,
              question: `<p>Hai vòi nước cùng chảy một bể cạn thì phải mất 12h mới đầy bể. Người ta mở hai vòi cùng một lúc, nhưng sau đó 4h, người ta khóa vòi I lại, vòi II tiếp tục chảy trong 14h nữa thì đầy bể. Hỏi nếu chảy một mình thì mỗi vòi phải chảy bao lâu mới đầy bể ?</p>
        `,
              options: [],
              answer: ``,
              rewrite: ``,
              lastwrite: ``,
              explanation: `<p>
              Gọi thời gian vòi thứ nhất và vòi thứ 2 chảy một mình đầy bể lần lượt là x (h) và y (h) (x>0, y>0)</br>
                Vậy trong 1h, vòi thứ nhất chảy được 1/x bể, vòi thứ 2 chảy được 1/y bể.</br>
                Khi hai vòi cùng chảy trong 4h thì được: 4(1/x + 1/y) bể.</br>
                Sau đó, khóa vòi thứ nhất, vòi thứ hai tiếp tục chảy trong 14h thì được: 14/y bể.</br>
                Theo đề bài, ta có phương trình:</br>
                4(1/x + 1/y) + 14/y = 1</br>
                <=> 4/x + 4/y + 14/y = 1</br>
                <=> 4/x + 18/y = 1 (1)</br>
                Khi hai vòi cùng chảy thì trong 1h chảy được 1/12 bể, nên ta có phương trình:</br>
                1/x + 1/y = 1/12 (2)</br>
                Từ (1) và (2) ta giải hệ phương trình được:</br>
                x = 15 (h)</br>
                y = 20 (h)</br>
              </p>`,
            },
            {
              id: 41,
              extra: ``,
              question: `<p>Một cửa hàng có hai kho chứa hàng. Kho I chứa 60 tấn, kho II chứa 80 tấn. Sau khi bán ở kho II số hàng gấp 3 lần số hàng bán được ở kho I thi số hàng còn lại ở kho I gấp đôi số hàng còn lại ở kho II. Tính số hàng đã bán ở mỗi kho</p>
        `,
              options: [],
              answer: ``,
              rewrite: ``,
              lastwrite: ``,
              explanation: `<p>
              Gọi x (tấn) là số hàng bán được ở kho I (x>0)</br>
                Vậy số hàng bán được ở kho II là 3x (tấn)</br>
                Số hàng còn lại ở kho I là: 60 - x (tấn)</br>
                Số hàng còn lại ở kho II là: 80 - 3x (tấn)</br>
                Theo đề bài, ta có phương trình:</br>
                60 - x = 2(80 - 3x)</br>
                <=> 60 - x = 160 - 6x</br>
                <=> 5x = 100</br>
                <=> x = 20 </br>
                Vậy số hàng bán được ở kho I là 20 tấn</br>
                Số hàng bán được ở kho II là: 3.20 = 60 tấn</br>
              </p>
              `,
            },
            {
              id: 41,
              extra: ``,
              question: `<p>Tìm số tự nhiên có hai chữ số.Biết rằng nếu thêm chữ số 5 vào bên trái số đó thì được một số lớn hơn số viết thêm chữ số 5 vào bên phải số đó</p>
        `,
              options: [],
              answer: ``,
              rewrite: ``,
              lastwrite: ``,
              explanation: `<p>
              Gọi x là số tự nhiên có 2 chữ số (10=<x<=99)</>
              Khi viết thêm chữ số 5 vào bên trái số đó, ta được số mới là: <span class="line_top">5ab</span> =500 +x</br>
              Khi viết thêm chữ số 5 vào bên phải số đó, ta được số mới là: <span class="line_top">ab5</span> =10*x+5</br>
              Theo đề bài ta có: 500 +x>10*x +5</br>
                <=> 495 > 9*x</br>
                <=> x < 55 (1)</br>
                Vì x là số có hai chữ số nên x>=10 (2)</br>
                Từ (1) và (2) ta được: 10 =< x < 55</br>
              </p>`,
            },
        //     {
        //       id: 41,
        //       extra: ``,
        //       question: `
        // `,
        //       options: [],
        //       answer: ``,
        //       rewrite: ``,
        //       lastwrite: ``,
        //       explanation: ``,
        //     },
      ]
  },
];