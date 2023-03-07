import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import style from "./Home.module.css";
import { jsPDF } from "jspdf";
import DownloadIcon from "@mui/icons-material/Download";
import html2canvas from "html2canvas";
import Navupper from "../2ndfolder/Navbar1/Navbar1";

function Home() {
  // const [selectedWord, setSelectedWord] = useState('');

  const [icon, seticon] = useState(0);
  const [size, setsize] = useState("75%");
  const [save, setsave] = useState("");
  // const doc = new jsPDF();

  async function downloadFile() {
    const sheetContent = document.getElementById("edit");
    const canvas = await html2canvas(sheetContent, { dpi: 300 });
    const imageData = canvas.toDataURL("image/png", 1.0);
    const pdfDoc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
      compress: false,
    });
    pdfDoc.addImage(imageData, "PNG", 0, 0, 210, 297, "", "FAST");
    pdfDoc.save(`${save}.pdf`);
  }

  // undo redo text
  function undoText() {
    document.execCommand("undo");
  }
  function redoText() {
    document.execCommand("redo");
  }
  // front size inc. and dec. function
  function incvalue() {
    seticon(icon + 1);
    document.execCommand("fontSize", "", icon);
  }

  function decvalue() {
    if (icon > 0) seticon(icon - 1);
    document.execCommand("fontSize", "", icon);
  }

  // sub and sup function

  function clickSubscript() {
    document.execCommand("subscript");
  }
  function clickSuperscript() {
    document.execCommand("superscript");
  }

  function printpdf() {
    window.print();
  }

  function handleFontSizeh1(x) {
    setsize(x);
  }

  // function handleSelection() {
  //   const selection = window.getSelection();
  //   const selectedWord = selection.toString().trim();
  //   setSelectedWord(selectedWord);
  // }

  function handleBold() {
    document.execCommand("bold");
  }
  function handleUnderline() {
    document.execCommand("underline");
  }

  function handleItalic() {
    document.execCommand("italic");
  }

  function handlebackgroundhighlight(bgcolor) {
    document.execCommand("backColor", "", bgcolor);
  }
  // function handleSelection(e){
  //   setsave(data)
  //   // console.log(e)

  // }

  // font-color

  function handleColor(color) {
    document.execCommand("foreColor", "", color);
  }

  // for text-alignment

  function handlejustifyCenter() {
    document.execCommand("justifyCenter");
  }
  function handlejustifyLeft() {
    document.execCommand("justifyLeft");
  }
  function handlejustifyRight() {
    document.execCommand("justifyRight");
  }
  function handleremoveFormat() {
    document.execCommand("removeFormat");
  }

  return (
    <>
      <Navupper />
      <div className={style.main}>
        <Navbar
          // for undo
          undoText={undoText}
          // for redo
          redoText={redoText}
          //for print
          print={printpdf}
          // for font-size
          icon={icon}
          decvalue={decvalue}
          incvalue={incvalue}
          // for bold
          handlebold={handleBold}
          // for under-line text
          handleUnderline={handleUnderline}
          //fot italic
          handleItalic={handleItalic}
          // for background color
          handlebackgroundhighlight={handlebackgroundhighlight}
          // width of div

          handleFontSizeh1={handleFontSizeh1}
          size={size}
          //for download pdf
          save={save}
          clickSubscript={clickSubscript}
          clickSuperscript={clickSuperscript}
          handleColor={handleColor}
          handlejustifyCenter={handlejustifyCenter}
          handlejustifyLeft={handlejustifyLeft}
          handlejustifyRight={handlejustifyRight}
          handleremoveFormat={handleremoveFormat}
        />
        {/* {save} */}
        <div className={style.box} style={{ width: size }}>
          <div
            id="edit"
            className={style.text}
            // onChange={handleSelection}
            onInput={(e) => setsave(e.currentTarget.textContent)}
            contentEditable={true}
          >
            {" "}
            @Type here
          </div>
        </div>
        <button onClick={downloadFile} className={style.floaticon}>
          <DownloadIcon style={{ fontSize: "35px", color: "primary" }} />
        </button>
      </div>
    </>
  );
}

export default Home;
