import React from 'react';

const Bai2 = () => {
    return (
        <div style={{
            padding: "0.8em",
            border: "1px solid #ccc",
            borderRadius: "5px",
            background: "#fff9f9",
            marginBottom: "1em",
          }}>
        <h1 class="text-center text-[1.7em] mb-5 text-shadow-h1">
          <b>Cách gọi tên acid</b>
        </h1>
        <p class="text-shadow-h1 text-[1.5em] "><b>1. Axit không có oxi</b></p>        
        <p class="pb-5">Acid không chứa oxygen là acid chỉ gồm hai nguyên tố gồm hydrogen (H) kết hợp với một phi kim. Cách đọc tên như sau:</p>
        <p class="text-center text-[#ff0000] font-bold ">Hydro  + Tên gốc nguyên tố phi kim + ic +aicd</p>
        <table class="MsoTableGrid" border="1" cellspacing="0">
<tbody>
<tr>
<td valign="top" width="85">
<p><strong>Acid</strong></p>
</td>
<td valign="top" width="161">
<p><strong>Tên</strong></p>
</td>
</tr>
<tr>
<td valign="top" width="85">
<p>HF</p>
</td>
<td valign="top" width="161">
<p>hydrofluoric acid</p>
</td>
</tr>
<tr>
<td valign="top" width="85">
<p>HCl</p>
</td>
<td valign="top" width="161">
<p>Hydrochloric acid</p>
</td>
</tr>
<tr>
<td valign="top" width="85">
<p>HBr</p>
</td>
<td valign="top" width="161">
<p>Hydrobromic acid</p>
</td>
</tr>
<tr>
<td valign="top" width="85">
<p>HI</p>
</td>
<td valign="top" width="161">
<p>hydroiodic acid</p>
</td>
</tr>
<tr>
<td valign="top" width="85">
<p>H<sub>2</sub>S</p>
</td>
<td valign="top" width="161">
<p>hydrosulfuric acid</p>
</td>
</tr>
<tr>
<td valign="top" width="85">
<p>HCN</p>
</td>
<td valign="top" width="161">
<p>hydrocyanic acid</p>
</td>
</tr>
</tbody>
</table>
<p class="text-shadow-h1 text-[1.5em] pt-5"><b>2. Cách gọi tên acid có chứa oxygen</b></p>
<p class="text-center text-[#ff0000] font-bold pt-5 pb-5">Tên gốc nguyên tớ phi kim + -ous hoặc -ic + acid</p>
<p><b>Trong đó:</b></p>
<p>- Hậu tố<strong> -ic</strong> được sử dụng nếu nguyên tố ở trạng thái oxi hóa <strong>cao</strong>.</p>
<p class="pt-5">- Hậu tố <strong>-ous </strong>được sử dụng nếu nguyên tố ở trạng thái oxi hóa <strong>thấp </strong>hơn.</p>
<table class="table table-bordered table-hover ">
        <tbody>
          <tr>
            <td valign="top" >
              <p>
                <strong>Acid</strong>
              </p>
            </td>
            <td valign="top" >
              <p>
                <strong>Tên</strong>
              </p>
            </td>
            <td valign="top" >
              <p>
                <strong>Ghi chú</strong>
              </p>
            </td>
          </tr>
          <tr>
            <td valign="top" >
              <p>
                HNO<sub>3</sub>
              </p>
            </td>
            <td valign="top" >
              <p>
                nitr<strong>ic</strong> acid
              </p>
            </td>
            <td rowSpan={2} valign="top" >
              <p>Nitrogen chỉ hình thành hai acid này</p>
            </td>
          </tr>
          <tr>
            <td valign="top" >
              <p>
                HNO<sub>2</sub>
              </p>
            </td>
            <td valign="top" >
              <p>
                nitr<strong>ous</strong> acid
              </p>
            </td>
          </tr>
          <tr>
            <td valign="top" >
              <p>
                H<sub>2</sub>SO<sub>4</sub>
              </p>
            </td>
            <td valign="top" >
              <p>
                sulfur<strong>ic</strong> acid
              </p>
            </td>
            <td rowSpan={2} valign="top" >
              <p >
                Đây là hai acid chứa oxygen phổ biến nhất của sulfur
              </p>
            </td>
          </tr>
          <tr>
            <td valign="top" >
              <p>
                H<sub>2</sub>SO<sub>3</sub>
              </p>
            </td>
            <td valign="top" >
              <p>
                sulfur<strong>ous</strong> acid
              </p>
            </td>
          </tr>
          <tr>
            <td valign="top" >
              <p>
                H<sub>3</sub>PO­<sub>4</sub>
              </p>
            </td>
            <td valign="top" >
              <p>
                phosphor<strong>ic</strong> acid
              </p>
            </td>
            <td rowSpan={3} valign="top" >
              <p>&nbsp;</p>
            </td>
          </tr>
          <tr>
            <td valign="top" >
              <p>
                H<sub>3</sub>PO<sub>3</sub>
              </p>
            </td>
            <td valign="top" >
              <p>
                phosphor<strong>ous</strong> acid
              </p>
            </td>
          </tr>
          <tr>
            <td valign="top" >
              <p>
                H<sub>3</sub>PO<sub>2</sub>
              </p>
            </td>
            <td valign="top" >
              <p>
                <strong>hypo</strong>phosphor<strong>ous</strong> acid
              </p>
            </td>
          </tr>
          <tr>
            <td valign="top" >
              <p>
                HClO<sub>4</sub>
              </p>
            </td>
            <td valign="top" >
              <p>
                <strong>per</strong>chlor<strong>ic</strong> acid
              </p>
            </td>
            <td rowSpan={4} valign="top" >
              <p>+ Với HClO4 nhiều hơn một nguyên tử oxygen so với chloric acid HClO3, chlorine có số oxi hóa cao hơn và tiền tố per được thêm vào để gọi tên này</p>
              <p>+ Với HClO chứa ít hơn một nguyên tử oxygen so với chlorous acid (HClO2), chlorine có số oxi hóa thấp hơn và tiền tố hypo được thêm vào để gọi tên acid này</p>
            </td>
          </tr>
          <tr>
            <td valign="top" >
              <p>
                HClO<sub>3</sub>
              </p>
            </td>
            <td valign="top" >
              <p>
                chlor<strong>ic</strong> acid
              </p>
            </td>
          </tr>
          <tr>
            <td valign="top" >
              <p>
                HClO<sub>2</sub>
              </p>
            </td>
            <td valign="top" >
              <p>
                chlor<strong>uos</strong> acid
              </p>
            </td>
          </tr>
          <tr>
            <td valign="top" >
              <p>HClO</p>
            </td>
            <td valign="top" >
              <p>
                <strong>hypo</strong>chlor<strong>uos</strong> acid
              </p>
            </td>
          </tr>
          <tr>
            <td valign="top" >
              <p>
                HBrO<sub>4</sub>
              </p>
            </td>
            <td valign="top" >
              <p>
                <strong>Per</strong>brom<strong>ic</strong> acid
              </p>
            </td>
            <td rowSpan={6} valign="top" >
              <p>
                HBrO<sub>2</sub> và HIO<sub>2</sub> không bền và không tồn tại
              </p>
            </td>
          </tr>
          <tr>
            <td valign="top" >
              <p>
                HBrO<sub>3</sub>
              </p>
            </td>
            <td valign="top" >
              <p>
                Brom<strong>ic</strong> acid
              </p>
            </td>
          </tr>
          <tr>
            <td valign="top" >
              <p>HBrO</p>
            </td>
            <td valign="top" >
              <p>
                <strong>Hypo</strong>brom<strong>ous </strong>acid
              </p>
            </td>
          </tr>
          <tr>
            <td valign="top" >
              <p>
                HIO<sub>4</sub>
              </p>
            </td>
            <td valign="top" >
              <p>
                <strong>Per</strong>iod<strong>ic</strong> acid
              </p>
            </td>
          </tr>
          <tr>
            <td valign="top" >
              <p>
                HIO<sub>3</sub>
              </p>
            </td>
            <td valign="top" >
              <p>
                Iod<strong>ic</strong> acid
              </p>
            </td>
          </tr>
          <tr>
            <td valign="top" >
              <p>HIO</p>
            </td>
            <td valign="top" >
              <p>
                <strong>Hypo</strong>iod<strong>ous</strong> acid
              </p>
            </td>
          </tr>
          <tr>
            <td valign="top" >
              <p>
                CO<sub>2</sub> + H<sub>2</sub>O (H<sub>2</sub>CO<sub>3</sub>)
              </p>
            </td>
            <td valign="top" >
              <p>
                Carbon<strong>ic </strong>acid
              </p>
            </td>
            <td valign="top" >
              <p>&nbsp;</p>
            </td>
          </tr>
          <tr>
            <td valign="top" >
              <p>
                H<sub>3</sub>BO<sub>3</sub>
              </p>
            </td>
            <td valign="top" >
              <p>
                bor<strong>ic</strong> acid
              </p>
            </td>
            <td valign="top" >
              <p>&nbsp;</p>
            </td>
          </tr>
        </tbody>
      </table>
    <p><b>Hydrochloric acid (HCl)</b></p>  
    <p>Dung dịch hydrochloric acid (HCl) là chất lỏng không màu. HCl được sử dụng nhiều trong ngành công nghiệp: tẩy gỉ sắt, Tổng hợp chất hữa cơ, xử lý pH nước bể bơi</p>    
    <p><b>Acetic acid (CH<sub>3</sub>COOH)</b></p>
    <p>Acetic acid là chất lỏng, không màu, có vị chua. Giấm ăn có chứa acetic acid với nồng độ 2 – 5%. Ứng dụng của acetic acid: sản xuất sợi poly(vinyl acetate), sản xuất sơn, ch61 biến thực phẩm, dược phẩm</p>
    <p><b>Sulfuric acid (H<sub>2</sub>SO<sub>4</sub>)</b></p>
    <p>Sulfuric acid là chất lỏng không màu, không bay hơi, sánh như dầu ăn, nặng gần gấp hai lần nước, tan vô hạn trong nước và tỏa nhiều nhiệt.Sulfuric acid là một trong các hóa chất được sử dụng trong nhiều ngành công nghiệp.</p>
</div>
    );
};

export default Bai2;