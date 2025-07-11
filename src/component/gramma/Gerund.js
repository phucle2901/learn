import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  answerSttring,
  fReplaceQuestion,
  compareAnswer,
} from "../../component/function/index";
import { gramma } from "../../data/gramma/Gerund";

const Gerund = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);  
  const [indexEx, setIndexEx] = useState(-1); 
  const setupFirst = (question) => {
    let newQuestion = question.map((item, index) => ({
      ...item,
      id: index + 1,
    }));

    return newQuestion;
  };

  useEffect(() => {
    let questionPlan = [];    
    for (let i = 0; i < gramma.length; i++) {
      questionPlan.push({
        ...questionPlan,
        question: setupFirst(gramma[i].questions),
      });
    }
    setQuestions(questionPlan);
    //console.log("questionPlan: ", questionPlan);
  },[]);

  const handleChange = (row,questionId, value) => {
    //setAnswers((prev) => ({ ...prev, [questionId]: value }));
    updateAnswer(row, questionId, value);
  };
  const handleRewrite = (row,questionId,value) => {
    //setAnswers((prev) => ({ ...prev, [questionId]: value }));
    updateAnswer(row, questionId, value);
  };
  const handleSubmit = (index) => {
    setIndexEx(index);
    let count = 0;
    questions[index].question.forEach((q) => {
      if (
        compareAnswer(q.answer, answers[index]?.[q.id], q.options && q.options.length)
      ) {
        count = count + 1;
      }
    });
    console.log(answers[index],index);
    //setResults({ score: count, total: questions.length });

    //setSubmitted(true);
  };
  const handleRefesh = (index) => {
    updateRefreshAnswer(index);
    setIndexEx(-1);
   
  };
  const updateRefreshAnswer = (row) => {
    setAnswers(prev => {
      const newAnswers = [...prev];
      // Ensure the row exists
      if (!newAnswers[row]) {
        newAnswers[row] = []; // Create new row
      }  
      return newAnswers;
    });
  };
  const updateAnswer = (row, col, value) => {
    setAnswers(prev => {
      const newAnswers = [...prev];
  
      // Ensure the row exists
      if (!newAnswers[row]) {
        newAnswers[row] = []; // Create new row
      }
  
      // Copy the row before modifying
      newAnswers[row] = [...newAnswers[row]];
      newAnswers[row][col] = value;
  
      return newAnswers;
    });
  };

  return (
    <>
      <div class="wrap-question">
        <div
          style={{
            padding: "0.8em",
            border: "1px solid #ccc",
            borderRadius: "5px",
            background: "#fff9f9",
            marginBottom: "1em",
          }}
        >
          <h1 class="text-center font-5">
            <b>
              Danh động từ (Gerunds) và Động từ nguyên mẫu có to (To Infinitive)
            </b>
          </h1>
          <p class="color-puple mt-3">
            <strong>1. Định nghĩa</strong>
          </p>
          <p>
            <span class="color-dard-puple">
              <strong>Danh động từ (gerunds) </strong>
            </span>
            là một dạng đặc biệt của động từ trong tiếng Anh, được tạo ra bằng
            cách thêm hậu tố <b class="color-dard-puple">-ing</b> vào sau động
            từ cơ bản (base form).
          </p>
          <p class="mt-3 ">
            <span class="color-dard-puple">
              <strong>Infinitive</strong>
            </span>
            (Động từ nguyên mẫu) là những động từ có cấu trúc cơ bản nhất. Động
            từ nguyên mẫu được chia thành 2 loại: động từ đi kèm bởi
            <strong class="color-dard-puple">“to”</strong>, và động từ
            <strong class="color-dard-puple">không có “to”</strong>.
          </p>
          <p class="mt-3 color-puple">
            <strong class="color-dard-puple">
              2. Đặc điểm của danh động từ (Gerunds)
            </strong>
          </p>
          <div class="note-shadow">
            <p class="text-shadow">Gerunds</p>
            <p>
              Thường được sử dụng khi hành động là có thật, cố định hoặc đã hoàn
              thành.
            </p>
            <p class="p-bold">
              Gerunds có thể làm <span class="color-orange">chủ ngữ</span> trong
              câu.
            </p>
            <p>
              <i>
                <span class="color-orange">Swimming</span> is good for your
                health.
              </i>
            </p>
            <p class="p-bold">
              Gerunds có thể làm <span class="color-orange">tân ngữ</span> trong
              câu.
            </p>
            <p>
              <i>
                One of my hobbies is
                <span class="color-orange">collecting</span> stamps
              </i>
            </p>
            <p class="p-bold">
              Gerund <span class="color-orange">theo sau giới từ</span>
            </p>
            <p>
              <i>
                I am fond of <span class="color-orange">listening</span> to
                music
              </i>
            </p>
            <p class="p-bold">Gerunds theo sau một số động từ nhất định.</p>
            <p>
              <i>
                My mom loves <span class="color-orange">cooking</span>
              </i>
            </p>
          </div>
          <p class="mt-3">
            <strong class="color-dard-puple">
              - Những động từ theo sau là "V-ing"
            </strong>
          </p>
          <table class="table-col" >          
            <tbody>
              <tr>
                <td>Anticipate</td>
                <td> Tham gia</td>
                <td>Avoid</td>
                <td> Tránh</td>
              </tr>
              <tr>
                <td>Delay</td>
                <td> Trì hoãn</td>
                <td>Postpone</td>
                <td> Trì hoãn</td>
              </tr>
              <tr>
                <td>Quit</td>
                <td> Bỏ</td>
                <td>Admit</td>
                <td> chấp nhận</td>
              </tr>
              <tr>
                <td>Discuss</td>
                <td> thảo luận</td>
                <td>Mention</td>
                <td> đề cập</td>
              </tr>
              <tr>
                <td>Suggest</td>
                <td> gợi ý</td>
                <td>Urge</td>
                <td> thúc giục</td>
              </tr>
              <tr>
                <td>Keep</td>
                <td> giữ</td>
                <td>Urge</td>
                <td> thúc giục</td>
              </tr>
              <tr>
                <td>Continue</td>
                <td> tiếp tục</td>
                <td>Involve </td>
                <td> bao gồm</td>
              </tr>
              <tr>
                <td>Enjoy</td>
                <td> thích</td>
                <td>Practice</td>
                <td> thực hành</td>
              </tr>
              <tr>
                <td>Dislike</td>
                <td> ko thích</td>
                <td>Mind</td>
                <td> quan tâm</td>
              </tr>
              <tr>
                <td>Tolerate</td>
                <td> cho phép</td>
                <td>Love</td>
                <td> yêu</td>
              </tr>
              <tr>
                <td>Hate</td>
                <td> ghét</td>
                <td>Resent</td>
                <td> gửi lại</td>
              </tr>
              <tr>
                <td>Understand</td>
                <td> hiểu</td>
                <td>Resist</td>
                <td> chống cự</td>
              </tr>
              <tr>
                <td>Recall</td>
                <td> nhắc</td>
                <td>Consider</td>
                <td> cân nhắc</td>
              </tr>
              <tr>
                <td>Deny</td>
                <td> từ chối</td>
                <td>Imagine</td>
                <td> tưởng tượng</td>
              </tr>
            </tbody>
          </table>
          <p class="mt-3">
            <strong class="color-dard-puple">
              ⭐Ngoài ra, những cụm từ sau cũng theo sau là V-ing:
            </strong>
          </p>
          <p>
            - It’s no use/It’s no good...
            <br />
            - There’s no point (in)...
            <br />
            - It’s (not) worth...
            <br />
            - Have difficult (in)...
            <br />
            - It’s a waste of time/money...
            <br />
            - Spend/waste time/money...
            <br />
            - Be/get used to...
            <br />
            - Be/get accustomed to...
            <br />
            - Do/Would you mind...?
            <br />
            - Be busy doing something...
            <br />- What about...? How about...?
          </p>
          <p class="mt-3 color-puple">
            <strong>
              3. Đặc điểm của Động từ nguyên mẫu có to (To Infinitive)
            </strong>
          </p>
          <div class="note-shadow">
            <p class="text-shadow">To Infinitive</p>
            <p>
              Thường được sử dụng khi hành động không thực tế, trừu tượng hoặc
              tương lai.
            </p>
            <p class="p-bold">
              To Infinitive có thể làm <span class="color-orange">chủ ngữ </span> 
               trong câu.
            </p>
            <p>
              <i>
                <span class="color-orange">To become</span> a famous singer is
                her dream.
              </i>
            </p>
            <p class="p-bold">
              To Infinitive có thể làm <span class="color-orange">tân ngữ </span> 
               của động từ.
            </p>
            <p>
              <i>
                It was late, so we decided
                <span class="color-orange">to take</span> a taxi home.
              </i>
            </p>
            <p class="p-bold">To Infinitive làm tân ngữ chỉ người</p>
            <p>
              <i>
                We asked her not <span class="color-orange">to go</span>
              </i>
            </p>
            <p class="p-bold">
              To Infinitive có thể làm <span class="color-orange">tân ngữ </span>
              của tính từ.
            </p>
            <p>
              <i>
                I’m pleased <span class="color-orange">to see</span> you.
              </i>
            </p>
          </div>
          <p class="mt-3">
            <strong class="color-dard-puple">
              Những động từ đi theo sau là "to infinitive"
            </strong>
          </p>
          <table class="table-col">
          
            <tbody>
              <tr>
                <td>Advise sb to</td>
                <td> Khuyên ai đó làm gì</td>
                <td>Ask sb to</td>
                <td> Hỏi ai đó làm gì</td>
              </tr>
              <tr>
                <td>Allow sb to</td>
                <td> Cho phép ai đó làm gì</td>
                <td>Afford to</td>
                <td> Chi trả cho việc gì</td>
              </tr>
              <tr>
                <td>Agree to</td>
                <td> Đồng ý với điều gì</td>
                <td>Appear to</td>
                <td> Có vẻ làm gì</td>
              </tr>
              <tr>
                <td>Arrange to</td>
                <td> Sắp xếp làm gì</td>
                <td>Beg to</td>
                <td> Van xin làm gì</td>
              </tr>
              <tr>
                <td>Begin to</td>
                <td> Bắt đầu làm gì</td>
                <td>Care to</td>
                <td> Quan tâm làm gì</td>
              </tr>
              <tr>
                <td>Claim to</td>
                <td> Khẳng định làm gì</td>
                <td>Consent to</td>
                <td> Đồng ý làm gì</td>
              </tr>
              <tr>
                <td>Continue to</td>
                <td> Tiếp tục làm gì</td>
                <td>Decide to</td>
                <td> Quyết định làm gì</td>
              </tr>
              <tr>
                <td>Demand to</td>
                <td> Yêu cầu làm gì</td>
                <td>Deserve to</td>
                <td> Xứng đáng được làm gì</td>
              </tr>
              <tr>
                <td>Expect sb to</td>
                <td> Kì vọng ai làm gì</td>
                <td>Encourage sb to</td>
                <td> Động viên ai làm gì</td>
              </tr>
              <tr>
                <td>Fail to</td>
                <td> Thất bại trong việc làm gì</td>
                <td>Hate to</td>
                <td> Ghét làm gì</td>
              </tr>
              <tr>
                <td>Hesitate to</td>
                <td> Do dự làm gì</td>
                <td>Hope to</td>
                <td> Hy vọng làm gì</td>
              </tr>
              <tr>
                <td>Start to</td>
                <td> Bắt đầu làm gì</td>
                <td>Struggle to</td>
                <td> Vật lộn để làm gì</td>
              </tr>
              <tr>
                <td>Volunteer to</td>
                <td> Tình nguyện làm gì</td>
                <td>Wait to</td>
                <td> Chờ đợi làm gì</td>
              </tr>
              <tr>
                <td>Want to</td>
                <td> Muốn làm gì</td>
                <td>Warn sb to</td>
                <td> Cảnh báo ai đó làm gì</td>
              </tr>
              <tr>
                <td>Would like sb to</td>
                <td> Muốn ai đó làm gì</td>
                <td>Learn to</td>
                <td> Học để làm điều gì đó</td>
              </tr>
              <tr>
                <td>Like to</td>
                <td> Thích làm gì</td>
                <td>Love to</td>
                <td> Yêu thích làm gì</td>
              </tr>
              <tr>
                <td>Manage to</td>
                <td> Điều hành làm gì</td>
                <td>Need sb to</td>
                <td> Cần ai đó làm gì</td>
              </tr>
              <tr>
                <td>Offer to</td>
                <td> Sẵn lòng làm gì</td>
                <td>Order sb to</td>
                <td> Ra lệnh cho ai làm gì</td>
              </tr>
              <tr>
                <td>Plan to</td>
                <td> Lên kế hoạch làm gì</td>
                <td>Prepare to</td>
                <td> Chuẩn bị làm gì</td>
              </tr>
              <tr>
                <td>Pretend to</td>
                <td> Giả vờ làm gì</td>
                <td>Promise to</td>
                <td> Hứa hẹn làm gì</td>
              </tr>
              <tr>
                <td>Require sb to</td>
                <td> Yêu cầu ai đó làm gì</td>
                <td>Seem to</td>
                <td> Trông có vẻ như</td>
              </tr>
            </tbody>
          </table>
          <p class="mt-3 color-puple">
            <strong>4. Những động từ theo sau gồm cả “to V” và “V-ing”:</strong>
          </p>
          <table class="table-col">
          
          <tbody>
            <tr>
              <td></td>
              <td>
                <b>V-ing</b>
              </td>
              <td>
                <b>to V</b>
              </td>
            </tr>
            <tr>
              <td>
                <b>Stop</b>
              </td>
              <td>
                <b>dừng làm gì (dừng hẳn)</b>
                <br />
                <i>Ex: Stop smoking: dừng hút thuốc.</i>
              </td>
              <td>
                <b>dừng lại để làm việc gì</b>
                <br />
                <i>Ex: Stop to smoke: dừng lại để hút thuốc</i>
              </td>
            </tr>
            <tr>
              <td>
                <b>Remember</b>
              </td>
              <td>
                <b>nhớ đã làm gì (ở quá khứ)</b>
                <br />
                <i>
                  Ex: I paid her. I still remember paying her. (Tôi nhó đã trả
                  tiền cho cô ấy rồi.)
                </i>
              </td>
              <td>
                <b>nhớ sẽ phải làm gì (ở hiện tại – tương lai)</b>
                <br />
                <i>
                  Ex: Remember to send this letter (Hãy nhớ gửi bức thư này).
                </i>
              </td>
            </tr>
            <tr>
              <td>
                <b>forget</b>
              </td>
              <td>
                <b>quên đã làm gì (ở quá khứ)</b>
                <br />
                She will never forget meeting the Queen. (Cô ấy không bao giờ
                quên lần gặp nữ hoàng).
              </td>
              <td>
                <b>quên sẽ phải làm gì (ở hiện tại – tương lai)</b>
                <br />
                Don’t forget to buy flowers (Đừng quên mua hoa nhé).
              </td>
            </tr>
            <tr>
              <td>
                <b>regret </b>
              </td>
              <td>
                <b>tiếc đã làm gì (ở quá khứ)</b>
                <br />
                He regrets leaving school early. It is the biggest mistake in
                his life. (Anh ấy hối tiếc vì đã bỏ học quá sớm).
              </td>
              <td>
                <b>tiếc sẽ phải làm gì (ở hiện tại – tương lai)</b>
                <br />I regret to inform you that the train was cancelled (Tôi
                rất tiếc phải báo tin – cho anh rằng chuyến tàu đã bị hủy).
              </td>
            </tr>
            <tr>
              <td>
                <b>Try</b>
              </td>
              <td>
                <b>thử làm gì</b>
                <br />
                You should try unlocking the door with this key. (Bạn nên thử mở
                cửa với chiếc khóa này).
              </td>
              <td>
                <b>cố gắng làm gì</b>
                <br />I try to pass the exam. (Tôi cố gắng vượt qua kỳ thi)
              </td>
            </tr>
            <tr>
              <td>
                <b>Like </b>
              </td>
              <td>
                <b>
                  Thích làm gì vì nó thú vị, hay, cuốn hút, làm để thường thức.
                </b>
                <br />I like watching TV.
              </td>
              <td>
                <b>làm việc đó vì nó là tốt và cần thiết</b>
                <br />I want to have this job. I like to learn English.
              </td>
            </tr>
            <tr>
              <td>
                <b>Prefer </b>
              </td>
              <td>
                <b>Prefer V-ing to V-ing: thích làm gì hơn hơn làm gì</b>
                <br />I prefer driving to traveling by train.
              </td>
              <td>
                <b>
                  Prefer + to V + rather than (V): thích làm gì hơn hơn làm gì
                </b>
                <br />I prefer to drive rather than travel by train.
              </td>
            </tr>
            <tr>
              <td>
                <b>Mean</b>
              </td>
              <td>
                <b>Có nghĩa là gì.</b>
                <br />
                This sign means not going into. (Biển báo này có ý nghĩa là
                không được đi vào trong.)
              </td>
              <td>
                <b>Có ý định làm gì.</b>
                <br />
                He doesn’t mean to prevent you from doing that. (Anh ấy không có
                ý ngăn cản bạn làm việc đó.)
              </td>
            </tr>
            <tr>
              <td>
                <b>Need </b>
              </td>
              <td>
                <b>cần được làm gì (= need to be done)</b>
                <br />
                Your hair needs cutting. (= your hair needs to be cut)
              </td>
              <td>
                <b>cần làm gì</b>
                <br />I need to go to school today.
              </td>
            </tr>
            <tr>
              <td>
                <b>Use</b>
              </td>
              <td>
                <b>Be/Get used to V-ing: quen với việc gì (ở hiện tại)</b>
                <br />
                I’m used to getting up early. (Tôi quen với việc dậy sớm rồi)
              </td>
              <td>
                <b>
                  Used to V: đã từng/thường làm gì trong quá khứ (bây giờ không
                  làm nữa)
                </b>
                <br />I used to get up early when I was young. (Tôi thường dậy
                sớm khi còn trẻ)
              </td>
            </tr>
            <tr>
              <td>
                <b>Advise</b>
              </td>
              <td>
                <b>khuyên làm gì.</b>
                <br />
                He advised applying at once.
              </td>
              <td>
                <b>
                  Advise + Object + to V: khuyên/cho phép/ đề nghị ai làm gì.
                </b>
                <br />
                He advised me to apply at once.
              </td>
            </tr>
            <tr>
              <td>
                <b>allow/ permit</b>
              </td>
              <td>
                <b>cho phép làm gì</b>
                <br />
                They don’t allow/permit parking here.
              </td>
              <td>
                <b>cho phép ai làm gì</b>
                <br />
                They don’t allow/permit us to park here.
              </td>
            </tr>
            <tr>
              <td>
                <b>See/ hear/ smell/ feel/ notice/ watch</b>
              </td>
              <td>
                <b>
                  + Object + V-ing: cấu trúc này được sử dụng khi người nói chỉ
                  chứng kiến 1 phần của hành động.
                </b>
                <br />I see him passing my house everyday.
              </td>
              <td>
                <b>
                  + Object + V: cấu trúc này được sử dụng khi người nói chứng
                  kiến toàn bộ hành động.
                </b>
                <br />I heard him make arrangements for his journey.
              </td>
            </tr>
            </tbody>
          </table>
          <p class="mt-3">
            <b>4. Mẹo để biết chọn V-ing hay To V</b>
          </p>
          <p>
            <b>- Dùng V-ing với hành động kéo dài, To V với hành động ngắn</b>
            <br />
            I began teaching English 19 years ago <br />
            She began to feel worried and anxious .
          </p>
          <p class="mt-3">
            <b>
              - Khi những động từ này ở bất kì thì tiếp diễn nào, ta không thể
              dùng ‘V-ing’
            </b>
          </p>
          <p>
            I was <u>starting</u> to leave home for school
          </p>
          <p class="mt-3">
            <b>
              - Với những động từ chỉ suy nghĩ, hiểu biết ta phải dùng ‘to-V’
            </b>
          </p>
          <p>
            <b>
              Các động từ như: think, understand, remember, forget, realize,
              recognize, appreciate, comprehend, know, …
            </b>
          </p>
          <p>I start to forget all about this event</p>
          <p class="mt-3">
            <b>- Với những từ chỉ tình cảm, cảm xúc ta không dùng ‘ V-ing’</b>
          </p>
          <p>
            <b>
              Những từ chỉ tình cảm, cảm xúc: love, hate, miss, admire, respect,
              adore,…
            </b>
          </p>
          <p class="mt-3">
            <b>- Sau động từ khiếm khuyết (MODAL VERBS) + động từ nguyên mẫu</b>
          </p>
          <p>
            Can & Cannot, Could & Could not, May & May not, Might & Might not,
            Must & Must not, Shall & Shall not, Should & Should not , Will &
            Will not, Would & Would not
          </p>
          <p class="mt-3">
            <b>
              - Nếu động từ thứ 2 diễn ra sau động từ thứ 1; thì động từ thứ 2
              là “TO VERB”
            </b>
          </p>
          <p class="mt-3 mb-5">
            <b>
              - Nếu động từ thứ 2 diễn ra trước động từ thứ 1; thì động từ thứ 2
              là “V-ING”
            </b>
          </p>          
        </div>
        <p class="mt-3  mb-3 text-white font-bold text-2xl">
            <strong>Bài tập</strong>
          </p>
        <>      
        
          {questions.map((qs,count) =>
            <div key={count}>
            {qs.question.map((q, indexQ) => (
              <div
                key={q.id}
                style={{
                  marginBottom: "1em",

                  padding: "0.8em",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  background: count=== indexEx
                    ? compareAnswer(
                        q.answer, 
                        answers[count]?.[q.id],
                        q.options && q.options.length
                      )
                      ? "#e0ffe0" // greenish for correct
                      : "#ffe0e0" // reddish for incorrect
                    : "#fff9f9", //#f9f9f9
                }}
              >                
                {q.extra && q.extra.length > 0 && (
                  <div
                    className="extra-content"
                    dangerouslySetInnerHTML={{
                      __html: fReplaceQuestion(q.extra, indexQ),
                    }}
                  ></div>
                )}
                <div
                  class="question pb-[5px]"
                  dangerouslySetInnerHTML={{
                    __html: "<b>Question " + q.id + ":</b> " + q.question,
                  }}
                ></div>
                {q.options && q.options.length > 0 ? (
                  q.options.map((opt, index) => (
                    <label key={index} style={{ display: "block" }}>
                      <input
                        type="radio"
                        name={`q-${count}-${q.id}`}
                        value={index}
                        disabled={count=== indexEx}
                        checked={answers[count]?.[q.id] === index}
                        onChange={() => handleChange(count ,q.id,index)}
                      /> <span dangerouslySetInnerHTML={{ __html: opt }}></span>
                    </label>
                  ))
                ) : (
                  <>
                    <div className="wrap-rewrite flex content-start">
                      <span
                        dangerouslySetInnerHTML={{ __html: q.rewrite }}
                      ></span> <textarea
                        rows={2}
                        class="rewrite"
                        onChange={(e) => handleRewrite(count,q.id, e.target.value)}
                      />
                      <span
                        dangerouslySetInnerHTML={{ __html: q.lastwrite }}
                      ></span>
                    </div>
                  </>
                )}               
                { count===indexEx && (
                  <div key={`${q.id}-exp`}>
                    <p class="mt-3">
                      <strong>Trả lời: </strong>
                      {answerSttring(q.answer, q.options && q.options.length)}
                    </p>
                    <p class="mt-3" dangerouslySetInnerHTML={{ __html: q.explanation }}></p>
                  </div>
                )}
              </div>
            ))}
            {indexEx!==count ? (
            <>
              <button
                onClick={(e)=>handleSubmit(count)}
                style={{ padding: "0.5em 1em" }}
                class="btn-shadow mb-3"
              >
                <strong>Submit</strong>
              </button>
            </>
          ) : (
            <button
              onClick={(e)=>handleRefesh(count)}
              style={{ padding: "0.5em 1em" }}
              class="btn-shadow mb-3"
            >
              <strong>Refesh</strong>
            </button>
          )}
          </div>
          )}
          
        </>
      </div>
    </>
  );
};

export default Gerund;
