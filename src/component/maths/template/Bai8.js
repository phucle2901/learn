import React from 'react';

// import { Document, Page, pdfjs } from 'react-pdf';
// import 'react-pdf/dist/Page/AnnotationLayer.css';
// import 'react-pdf/dist/Page/TextLayer.css';
// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   'pdfjs-dist/build/pdf.worker.min.mjs',
//   import.meta.url,
// ).toString();

const Bai8 = () => {
  //const [numPages, setNumPages] = useState(null);
  //const [spageNumber, setSPageNumber] = useState(1);

  // function onDocumentLoadSuccess({ numPages }) {
  //   setNumPages(numPages);
  // }


    return (
        <div class="leading-[35px]" style={{
            padding: "0.8em",
            border: "1px solid #ccc",
            borderRadius: "5px",
            background: "#ffffff",
            marginBottom: "1em",
            
          }}>
            <h1 class="text-center text-[1.7em] mb-5 text-shadow-h1">
          <b>Chia đa thức với đa thức</b>
        </h1>  
        {/* <Document
        file="http://localhost:3000/learn/1.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={(err) => console.error('PDF error:', err)}
      >
        <Page pageNumber={1} />
      </Document> */}
        
        
        <p class="font-bold">Cách làm:</p>
        <p><u>Bước 1.</u> Sắp xếp các số hạng theo thứ tự giảm dần của chỉ số (nếu cần). Viết các số hạng còn thiếu với hệ số bằng 0.</p>
        <p><u>Bước 2.</u> Đối với số hạng đầu tiên của thương, chia số hạng đầu tiên của số bị chia cho số hạng đầu tiên của số chia.</p>
        <p><u>Bước 3.</u> Nhân số hạng này của thương với số chia để được tích.</p>
        <p><u>Bước 4.</u> Trừ tích này khỏi số bị chia, và hạ số hạng tiếp theo (nếu có). Hiệu và số hạng được hạ xuống sẽ tạo thành số bị chia mới.</p>
        <p><u>Bước 5.</u> Thực hiện quy trình này cho đến khi bạn nhận được số dư, có thể bằng 0 hoặc có chỉ số nhỏ hơn số chia.</p>
        <p class="font-bold">Ví dụ:</p>
        <p>Thực hiện phép chia a(x): b(x).  Với a(x) = 6x4 - 9x2 + 3x + 6, b(x) = x2 - 2 </p>
        <p><b>Hướng dẫn:</b></p>
        <p><b>B1:</b>a(x) = 6x<sup>4</sup> + 0x<sup>3</sup> - 9x<sup>2</sup> + 3x + 6 ; b(x) = x<sup>2</sup> + 0x - 2</p>
        <p><img alt='1' src={process.env.PUBLIC_URL + '/toan/Bai8_1.png'}/></p>
        <p><b>B2:</b> Chia 6x<sup>4</sup> cho x<sup>2</sup> được 6x<sup>2</sup></p>
        <p><img alt='1' src={process.env.PUBLIC_URL + '/toan/Bai8_2.png'}/></p>
        <p><b>B3:</b> Nhân số chia với 6x<sup>2</sup>.</p>
        <p><b>B4:</b> Thự hiện phép trừ.</p>
        <p><img alt='1' src={process.env.PUBLIC_URL + '/toan/Bai8_3.png'}/></p>
        <p>Chia 3x<sup>2</sup> cho x<sup>2</sup> để được hạng tử tiếp theo của thương.</p> 
        <p><b>B5:</b></p>       
        <p><img alt='1' src={process.env.PUBLIC_URL + '/toan/Bai8_4.png'}/></p>
        <p>Vì lũy thừa của số bị chia nhỏ hơn số chia, ta được số dư cần tìm. Lưu ý rằng vì số dư ta nhận được là một số khác 0, nên ta có thể nói rằng x² - 2 không phải là ước của 6x⁴ - 9x² + 3x + 6. Do đó, thương là 6x² + 3 và số dư là 3x.</p>

        </div>
    );
};

export default Bai8;