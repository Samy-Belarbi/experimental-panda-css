import { css, cx } from "../styled-system/css";

const main = css({
  position: "relative",
  margin: "90px 45%",
  textAlign: "center",
  height: "300px",
});

const ears = css({
  width: "30px",
  height: "30px",
  background: "$colorFaceParts",
  borderRadius: "50%",
  position: "absolute",
  left: 0,
  top: 0,
});

const leftEar = css({
  left: "0px",
});

const rightEar = css({
  left: "90px",
});

const head1 = css({
  width: "120px",
  height: "120px",
  background: "$colorHead",
  borderRadius: "50%",
  position: "relative",
});

const head2 = css({
  width: "125px",
  height: "70px",
  background: "$colorHead",
  borderRadius: "50%",
  position: "relative",
  bottom: "68px",
  right: "2px",
});

const eye = css({
  position: "relative",
  bottom: "145px",
});

const eyes = css({
  content: "",
  width: "14px",
  height: "14px",
  background: "$colorFaceParts",
  borderRadius: "50%",
  border: "2.5px solid token(colors.$colorHead)",
  position: "absolute",
  top: "3px",
  zIndex: 3,
});

const eyeLeft = css({
  left: "30px",
});

const eyeRight = css({
  left: "75px",
});

const eyePoint = css({
  content: "",
  width: "5px",
  height: "5px",
  background: "$colorHead",
  borderRadius: "50%",
  position: "absolute",
  top: "3px",
  zIndex: 3,
});

const nose = css({
  background: "$colorFaceParts",
  width: "17px",
  height: "10px",
  borderRadius: "50%",
  position: "absolute",
  bottom: "100px",
  left: "50px",
});

const mouth = css({
  width: "25px",
  height: "25px",
  borderRadius: "50%",
  borderBottom: "2px solid token(colors.$colorFaceParts)",
  position: "absolute",
  bottom: "85px",
  left: "47.5px",
  transition: "all 0.5s ease-in-out",
});

function App() {
  return (
    <div className={main}>
      <div className={cx(ears, leftEar)}></div>
      <div className={cx(ears, rightEar)}></div>
      <div
        className={css({
          position: "relative",
        })}
      >
        <div className={head1}></div>
        <div className={head2}></div>
        <div className={eye}>
          <div className={cx(eyeLeft, eyes)}>
            <div className={eyePoint}></div>
          </div>
          <div className={cx(eyeRight, eyes)}>
            <div className={eyePoint}></div>
          </div>
        </div>
        <div className={nose}></div>
        <div className={mouth}></div>
      </div>
    </div>
  );
}

export default App;
