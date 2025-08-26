import React from 'react';

const Tagquestion = () => {
    return (
        <div style={{
            padding: "0.8em",
            border: "1px solid #ccc",
            borderRadius: "5px",
            background: "#fff9f9",
            marginBottom: "1em",
          }}>
        <h1 class="text-center text-[1.7em] mb-5 text-shadow-h1">
        <b>Câu hỏi đuôi</b>
      </h1>
      
      <table width={"100%"} class="table-col ">
      <tbody>
        <tr>
            <td colSpan={3}>
            <p class="font-bold pt-3 pb-3">Câu hỏi đuôi (Tag question) là một dạng về câu hỏi Yes/No, được đặt cuối câu và ngăn cách với mệnh đề phía trước bằng dấu phẩy. </p>
            <ul class="compare-list font-bold">
                <li>Chủ ngữ trong câu chính và câu hỏi đuôi phải giống nhau</li>
                <li>Trợ động từ trong câu hỏi đuôi phải theo đúng thì của câu chính</li>
            </ul>
            </td>
        </tr>
        <tr>
            <td colSpan={3}>
            <p class="text-center text-[1.4em] text-shadow-h1 font-bold">Công thức câu hỏi đuôi (Tag question)</p>
            </td>
        </tr>
        <tr>
            <td width={"25%"}><p class="text-center font-bold">Mệnh đề chính</p></td>
            <td width={"35%"}><p class="text-center font-bold">Mệnh đề phụ</p></td>
            <td width={"40%"}><p class="text-center font-bold">Ví dụ</p></td>
        </tr>
        <tr>
            <td><p>Thể khẳng định</p>
            <p class="font-bold color-dard-puple">S + Trợ động từ/to be + V</p></td>
            <td><p>Thể phủ định</p>
            <p class="font-bold color-dard-puple">Trợ động từ/to be + not + S?</p></td>
            <td><p>He has worked for this company for 2 years, hasn't he? (Anh ấy đã làm việc cho công ty ấy 2 năm rồi, đúng chứ?)</p></td>
        </tr>
        <tr>
            <td><p>Thể phủ định</p>
            <p class="font-bold color-dard-puple">S + Trợ động từ/to be (not) V</p></td>
            <td><p>Thể khẳng định</p>
            <p class="font-bold color-dard-puple">trợ động từ/to be + S?</p></td>
            <td><p>You are not going to the library, are you? (Cậu sẽ không đến thư viện đâu nhỉ?)</p></td>
        </tr>
        <tr><td colSpan={3}><p class="text-center text-[1.4em] text-shadow-h1 font-bold">Công thức câu hỏi đuôi theo từng thì trong tiếng Anh</p></td></tr>
        <tr>
            <td class="text-center font-bold">Thì trong tiếng Anh</td>
            <td class="text-center font-bold">Công thức</td>
            <td class="text-center font-bold">Ví dụ</td>
        </tr>
        <tr>
            <td>
            Thì hiện tại đơn <br/>(Present Simple)</td>
            <td class="font-bold color-dard-puple">S + V + (O), do/does/am/is/are + not + S?</td>
            <td>He plays football, doesn't he?</td>
        </tr>
        <tr>
            <td>Thì hiện tại tiếp diễn <br/>(Present Continuous)</td>
            <td class="font-bold color-dard-puple">S + tobe + V_ing + (O), tobe + not + S?</td>
            <td>We're going shopping, aren't we? <br/>(Chúng ta đang đi mua sắm phải không?)</td>
        </tr>
        <tr>
            <td>Thì hiện tại hoàn thành <br/>(Present Perfect)</td>
            <td class="font-bold color-dard-puple">S + have/has + V_3/ed + (O), have/has + not + S?</td>
            <td>You've finished your final exam, haven't you? <br/>(Bạn đã làm xong bài kiểm tra cuối kỳ rồi phải không?)</td>
        </tr>
        <tr>
            <td>Thì hiện tại hoàn thành tiếp diễn<br/> (Present Perfect Continuous)</td>
            <td class="font-bold color-dard-puple">S + have/has + been + V_ing + (O), have/has + not + S?</td>
            <td>He has been working very hard this month, hasn't he? <br/>(Tháng này anh ấy đã làm việc rất chăm chỉ phải không?)</td>
        </tr>
        <tr>
            <td>Thì quá khứ đơn (Past Simple)</td>
            <td class="font-bold color-dard-puple">S + V2/ed + (O), did/was/were + not + S?</td>
            <td>She went to the supermarket, didn't she? <br/>(Cô ấy đã đi siêu thị phải không?)</td>
        </tr>
        <tr>
            <td>Thì quá khứ tiếp diễn <br/>(Past Continuous)</td>
            <td class="font-bold color-dard-puple">S + was/were + V_ing + (O), was/were + not + S?</td>
            <td>They were working the night shift, weren't they? <br/>(Họ làm việc ca đêm phải không?)</td>
        </tr>
        <tr>
            <td>Thì quá khứ hoàn thành <br/>(Past Perfect)</td>
            <td class="font-bold color-dard-puple">S + had + V3/ed + (O), had + not + S?</td>
            <td>The meeting had ended before you came, hadn't it? <br/>(Buổi họp đã kết thúc trước khi bạn tới đúng không?)</td>
        </tr>
        <tr>
            <td>Thì quá khứ hoàn thành tiếp diễn <br/>(Past Perfect Continuous)</td>
            <td class="font-bold color-dard-puple">S + had + been + V_ing + (O), had + not + S?</td>
            <td>He had been working overtime last month, hadn't he? <br/>(Tháng trước anh ấy đã làm việc ngoài giờ phải không?)</td>
        </tr>
        <tr>
            <td>Thì tương lai đơn<br/> (Past Simple)</td>
            <td class="font-bold color-dard-puple">S + will + V + (O), will + not + S?</td>
            <td>My parents will be happy if I come home this Tet Holiday, won't they? <br/>(Ba mẹ tôi sẽ vui khi tôi về nhà dịp Tết này đúng không?)</td>
        </tr>
        <tr>
            <td>Thì tương lai tiếp diễn <br/>(Past Continuous)</td>
            <td class="font-bold color-dard-puple">S + will + be + V_ing + (O), will + not + S?</td>
            <td>They will be going to work overtime tonight, won't they? <br/>(Tối nay họ sẽ làm thêm giờ phải không?)</td>
        </tr>
        <tr>
            <td>Thì tương lai hoàn thành <br/>(Past Perfect)</td>
            <td class="font-bold color-dard-puple">S + will + have + V3/ed + (O), will + not + S?</td>
            <td>He will have learned a lot, won't he? <br/>(Anh ấy sẽ học được rất nhiều phải không?)</td>
        </tr>
        <tr>
            <td>Thì tương lai hoàn thành tiếp diễn <br/>(Past Perfect Continuous)</td>
            <td class="font-bold color-dard-puple">S + will + have + been + V_ing + (O), will + not + S?</td>
            <td>When we arrive there, they will have been discussing for hours, won't they?<br/> (Khi chúng ta tới được đó, họ sẽ thảo luận liên tục được vài tiếng rồi đúng không?)</td>
        </tr>
        <tr><td colSpan={3} class="text-center text-[1.4em] text-shadow-h1 font-bold">Cách trả lời câu hỏi đuôi</td></tr>
        <tr>
            <td colSpan={3}>
                <ul class="compare-list">
                    <li><p class=" font-bold">Nếu câu hỏi đuôi dùng với mục đích để lấy thông tin, bạn cần lên giọng ở cuối câu và trả lời Yes/No tương tự như câu nghi vấn thông thường nhưng đi kèm với mệnh đề chứa thông tin.</p>
                    <p class="pt-3">He doesn't play tennis, does he? (Anh ấy không chơi tennis, đúng không?)</p>
                    
                    <p>⟶ Yes, he plays pickleball.</p>
                    <p>⟶ No, he doesn't play pickleball.</p>
                    </li>
                    <li><p class=" font-bold">Nếu câu hỏi đuôi dùng với mục đích để xác nhận thông tin, bạn không cần lên giọng ở cuối câu, chỉ cần trả lời Yes/No tương ứng với mệnh đề chính. </p>
                    <p class="pt-3">They are studying now, aren't they? (Họ đang học bây giờ, phải không?)</p>
                    <p>⟶ Yes, they are.</p>
                    <p>⟶ No, they aren't.</p>
                    </li>
                </ul>
            </td>            
        </tr>
        <tr><td colSpan={3} class="text-center text-[1.4em] text-shadow-h1 font-bold">Một số trường hợp câu hỏi đuôi đặc biệt</td></tr>
        <tr><td colSpan={3}>
           
                <p class="font-bold">Câu hỏi đuôi của “Let”</p>
                <ul class="compare-list">
                    <li class="list-style-dot"><p class="font-bold color-dard-puple pb-2">Let sử dụng trong câu rủ rê → Câu hỏi đuôi dùng Shall we</p>
                    <p>Let's go to the movies, shall we? (Chúng ta đi xem phim nhé?)</p></li>
                    <li class="list-style-dot"><p class="font-bold color-dard-puple pb-2">Let sử dụng trong câu xin phép → Câu hỏi đuôi dùng Will you</p>
                    <p>Let us use the laptop, will you? (Chúng tôi dùng máy tính được chứ?)</p></li>
                    <li class="list-style-dot"><p class="font-bold color-dard-puple pb-2">Let sử dụng trong đề nghị giúp đỡ → Câu hỏi đuôi dùng May I</p>
                    <p>Let me carry this bag for you, may I? (Để tôi xách cái túi này cho bạn nhé?)</p></li>
                </ul>
               
        </td></tr>
        <tr><td colSpan={3}><p class="font-bold pb-2">Câu hỏi đuôi Have to</p>
                <p class="font-bold pb-2 color-dard-puple">Động từ khuyết thiếu “have/has/had to” ⟶ Dùng trợ động từ “do/does/did” trong câu hỏi đuôi.</p>
                <p class="pb-5">They have to go now, don't they? (Họ phải đi ngay bây giờ đúng không?)</p></td></tr>
        <tr><td colSpan={3}><p class="font-bold ">Câu hỏi đuôi của “I am …”</p>
                    <ul class="compare-list pb-5">
                        <li class="list-style-dot"><p  class="font-bold color-dard-puple pb-2">Câu hỏi đuôi khẳng định dùng “am”</p><p>I am not your partner, am I? (Mình không phải cộng sự của cậu đúng không?)</p></li>
                        <li class="list-style-dot"><p  class="font-bold color-dard-puple pb-2">Câu hỏi phủ định dùng “aren't”</p><p>I'm the leader of this team, aren't I? (Tôi là đội trưởng của đội này đúng chứ?)</p></li>
                    </ul></td></tr>
        <tr><td colSpan={3}><p class="font-bold ">Câu hỏi đuôi của các đại từ bất định chỉ người</p>
                <p  class="font-bold pt-2 color-dard-puple">Khi chủ ngữ của trong mệnh đề trần thuật là một trong các đại từ bất định chỉ người: <span class="color-dard-puple">Anyone, anybody, no one, nobody, someone, somebody, everyone, everybody, none of, neither of</span>. ⟶ Chủ ngữ trong câu hỏi đuôi là <span class="color-dard-puple">“They”</span>.</p>
                <p class="pt-3">Somebody has just been here, haven't they? (Có ai đó vừa mới ở đây đúng không?)</p>
                <p class="pb-5">No one in this call is taller than Ryou, are they? (Không ai trong lớp này cao bằng Ryou đúng không?)</p></td></tr>
        <tr><td colSpan={3}><p class="font-bold ">Câu hỏi đuôi của các đại từ bất định chỉ vật</p>
                    <p class="font-bold pt-2 color-dard-puple" >Khi chủ ngữ của trong mệnh đề trần thuật là một trong các đại từ bất định chỉ vật: <span class="color-dard-puple">Nothing, anything, something, everything, that, this</span>. ⟶ Chủ ngữ trong câu hỏi đuôi là <span class="color-dard-puple">“It”</span>.</p>
                    <p class="pt-3 pb-5">Something is burning, isn't it? (Có cái gì đó đang cháy phải không?)</p></td></tr>
        <tr><td colSpan={3}>
            <p class="font-bold pb-2">Câu hỏi đuôi của “I + động từ trần thuật”</p>
            <p class="font-bold">Công thức của mệnh đề chính: <span class="color-dard-puple">I think/believe/… + (that) + S + V + O</span></p>
            <p class="font-bold color-dard-puple">⟶ Chủ ngữ câu hỏi đuôi tính theo mệnh đề sau động từ trần thuật.</p>
            <p class="pt-3 pb-5">I think she is a doctor, isn't she? (Tôi nghĩ cô ấy là bác sĩ, phải không?)</p>

        </td></tr>
        <tr><td colSpan={3}>
            <p  class="font-bold pb-2">Câu hỏi đuôi với chủ ngữ giả “There”</p>
            <ul class="compare-list">
                <li><p class="font-bold color-dard-puple pb-2">Nếu câu khẳng định có động từ “is”: câu hỏi đuôi sẽ dùng “isn't it” hoặc “wasn't it”.</p>
                <p>There's a cat in the garden, isn't it?
                (Có một con mèo trong vườn phải không?)</p></li>
                <li><p class="font-bold color-dard-puple pb-2">Nếu câu khẳng định có động từ khác “is”: câu hỏi đuôi sẽ dùng “V + there”.</p>
                <p>There are many people here, is there?
                (Có rất nhiều người ở đây phải không?)</p>
                <p>There'll be lots to see in London, won't there? </p></li>
               
            </ul>
        </td></tr>
        <tr><td colSpan={3}>
            <p class="font-bold pb-2">Câu hỏi đuôi có mệnh đề chính là câu “…wish…”</p>
            <p class="font-bold color-dard-puple pb-2">Khi mệnh đề chính dùng “wish”, ta dùng “may” cho câu hỏi đuôi.</p>
            <p>I wish I had more time, don't I?
            (Tôi ước mình có nhiều thời gian hơn phải không?)</p>
            <p class="pb-5">She wishes she could go to the party, doesn't she?
            (Cô ấy ước mình có thể đi dự tiệc phải không?)</p>
        </td></tr>
        <tr><td colSpan={3}>
            <p class="font-bold pb-2">Câu hỏi đuôi của “Must”</p>
            <ul class="compare-list pb-5">
                <li><p class="font-bold color-dard-puple pb-2">“Must” dùng để chỉ sự cần thiết ⟶ Câu hỏi đuôi dùng “needn't”</p>
                <p>She must study harder to pass the exam, need she? (Cô ấy phải học hành chăm chỉ hơn để vượt qua kỳ thi, phải không?)</p>
                </li>
                <li>
                    <p class="font-bold color-dard-puple pb-2">Must diễn tả sự cấm đoán, bắt buộc → Câu hỏi đuôi vẫn dùng Must theo cấu trúc thông thường. </p>
                    <p>You must not smoke here, must you? (Bạn không được hút thuốc ở đây, phải không?)</p>
                </li>
                <li>
                    <p class="font-bold color-dard-puple pb-2">Must diễn tả sự phỏng đoán → Câu hỏi đuôi sử dụng trợ động từ chia theo thì tương ứng.</p>
                    <p>He must have been very tired, wasn't he? (Anh ấy chắc hẳn đã rất mệt, phải không?)</p>
                    <p>It must be a nice bag, isn't it? (Nó chắc hẳn là một chiếc cặp đẹp đúng không?)</p>
                </li>
            </ul>
        </td></tr>
        <tr><td colSpan={3}>
            <p class="font-bold pb-2">Câu hỏi đuôi đối với câu mệnh lệnh</p>
            <ul class="compare-list pb-5">
                <li>
                    <p class="font-bold color-dard-puple pb-2">Diễn tả lời mời, dùng “won't you” cho tag question.</p>
                    <p>Drink some milk tea, won't you? (Mời bạn uống trà sữa nhé?)</p>
                </li>
                <li>
                    <p class="font-bold color-dard-puple pb-2">Diễn tả sự nhờ vả, dùng “will you”.</p>
                    <p>Give me a hand, will you? (Giúp mình một tay được không?)</p>
                </li>
                <li>
                    <p class="font-bold color-dard-puple pb-2">Diễn tả sự ra lệnh, dùng “can/could/would you” ở câu hỏi đuôi.</p>
                    <p>Go out, can't you? (Ra ngoài giùm được không?)</p>
                </li>
                <li>
                    <p class="font-bold color-dard-puple pb-2">Câu mệnh lệnh dạng phủ định chỉ dùng “will you” ở câu hỏi đuôi.</p>
                    <p>Don't marry her, will you? (Bạn sẽ không cưới cô ấy đúng không?).</p>
                </li>
            </ul>
        </td></tr>
        <tr><td colSpan={3}>
            <p class="font-bold pb-2">Câu hỏi đuôi với chủ ngữ ‘this'/ ‘that'/ ‘these' / ‘those'</p>
            <ul class="compare-list pb-5">
                <li><p class="font-bold color-dard-puple pb-2">Khi mệnh đề chính có chủ ngữ là ‘this' hoặc ‘that', câu hỏi đuôi dùng chủ ngữ “it”</p>
                <p>This is a beautiful painting, isn't it? (Đây là một bức tranh đẹp, phải không?)</p></li>
                <li>
                    <p class="font-bold color-dard-puple pb-2">Khi mệnh đề chính có chủ ngữ là ‘these' hoặc ‘those', câu hỏi đuôi dùng chủ ngữ “they”</p>
                    <p>These flowers are so fragrant, aren't they? (Những bông hoa này thơm quá, phải không?)</p>
                </li>
            </ul>
        </td></tr>
        <tr><td colSpan={3}>
            <p class="font-bold pb-2">Câu hỏi đuôi với câu cảm thán </p>
            <p class="font-bold color-dard-puple pb-2">Khi mệnh đề chính trong câu là câu cảm thán, ta cần đổi danh từ trong câu thành đại từ để đưa vào câu hỏi đuôi. Trợ động từ sẽ là am, is, are. </p>
            <p>How interesting this movie is, isn't it?
            (Bộ phim này hay thật đấy, phải không?) </p>
            <p>How a handsome boy, isn’t he? (Anh ta đẹp trai, đúng không?)</p>
            <p class="pb-5">What a beautiful day, Isn't it? (Ngày hôm nay đẹp quá phải không?)</p>
        </td></tr>
        <tr><td colSpan={3}>
            <p class="font-bold pb-2">Đối với câu có chủ ngữ là "One"</p>
            <p class="font-bold color-dard-puple pb-2">Khi chủ ngữ chính trong mệnh đề chính là “one”, ở câu hỏi đuôi dùng “you” hoặc “one”.</p>
            <p class="pb-5">One can be one's master, can't one/you? (Mỗi người đều có thể kiểm soát bản thân, đúng không?)</p>
        </td></tr>
        <tr><td colSpan={3}>
            <p class="font-bold pb-2">Đối với cấu trúc "I think"</p>
            <p class="font-bold color-dard-puple pb-2">Câu đầu có <u>I</u> + các động từ sau: think, believe, suppose, figure, assume, fancy, imagine, reckon, expect, seem, feel + mệnh đề phụ, lấy mệnh đề phụ làm câu hỏi đuôi.</p>
            <p>I don't believe <u>Mary can</u> do it, <u>can she</u>?</p>
            <p  class="pb-3">I think <u>he will</u> come here, <u>won't he</u>? (Tôi nghĩ anh ấy sẽ đến đây, đúng không?)</p>
            <p class="font-bold color-dard-puple pb-2">Cùng mẫu này nhưng nếu chủ từ không phải là <u>I</u> thì lại dùng mệnh đề đầu làm câu hỏi đuôi.</p>
            <p class="pb-5"><u>She thinks</u> he will come, <u>doesn't she?</u></p>

        </td></tr>
        <tr><td colSpan={3}>
            <p class="font-bold pb-2">Đối với chủ ngữ this/ that</p>
            <p class="font-bold color-dard-puple pb-2">This/ that được thay bằng it cho câu hỏi đuôi.</p>
            <p class="pb-5">This is your wife, isn't it? (Đây là vợ bạn phải không?)</p>
        </td></tr>
        <tr><td colSpan={3}>
            <p class="font-bold pb-2">Cấu trúc câu hỏi đuôi với ought to</p>
            <p class="font-bold color-dard-puple pb-2">Cấu trúc câu hỏi đuôi với ought to bao gồm hai phần: Câu chính và phần đuôi. Phần đuôi dùng oughtn't (viết tắt của ought not) theo sau chủ ngữ:</p>
            <p class="font-bold color-dard-puple">Câu khẳng định + oughtn't + chủ ngữ?</p>
            <p class="font-bold color-dard-puple pb-2">Câu phủ định + ought + chủ ngữ?</p>
            <p>You ought to help him, oughtn't you? (Bạn nên giúp anh ấy, phải không?)</p>
            <p class="pb-5">She ought not to be late, ought she? (Cô ấy không nên đến muộn, phải không?)</p>
        </td></tr>
        <tr><td colSpan={3}>
            <p class="font-bold pb-2">Cấu trúc câu hỏi đuôi với  Need</p>
            <p class="font-bold color-dard-puple pb-2">NEED vừa là động từ thường, vừa dộng từ khiếm khuyết, nên</p>
            <ul>
                <li><p class="font-bold color-dard-puple">Nếu <u>NEED</u> là động từ thường thì phải <u>mượn trợ động từ</u></p>
                <p class="pb-2">She needs to water the flowers in the morning, doesn't she?</p></li>
                <li><p class="font-bold color-dard-puple">Nếu <u>NEED</u> động từ khiếm khuyết thì khi thành lập câu hỏi đuôi thì dùng luôn <u>NEED</u></p>
                <p>She needn't do it,need she?</p></li>
            </ul>
            <p class="pb-5">This is your wife, isn't it? (Đây là vợ bạn phải không?)</p>
        </td></tr>
        <tr><td colSpan={3}>
            <p class="font-bold pb-2">Câu có cấu trúc <u>Neither ... or</u> </p>
            <p class="font-bold color-dard-puple pb-2">Câu có cấu trúc <u>Neither ... or</u> thì câu hỏi đuôi sẽ chia theo số nhiều.</p>
            <p class="pb-5"><u>Neither Jenny nor</u> John are teacher , <u>are they</u>? (Cả Jenny và John đều là giáo viên phải không?)</p>
        </td></tr>
        <tr><td colSpan={3}>
            <p class="font-bold pb-2"></p>
            <p class="font-bold color-dard-puple pb-2">Trong câu có các trạng từ phủ định hoặc bán phủ định như: <u>never, seldom, hardly, scarely, little..</u> thì câu đó được xem như là câu phủ định -  phẩn hỏi đuôi sẽ ỏ dạng khẳng định</p>
            <p class="pb-5">She <u>hardly</u> eats bread, <u>does she</u>? (Cô ấy hầu như không ăn bánh mì , phải không?)</p>
        </td></tr>
        <tr><td colSpan={3}>
            <p class="font-bold pb-2">Câu hỏi đuôi với TO V</p>
            <p class="font-bold color-dard-puple pb-2">Nếu câu có chủ ngữ là một mệnh đề, một danh ngữ, động từ dạng TO V thì phần câu hỏi đuôi sẽ dùng <u>IT</u> là chủ ngữ.</p>
            <p class="pb-5"><u>To play video games</u> doesn’t entertain us much, <u>does it</u>? (Chơi trò chơi điện tử không giúp chúng ta giải trí lắm, phải không nhỉ?)</p>
        </td></tr>
      </tbody>
      </table>
        </div>
    );
};

export default Tagquestion;