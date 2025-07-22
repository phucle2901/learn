import React from "react";

const Conditional = () => {
  return (
    <div
      style={{
        padding: "0.8em",
        border: "1px solid #ccc",
        borderRadius: "5px",
        background: "#fff9f9",
        marginBottom: "1em",
      }}
    >
    <h1 class="text-center text-[1.7em] mb-5 text-shadow-h1">
        <b>Câu điều kiện</b>
      </h1>
      <table width={"100%"} class="table-col ">
        <tbody>
          <tr>
            <td  colSpan={2}>
              <p class="text-center text-[1.4em] text-shadow-h1"><strong>Câu điều kiện loại 0</strong></p>
              <ul class="compare-list font-bold">
                <li>Diễn tả một chân lí, sự thật</li>
                <li>Diễn tả một thói quen</li>
                <li>Diễn tả mệnh lệnh, yêu cầu, nhờ vả, giúp đỡ ai hoặc nhắn nhủ một điều gì đó.</li>
              </ul>
              <p class="mb-5 mt-3 font-bold">
              Lưu ý: 
              </p>
              <ul  class="compare-list ">
                <li><p class="font-bold">If có thể được thay bằng when/whenever mà không làm thay đổi ý nghĩa của câu.</p>
                <p>If mom is not home, my sister is in charge of cooking. </p>
                <p>⟶ When mom is not home, my sister is in charge of cooking.</p>
                <p>(Nếu/Khi mẹ tôi không có ở nhà thì chị gái tôi sẽ chịu trách nhiệm nấu ăn.)</p>
                </li>
                <li><p class="font-bold">Mệnh đề If và mệnh đề chính có thể thay đổi vị trí cho nhau</p>
                <p>If the weather is hot, the ice cream melts quickly. </p>
                <p>⟶ The ice cream melts quickly if the weather is hot.</p>
                <p>(Nếu thời tiết nóng thì kem tan nhanh.)</p></li>
              </ul>
              
            </td>
          </tr>
          <tr>
            <td class="text-center" width={"50%"}>
              <strong>Mệnh đề điều kiện</strong>
            </td>
            <td class="text-center ">
              <strong>Mệnh đề chính</strong>
            </td>
          </tr>
          <tr>
            <td>
              <p class="font-bold color-dard-puple">If + S + V (s, es)</p>
              <p class="font-bold color-dard-puple">
                (If + <strong>Thì hiện tại đơn</strong>)
              </p>
            </td>
            <td>
              <p class="font-bold color-dard-puple">S&nbsp; + V (s, es)</p>
              <p class="font-bold color-dard-puple">(S + Thì hiện tại đơn)</p>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <ul class="compare-list">
                <li class="list-style-dot">
                If you don't eat, you will be hungry. (Nếu bạn không ăn, bạn sẽ đói.)
                </li>
                <li class="list-style-dot">
                If I get up late, I skip breakfast. (Nếu tôi thức dậy muộn thì tôi thường bỏ qua bữa ăn sáng.)
                </li>
                <li class="list-style-dot">If you don't know where to go, just call me. (Nếu bạn không có nơi nào để đi thì hãy gọi cho tôi nhé.)</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan={2}><p class="text-center font-bold ">Đảo ngữ của câu điều kiện loại 0</p></td>
          </tr>
          <tr>
            <td><p class="text-center font-bold ">Với động từ to be</p></td>
            <td><p class="text-center font-bold ">Với động từ thường</p></td>
          </tr>
          <tr>
            <td class="align-top"><p class="font-bold color-dard-puple pb-5">Should + S1 + (not) + be + Adj/N, S2 + V</p>
            <p>If he's back, please let him know that I'll come later.</p>
            <p >⟶ Should he be back, please let him know that I'll come later. (Nếu anh ấy về, xin hãy nói với anh ấy rằng tôi sẽ đến sau.)</p>
            </td>
            <td class="align-top"><p class="font-bold color-dard-puple pb-5">Should + S1 + (not) + V-inf, S2 + V2</p>           

            <p>If it rains, the plants get wet. </p>
            <p>⟶ Should it rain, the plants get wet. (Nếu trời mưa, cây cối sẽ bị ướt.)</p>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <p class="text-center text-[1.4em] text-shadow-h1"><b>Câu điều kiện loại 1</b></p>
              <ul class="compare-list font-bold">
                <li>Dùng để chỉ sự việc có thể xảy ra ở hiện tại hoặc tương lai</li>
                <li>Sử dụng để đề nghị và gợi ý</li>
                <li>Cảnh báo hoặc đe dọa</li>
              </ul>
              
            </td>
          </tr>
          <tr>
            <td class="text-center ">
              <strong>Mệnh đề điều kiện</strong>
            </td>
            <td class="text-center ">
              <strong>Mệnh đề chính</strong>
            </td>
          </tr>
          <tr>
            <td>
              <p class="font-bold color-dard-puple">If + S + V (s/es)</p>
              <p class="font-bold color-dard-puple">(If + thì hiện tại đơn)</p>
            </td>
            <td>
              <p class="font-bold color-dard-puple">S + will + V</p>
              <p class="font-bold color-dard-puple">(S + will + động từ nguyên mẫu)</p>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <ul class="compare-list">
                <li class="list-style-dot">
                If I get up early in the morning, I will go to school on time. (Nếu tôi dậy sớm vào buổi sáng, tôi sẽ đến trường học đúng giờ.)
                </li>
                <li class="list-style-dot">
                If you need a ticket, I can get you one. (Nếu bạn cần mua vé, tôi có thể mua dùm bạn một cái.)
                </li>
                <li class="list-style-dot">If you come in, he will kill you. (Nếu bạn bước vào đó, anh ta sẽ giết bạn.)</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan={2} class="text-center ">
                <p className="font-bold">Biến thể câu điều kiện loại 1</p>
            </td>
          </tr>
          <tr>
            <td class="text-center "><p className="font-bold">Biến thể mệnh đề if</p></td>
            <td class="text-center "><p className="font-bold">Biến thể mệnh đề chính</p></td>
          </tr>
          <tr>
            <td class="align-top">
                <ul class="compare-list">
                    <li><b>Sự việc đang diễn ra trong tương lai:</b> <p class="font-bold color-dard-puple pb-3 pt-3">If + thì hiện tại tiếp diễn,  S + thì tương lai đơn</p>
                    <p class="pb-5">If you are cooking dinner, I will help you answer the phone.<br/>Nếu bạn đang nấu bữa tối, tôi sẽ giúp bạn trả lời điện thoại.</p></li>
                    <li><b>Sự việc không xác định được về thời gian:</b> <p class="font-bold color-dard-puple pb-3 pt-3">If + thì hiện tại hoàn thành, S + thì tương lai đơn</p>
                    <p  class="pb-5">If you has written the letter, I will send it. <br/>Nếu bạn đã viết thư, tôi sẽ gửi nó.</p></li>
                </ul>
            </td>
            <td class="align-top">
                <ul class="compare-list">
                    <li><b>Trong mệnh đề này sẽ nhằm mục đích nhấn mạnh tính hoàn thành hay tiếp diễn sự việc:</b><p class="font-bold color-dard-puple pb-3 pt-3">If + thì hiện tại đơn, S + thì tương lai tiếp diễn/ tương lai hoàn thành</p>
                    <p class="pb-5">If we start our meeting now, we will have finished by 10 a.m.<br/>Nếu bắt đầu buổi họp bây giờ thì chúng ta sẽ hoàn thành xong trước 10 giờ.</p></li>
                    <li><b>Câu mệnh lệnh:</b> <p class="font-bold color-dard-puple pb-3 pt-3">If + thì hiện tại đơn, (don't) V-inf</p>
                    <p class="pb-5">If you don't clean the house, don't go out!<br/>Nếu không dọn nhà thì con không được ra ngoài!</p></li>
                    <li><b>Câu khuyên nhủ, đề nghị:</b><p class="font-bold color-dard-puple pb-3 pt-3"> If + thì hiện tại đơn, S + should/must/have to/… + V-inf</p>
                    <p class="pb-5">If you don't feel good, you should stay at home.<br/>Nếu bạn không cảm thấy ổn, bạn nên nghỉ ở nhà.</p></li>
                </ul>
            </td>
          </tr>
          <tr>
            <td colSpan={2} class="text-center ">
                <p class="font-bold">Đảo ngữ câu điều kiện loại I</p>
            </td>
          </tr>
          <tr>
            <td >
                <ul>
                    <li><b>Đảo ngữ với động từ to be:</b>
                    <p class="font-bold color-dard-puple pb-3 pt-3">Should + S + (not) + be + … + S + will/may/can + V</p>
                    <p >If you are regularly late to work, you won't get a bonus this month.</p>
                    <p class="pb-5">⟶ <b>Should</b> you <b>be</b> regularly late to work, you won't get a bonus this month.</p>
                    <p >If the children are fine, their parents will be happy.</p>
                    <p>⟶ <b>Should</b> the children <b>be</b> fine, their parents will be happy.</p>
                    </li>
                   
                </ul>
            </td>
            <td >
                <ul >                    
                    <li><b>Đảo ngữ với động từ thường:</b>
                    <p class="font-bold color-dard-puple pb-3 pt-3">Should + S + (not) + V + … + S + will/may/can + V</p>
                    <p >If you go to work late regularly, you won't get a bonus this month.</p>
                    <p class="pb-5">⟶ <b>Should</b> you <b>go</b> to work late regularly, you won't get a bonus this month.</p>
                    <p >If the children feel happy, their parents will be satisfied.</p>
                    <p>⟶ <b>Should</b> the children <b>feel</b> happy, their parents will be satisfied.</p>
                    </li>
                </ul>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
            <p class="text-center text-[1.4em] text-shadow-h1"><strong>Câu điều kiện loại 2</strong></p>
            <ul class="compare-list font-bold">
                <li>Dùng để diễn tả một hành động/ sự việc không thể xảy ra ở tình huống hiện tại. </li>
                <li>Dùng để khuyên nhủ ai đó.</li>
                <li>Dùng để thể hiện sự trái ngược với khả năng hiện tại của bản thân.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td class="text-center ">
              <strong>Mệnh đề điều kiện</strong>
            </td>
            <td class="text-center ">
              <strong>Mệnh đề chính</strong>
            </td>
          </tr>
          <tr>
            <td>
              <p class="font-bold color-dard-puple">If + S + V-ed</p>
              <p class="font-bold color-dard-puple">(If + Thì quá khứ đơn )<br/>- Riêng động từ tobe dùng <b>were</b> cho tất cả các ngôi</p>
            </td>
            <td>
              <p class="font-bold color-dard-puple">S + would/could/should + V-inf</p>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <ul class="compare-list">
                <li class="list-style-dot">
                If Kathy bought food for dinner, her mom wouldn't get angry. (Nếu Kathy mua thức ăn cho bữa tối, mẹ cô ấy đã không nổi giận.<br/>→ Sự thật là hiện tại mẹ Kathy đã bực mình vì con gái đã không mua đồ ăn tối.)
                </li>
                <li class="list-style-dot">
                If I were you, I wouldn't tell her about this news. (Nếu tôi là bạn, tôi sẽ không kể cho cô ấy nghe tin này.)
                </li>
                <li class="list-style-dot">If Kai had enough money, he could travel around the world this year. (Nếu Kai có đủ tiền, anh ấy đã có thể du lịch vòng quanh thế giới trong năm nay.<br/>→ Sự thật là Kai hiện tại không có khả năng đi du lịch khắp thế giới.)</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan={2} class="text-center "><p className="font-bold">Biến thể câu điều kiện loại 2</p></td>
          </tr>
          <tr>
            <td class="text-center "><p className="font-bold">Biến thể mệnh đề if</p></td>
            <td class="text-center "><p className="font-bold">Biến thể mệnh đề chính</p></td>
          </tr>
          <tr>
            <td>
            <ul class="compare-list">
              <li><p class="font-bold color-dard-puple">If + S + Past Continuous, S + would/could + V-inf</p>
              <p>If you were studying, I wouldn't disturb you. (Nếu bạn đang học bài thì tôi sẽ không làm phiền bạn đâu.)</p>
              </li>
              <li>
                <p  class="font-bold color-dard-puple">If + S + Past Perfect, S + would/could + V-inf</p>
                <p>If I hadn't studied last night, I couldn't do the test well. (Nếu tối qua không không học bài thì hôm nay tôi không thể làm bài tập tôt.)</p>
              </li>
            </ul>
            </td>
            <td>
            <ul class="compare-list">
            <li><p class="font-bold color-dard-puple">If + S+ past simple, S + would /could/might/had to…. + be V-ing</p>
            <p>If I stayed at home, I would be lying on my bed now. (Nếu tôi ở nhà thì giờ này tôi đang nằm dài trên giường.)</p></li>
            <li><p class="font-bold color-dard-puple">If + past simple, past simple</p>
            <p>If he were rich, he bought this car. (Nếu anh ta giàu thì anh ta mua chiếc xe này.)</p></li>
            </ul>
            </td>
          </tr>
          <tr>
            <td colSpan={2} ><p class="font-bold text-center">Đảo ngữ câu điều kiện loại 2</p>
            <p class="font-bold">Lưu ý:</p>
            <ul class="compare-list">
              <li>Đảo ngữ câu điều kiện loại 2 sử dụng to be là “were” cho tất cả các chủ ngữ</li>
              <li>Trong câu chỉ có Ved, không có “were”, ta mượn trợ động từ were đảo lên đầu, chuyển Ved ⟶ to verb</li>
            </ul>
            </td>
          </tr>
          <tr>
            <td class="text-center "><p class="font-bold">Đảo ngữ với động từ to be:</p></td>
            <td class="text-center "><p class="font-bold">Đảo ngữ với động từ thường:</p></td>
          </tr>
          <tr>
            <td><p class="font-bold color-dard-puple pb-3 pt-3">Were + S + (not) + … + S + would/might/could + V</p>
            <p>If I were you, I would not waste money on legos. </p>
            <p class="pb-3">⟶<b>Were</b> you to listen to my advice, you would not waste money on legos.</p>
            </td>
            <td>
            <p class="font-bold color-dard-puple pb-3 pt-3">Were + S + (not) + to V … + S + would/might/could + V</p>
            <p>If I had the chance, I would fire them all. </p>
            <p class="pb-3">⟶<b>Were</b> I to have the chance, I would fire them all. </p>
            </td>
          </tr>

          <tr>
            <td colSpan={2}>
            <p class="text-center text-[1.4em] text-shadow-h1"><strong>Câu điều kiện loại 3</strong></p>
            <ul class="compare-list font-bold">
              <li>Diễn tả 1 sự việc hoặc hành động đã không xảy ra trong quá khứ, mang tính ước muốn, hối tiếc.</li>
              <li>Sử dụng với “might” để nói đến 1 sự việc có thể xảy ra trong quá khứ nhưng không chắc chắn</li>
              <li>Dùng với “could” nói đến 1 sự việc có thể xảy ra trong quá khứ nếu giả thuyết xảy ra</li>
            </ul>
            <p class="mb-5 mt-3 font-bold">
            
              </p>
            </td>
          </tr>          
          <tr>
            <td class="text-center ">
              <strong>Mệnh đề điều kiện</strong>
            </td>
            <td class="text-center ">
              <strong>Mệnh đề chính</strong>
            </td>
          </tr>
          <tr>
            <td>
              <p class="font-bold color-dard-puple">If + S + had + Vpp/V-ed</p>
              <p class="font-bold color-dard-puple">(If + Thì quá khứ hoàn thành)</p>
            </td>
            <td>
              <p class="font-bold color-dard-puple">S + would/could/might + have + Vpp/V-ed</p>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <ul class="compare-list">
                <li class="list-style-dot">
                If Harry had called me, I wouldn't have forgotten about the test. (Nếu Harry đã gọi cho tôi thì tôi đã không quên mất bài kiểm tra.)<br/>
                → Điều kiện "Harry had called me" đã không xảy ra nên kết quả "I wouldn't have forgotten about the test" cũng không xảy ra.
                </li>
                <li class="list-style-dot">
                If she had studied art, she might have become a famous painter. (Nếu cô ấy đã học nghệ thuật, có lẽ cô ấy đã trở thành một họa sĩ nổi tiếng.)<br/>
                → Cô ấy không chắc chắn sẽ trở thành 1 hoạ sĩ nổi tiếng cho dù cô ấy học nghệ thuật. 
                </li>
                <li class="list-style-dot">If I had enough money, I could have bought an iPhone 14. (Nếu tôi có đủ tiền, tôi đã có thể mua iPhone 14.)<br/>
                → Hành động mua iPhone 14 sẽ xảy ra nếu như tôi có đủ tiền.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan={2}><p class="text-center font-bold ">Biến thể của câu điều kiện loại 3</p></td>
          </tr>
          <tr>
            <td><p class="font-bold text-center">Biến thể của mệnh đề IF</p></td>
            <td><p class="font-bold text-center">Biến thể của mệnh đề chính</p></td>
          </tr>
          <tr>
            <td class="align-top"><p class="font-bold color-dard-puple">If + S + had + been + V-ing, S + would/could + have + PII</p>
            <p class="mt-3 mb-5 ">If we had been driving slowly, we wouldn't have caused the accident. <br/>(Nếu như chúng ta lai xe chậm hơn thì đã không xảy ra tai nạn rồi).</p></td>
            <td><p class="font-bold color-dard-puple">If + S + had + PII, S + would/could + have + been + V-ing</p>
            <p  class="mt-3 mb-5 ">If it hadn't rained, we would have been having a picnic. <br/>(Nếu trời không mưa thì chúng ta đã có chuyến dã ngoại rồi).</p>
            <p class="font-bold color-dard-puple">If + S + had + PII, S + would/could + V-inf</p>
            <p class="mt-3 mb-5 ">If he hadn't smoked, he would be healthier. <br/>(Nếu như anh ấy không hút thuốc thì anh ấy đã khoẻ mạnh hơn rồi).</p>
            </td>
          </tr>
          <tr>
            <td colSpan={2}><p class="text-center font-bold ">Đảo ngữ câu điều kiện loại 3</p></td>
          </tr>
          <tr>
            <td><p  class="text-center font-bold ">Đảo ngữ với động từ to be</p></td>
            <td><p  class="text-center font-bold ">Đảo ngữ với động từ thường</p></td>
          </tr>
          <tr>
            <td class="align-top">
              <p class="font-bold color-dard-puple">Had + S + (not) + been +... + S + would/might/could + have + P2</p>
              <p class="pt-3 ">If you had <b>been</b> luckier, you could have won the jackpot. (Nếu bạn mà đã may mắn hơn thì bạn đã có thể trúng được giải độc đắc.)</p>
              <p class="pb-3">⟶<b>Had</b> you <b>been</b> luckier, you could have won the jackpot. </p>
            </td>
            <td class="align-top">
              <p class="font-bold color-dard-puple">Had + S + (not) + P2 +... + S + would/might/could + have + P2</p>
              <p class="pt-3 ">If you had found me, I would have given you the clue.</p>
              <p class="pb-3">⟶<b>Had</b> you <b>found</b> me, I would have given you the clue.</p>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
            <p class="text-center text-[1.4em] text-shadow-h1"><strong>Câu điều kiện hỗn hợp</strong></p>
              <p></p>
            </td>
          </tr>
          <tr>
            <td class="align-top"><p class="font-bold pb-5">Câu điều kiện hỗn hợp loại 1 (3-2):<br/>Diễn tả một giả thiết trái với quá khứ nhưng kết quả trái với hiện tại</p>
            <p class="font-bold color-dard-puple pb-5">If + Past perfect, S + would/could + infinitive.</p>
            <p>If Tom had prepared more carefully for the interview, he would become an employee of that company.</p>
            <p>⟶ Sự thật ở hiện tại là Tom đã không trở thành nhân viên của công ty đó. Cấu trúc câu điều kiện hỗn hợp loại 3-2 này đã đưa ra một giả định không có thật trong quá khứ. Thực chất, Tom không chuẩn bị kỹ lưỡng cho buổi phỏng vấn dẫn đến việc anh ta không được nhận vào công ty. </p>
            <p  class="font-bold pt-5 pb-5">Đảo ngữ câu điều kiện hỗn hợp loại 1: </p>
            <p class="font-bold color-dard-puple pb-5">Had + S + (not) + P2,  S + would/might/could + V</p>
            <p>If he had taken better care of himself, he wouldn't be sick now. </p>
            <p>⟶ Had he taken better care of himself, he wouldn't be sick now.</p>
            </td>
            <td class="align-top"><p class="font-bold pb-5">Câu điều kiện hỗn hợp loại 2 (2-3):<br/>Diễn tả một giải thiết trái với hiện tại nhưng kết quả thì trái với quá khứ</p>
            <p class="font-bold color-dard-puple pb-5">If + Past simple, S + would/could/might + have + V(p2) + O</p>
            <p>If she had known you were allergic to peanuts, she would have made a different dish. </p>
            <p>⟶ Sự thật ở hiện tại là cô ấy không biết bạn dị ứng với đậu phộng, thế nên cô ấy đã nấu món ăn có đậu phộng. Cấu trúc điều kiện hỗn hợp loại 2 đã thay đổi hành động, tức là nếu “cô ấy biết bạn mình dị ứng lạc” thì kết quả trong quá khứ cô ấy đã “làm một món ăn khác”. Những giả định này hoàn toàn không có thật.</p>
            <p class="font-bold pt-5 pb-5">Đảo ngữ câu điều kiện hỗn hợp loại 2:</p>
            <p class="font-bold color-dard-puple pb-5">Were + S + (not), S + would/might/could + have + P2.</p>
            <p>If I were you, I would not have told a lie </p>
            <p>⟶ Were I you, I would not have told a lie.</p>
            
            <p class="font-bold color-dard-puple pb-5 pt-5">Were + S + (not) to V,  S + would/might/could + have + P2.</p>
            <p>If I have a chance, I would have become a rock </p>
            <p>⟶ Were I to have a chance,  I would have become a rock.</p>
            </td>
          </tr>
          
          
          <tr>
            <td colSpan={2}>
            <p class="text-center text-[1.5em] text-shadow-h1"><b>Một số cụm từ có thể dùng để thay thế cho “if”</b></p>            
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
            <p class="text-[1.4em] text-shadow-h1"><b>1. Unless: nếu không</b></p>            
            <p class=" mt-3 mb-5 font-bold">Unless thường được dùng để thay thế cho cấu trúc “if… not” trong mệnh đề if. Unless có thể dùng cho tất cả các loại câu điều kiện</p>
            <ul class="compare-list">
              <li>
              <p class="font-bold color-dard-puple mb-5">Unless + S + V-s/es, S + will (not) + V-inf + O.= If + S + doesn't/don't + V, S + will (not) + V-inf + O.</p>
              </li>
              <li>
                <p class="font-bold color-dard-puple mb-5">Unless + S +Ved / V2 (simple past), S+ would + V</p>
              </li>
              <li><p class="font-bold color-dard-puple mb-5">Unless + S + had + Ved/V3 , S + would + have + Ved/V3</p></li>
            </ul>            
            <ul class="compare-list">
                <li class="list-style-dot">
                <p><span>Ice melts </span><b>if </b><span >you </span><b>don't </b><span >put it into a fridge. (</span><i><span >Đá sẽ tan nếu bạn không cho vào tủ lạnh</span></i><span >)</span></p>
                <p><span >⟶ Ice melts </span><u><b>unless </b></u><span >you put it into a fridge.</span></p>
                </li>
                <li class="list-style-dot"><p><span ><strong>If</strong> you <strong>didn't</strong> have to go to school, you could go to the zoo with us now. (</span><i><span >Nếu bạn không phải đến trường thì bây giờ bạn có thể đi sở thú với chúng tôi</span></i><span >)</span></p>
                <p><span >⟶ <strong>Unless</strong> you had to go to school, you could go to the zoo with us now.</span></p>
                </li>
            </ul>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
                <p class="text-[1.4em] text-shadow-h1"><b>2.  Suppose/ supposing: giả sử là</b></p>
                <p class="font-bold color-dard-puple mb-5 pt-5">SUPPOSE/ SUPPOSING + MỆNH ĐỀ</p>
                <ul class="compare-list">
                <li class="list-style-dot"><p>Supposing she doesn’t come, will the party go on? (Giả sử cô ấy không đến, liệu bữa tiệc có tiếp tục không?)</p></li>
                <li class="list-style-dot"><p>Supposing you win this competition, what will you do? (Giả sử nếu bạn thắng cuộc thi này, bạn sẽ làm gì?)</p></li>
                <li class="list-style-dot"><p>Supposing she is late?</p></li>
                </ul>

            </td>
          </tr>
          <tr><td colSpan={2}>
          <p class="text-[1.4em] text-shadow-h1"><b>3. Even if: ngay cả khi, cho dù</b></p>
          <p class="font-bold color-dard-puple mb-5 pt-5">EVEN IF + S + V, S + V</p>
          <ul class="compare-list">
            <li class="list-style-dot"><p>Even if she doesn’t come, the party will go on (Kể cả cô ấy không đến, bữa tiệc sẽ vẫn tiếp tục)</p></li>
            <li class="list-style-dot"><p>Even if she weren’t busy now, she wouldn’t go out with you. (Ngay cả khi cô ấy không bận bây giờ, cô ấy cũng không đi chơi với bạn đâu)</p></li>
          </ul>
          </td> </tr>
          <tr>
            <td colSpan={2}>
              <p class="text-[1.4em] text-shadow-h1 font-bold">4. As long as/ so long as/ provided (that)/ on condition (that): miễn là, với điều kiện là</p>
              <p>Các cụm từ này thường chỉ dùng trong câu điều kiện loại 0 và loại 1 trong tiếng Anh.</p>
              <p class="font-bold color-dard-puple mb-5 pt-5">S + V + AS LONG AS/ SO LONG AS + S + V</p>
              <ul class="compare-list">
                <li  class="list-style-dot"><p>I will lend you my car as long as you drive it carefully. (Tôi sẽ cho bạn mượn xe hơi của tôi miễn là bạn lái nó cẩn thận)</p></li>
                <li  class="list-style-dot"><p>Your children are allowed to enter this area so long as they keep quiet. (Những đứa trẻ được cho phép vào khu vực này với điều kiện là chúng giữ im lặng)</p></li>
              </ul>
            </td>
          </tr>          
          <tr>
            <td colSpan={2}>
              <p class="text-[1.4em] text-shadow-h1 font-bold">5. Without: nếu nhưng không có, nếu không vì</p>
              <p>Sử dụng trong trường hợp giả định kết quả sẽ thay đổi như thế nào nếu không có tình huống đó diễn ra</p>
              <p class="font-bold color-dard-puple mb-5 pt-5">Without + danh từ, S + V</p>
              <ul class="compare-list">
                <li class="list-style-dot"><p>Without his help, I wouldn’t have completed the plan. (Không có sự giúp đỡ của anh ấy, tôi đã không hoàn thành kế hoạch)</p></li>
              </ul>
              
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <p class="text-[1.4em] text-shadow-h1 font-bold">6. But for + N: nếu như</p>
              <p>Chỉ dùng trong câu điều kiện loại 2 và loại 3</p>
              <ul class="compare-list">
                <li><p class="font-bold color-dard-puple mb-5 pt-5">But for + N/V-ing, S + would/could/might/… + V (điều kiện loại 2)</p>
                <p></p></li>
                <li><p class="font-bold color-dard-puple mb-5">But for + N/V-ing, S + would/could/might/… + have PII (điều kiện loại 3)</p></li>
              </ul>
              <ul class="compare-list">
                <li class="list-style-dot"><p>But for so many deadlines, I could take you to the supermarket. (Nếu không có quá nhiều deadlines, tôi đã dẫn bạn đến siêu thị.)</p></li>
                <li class="list-style-dot"><p>But for my late arrival, I wouldn’t have missed the meeting = If I hadn’t arrived late, I wouldn’t have missed the meeting. (Nếu tôi không đến muộn thì tôi đã không lỡ cuộc họp.)</p></li>
              </ul>
              <p class="font-bold pt-5 pb-5">Cách viết lại câu với cấu trúc But for cho câu điều kiện:</p>
              <p class="font-bold pb-5">Cấu trúc But for có thể được thay bằng câu “if it weren’t for” hoặc “if it hadn’t been for” trong câu điều kiện mà vẫn giữ nguyên được nghĩa ban đầu.</p>
              <ul class="compare-list">
                <li class="list-style-dot"><p>If it weren’t for my lack of confidence, I could be promoted to business management.</p>
                <p>⟶ But for my lack of confidence, I could be offered the position I dreamt of. (Nếu không vì sự tự ti của tôi, tôi đã có thể nhận được thăng chức thành Quản lý Kinh doanh.)</p></li>
                <li class="list-style-dot"><p>If it hadn’t been for being advised by her mother, Tina could have missed this opportunity.</p>
                <p>⟶ But for her mother’s advice, Tina could have missed this opportunity. (Nếu không có lời khuyên của mẹ cô ấy, Tina đã có thể bỏ qua cơ hội này.)</p></li>
              </ul>
            </td>
          </tr>

        </tbody>
      </table>
    </div>
  );
};

export default Conditional;
