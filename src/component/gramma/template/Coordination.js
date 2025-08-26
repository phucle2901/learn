import React from 'react';

const Coordination = () => {
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
              Sự phối thì
            </b>
          </h1> 
          <table width={"100%"} class="table-col table-col-top">
            <tbody>
            <tr>
                <td rowSpan={6} width={"10%"}  class="font-bold color-dard-puple">WHEN</td>
                <td rowSpan={2} width={"20%"} class="!align-middle">Diễn tả hành động xảy ra nối tiếp nhau</td>
                <td width={"70%"}>
                <ul class="ml-[15px]"><li class="list-style-square font-bold underline">Trong quá khứ:</li></ul>
                <p class="font-bold pt-3 pb-3 color-dard-puple">WHEN + S + V(quá khứ đơn), S + V(quá khứ đơn)</p>
                <p ><u>Ex:</u> When he <u>saw</u> me, he <u>smiled</u> at me</p>
                </td>
            </tr>
            <tr> 
                <td >
                <ul class="ml-[15px]"><li class="list-style-square font-bold underline">Trong tương lai:</li></ul>
                <p class="font-bold pt-3 pb-3 color-dard-puple">WHEN + S + V(hiện tại đơn), S + V(tương lai đơn)</p>
                <p><u>Ex:</u> When I <u>see</u> hime, I <u>will remind</u> him to call you.</p>
                </td>
            </tr> 
            <tr>                
                <td rowSpan={2} class="!align-middle">diễn tả một hành động đang xảy ra thì một hành động khác xen vào</td>
                <td class="align-middle">
                <ul class="ml-[15px]"><li class="list-style-square font-bold underline">Trong quá khứ:</li></ul>
                <p class="font-bold pt-3 pb-3 color-dard-puple">WHEN + S + V(quá khứ đơn), S + V(quá khứ tiếp diễn)</p>
                <p><u>Ex:</u> When I <u>came</u> to see her, she <u>was cooking</u> dinner.</p>
                </td>
            </tr> 
            <tr>
                <td>
                <ul class="ml-[15px]"><li class="list-style-square font-bold underline">Trong tương lai:</li></ul>
                <p class="font-bold pt-3 pb-3 color-dard-puple">WHEN + S + V(hiện tại đơn), S + V(tương lai tiếp diễn)</p>
                <p><u>Ex:</u> When you <u>come</u> in, your boss <u>will be waiting</u> for you there.</p>
                </td>
            </tr> 
            <tr>                
                <td rowSpan={2} class="!align-middle">diễn tả một hành động xảy ra xong trước một hành động khác</td>
                <td>
                <ul class="ml-[15px]"><li class="list-style-square font-bold underline">Trong quá khứ:</li></ul>
                <p class="font-bold pt-3 pb-3 color-dard-puple">WHEN + S + V(quá khứ đơn), S + V(quá khứ hoàn thành)</p>
                <p><u>Ex:</u> When I <u>arrived</u> at the airport, the plane <u>had taken</u> off.</p>
                </td>
            </tr> 
            <tr>
                <td>
                <ul class="ml-[15px]"><li class="list-style-square font-bold underline">Trong tương lai:</li></ul>
                <p class="font-bold pt-3 pb-3 color-dard-puple">WHEN + S + V(hiện tại đơn), S + V(tương lai hoàn thành)</p>
                <p><u>Ex:</u> When you <u>return</u> to the town, they <u>will have finished</u> building a new bridge.</p>
                </td>
            </tr> 


            <tr>
                <td rowSpan={2} class="font-bold color-dard-puple">AS SOON AS</td>
                <td rowSpan={2}  class="!align-middle">diễn tả hành động xảy ra nối tiếp nhau</td>
                <td width={"70%"}>
                <ul class="ml-[15px]"><li class="list-style-square font-bold underline">Trong quá khứ:</li></ul>
                <p class="font-bold pt-3 pb-3 color-dard-puple">AS SOON AS +S + V(quá khứ đơn), S + V(quá khứ đơn)</p>
                <p><u>Ex:</u> As soon as she <u>saw</u> amouse, she <u>shouted</u> and ran away</p>
                </td>
            </tr>
            <tr> 
                <td >
                <ul class="ml-[15px]"><li class="list-style-square font-bold underline">Trong tương lai:</li></ul>
                <p class="font-bold pt-3 pb-3 color-dard-puple">AS SOON AS +S + V(hiện tại đơn/ hiện tại hoàn thành), S + V(tương lai đơn)</p>
                <p><u>Ex:</u> I <u>will call</u> you as soon as I <u>have finished/ finished</u> the work.</p>
                </td>
            </tr> 


            <tr>  
                <td  class="font-bold color-dard-puple">SINCE</td>
                <td class="!align-middle">diễn tả nghĩa "từ khi"</td>
                <td class="align-middle">                
                <p class="font-bold pt-3 pb-3 color-dard-puple">S + V(hiện tại hoàn thành) + SINCE + V(quá khứ đơn)</p>
                <p><u>Ex:</u> We <u>have known</u> each other since we <u>were</u> ar hight school.</p>
                </td>
            </tr> 
            
            <tr>   
                <td  rowSpan={2} class="font-bold color-dard-puple">BY + TIME</td>             
                <td rowSpan={2} class="!align-middle">diễn tả hành động kết thúc tính đếm một điểm nào đó trong quá khứ/ tương lai</td>
                <td>
                <ul class="ml-[15px]"><li class="list-style-square font-bold underline">Trong quá khứ:</li></ul>
                <p class="font-bold pt-3 pb-3 color-dard-puple">By + trạng từ qu1 khứ + S + V(quá khứ hoàn thành)</p>
                <p><u>Ex:</u> By last month, we <u>had worked for the company for 9 years</u></p>
                </td>
            </tr> 
            <tr>
                <td>
                <ul class="ml-[15px]"><li class="list-style-square font-bold underline">Trong tương lai:</li></ul>
                <p class="font-bold pt-3 pb-3 color-dard-puple">BY + trạng từ tương lai + S + V(tương lai hoàn thành)</p>
                <p><u>Ex:</u> By next month, we <u>will have worked</u> for the company for 9 years</p>
                </td>
            </tr>  

            <tr>   
                <td  rowSpan={2} class="font-bold color-dard-puple">AT THIS/ THAT TIME</td>             
                <td rowSpan={2} class="!align-middle">diễn tả hành động đang xảy ra tại một thời điểm xác định trong quá khứ/ tương lai</td>
                <td>
                <ul class="ml-[15px]"><li class="list-style-square font-bold underline">Trong quá khứ:</li></ul>
                <p class="font-bold pt-3 pb-3 color-dard-puple">AT THIS/ THAT TIME + trạng từ của quá khứ + S + V(quá khứ tiếp diễn)</p>
                <p><u>Ex:</u> At this time last week, we <u>were preparing</u> for Tet.</p>
                </td>
            </tr> 
            <tr>
                <td>
                <ul class="ml-[15px]"><li class="list-style-square font-bold underline">Trong tương lai:</li></ul>
                <p class="font-bold pt-3 pb-3 color-dard-puple">AT THIS/ THAT TIME + trạng từ của tương lai + S + V(tương lai tiếp diễn)</p>
                <p><u>Ex:</u> At this next week, we <u>will be having</u> a big party in the garden.</p>
                </td>
            </tr>  

            <tr>   
                <td  rowSpan={2} class="font-bold color-dard-puple">BY THE TIME</td>             
                <td rowSpan={2} class="!align-middle">diễn tả nghĩa "lúc nào"</td>
                <td>
                <ul class="ml-[15px]"><li class="list-style-square font-bold underline">Trong quá khứ:</li></ul>
                <p class="font-bold pt-3 pb-3 color-dard-puple">BY THE TIME + S + V(quá khứ đơn), S + V(quá khứ hoàn thành)</p>
                <p><u>Ex:</u> By the time she <u>came</u> home, everyone <u>had gone</u> to bed.</p>
                </td>
            </tr> 
            <tr>
                <td>
                <ul class="ml-[15px]"><li class="list-style-square font-bold underline">Trong tương lai:</li></ul>
                <p class="font-bold pt-3 pb-3 color-dard-puple">BY THE TIME + S + V(hiện tại đơn), S + V(tương lai hoàn thành)</p>
                <p><u>Ex:</u> By the time she <u>comes</u> home, everyone <u>will have gone</u> to bed.</p>
                </td>
            </tr>  

            <tr>   
                <td  rowSpan={2} class="font-bold color-dard-puple">AFTER</td>             
                <td rowSpan={2} class="!align-middle">diễn tả hành động xảy ra rồi mới tới hành động khác</td>
                <td>
                <ul class="ml-[15px]"><li class="list-style-square font-bold underline">Trong quá khứ:</li></ul>
                <p class="font-bold pt-3 pb-3 color-dard-puple">AFTER + S + V(quá khứ hoàn thành), S + V(quá khứ đơn)</p>
                <p><u>Ex:</u> After she <u>had done</u> her homework, she <u>went</u> out for a walk.</p>
                </td>
            </tr> 
            <tr>
                <td>
                <ul class="ml-[15px]"><li class="list-style-square font-bold underline">Trong tương lai:</li></ul>
                <p class="font-bold pt-3 pb-3 color-dard-puple">AFTER + S + V(hiện tại hoàn thành), S + V(hiện tại đơn)</p>
                <p><u>Ex:</u> After she <u>has done</u> her homework, she <u>goes</u> out for a walk.</p>
                </td>
            </tr>  

            <tr>   
                <td  rowSpan={2} class="font-bold color-dard-puple">BEFORE</td>             
                <td rowSpan={2} class="!align-middle">diễn tả một hành động xảy ra xong trước khi hành động khác tới</td>
                <td>
                <ul class="ml-[15px]"><li class="list-style-square font-bold underline">Trong quá khứ:</li></ul>
                <p class="font-bold pt-3 pb-3 color-dard-puple">BEFORE + S + V(quá khứ đơn), S + V(quá khứ hoàn thành)</p>
                <p><u>Ex:</u> Before she <u>went</u> to bed, she <u>had locked</u> all the doors</p>
                </td>
            </tr> 
            <tr>
                <td>
                <ul class="ml-[15px]"><li class="list-style-square font-bold underline">Trong tương lai:</li></ul>
                <p class="font-bold pt-3 pb-3 color-dard-puple">BEFORE + S + V(hiện tại đơn), S + V(tương lai hoàn thành)</p>
                <p><u>Ex:</u> Hurry up or the film <u>will have ended</u> before we <u>go</u> to the movie.</p>
                </td>
            </tr>  

            <tr>   
                <td  class="font-bold color-dard-puple">UNTIL/ TILL</td>             
                <td  class="!align-middle">diễn tả nghĩa "cho tới khi"</td>
                <td>                
                <p class="font-bold pt-3 pb-3 color-dard-puple">S + V(tương lai đơn)/ V(bare)/ DON'T + V(bare) + UNTILL/TILL S + V(hiện tại đơn/ hiện tại hoàn thành)</p>
                <p><u>Ex:</u> I <u>will wait</u> for you until it <u>is</u> possible.<br/>
                <u>Wait</u> here until I <u>come</u> back</p>
                </td>
            </tr> 
            
            </tbody>
          </table> 
        </div>
    );
};

export default Coordination;
