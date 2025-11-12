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
    <h2>TÍNH CHẤT HÓA HỌC CỦA ACID:</h2>
    <p><b>1. Acid làm đổi màu chất chỉ thị:</b> Dung dịch acid làm đổi màu quỳ tím thành đỏ.</p>
    <p><b>2. Acid tác dụng với kim loại</b></p>
    <p>- Dung dịch acid loãng tác dụng được với một số kim loại đứng trước <span class="text-red-500"><b>H</b></span> trong dãy dưới đây tạo thành muối và giải phóng khí hiđro</p>
    <p class="text-center font-bold bg-[#ffff00]">K, Na, Ba, Ca, Mg, Al, Zn, Fe, Ni, Sn, Pb, H, Cu, Hg, Ag, Pt, A</p>
    <p><b>VD:</b></p>
    <p>1. 2HCl + Fe → FeCl2 + H</p>
    <p>2. 3H2SO4 (loãng) + 2Al → Al2(SO4)3 + 3H2</p>
    <p class="italic">Chú ý: Acid HNO3 và H2SO4 đặc tác dụng được với nhiều kim loại nhưng không giải phóng hiđro.</p>
    <p><b>3. Acid tác dụng với base tạo thành muối và nước</b></p>
    <p><b>VD:</b> H2SO4 + Cu(OH)2 → CuSO4 + 2H2O</p>
    <p>- Phản ứng của acid với base được gọi là <b>phản ứng trung hòa.</b></p>
    <p><b>4. Acid tác dụng với oxide base tạo thành muối và nước.</b></p>
    <p><b>VD:</b> Fe2O3 + 6HCl → 2FeCl3 + 3H2</p>
    <p>5. Acid tác dụng với muối tạo thành muối mới và acid mới.</p>
    <p class="italic">* Chú ý: Phản ứng của acid với muối chỉ xảy ra khi thỏa mãn điều kiện:<br/>
    - Tạo ra khí.(các muối tạo ra khí chủ yếu là muối Cacbonat chứa gốc CO3 và muối sunfit chứa gốc SO3)  <br/>
    - Tạo ra chất rắn (kết tủa): <b>Bảng tính tan để xác định chất kết tủa</b><br/>
    </p>
    <p><b>+ VD tạo chất khí:</b></p>
    <p>MgCO3 + 2HCl → MgCl2 + CO2 ↑ + H2O</p>
    <p>Na2SO3 + 2HCl → 2NaCl + SO2 ↑ + H2O</p>
    <p><b>Na2SO3 + 2HCl → 2NaCl + SO2 ↑ + H2O</b></p>
    <p>Na2SO3 + 2HCl → 2NaCl + SO2 ↑ + H2O</p>
    <p>HCl + AgNO3 → AgCl + HNO3</p>
    <p class="text-[#ff000]"><b>6. Tính chất của HNO3 và H2SO4 đặc</b></p>
    <p>Chú ý:</p>
    <p> - Acid HNO3 và H2SO4 đặc tác dụng được với nhiều kim loại nhưng không giải phóng hiđro mà giải phóng khí NO, NO2, SO2 tương ứng với acid</p>
    <p>- Acid HNO3 đặc, nguội và H2SO4 đặc, nguội không tác dụng được với kim loại Al và Fe</p>
    <p><b>VD:</b></p>
    <p>
      Fe + 4HNO3 (đặc) → Fe(NO3)3 + NO ↑ + 2H2O<br/>
      Fe + 6H2SO4 (đặc) → Fe2(SO4)3 + 3SO2 ↑ + 6H2O<br/>
      Al + 6H2SO4 (đặc) → Al2(SO4)3 + 3SO2 ↑ + 6H2O
    </p>
    <p><b>* Acid H2SO4 đặc có tính háo nước, khi tan trong nươc tỏa niều nhiệt nên cần lưu ý khi pha loãng acid.</b></p>
    <h2 class="font-bold text-[#ff0000]">CÁC DẠNG BÀI TẬP</h2>
    <p class="font-bold">DẠNG 1: TOÁN OXIDE BAZƠ TÁC DỤNG VỚI ACID</p>
    <p class="font-bold">Cách giải:</p>
    <table>
      <tr>
        <td>* PTHH</td><td></td>
      </tr>
      <tr>
        <td>R<sub>2</sub>O<sub>n</sub> + 2nHCl → 2RCl<sub>n</sub> + nH<sub>2</sub>O </td><td> {'<'}={'>'} O<sup>2-</sup><sub>oxit</sub> + 2H<sup>+</sup><sub>axit</sub> → H<sub>2</sub>O</td>
      </tr>
      <tr>
        <td>R<sub>2</sub>O<sub>n</sub> + nH<sub>2</sub>SO<sub>4</sub> → 2R<sub>2</sub>(SO<sub>4</sub>)<sub>n</sub> + nH<sub>2</sub>O </td><td></td>
      </tr>
    </table>
    <p>* Một số công thức giải toán thường gặp</p>
    <p>- Định luật bảo toàn khối lượng: m<sub>oxit</sub> + m<sub>axit</sub> = m<sub>M</sub> + m<sub>H2O</sub></p>
    <p>- n<sub>H<sup>+</sup>axit</sub> = 2n<sub>Oxit</sub></p>
    <h2 class="font-bold">DẠNG 2: TOÁN KIM LOẠI TÁC DỤNG VỚI ACID (HCl, H2SO4 LOÃNG)</h2>
    <p>Cách giải:</p>
    <p>* PTHH</p>
    <p><img alt='1' src={process.env.PUBLIC_URL + '/hoa/bai2_1.png'}  /></p>
    <h2 class="font-bold">DẠNG 3. TOÁN MUỐI CACBONAT TÁC DỤNG VỚI ACID</h2>
    <p>Cách giải:</p>
    <p><img alt='1' src={process.env.PUBLIC_URL + '/hoa/bai2_2.png'}  /></p>


</div>
    );
};

export default Bai2;