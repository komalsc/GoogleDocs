import React, { useState, useRef } from "react";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { jsPDF } from "jspdf";
import PaletteTwoToneIcon from "@mui/icons-material/PaletteTwoTone";
import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";
import PrintIcon from "@mui/icons-material/Print";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
// import GoogleIcon from "@mui/icons-material/Google";
import FormatSizeIcon from "@mui/icons-material/FormatSize";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatIndentDecreaseIcon from "@mui/icons-material/FormatIndentDecrease";
import FormatIndentIncreaseIcon from "@mui/icons-material/FormatIndentIncrease";
import SubscriptIcon from "@mui/icons-material/Subscript";
import SuperscriptIcon from "@mui/icons-material/Superscript";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
// import TextFormatIcon from "@mui/icons-material/TextFormat";
// import FormatShapesIcon from "@mui/icons-material/FormatShapes";
import FormatColorTextIcon from "@mui/icons-material/FormatColorText";
// import LooksOneIcon from "@mui/icons-material/LooksOne";
// import TextDecreaseIcon from "@mui/icons-material/TextDecrease";
// import TextIncreaseIcon from "@mui/icons-material/TextIncrease";
import style from "./Navbar.module.css";
// import LooksTwoIcon from "@mui/icons-material/LooksTwo";
// import Looks3Icon from "@mui/icons-material/Looks3";
// import Looks4Icon from "@mui/icons-material/Looks4";
// import Looks5Icon from "@mui/icons-material/Looks5";
// import Looks6Icon from "@mui/icons-material/Looks6";
function Navbar(props) {
  const inputRef = useRef(null);
  const [show, setShow] = useState(false);
  const [bgcolor, setbgColor] = useState("");
  const [value, setvalue] = useState("Arial");
  const [show1, setShow1] = useState(false);
  const [color, setColor] = useState("");

  const doc = new jsPDF();

  props.handleColor(color);
  props.handlebackgroundhighlight(bgcolor);

  document.execCommand("fontName", "", value);
  // console.log(typeof(value))

  function handleChange(e) {
    setvalue(e.target.value);
  }

  //for down-load pdf

  function click() {
    doc.text(props.save, 10, 10);
    doc.save("a4.pdf");
  }

  //background image

  function handleImageOpen() {
    inputRef.current.click();
  }

  function captureImage(event) {
    if (event.target.files[0]) {
      console.log(event.target.files[0]);
      document.execCommand(
        "insertImage",
        "",
        URL.createObjectURL(event.target.files[0])
      );
    }
  }

  return (
    <div className={style.main}>
      <div className={style.container1}>
        <div className={style.fontstyle}>
          {/* <input type="file"></input> */}

          {/* // print icon */}
          {/* <p onClick={click}>click</p> */}
          {/* 
        undo redo text */}

          <UndoIcon onClick={props.undoText} />
          <RedoIcon sx={{ fontSize: "22" }} onClick={props.redoText} />

          <PrintIcon
            onClick={props.print}
            style={{ fontSize: "21", marginLeft: "5", marginRight: "5" }}
          />

          <button className={style.buttonstyle} onClick={props.decvalue}>
            -
          </button>
          <input className={style.inputstyle} type="text" value={props.icon} />
          <button className={style.buttonstyle} onClick={props.incvalue}>
            +
          </button>
        </div>

        <FormatBoldIcon style={{ fontSize: "22" }} onClick={props.handlebold} />
        <FormatItalicIcon
          style={{ fontSize: "22" }}
          onClick={props.handleItalic}
        />
        <FormatUnderlinedIcon
          style={{ fontSize: "22" }}
          onClick={props.handleUnderline}
        />

        {/* for font color */}

        <span className={style.colorbox}>
          <FormatColorTextIcon
            style={{ fontSize: "18" }}
            onClick={() => setShow1(!show1)}
          />
          {show1 ? (
            <>
              <input
                className={style.inputbox}
                type="color"
                onChange={(e) => setColor(e.target.value)}
              />
            </>
          ) : null}
        </span>
      </div>
      {/* // background color */}
      {/* <div> */}
      <div className={style.container1}>
        <AddPhotoAlternateIcon
          onClick={handleImageOpen}
          style={{
            fontSize: "20",
            marginLeft: "7px",
            marginTop: "-0.5rem",
            fontWeight: "lighter",
          }}
        />
        <input onChange={captureImage} hidden ref={inputRef} type="file" />

        {/* //width of div where we write */}

        {/* <div className={style.container1}> */}
        <span className={style.widthcontrol}>{props.size}</span>
        <KeyboardArrowUpIcon
          style={{ fontSize: "22" }}
          onClick={() => <>{setShow(!show)}</>}
        />
        {show ? (
          <div className={style.fontlist}>
            <p
              onClick={() => (
                <>
                  {props.handleFontSizeh1("25% ")}, {setShow(!show)}
                </>
              )}
            >
              25%
            </p>
            <p
              onClick={() => (
                <>
                  {props.handleFontSizeh1("50% ")}, {setShow(!show)}
                </>
              )}
            >
              50%
            </p>
            <p
              className={style.widtharea}
              onClick={() => (
                <>
                  {props.handleFontSizeh1("75% ")}, {setShow(!show)}
                </>
              )}
            >
              75%
            </p>
            <p
              onClick={() => (
                <>
                  {props.handleFontSizeh1("100% ")}, {setShow(!show)}
                </>
              )}
            >
              100%
            </p>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className={style.container1}>
        <div className={style.fontsizecontainer}>
          <FormatSizeIcon
            style={{ fontSize: "22" }}
            onClick={() => setShow(!show)}
          />
        </div>
      </div>

      <span className={style.container1}>
        <FormatAlignCenterIcon
          style={{ fontSize: "22" }}
          onClick={props.handlejustifyCenter}
        />
        <FormatAlignLeftIcon
          style={{ fontSize: "22" }}
          onClick={props.handlejustifyLeft}
        />
        <FormatAlignRightIcon
          style={{ fontSize: "22" }}
          onClick={props.handlejustifyRight}
        />
      </span>
      <span className={style.container1}>
        <SubscriptIcon onClick={props.clickSubscript} />
        <SuperscriptIcon onClick={props.clickSuperscript} />
      </span>
      <span className={style.container1}>
        <FormatIndentDecreaseIcon style={{ fontSize: "22" }} />
        <FormatIndentIncreaseIcon style={{ fontSize: "22" }} />
      </span>
      <span className={style.container1}>
        <p>Normal</p>
        <UnfoldMoreIcon onClick={props.handleremoveFormat} />
      </span>
      {/* <span className={style.container1}>
        <p>Normal</p>
        <UnfoldMoreIcon />
      </span> */}

      {/* background color  */}

      <div className={style.container1}>
        <PaletteTwoToneIcon
          // onClick={props.handlebackgroundhighlight}

          onClick={() => setShow1(!show1)}
        />
        {show1 ? (
          <>
            <input
              className={style.inputbox}
              type="color"
              onChange={(e) => setbgColor(e.target.value)}
            />
          </>
        ) : null}

        {/* // font---family of text */}

        <span className={style.container1}>
          <select value={value} onChange={handleChange}>
            <option value="sans serif">Arial</option>
            <option value="Calibri">Calibri</option>
            <option value="sans serif">sans serif</option>
            <option value="Lucida Sans">Lucida Sans</option>
            <option value="Franklin Gothic Medium">
              Franklin Gothic Medium
            </option>
            <option value="Avanta Garde">Avanta Garde</option>
          </select>
        </span>
      </div>
    </div>
  );
}

export default Navbar;
