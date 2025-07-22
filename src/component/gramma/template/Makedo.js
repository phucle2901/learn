import React from "react";

const Makedo = () => {
  return (
    <div  style={{
        padding: "0.8em",
        border: "1px solid #ccc",
        borderRadius: "5px",
        background: "#fff9f9",
        marginBottom: "1em",
      }}>
      <h1 class="text-center text-[1.7em] mb-5 text-shadow-h1">
        <b>Cách dùng Make, Do, Have, Get</b>
      </h1>
      {/* <div class="content-compare mt-5" >
        <table class="table-type1">
          <thead>
            <tr>
              <th class="text-shadow-h1 text-[1.5em]">Make</th>
              <th class="text-shadow-h1 text-[1.5em]">Do</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-[#f9caf2]">
              
              <td  width={"50%"}> 
              <ul class="compare-list">
              <li ><b>Make dùng cho hành động sáng tạo, sản xuất, liên quan chặt chẽ đến các lĩnh vực nấu ăn, làm bánh và công việc gia đình</b>
              <br/><i>John makes coffee for his wife every morning. <br/>(John pha cà phê cho vợ mỗi sáng)</i></li>
              <li ><b>Diễn tả kế hoạch, cơ chế hay quyết định</b>
              <br/><i>We are making plans for our wedding.(Chúng tôi đang lập kế hoạch cho lễ cưới)</i></li>
              <li ><b>Đề cập đến lời nói, âm thanh và mối quan hệ</b>
              <br/>Laura made a promise to her grandmother. <br/>(Laura đã hứa với bà ngoại)</li>
              <li ><b>Đề cập việc gây ra ra hành động hoặc phản ứng</b>
              <br/>My manager made me do it!  (Quản lý của tôi bắt tôi làm vậy)</li>
              <li ><b>Đề cập đến hành động tạo ra tiền bạc</b>
              <br/><i>My brother makes more money than I do. <br/>(Anh trai tôi kiếm được nhiều tiền hơn tôi)</i></li>
              </ul>

              </td>
              <td  width={"50%"}>
              <ul class="compare-list">
              <li ><b>Đề cập việc thực hiện công việc hằng ngày, mang tính bắt buộc hoặc lặp đi lặp lại, nhưng không tạo ra các sản phẩm hữu hình</b>
              
              <br/>I try to do housework every day. <br/>(Tôi cố gắng làm việc nhà mỗi ngày)</li>
              <li ><b>Dùng trong các câu hỏi về hoạt động hàng ngày</b>
              <br/>What will you do today? (Bạn sẽ làm gì hôm nay?)</li>
              <li ><b>Dùng kết hợp với các đại từ không xác định như "nothing", "something", "anything" để nói chung về các hành động chung, không cụ thể</b>
              <br/>I did nothing yesterday. <br/>(Tôi đã không làm gì cả ngày hôm qua)</li>
              <li ><b>Dùng để chỉ hành động tốt hay xấu</b>
              <br/>I did well in my IELTS exams. <br/>(Tôi đã làm tốt bài thi IELTS của mình)</li>            
              </ul>
              </td>
            </tr>
            
          </tbody>
        </table>
        </div>
        <div class="content-compare mt-5">
        <table class="table-type1">
          <thead>
            <tr>
              <th class="text-shadow-h1 text-[1.5em]">Get</th>
              <th class="text-shadow-h1 text-[1.5em]">Have</th>
            </tr>
          </thead>
          <tbody>
          <tr>
              
              <td width={"50%"}>
              <ul class="compare-list">
              <li><b>Nhận được hoặc sở hữu một cái gì đó hoặc tận hưởng một cái gì đó, để có được hoặc có được một cái gì đó</b><br/>I got many presents on my birthday.  (Tôi đã nhận được rất nhiều quà vào ngày sinh nhật của mình)</li>
              <li><b>Đề cập đến hành động lấy thứ gì đó, khiến điều gì đó xảy ra</b><br/>Did you get the BlackPink concert tickets? (Bạn đã nhận được vé concert của BlackPink chưa)</li>
              <li><b>Hành động ra lệnh cho ai làm điều gì đó</b><br/>Get Jim to see me immediately! (Hãy gọi Jim đến gặp tôi ngay lập tức)</li>
              <li><b>Diễn tả cảm giác hoặc cảm xúc</b><br/>I get hurt when you insult me. <br/>(Tôi bị tổn thương khi bạn xúc phạm tôi)</li>
              </ul>
              </td>
              <td width={"50%"}>
              <ul class="compare-list">
              <li><b>Chỉ sự sở hữu</b><br/>She has three children. <br/>(Cô ấy có ba đứa con.)</li>
              <li><b>Nói về trải nghiệm</b><br/>We had a great time at the party. <br/>(Chúng tôi đã có khoảng thời gian tuyệt vời tại bữa tiệc.)</li>
              <li><b>Hành động ra lệnh cho ai đó làm điều gì đó. <br/>(giống với Get)</b><br/>I had my assistant book the flight tickets. <br/>(Tôi đã yêu cầu trợ lý đặt vé máy bay.)</li>
              
              </ul>
              </td>
            </tr>
           
          </tbody>
          </table>
      </div>
      <div class="content-compare mt-5">
      <table class="table-type1"  width={"100%"}>
      <thead>
            <tr>
              <th class="text-shadow-h1 text-[1.5em]">Take</th>              
            </tr>
          </thead>
          <tbody>
          <tr>
            <td  width={"100%"}>
            <ul class="compare-list">
            <li><b>Mang đi, cầm đi, dẫn đi: Lấy hoặc mang một thứ gì đó từ một nơi và đưa đến nơi khác.</b><br/>Take this book to your room. <br/>(Mang cuốn sách này về phòng của bạn.)</li>
            <li><b>Nhận, chấp nhận: Đồng ý nhận hoặc chấp nhận một thứ gì đó.</b><br/>Will you take this job? (Bạn sẽ nhận công việc này chứ?)</li>
            <li><b>Nắm giữ, kiểm soát: Nắm giữ quyền lực hoặc kiểm soát một thứ gì đó.</b><br/>The rebels have taken control of the city. <br/>(Quân nổi loạn đã chiếm quyền kiểm soát thành phố.)</li>
            <li><b>Dùng (thuốc, đồ uống, thức ăn): Dùng, tiêu thụ thức ăn, đồ uống hoặc thuốc.</b><br/>Take your medicine three times a day. <br/>(Uống thuốc ba lần mỗi ngày.)</li>
            <li><b>Chụp ảnh, quay phim: Ghi lại hình ảnh hoặc video.</b><br/>She took a photo of the sunset. <br/>(Cô ấy đã chụp một bức ảnh mặt trời lặn.)</li>
            <li><b>Chấp nhận lời khuyên hoặc đề xuất: Nghe và làm theo lời khuyên, ý kiến hoặc chỉ dẫn.</b><br/>He took my advice and bought a new car. <br/>(Anh ấy đã nghe theo lời khuyên của tôi và mua một chiếc xe mới.)</li>
            <li><b>Chịu trách nhiệm, đảm nhận công việc: Nhận trách nhiệm thực hiện một công việc.</b><br/>She took over the project from her colleague. <br/>(Cô ấy tiếp quản dự án từ đồng nghiệp.)</li>
            <li><b>Diễn ra hoặc xảy ra: Nói về việc gì đó được tổ chức hoặc xảy ra.</b><br/>The meeting will take place at 3 PM. <br/>(Cuộc họp sẽ diễn ra vào 3 giờ chiều.)</li>
            <li><b>Đưa đi khám: Đưa ai đó đi khám bác sĩ hoặc bệnh viện.</b><br/>I need to take the cat to the vet. <br/>(Tôi cần đưa mèo đến bác sĩ thú y.)</li>
            <li><b>Chịu đựng: Chấp nhận hoặc chịu đựng điều gì đó không dễ chịu.</b><br/>She couldn't take the stress any longer. <br/>(Cô ấy không thể chịu đựng căng thẳng thêm được nữa.)</li>
            

            </ul> 
            </td>
          </tr>
          </tbody>
      </table>
      </div>*/}
      <div class=" mt-5 ">
        <p class="text-shadow-h1 text-[1.5em] "><b>Cụm từ đi với Make</b></p>
        <p  class=" mb-5 ">👉 Dùng khi tạo ra thứ gì đó, ra quyết định, lên kế hoạch, gây ảnh hưởng đến người khác (tích cực hoặc tiêu cực).</p>
<div>
<table class="table table-bordered table-hover">
        <tbody>
          <tr class="bg-[#d0f5ce]">
            <td >
              <p>
                <strong>
                  <span>Collocations</span>
                </strong>
              </p>
            </td>
            <td >
              <p>
                <strong>
                  <span>Ý nghĩa</span>
                </strong>
              </p>
            </td>
            <td >
              <p>
                <strong>
                  <span>Ví dụ</span>
                </strong>
              </p>
            </td>
          </tr>
          <tr>
            <td >
              <p>
                <strong>
                  <span>make a decision</span>
                </strong>
              </p>
            </td>
            <td >
              <p>
                <span>đưa ra quyết định</span>
              </p>
            </td>
            <td >
              <p>
                <span>
                It’s the boss who made the decision, not me.
                </span>
              </p>
            </td>
          </tr>
          <tr>
            <td >
              <p>
                <strong>
                  <span>make an excuse</span>
                </strong>
              </p>
            </td>
            <td >
              <p>
                <span>ngụy biện, biện hộ</span>
              </p>
            </td>
            <td >
              <p>
                <span>
                She went to work late and made an excuse about the train’s late.
                </span>
              </p>
            </td>
          </tr>

          <tr>
            <td >
              <p>
                <strong>
                  <span>make a cake</span>
                </strong>
              </p>
            </td>
            <td >
              <p>
                <span>làm bánh</span>
              </p>
            </td>
            <td >
              <p>
                <span>
                  I'll make a cake for his birthday. <br/>(Tôi sẽ làm bánh cho sinh
                  nhật của anh ấy.)
                </span>
              </p>
            </td>
          </tr>
          <tr>
            <td >
              <p>
                <strong>
                  <span>make coffee/tea</span>
                </strong>
              </p>
            </td>
            <td >
              <p>
                <span>pha cà phê/trà</span>
              </p>
            </td>
            <td >
              <p>
                <span>
                  Jade makes some coffee for her to be awake immediately. <br/>(Jade
                  pha một ít cà phê để cô ấy tỉnh táo ngay lập tức.)
                </span>
              </p>
            </td>
          </tr>
          <tr>
            <td >
              <p>
                <strong>
                  <span>make money</span>
                </strong>
              </p>
            </td>
            <td >
              <p>
                <span>kiếm tiền</span>
              </p>
            </td>
            <td >
              <p>
                <span>
                  It’s so difficult for us to make money. <br/>(Chúng tôi rất khó
                  kiếm tiền.)
                </span>
              </p>
            </td>
          </tr>
          <tr>
            <td >
              <p>
                <strong>
                  <span>make a profit</span>
                </strong>
              </p>
            </td>
            <td >
              <p>
                <span>kiếm lợi nhuận</span>
              </p>
            </td>
            <td >
              <p>
                <span>
                  Hanna made a big profit from selling flowers. <br/>(Hanna kiếm được
                  lợi nhuận lớn từ việc bán hoa.)
                </span>
              </p>
            </td>
          </tr>
          <tr>
            <td >
              <p>
                <strong>
                  <span>make a plan</span>
                </strong>
              </p>
            </td>
            <td >
              <p>
                <span>lên kế hoạch</span>
              </p>
            </td>
            <td >
              <p>
                <span>
                Let’s make a plan for the trip.
                </span>
              </p>
            </td>
          </tr>
          <tr>
            <td >
              <p>
                <strong>
                  <span>make a phone call</span>
                </strong>
              </p>
            </td>
            <td >
              <p>
                <span>gọi điện</span>
              </p>
            </td>
            <td >
              <p>
                <span>
                I need to make a phone call.
                </span>
              </p>
            </td>
          </tr>
          <tr>
            <td >
              <p>
                <strong>
                  <span>make a promise</span>
                </strong>
              </p>
            </td>
            <td >
              <p>
                <span>hứa</span>
              </p>
            </td>
            <td >
              <p>
                <span>
                She made a promise to help me.
                </span>
              </p>
            </td>
          </tr>
          <tr>
            <td >
              <p>
                <strong>
                  <span>make noise</span>
                </strong>
              </p>
            </td>
            <td >
              <p>
                <span>gây ồn</span>
              </p>
            </td>
            <td >
              <p>
                <span>
                Don’t make noise, the baby is sleeping.
                </span>
              </p>
            </td>
          </tr>
          <tr>
            <td ><p><strong><span>make a suggestion</span></strong></p></td>
            <td ><p><span>đưa ra gợi ý</span></p> </td>
            <td ><p> <span>Can I make a suggestion?</span></p></td>
          </tr>
          <tr>
            <td ><p><strong><span>make a difference</span></strong></p></td>
            <td ><p><span>tạo ra sự khác biệt</span></p> </td>
            <td ><p> <span>One person can make a difference.</span></p></td>
          </tr>
          <tr>
            <td ><p><strong><span>Make the bed</span></strong></p></td>
            <td ><p><span>dọn giường</span></p> </td>
            <td ><p> <span>I always make the bed after I wake up.</span></p></td>
          </tr>
          <tr>
            <td >
              <p>
                <strong>
                  <span>make a killing</span>
                </strong>
              </p>
            </td>
            <td >
              <p>
                <span>kiếm nhiều tiền một cách dễ dàng</span>
              </p>
            </td>
            <td >
              <p>
                <span>
                  He made a killing with the real estate business. <br/>(Anh ta kiếm
                  nhiều tiền từ kinh doanh bất động sản.)
                </span>
              </p>
            </td>
          </tr>
          <tr>
            <td >
              <p>
                <strong>
                  <span>make a payment</span>
                </strong>
              </p>
            </td>
            <td >
              <p>
                <span>thanh toán</span>
              </p>
            </td>
            <td >
              <p>
                <span>
                  I will make a payment after having dinner. <br/>(Tôi sẽ thanh toán
                  sau khi ăn tối.)
                </span>
              </p>
            </td>
          </tr>
          <tr>
            <td >
              <p>
                <strong>
                  <span>make a choice / choices</span>
                </strong>
              </p>
            </td>
            <td >
              <p>
                <span>lựa chọn</span>
              </p>
            </td>
            <td >
              <p>
                <span>
                  She has to make a choice between Plan A and Plan B. <br/>(Cô phải
                  lựa chọn giữa Kế hoạch A và Kế hoạch B.)
                </span>
              </p>
            </td>
          </tr>
          <tr>
            <td >
              <p>
                <strong>
                  <span>make a comment</span>
                </strong>
              </p>
            </td>
            <td >
              <p>
                <span>đưa ra bình luận</span>
              </p>
            </td>
            <td >
              <p>
                <span>
                  Would you like to make a comment on that project? <br/>(Bạn muốn
                  đưa ra nhận xét về dự án kia không?)
                </span>
              </p>
            </td>
          </tr>
          <tr>
            <td >
              <p>
                <strong>
                  <span>make a difference</span>
                </strong>
              </p>
            </td>
            <td >
              <p>
                <span>tạo ra khác biệt</span>
              </p>
            </td>
            <td >
              <p>
                <span>
                  He showed us how one person can make a difference. <br/>(Ông đã chỉ
                  ra rằng một người có thể tạo ra sự khác biệt như thế nào.)
                </span>
              </p>
            </td>
          </tr>
          <tr>
            <td >
              <p>
                <strong>
                  <span>make a deal with</span>
                </strong>
              </p>
            </td>
            <td >
              <p>
                <span>thỏa thuận với ai</span>
              </p>
            </td>
            <td >
              <p>
                <span>
                  She wants to make a deal with you to buy your phone. <br/>(Cô ấy
                  muốn thỏa thuận với bạn để mua điện thoại của bạn.)
                </span>
              </p>
            </td>
          </tr>
          <tr>
            <td >
              <p>
                <strong>
                  <span>make a commitment</span>
                </strong>
              </p>
            </td>
            <td >
              <p>
                <span>cam kết</span>
              </p>
            </td>
            <td >
              <p>
                <span>
                  She makes this commitment to keep her job. <br/>(Cô ấy thực hiện
                  cam kết này để giữ công việc của mình.)
                </span>
              </p>
            </td>
          </tr>
          <tr>
            <td >
              <p>
                <strong>
                  <span>make a complaint</span>
                </strong>
              </p>
            </td>
            <td >
              <p>
                <span>phàn nàn</span>
              </p>
            </td>
            <td >
              <p>
                <span>
                  That guest made a complaint about bad service. <br/>(Vị khách đó đã
                  phàn nàn về dịch vụ tệ.)
                </span>
              </p>
            </td>
          </tr>
          <tr>
            <td >
              <p>
                <strong>
                  <span>make a mistake / mistakes</span>
                </strong>
              </p>
            </td>
            <td >
              <p>
                <span>mắc lỗi, gây ra lỗi</span>
              </p>
            </td>
            <td >
              <p>
                <span>
                  If you make a mistake, you should fix it quickly. <br/>(Nếu mắc
                  lỗi, bạn nên sửa nó một cách nhanh chóng.)
                </span>
              </p>
            </td>
          </tr>
          <tr>
            <td >
              <p>
                <strong>
                  <span>make an effort to</span>
                </strong>
              </p>
            </td>
            <td >
              <p>
                <span>cố gắng để</span>
              </p>
            </td>
            <td >
              <p>
                <span>
                  He will make an effort to improve his English accent. <br/>(Anh ấy
                  sẽ cố gắng để cải thiện giọng tiếng Anh của anh ấy.)
                </span>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
        </div>
      </div> 

      <div class=" mt-5 ">
        <p class="text-shadow-h1 text-[1.5em] mb-3"><b>Cụm từ đi với Do</b></p>
        <p class=" mb-5 ">👉 Dùng để diễn tả hành động, công việc, nhiệm vụ, trách nhiệm.</p>
        <div>
        <table class="table table-bordered table-hover">
        <tbody>
          <tr class="bg-[#d0f5ce]">
            <td >
              <p>
                <strong>
                  <span>Collocations</span>
                </strong>
              </p>
            </td>
            <td >
              <p>
                <strong>
                  <span>Ý nghĩa</span>
                </strong>
              </p>
            </td>
            <td >
              <p>
                <strong>
                  <span>Ví dụ</span>
                </strong>
              </p>
            </td>
          </tr>
          <tr>
            <td >
              <p>
                <strong>
                  <span>do one’s best</span>
                </strong>
              </p>
            </td>
            <td >
              <p>
                <span>cố hết sức</span>
              </p>
            </td>
            <td >
              <p>
                <span>
                  Teacher encouraged her to do her best in the upcoming IELTS
                  exam. <br />
                  (Giáo viên khuyến khích cô cố gắng hết sức trong kỳ thi IELTS
                  sắp tới.)
                </span>
              </p>
            </td>
          </tr>
          <tr>
            <td >
              <p>
                <strong>
                  <span>do homework</span>
                </strong>
              </p>
            </td>
            <td >
              <p>
                <span>làm bài tập về nhà</span>
              </p>
            </td>
            <td >
              <p>
                <span>
                  Tom has to do his homework before he goes to school. <br />
                  (Tom phải làm bài tập về nhà trước khi đến trường.)
                </span>
              </p>
            </td>
          </tr>
          <tr>
          <td ><p><strong><span>do the housework</span></strong></p></td>
          <td ><p><span>làm việc nhà</span></p> </td>
          <td ><p> <span>She does the housework every weekend.</span></p></td>
          </tr>
          <tr>
          <td ><p><strong><span>do someone a favor</span></strong></p></td>
          <td ><p><span>giúp ai một việc</span></p> </td>
          <td ><p> <span>Can you do me a favor and pick me up?</span></p></td>
          </tr>
          <tr>
          <td ><p><strong><span>do your best</span></strong></p></td>
          <td ><p><span>cố gắng hết sức</span></p> </td>
          <td ><p> <span>Just do your best, and you’ll succeed.</span></p></td>
          </tr>
          <tr>
          <td ><p><strong><span>do the shopping</span></strong></p></td>
          <td ><p><span>đi mua sắm</span></p> </td>
          <td ><p> <span>I usually do the shopping on Sundays.</span></p></td>
          </tr>
          <tr>
          <td ><p><strong><span>do the dishes</span></strong></p></td>
          <td ><p><span>rửa bát</span></p> </td>
          <td ><p> <span>He never does the dishes.</span></p></td>
          </tr>
          <tr>
          <td ><p><strong><span>do damage</span></strong></p></td>
          <td ><p><span>gây thiệt hại</span></p> </td>
          <td ><p> <span>The storm did a lot of damage.</span></p></td>
          </tr>          
          <tr>
            <td >
              <p>
                <strong>
                  <span>do the cleaning</span>
                </strong>
              </p>
            </td>
            <td >
              <p>
                <span>dọn dẹp, lau chùi</span>
              </p>
            </td>
            <td >
              <p>
                <span>
                  It is your turn to do the cleaning room! (Đến lượt bạn dọn
                  phòng rồi đấy.)
                </span>
              </p>
            </td>
          </tr>
          <tr>
            <td >
              <p>
                <strong>
                  <span>do an experiment</span>
                </strong>
              </p>
            </td>
            <td >
              <p>
                <span>làm thí nghiệm</span>
              </p>
            </td>
            <td >
              <p>
                <span>
                  Matthew will do some experiments to observe the bacteria.<br/>
                  (Matthew sẽ thực hiện một số thí nghiệm để quan sát vi khuẩn.)
                </span>
              </p>
            </td>
          </tr>
          <tr>
            <td >
              <p>
                <strong>
                  <span>do research</span>
                </strong>
              </p>
            </td>
            <td >
              <p>
                <span>làm nghiên cứu</span>
              </p>
            </td>
            <td >
              <p>
                <span>
                  He stayed at the university all day to do research. <br />
                  (Anh ấy ở lại trường đại học cả ngày để nghiên cứu.)
                </span>
              </p>
            </td>
          </tr>
          <tr>
            <td >
              <p>
                <strong>
                  <span>do business</span>
                </strong>
              </p>
            </td>
            <td >
              <p>
                <span>làm kinh doanh</span>
              </p>
            </td>
            <td >
              <p>
                <span>
                  He does business with his old classmates. <br />
                  (Anh ấy làm ăn với bạn học cũ của mình.)
                </span>
              </p>
            </td>
          </tr>
          <tr>
            <td >
              <p>
                <strong>
                  <span>do a deal</span>
                </strong>
              </p>
            </td>
            <td >
              <p>
                <span>thỏa thuận</span>
              </p>
            </td>
            <td >
              <p>
                <span>
                  She’ll do a deal with you about this problem. <br />
                  (Cô ấy sẽ thỏa thuận với bạn về vấn đề này.)
                </span>
              </p>
            </td>
          </tr>
          <tr>
            <td >
              <p>
                <strong>
                  <span>do an assignment</span>
                </strong>
              </p>
            </td>
            <td >
              <p>
                <span>làm nhiệm vụ được phân công</span>
              </p>
            </td>
            <td >
              <p>
                <span>
                  He has to do a big assignment this month. <br />
                  (Anh ấy có một nhiệm vụ lớn phải làm trong tháng này.)
                </span>
              </p>
            </td>
          </tr>
          <tr>
            <td >
              <p>
                <strong>
                  <span>do a report</span>
                </strong>
              </p>
            </td>
            <td >
              <p>
                <span>làm báo cáo</span>
              </p>
            </td>
            <td >
              <p>
                <span>
                  She is going to do a report for her boss. <br />
                  (Cô ấy sẽ làm báo cáo cho sếp.)
                </span>
              </p>
            </td>
          </tr>
          <tr>
            <td >
              <p>
                <strong>
                  <span>do justice</span>
                </strong>
              </p>
            </td>
            <td >
              <p>
                <span>đối xử công bằng</span>
              </p>
            </td>
            <td >
              <p>
                <span>
                  My boss does justice with his subordinates. <br />
                  (Sếp của tôi đối xử công bằng với các cấp dưới của mình.)
                </span>
              </p>
            </td>
          </tr>
          <tr>
            <td >
              <p>
                <strong>
                  <span>do wonders</span>
                </strong>
              </p>
            </td>
            <td >
              <p>
                <span>có tác động tốt</span>
              </p>
            </td>
            <td >
              <p>
                <span>
                  Eating healthy foods can do wonders for our health. <br />
                  (Ăn thực phẩm lành mạnh có thể làm nên điều kỳ diệu cho sức
                  khỏe của chúng ta.)
                </span>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
        </div>
        </div>
        <div class=" mt-5 ">
        <p class="text-shadow-h1 text-[1.5em] mb-3"><b>Cụm từ đi với Have</b></p>
        <p class=" mb-5 ">👉 Dùng để diễn tả trải nghiệm, sở hữu, cảm xúc, các cuộc họp hoặc cuộc trò chuyện.</p>
        <div>
        <table class="table table-bordered table-hover">
        <tbody>
          <tr class="bg-[#d0f5ce]">
            <td>
              <p>
                <strong>
                  <span>Collocations</span>
                </strong>
              </p>
            </td>
            <td>
              <p>
                <strong>
                  <span>Ý nghĩa</span>
                </strong>
              </p>
            </td>
            <td>
              <p>
                <strong>
                  <span>Ví dụ</span>
                </strong>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <strong>
                  <span>have a chat</span>
                </strong>
              </p>
            </td>
            <td>
              <p>
                <span>trò chuyện (gần gũi)</span>
              </p>
            </td>
            <td>
              <p>
                <span>
                  They had a chat in the meeting room. <br/> (Họ đã trò chuyện trong
                  phòng họp.)
                </span>
              </p>
            </td>
          </tr>
          <tr>
          <td ><p><strong><span>have a good time</span></strong></p></td>
          <td ><p><span>có thời gian vui vẻ</span></p> </td>
          <td ><p> <span>We had a good time at the party.</span></p></td>
          </tr>
          <tr>
          <td ><p><strong><span>have a shower/bath</span></strong></p></td>
          <td ><p><span>tắm</span></p> </td>
          <td ><p> <span>He always has a shower in the morning.</span></p></td>
          </tr>
          <tr>
          <td ><p><strong><span>have a headache</span></strong></p></td>
          <td ><p><span>bị đau đầu</span></p> </td>
          <td ><p> <span>She has a headache, so she’s lying down.</span></p></td>
          </tr>
          <tr>
          <td ><p><strong><span>have an idea</span></strong></p></td>
          <td ><p><span>có ý tưởng</span></p> </td>
          <td ><p> <span>I have an idea for our project.</span></p></td>
          </tr>
          <tr>
          <td ><p><strong><span>have a baby</span></strong></p></td>
          <td ><p><span>sinh con</span></p> </td>
          <td ><p> <span>She had a baby last month.</span></p></td>
          </tr>
          <tr>
          <td ><p><strong><span>have a meeting</span></strong></p></td>
          <td ><p><span>có cuộc họp</span></p> </td>
          <td ><p> <span>We have a meeting at 9 a.m.</span></p></td>
          </tr>
          

          <tr>
            <td>
              <p>
                <strong>
                  <span>have a talk</span>
                </strong>
              </p>
            </td>
            <td>
              <p>
                <span>nói chuyện</span>
              </p>
            </td>
            <td>
              <p>
                <span>
                  She asked her husband to have a talk about his debt. <br/> (Cô yêu
                  cầu chồng phải nói chuyện về khoản nợ của mình.)
                </span>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <strong>
                  <span>have an interview</span>
                </strong>
              </p>
            </td>
            <td>
              <p>
                <span>có cuộc phỏng vấn</span>
              </p>
            </td>
            <td>
              <p>
                <span>
                  She had an interview for a job with the manager. <br/> (Cô ấy đã có
                  một cuộc phỏng vấn xin việc với người quản lý.)
                </span>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <strong>
                  <span>have an argument</span>
                </strong>
              </p>
            </td>
            <td>
              <p>
                <span>tranh cãi</span>
              </p>
            </td>
            <td>
              <p>
                <span>
                  The girls had an argument about what food to eat. <br/> (Các cô gái
                  đã tranh cãi về việc nên ăn gì.)
                </span>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <strong>
                  <span>have a rest</span>
                </strong>
              </p>
            </td>
            <td>
              <p>
                <span>nghỉ ngơi</span>
              </p>
            </td>
            <td>
              <p>
                <span>
                  Let’s have a rest and let me do it. <br/> (Hãy nghỉ ngơi và để tôi
                  làm việc đó.)
                </span>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <strong>
                  <span>have a break</span>
                </strong>
              </p>
            </td>
            <td>
              <p>
                <span>nghỉ giải lao</span>
              </p>
            </td>
            <td>
              <p>
                <span>
                  Have a break when you finish these tasks!<br/> (Hãy nghỉ ngơi khi
                  bạn hoàn thành những nhiệm vụ này.)
                </span>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <strong>
                  <span>have a snooze</span>
                </strong>
              </p>
            </td>
            <td>
              <p>
                <span>ngủ</span>
              </p>
            </td>
            <td>
              <p>
                <span>
                  We have a snooze after lunch. <br/> (Chúng tôi có một giấc ngủ ngắn
                  sau bữa trưa.)
                </span>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <strong>
                  <span>have a meal</span>
                </strong>
              </p>
            </td>
            <td>
              <p>
                <span>ăn</span>
              </p>
            </td>
            <td>
              <p>
                <span>
                  Would you like to have a meal with me tonight?<br/> (Bạn có muốn đi
                  ăn với tôi tối nay không?)
                </span>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <strong>
                  <span>have breakfast/lunch/dinner</span>
                </strong>
              </p>
            </td>
            <td>
              <p>
                <span>ăn sáng/trưa/tối</span>
              </p>
            </td>
            <td>
              <p>
                <span>
                  What time do you usually have dinner? (Bạn thường ăn tối lúc
                  mấy giờ?)
                </span>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <strong>
                  <span>have a cup of tea/coffee</span>
                </strong>
              </p>
            </td>
            <td>
              <p>
                <span>uống trà/cà phê</span>
              </p>
            </td>
            <td>
              <p>
                <span>
                  We should sit down and have a cup of coffee. <br/> (Chúng ta nên
                  ngồi xuống và uống một tách cà phê.)
                </span>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <strong>
                  <span>have a bite</span>
                </strong>
              </p>
            </td>
            <td>
              <p>
                <span>ăn</span>
              </p>
            </td>
            <td>
              <p>
                <span>
                  Do you want to have a bite of something sweet?<br/> (Bạn có muốn ăn
                  gì đó ngọt không?)
                </span>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <strong>
                  <span>have a diet</span>
                </strong>
              </p>
            </td>
            <td>
              <p>
                <span>ăn kiêng</span>
              </p>
            </td>
            <td>
              <p>
                <span>
                  I have a diet with vegetables and fruit. <br/> (Tôi có chế độ ăn
                  kiêng với rau và trái cây.)
                </span>
              </p>
            </td>
          </tr>
        </tbody>
      </table>

        </div>
        </div>
        <div class=" mt-5 ">
        <p class="text-shadow-h1 text-[1.5em] mb-3"><b>Cụm từ đi với Get</b></p>
        <p class=" mb-5 ">👉 Get thường mang nghĩa: nhận, trở nên, đến nơi, bị ảnh hưởng, làm cho ai đó làm gì... Tùy ngữ cảnh, get đi với danh từ hoặc tính từ sẽ tạo thành nhiều collocations thông dụng.</p>
        <p>✅ Một số nhóm nghĩa điển hình với "get":</p>
        <div class=" mb-5 ">
        <table class="table table-bordered table-hover"><thead><tr><th ><strong>Cấu trúc</strong></th><th ><strong>Ý nghĩa</strong></th><th ><strong>Ví dụ</strong></th></tr></thead><tbody><tr><td >get + danh từ</td><td >nhận, đạt được</td><td >get a chance, get a job, get a ticket</td></tr><tr><td >get + tính từ</td><td >trở nên</td><td >get tired, get angry, get sick</td></tr><tr><td >get to + nơi chốn</td><td >đến đâu đó</td><td >get to school, get to the airport</td></tr><tr><td >get + quá khứ phân từ</td><td >bị/làm gì đó (câu bị động)</td><td >get married, get hired, get paid</td></tr><tr><td >get someone to + V</td><td >khiến ai làm gì</td><td >I got him to fix the printer.</td></tr></tbody></table>
        </div>
        <div>
        <table class="table table-bordered table-hover">
        <tbody>
          <tr class="bg-[#d0f5ce]">
            <td>
              <p>
                <strong>
                  <span>Collocations</span>
                </strong>
              </p>
            </td>
            <td>
              <p>
                <strong>
                  <span>Ý nghĩa</span>
                </strong>
              </p>
            </td>
            <td>
              <p>
                <strong>
                  <span>Ví dụ (kèm dịch nghĩa)</span>
                </strong>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <strong>
                  <span>get a chance</span>
                </strong>
              </p>
            </td>
            <td>
              <p>
                <span>có cơ hội</span>
              </p>
            </td>
            <td>
              <p>
                <span>
                  Joining this club to get a chance to practice well. <br />{" "}
                  (Hãy tham gia câu lạc bộ này để có cơ hội luyện tập tốt.)
                </span>
              </p>
            </td>
          </tr>
          <tr>
  <td><p><strong><span>get married</span></strong></p></td>
  <td><p><span>kết hôn</span></p></td>
  <td><p><span>They got married in 2020.</span></p></td>
</tr>
<tr>
  <td><p><strong><span>get lost</span></strong></p></td>
  <td><p><span>bị lạc đường</span></p></td>
  <td><p><span>We got lost in the city center.</span></p></td>
</tr>
<tr>
  <td><p><strong><span>get ready</span></strong></p></td>
  <td><p><span>chuẩn bị sẵn sàng</span></p></td>
  <td><p><span>Hurry up and get ready for school.</span></p></td>
</tr>
<tr>
  <td><p><strong><span>get better</span></strong></p></td>
  <td><p><span>khá hơn, tốt lên (về sức khỏe, tình hình)</span></p></td>
  <td><p><span>I hope you get better soon.</span></p></td>
</tr>
<tr>
  <td><p><strong><span>get home</span></strong></p></td>
  <td><p><span>về đến nhà</span></p></td>
  <td><p><span>What time did you get home last night?</span></p></td>
</tr>
<tr>
  <td><p><strong><span>get dressed</span></strong></p></td>
  <td><p><span>mặc quần áo</span></p></td>
  <td><p><span>She quickly got dressed and left the house.</span></p></td>
</tr>
  <tr>
  <td><p><strong><span>get sick</span></strong></p></td>
  <td><p><span>bị ốm</span></p></td>
  <td><p><span>I got sick after eating street food.</span></p></td>
</tr>
<tr>
  <td><p><strong><span>get started</span></strong></p></td>
  <td><p><span>bắt đầu</span></p></td>
  <td><p><span>Let’s get started on the project now.</span></p></td>
</tr>   
          <tr>
            <td>
              <p>
                <strong>
                  <span>get fired</span>
                </strong>
              </p>
            </td>
            <td>
              <p>
                <span>bị sa thải</span>
              </p>
            </td>
            <td>
              <p>
                <span>
                  Smith got fired for a small mistake. <br /> (Smith bị sa thải
                  vì một lỗi nhỏ.)
                </span>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <strong>
                  <span>get a job</span>
                </strong>
              </p>
            </td>
            <td>
              <p>
                <span>kiếm được việc làm</span>
              </p>
            </td>
            <td>
              <p>
                <span>
                  He needs to get a job during this time. <br /> (Anh ấy cần
                  phải tìm việc làm trong thời gian này.)
                </span>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <strong>
                  <span>get into trouble</span>
                </strong>
              </p>
            </td>
            <td>
              <p>
                <span>gặp rắc rối</span>
              </p>
            </td>
            <td>
              <p>
                <span>
                  Even an experienced employee can get into trouble. <br />{" "}
                  (Ngay cả một nhân viên có kinh nghiệm cũng có thể gặp rắc
                  rối.)
                </span>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <strong>
                  <span>get permission</span>
                </strong>
              </p>
            </td>
            <td>
              <p>
                <span>được phép</span>
              </p>
            </td>
            <td>
              <p>
                <span>
                  Annie gets permission to post their pictures on social media.<br/>
                  (Annie được phép đăng ảnh của họ lên mạng xã hội.)
                </span>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <strong>
                  <span>get a shock</span>
                </strong>
              </p>
            </td>
            <td>
              <p>
                <span>bị sốc</span>
              </p>
            </td>
            <td>
              <p>
                <span>
                  He’ll get a shock when he gets this bill. <br /> (Anh ấy sẽ bị
                  sốc khi nhận được hóa đơn này.)
                </span>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <strong>
                  <span>get angry</span>
                </strong>
              </p>
            </td>
            <td>
              <p>
                <span>trở nên tức giận</span>
              </p>
            </td>
            <td>
              <p>
                <span>
                  She gets angry at me for making her wait so long. <br /> (Cô
                  ấy giận tôi vì đã bắt cô ấy phải đợi lâu như vậy.)
                </span>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <strong>
                  <span>get worried</span>
                </strong>
              </p>
            </td>
            <td>
              <p>
                <span>lo lắng</span>
              </p>
            </td>
            <td>
              <p>
                <span>
                  She started to get worried when her mother didn’t arrive home.<br/>
                  (Cô bắt đầu lo lắng khi mẹ cô không về nhà.)
                </span>
              </p>
            </td>
          </tr>
        </tbody>
      </table>

        </div>

        </div>
        <div class=" mt-5 ">
        <p class="text-shadow-h1 text-[1.5em] mb-3"><b>Cụm từ đi với Take</b></p>
        <p class=" mb-5 ">👉 Dùng khi lấy, mang, chấp nhận, sử dụng thời gian hoặc cơ hội.</p>
        <div>
        <table class="table table-bordered table-hover"><tbody><tr class="bg-[#d0f5ce]">
            <td>
              <p>
                <strong>
                  <span>Collocations</span>
                </strong>
              </p>
            </td>
            <td>
              <p>
                <strong>
                  <span>Ý nghĩa</span>
                </strong>
              </p>
            </td>
            <td>
              <p>
                <strong>
                  <span>Ví dụ (kèm dịch nghĩa)</span>
                </strong>
              </p>
            </td>
          </tr>
          <tr>
  <td><p><strong><span>take a break</span></strong></p></td>
  <td><p><span>nghỉ giải lao</span></p></td>
  <td><p><span>Let’s take a break after the meeting.</span></p></td>
</tr>
<tr>
  <td><p><strong><span>take notes</span></strong></p></td>
  <td><p><span>ghi chú</span></p></td>
  <td><p><span>Students should take notes during lectures.</span></p></td>
</tr>
<tr>
  <td><p><strong><span>take care of</span></strong></p></td>
  <td><p><span>chăm sóc</span></p></td>
  <td><p><span>She takes care of her grandmother.</span></p></td>
</tr>
<tr>
  <td><p><strong><span>take responsibility</span></strong></p></td>
  <td><p><span>chịu trách nhiệm</span></p></td>
  <td><p><span>You must take responsibility for your actions.</span></p></td>
</tr>
<tr>
  <td><p><strong><span>take medicine</span></strong></p></td>
  <td><p><span>uống thuốc</span></p></td>
  <td><p><span>He took his medicine after lunch.</span></p></td>
</tr>
<tr>
  <td><p><strong><span>take a nap</span></strong></p></td>
  <td><p><span>chợp mắt</span></p></td>
  <td><p><span>I’m going to take a nap.</span></p></td>
</tr>

          <tr><td>take a trip</td><td>đi du ngoạn/ du lịch</td><td>We might hire a car and <em>take a trip</em> around the suburb.</td></tr><tr><td>take a taxi</td><td>đón xe taxi</td><td> Please check the fee carefully every time you <em>take a taxi</em>.</td></tr><tr><td>take a seat</td><td>ngồi</td><td>Everyone, let’s <em>take a seat</em> and have yourself some snack.</td></tr><tr><td>take a risk</td><td>mạo hiểm</td><td>Chan <em>took a risk</em> and invested $10.000 in that building.</td></tr><tr><td>take action</td><td>hành động</td><td>&nbsp;It’s never too late to&nbsp;<em>take action</em>&nbsp;to protect the environment.</td></tr><tr><td>take advantage of</td><td>lợi dụng</td><td>He <em>took advantage</em> of her good nature.</td></tr><tr><td>take a photo</td><td>chụp ảnh</td><td>We <em>took a bunch of photos</em> while travelling.</td></tr></tbody></table>

</div>

</div>
<div class=" mt-5 ">
<p class="text-shadow-h1 text-[1.5em] mb-3"><b>Cụm từ đi với Keep</b></p>
<p class=" mb-5 ">👉 Keep thường mang nghĩa duy trì, giữ gìn, tiếp tục làm gì đó.</p>
<div>
<table class="table table-bordered table-hover">
<tbody>
<tr><td>
              <p>
                <strong>
                  <span>Collocations</span>
                </strong>
              </p>
            </td>
            <td>
              <p>
                <strong>
                  <span>Ý nghĩa</span>
                </strong>
              </p>
            </td>
            <td>
              <p>
                <strong>
                  <span>Ví dụ (kèm dịch nghĩa)</span>
                </strong>
              </p>
            </td>
          </tr>
          <tr>
  <td><p><strong><span>keep a promise</span></strong></p></td>
  <td><p><span>giữ lời hứa</span></p></td>
  <td><p><span>You should always keep your promises.</span></p></td>
</tr>
<tr>
  <td><p><strong><span>keep calm</span></strong></p></td>
  <td><p><span>giữ bình tĩnh</span></p></td>
  <td><p><span>Try to keep calm in stressful situations.</span></p></td>
</tr>
<tr>
  <td><p><strong><span>keep a secret</span></strong></p></td>
  <td><p><span>giữ bí mật</span></p></td>
  <td><p><span>Can you keep a secret?</span></p></td>
</tr>
<tr>
  <td><p><strong><span>keep in touch</span></strong></p></td>
  <td><p><span>giữ liên lạc</span></p></td>
  <td><p><span>Let’s keep in touch after graduation.</span></p></td>
</tr>
<tr>
  <td><p><strong><span>keep an eye on</span></strong></p></td>
  <td><p><span>trông chừng</span></p></td>
  <td><p><span>Please keep an eye on my bag.</span></p></td>
</tr>
<tr>
  <td><p><strong><span>keep quiet</span></strong></p></td>
  <td><p><span>giữ im lặng</span></p></td>
  <td><p><span>Please keep quiet during the exam.</span></p></td>
</tr>
<tr>
  <td><p><strong><span>keep going</span></strong></p></td>
  <td><p><span>tiếp tục cố gắng</span></p></td>
  <td><p><span>No matter what happens, just keep going.</span></p></td>
</tr>
<tr>
  <td><p><strong><span>keep someone waiting</span></strong></p></td>
  <td><p><span>bắt ai đó đợi</span></p></td>
  <td><p><span>Sorry to keep you waiting.</span></p></td>
</tr>
<tr>
  <td><p><strong><span>keep the change</span></strong></p></td>
  <td><p><span>khỏi trả lại tiền thừaHere’s $10. Keep the change.</span></p></td>
  <td><p><span>Here’s $10. Keep the change.</span></p></td>
</tr>
<tr>
  <td><p><strong><span>keep a diary</span></strong></p></td>
  <td><p><span>viết nhật ký</span></p></td>
  <td><p><span>She keeps a diary of her daily life.</span></p></td>
</tr>


</tbody>
</table>
</div>
</div>
<div class=" mt-5 ">
<p class="text-shadow-h1 text-[1.5em] mb-3"><b>Cụm từ đi với Let</b></p>
<p class=" mb-5 ">👉 Let thường được dùng để cho phép, để ai đó làm gì, hoặc để điều gì xảy ra. Sau let là bare infinitive (động từ nguyên mẫu không "to").</p>
<div>
<table class="table table-bordered table-hover">
<tbody>
<tr><td>
              <p>
                <strong>
                  <span>Collocations</span>
                </strong>
              </p>
            </td>
            <td>
              <p>
                <strong>
                  <span>Ý nghĩa</span>
                </strong>
              </p>
            </td>
            <td>
              <p>
                <strong>
                  <span>Ví dụ (kèm dịch nghĩa)</span>
                </strong>
              </p>
            </td>
          </tr>
          <tr>
  <td><p><strong><span>let someone go</span></strong></p></td>
  <td><p><span>cho ai đi / sa thải</span></p></td>
  <td><p><span>The company had to let 10 workers go.</span></p></td>
</tr>
<tr>
  <td><p><strong><span>let someone know</span></strong></p></td>
  <td><p><span>cho ai biết</span></p></td>
  <td><p><span>Please let me know your decision.</span></p></td>
</tr>
<tr>
  <td><p><strong><span>let someone in</span></strong></p></td>
  <td><p><span>cho ai vào</span></p></td>
  <td><p><span>He opened the door to let me in.</span></p></td>
</tr>
<tr>
  <td><p><strong><span>let it go</span></strong></p></td>
  <td><p><span>bỏ qua, buông bỏ</span></p></td>
  <td><p><span>Don’t be angry. Just let it go.</span></p></td>
</tr>
<tr>
  <td><p><strong><span>let someone down</span></strong></p></td>
  <td><p><span>làm ai thất vọng</span></p></td>
  <td><p><span>Please don’t let me down again.</span></p></td>
</tr>

<tr>
  <td><p><strong><span>let it be</span></strong></p></td>
  <td><p><span>cứ để vậy</span></p></td>
  <td><p><span>Just let it be, don’t interfere.</span></p></td>
</tr>
<tr>
  <td><p><strong><span>let someone borrow</span></strong></p></td>
  <td><p><span>cho ai mượn</span></p></td>
  <td><p><span>She let me borrow her book.</span></p></td>
</tr>
<tr>
  <td><p><strong><span>let someone sleep</span></strong></p></td>
  <td><p><span>để ai ngủ</span></p></td>
  <td><p><span>Don’t wake him up. Let him sleep.</span></p></td>
</tr>

</tbody>
</table>
</div>
</div>
    </div>
  );
};

export default Makedo;
