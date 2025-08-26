import React from 'react';

const Tenses = () => {
    return (
        <div style={{
            padding: "0.8em",
            border: "1px solid #ccc",
            borderRadius: "5px",
            background: "#fff9f9",
            marginBottom: "1em",
          }}>
            <h1 class="text-center text-[1.7em] mb-5 text-shadow-h1">
            <b>
              Thì động từ
            </b>
          </h1>  
          <table width={"100%"} class="table-col table-col-top">
          <tbody>            
            <tr><td colSpan={3}><p class="font-bold text-[1.5em]  text-shadow-h1">1. Thì hiện tại</p></td></tr>
            <tr>
                <td class="font-bold text-center" width={"40%"}>Cách dùng</td>
                <td class="font-bold text-center" width={"40%"} ><p >Công thức</p></td>
                <td class="font-bold text-center" width={"20%"}><p >Từ nhận biết</p></td>
            </tr>
            <tr>
                <td>
                    <ul  class="compare-list">
                        <li>Diễn tả hành động thường xuyên xảy ra</li>
                        <li>Diễn tả thói quen</li>
                        <li>Diễn tả thời gian biểu, lịch trình, thông báo</li>
                        <li>Diễn tả sự thật, chân lý</li>
                        <li>Diễn tả nghề nghiệp, sở thích, nguồn gốc, bình phẩm</li>
                    </ul>
                </td>
                <td>
                    <div class="structure">
                    <div>S + V</div>
                    
                    <div>
                      <ul class="ml-[15px]">
                        <li class="list-style-dot">V(bare): I/ Số nhiểu</li>
                        <li class="list-style-dot">V(s/es): số ít</li>
                        <li class="list-style-dot">
                        <div class="structure">
                            <div>be</div>
                            
                            <div><ul class="ml-[15px]">
                                <li class="list-style-square">Am: I</li>
                                <li class="list-style-square">is: số ít</li>
                                <li class="list-style-square">are: số nhiều</li>
                            </ul></div>
                        </div>
                        </li>
                      </ul>                      
                    </div>
                    </div>
                    <p class="font-bold pb-3 pt-5">Thành lập phủ định và nghi vấn</p>
                      <p>*V(do/does)</p>
                      <p>(-): S + do/does + not + V(nare)+ ...</p>
                      <p>(?): Do/ does + S + V(bare)?</p>
                      <p>* Be(am, is, are)</p>
                      <p>(-): S + am/ is/ are + not + ...</p>
                      <p>(?): Am/ is/ Are + S + .....?</p>
                </td>
                <td>
                    <ul class="ml-[15px]">
                    <li class="list-style-dot">Seldom/ rarely/ hardly</li>
                    <li class="list-style-dot">sometimes/ occasionally</li>
                    <li class="list-style-dot">often/ usually/ frequently</li>
                    <li class="list-style-dot">always/ constantly</li>
                    <li class="list-style-dot">ever</li>
                    <li class="list-style-dot">never</li>
                    <li class="list-style-dot">every</li>
                    </ul>
                </td>
            </tr>
            <tr><td colSpan={3}><p class="font-bold text-[1.5em]  text-shadow-h1">2. Thì quá khứ đơn</p></td></tr>
            <tr>
                <td class="font-bold text-center" width={"40%"}>Cách dùng</td>
                <td class="font-bold text-center" width={"40%"} ><p >Công thức</p></td>
                <td class="font-bold text-center" width={"20%"}><p >Từ nhận biết</p></td>
            </tr>
            <tr>
              <td>
                <ul class="compare-list">
                <li>Diễn tả hành động đã xảy ra và đã chấm dứt  trong quá khứ, không còn liên quan tới hiện tại</li>
                <li>diễn tả hành động xảy ra nối tiếp nhau trong quá khứ</li>
                <li>Diễn tả hồi ức, ký ức</li>

                </ul>
              </td>
              <td>
              <div class="structure">
              <div>S + V</div>
              <div><ul class="ml-[15px]">
                <li class="list-style-dot">V(ed)/V(cột 2)</li>
                <li class="list-style-dot">
                  <div class="structure">
                    <div>be</div>
                    <div class="ml-[15px]">
                    <ul class="ml-[15px]">
                      <li class="list-style-square">was: số ít</li>
                      <li class="list-style-square">were: số nhiều</li>
                    </ul>
                    </div>
                  </div>
                </li>
              </ul></div>
              </div>
              <p class="font-bold pb-3 pt-5">Thành lập phủ định và nghi vấn</p>
              <p>*V(did)</p>
              <p>(-): S + did + not + V(bare)</p>
              <p>(?): Did + S + V(bare) + ?</p>
              <p>*Be(was/ were)</p>
              <p>(-): S + was/were + not + ...</p>
              <p>(?): Was/ were + s + ...? </p>              
              </td>
              <td>
                <ul class="ml-[15px]">
                  <li class="list-style-dot">ago</li>
                  <li class="list-style-dot">last</li>
                  <li class="list-style-dot">yesterday</li>
                  <li class="list-style-dot">in + một mốc thời gian trong quá khứ (in 2000...)</li>
                </ul>
              </td>

            </tr>
            <tr><td colSpan={3}><p class="font-bold text-[1.5em]  text-shadow-h1">3. Thì tương lai đơn</p></td></tr>
            <tr>
                <td class="font-bold text-center" width={"40%"}>Cách dùng</td>
                <td class="font-bold text-center" width={"40%"} ><p >Công thức</p></td>
                <td class="font-bold text-center" width={"20%"}><p >Từ nhận biết</p></td>
            </tr>
            <tr>
              <td>
                <ul class="compare-list">
                  <li>Diễn tả những hành động sẽ xảy ra trong tương lai</li>
                  <li>Diễn tả những dự đoán</li>
                  <li>Diễn tả lời hứa</li>
                </ul>
              </td>
              <td>
              <p class="font-bold ">S + will + V(bare)</p>
              <p class="font-bold pb-3 pt-5">Thành lập phủ định và nghi vấn</p>
              <p>(-): S + will + not + V(bare)</p>
              <p>(?): Will + S + V(bare)?</p>
              </td>
              <td>
                <ul class="ml-[15px]">
                  <li class="list-style-dot">tomorrow</li>
                  <li class="list-style-dot">next</li>
                  <li class="list-style-dot">soon</li>
                  <li class="list-style-dot">in + một mốc thời gian (in an hour...)</li>
                </ul>
              </td>
            </tr>
            <tr><td colSpan={3}><p class="font-bold text-[1.5em]  text-shadow-h1">4. Thì hiện tại tiếp diễn</p></td></tr>
            <tr>
                <td class="font-bold text-center" width={"40%"}>Cách dùng</td>
                <td class="font-bold text-center" width={"40%"} ><p >Công thức</p></td>
                <td class="font-bold text-center" width={"20%"}><p >Từ nhận biết</p></td>
            </tr>
            <tr>
              <td><ul class="compare-list">
                <li>diễn tả hành động đang xảy ra tại thời điểm nói</li>
                <li>diễn tả hành động sẽ xảy ra trong tương lai(có kế hoạch từ trước)</li>
                <li>diễn tả sự thay đổi của tói quen</li>
                <li>diễn tả sự ca thán phàn nàn</li>
              </ul></td>
              <td>
              <p class="font-bold">S + am/ is/ are + Ving</p>
              <p class="font-bold pb-3 pt-5">Thành lập phủ định và nghi vấn</p>
              <p>(-): S + am/is/are + not + Ving</p>
              <p>(?):Am/ is/ are + S + Ving?</p>
              </td>
              <td>
                <ul class="ml-[15px]">
                  <li class="list-style-dot">now</li>
                  <li class="list-style-dot">at the momment</li>
                  <li class="list-style-dot">at present</li>
                  <li class="list-style-dot">right now</li>
                  <li class="list-style-dot">look/ hear (!)</li>

                </ul>
              </td>
            </tr>
            <tr><td colSpan={3}><p class="font-bold text-[1.5em]  text-shadow-h1">5. Thì quá khứ tiếp diễn</p></td></tr>
            <tr>
                <td class="font-bold text-center" width={"40%"}>Cách dùng</td>
                <td class="font-bold text-center" width={"40%"} ><p >Công thức</p></td>
                <td class="font-bold text-center" width={"20%"}><p >Từ nhận biết</p></td>
            </tr>
            <tr>
              <td><ul class="compare-list">
                <li>diễn tả hành động đang xảy ra tại một thời điểm xác định trong quá khứ</li>
                <li>diễn tả hành động đang xảy ra thì có hành động khác xen vào, hành động nào xảy ra trước chia thì quá khứ tiếp diễn, hành động nào xảy ra sao chia thì quá khứ</li>
              </ul></td>
              <td>
              <p class="font-bold">S + was/ were + Ving</p>
              <p class="font-bold pb-3 pt-5">Thành lập phủ định và nghi vấn</p>
              <p>(-): S + was/ were + not + Ving</p>
              <p>(?): Was/ were + S + Ving?</p>
              </td>
              <td>
                <ul class="ml-[15px]">
                  <li class="list-style-dot">giờ + trạng từ quá khứ (at 3 pm yesterday...)</li>
                  <li class="list-style-dot">at this/ that time + trạng từ quá khứ (at this time last week...)</li>
                  
                </ul>
              </td>
            </tr>
            <tr><td colSpan={3}><p class="font-bold text-[1.5em]  text-shadow-h1">6. Thì tương lai tiếp diễn</p></td></tr>
            <tr>
                <td class="font-bold text-center" width={"40%"}>Cách dùng</td>
                <td class="font-bold text-center" width={"40%"} ><p >Công thức</p></td>
                <td class="font-bold text-center" width={"20%"}><p >Từ nhận biết</p></td>
            </tr>
            <tr>
              <td><ul class="compare-list">
                <li>diễn tả hành động đang diễn ra tại một thời điểm cụ thể trong tương lai</li>
                <li>diễn tả hành động sẽ xảy ra trong tương lai thì có một hành động khác xen vào, hành động nào xảy ra trước thì chia tương lai tiếp diễn, hành động nào xảy ra sau thì chia thì hiện tại đơn. </li>
              </ul></td>
              <td>
              <p class="font-bold">S + will + be + Ving</p>
              <p class="font-bold pb-3 pt-5">Thành lập phủ định và nghi vấn</p>
              <p>(-): S + will + not + be + Ving</p>
              <p>(?): Will + S + be + Ving?</p>
              </td>
              <td>
                <ul class="ml-[15px]">
                  <li class="list-style-dot">giờ + trạng từ tương lai (at 3 pm tomorrow...)</li>
                  <li class="list-style-dot">at this/ that time + trạng từ tương lai (at this time next week...)</li>
                 
                </ul>
              </td>
            </tr>
            <tr><td colSpan={3}><p class="font-bold text-[1.5em]  text-shadow-h1">7. Thì hiện tại hoàn thành</p></td></tr>
            <tr>
                <td class="font-bold text-center" width={"40%"}>Cách dùng</td>
                <td class="font-bold text-center" width={"40%"} ><p >Công thức</p></td>
                <td class="font-bold text-center" width={"20%"}><p >Từ nhận biết</p></td>
            </tr>
            <tr>
              <td><ul class="compare-list">
                <li>diễn tả hành động xảy ra trong quá khứ nhưng không rõ thời gian</li>
                <li>diễn tả hành động lặp đi lặp lại nhiều lần trong quá khứ
                diễn tả hành động xảy ra trong quá khứ nhưng để lại dấu hiệu hoặc hậu quả ở hiện tại</li>
                <li>diễn tả những trải nghiệm</li>
                <li>diễn tả những hành động xảy ra trong quá khứ nhưng kéo dài tới hiện tại và vẫn còn có khả năng sẽ tiếp diễn trong tương lai</li>
              </ul></td>
              <td>
              <p class="font-bold">S + have/ has + V(pp)</p>
              <p>(have: I/ số nhiều)</p>
              <p>Has: số ít</p>
              <p class="font-bold pb-3 pt-5">Thành lập phủ định và nghi vấn</p>
              <p>(-): S + have/ has + not + V(pp)</p>
              <p>(?): Have/ Has + S + V(pp)</p>
              </td>
              <td>
                <ul class="ml-[15px]">
                  <li class="list-style-dot">for</li>
                  <li class="list-style-dot">sine</li>
                  <li class="list-style-dot">ever</li>
                  <li class="list-style-dot">never</li>
                  <li class="list-style-dot">so far</li>
                  <li class="list-style-dot">recently</li>
                  <li class="list-style-dot">lately</li>
                  <li class="list-style-dot">before(đứng cuối câu)</li>
                  <li class="list-style-dot">up to now/ until now</li>
                  <li class="list-style-dot">yet</li>
                  <li class="list-style-dot">just</li>
                  <li class="list-style-dot">already</li>
                </ul>
              </td>
            </tr>
            <tr><td colSpan={3}><p class="font-bold text-[1.5em]  text-shadow-h1">8. Thì quá khứ hoàn thành</p></td></tr>
            <tr>
                <td class="font-bold text-center" width={"40%"}>Cách dùng</td>
                <td class="font-bold text-center" width={"40%"} ><p >Công thức</p></td>
                <td class="font-bold text-center" width={"20%"}><p >Từ nhận biết</p></td>
            </tr>
            <tr>
              <td><ul class="compare-list">
                <li>diễn tả những hành động xảy ra và hoàn thành trước hành động khác trong quá khứ</li>
              </ul></td>
              <td>
              <p class="font-bold">S + had + V(pp)</p>
              <p class="font-bold pb-3 pt-5">Thành lập phủ định và nghi vấn</p>
              <p>(-): S + had + not + V(pp)</p>
              <p>(?): Had + S + V(pp)</p>
              </td>
              <td>
                <ul class="ml-[15px]">
                  <li class="list-style-dot">before/ by the time (trước chia quá khứ hòn thành , sau chia quá khứ đơn)</li>
                  <li class="list-style-dot">after (trước chia quá khứ đơn, sau chia quá khứ hoàn thành)</li>
                 
                </ul>
              </td>
            </tr>
            <tr><td colSpan={3}><p class="font-bold text-[1.5em]  text-shadow-h1">9. Thì tương lai hoàn thành</p></td></tr>
            <tr>
                <td class="font-bold text-center" width={"40%"}>Cách dùng</td>
                <td class="font-bold text-center" width={"40%"} ><p >Công thức</p></td>
                <td class="font-bold text-center" width={"20%"}><p >Từ nhận biết</p></td>
            </tr>
            <tr>
              <td><ul class="compare-list">
                <li>diễn tả một hành động sẽ d9uo77o5c hoàn thành trước khi một  hành động khác xảy ra</li>
              </ul></td>
              <td>
              <p class="font-bold">S + will + have + V(pp)</p>
              <p class="font-bold pb-3 pt-5">Thành lập phủ định và nghi vấn</p>
              <p>(-): S + will + not + have + V(pp)</p>
              <p>(?): Will + S + have + V(pp)</p>
              </td>
              <td>
                <ul class="ml-[15px]">
                  <li class="list-style-dot">by + trạng từ của tương lai (by tomorrow, by next week...)</li>                  

                </ul>
              </td>
            </tr>
            <tr><td colSpan={3}><p class="font-bold text-[1.5em]  text-shadow-h1">10. Thì hiện tại hoàn thành tiếp diễn</p></td></tr>
            <tr>
                <td class="font-bold text-center" width={"40%"}>Cách dùng</td>
                <td class="font-bold text-center" width={"40%"} ><p >Công thức</p></td>
                <td class="font-bold text-center" width={"20%"}><p >Từ nhận biết</p></td>
            </tr>
            <tr>
              <td><ul class="compare-list">
                <li>nhấn mạnh khoảng thời gian của một hành động đã xảy ra trong quá khứ và tiếp tục tới hiện tại (có thể tiếp diễn trong tương lai)</li>
              </ul></td>
              <td>
              <p class="font-bold">S + have/ has + been + Ving</p>
              <p class="font-bold pb-3 pt-5">Thành lập phủ định và nghi vấn</p>
              <p>(-): S + have/ has not + been + Ving</p>
              <p>(?): Have/ has + S + been + Ving?</p>
              </td>
              <td>
                <ul class="ml-[15px]">
                  <li class="list-style-dot">all day/ week...</li>
                  <li class="list-style-dot">almost every day this week...</li>
                  <li class="list-style-dot">in the past year...</li>
                  
                </ul>
              </td>
            </tr>
            <tr><td colSpan={3}><p class="font-bold text-[1.5em]  text-shadow-h1">11. Thì quá khứ hoàn thành tiếp diễn</p></td></tr>
            <tr>
                <td class="font-bold text-center" width={"40%"}>Cách dùng</td>
                <td class="font-bold text-center" width={"40%"} ><p >Công thức</p></td>
                <td class="font-bold text-center" width={"20%"}><p >Từ nhận biết</p></td>
            </tr>
            <tr>
              <td><ul class="compare-list">
                <li>nhấn mạnh một khoảng thời gian của một hành động trong quá khứ và kết thu1ctru7o71c một hành động quá khứ khác</li>
              </ul></td>
              <td>
              <p class="font-bold">S + had + been + Ving</p>
              <p class="font-bold pb-3 pt-5">Thành lập phủ định và nghi vấn</p>
              <p>(-): S + had + not + been + Ving</p>
              <p>(?): Had + S + have + been + Ving?</p>
              </td>
              <td>
                <ul class="ml-[15px]">
                  <li class="list-style-dot">until then</li>
                  <li class="list-style-dot">prior to that time</li>                  

                </ul>
              </td>
            </tr>
            <tr><td colSpan={3}><p class="font-bold text-[1.5em]  text-shadow-h1">12. Thì tương lai hoàn thành tiếp diễn</p></td></tr>
            <tr>
                <td class="font-bold text-center" width={"40%"}>Cách dùng</td>
                <td class="font-bold text-center" width={"40%"} ><p >Công thức</p></td>
                <td class="font-bold text-center" width={"20%"}><p >Từ nhận biết</p></td>
            </tr>
            <tr>
              <td><ul class="compare-list">
                <li>nhấn mạnh khoảng thời gian của một hành động sẽ đang xảy ra trong tương lai và kết thúc trước một hành động tương lai khác.</li>
              </ul></td>
              <td>
              <p class="font-bold">S + will + have + been + Ving</p>
              <p class="font-bold pb-3 pt-5">Thành lập phủ định và nghi vấn</p>
              <p>(-): S + will + not + have + been + Ving</p>
              <p>(?): Will + S + have + been + Ving?</p>
              </td>
              <td>                
              </td>
            </tr>
          </tbody>
          </table>  
          </div>
    )
}
export default Tenses;