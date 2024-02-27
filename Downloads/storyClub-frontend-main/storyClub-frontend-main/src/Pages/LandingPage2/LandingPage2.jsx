import React, { useEffect, useRef } from "react";
import styles from "./LandingPage2.module.css";
import left from "./Images/section2/left.png";
import right from "./Images/section2/right.png";
import { useNavigate } from "react-router-dom";
import { RiContactsBookLine } from "react-icons/ri";
import { AiOutlineMessage } from "react-icons/ai";
import { TbLogin2 } from "react-icons/tb";
import { PiTelegramLogo } from "react-icons/pi";

const LandingPage2 = () => {
  const navigateTo = useNavigate();
  const marqueeRef = useRef(null);

  const handleMouseOver = () => {
    marqueeRef.current.stop();
  };

  const handleMouseOut = () => {
    marqueeRef.current.start();
  };

  const h1Ref = useRef(null);
  const pRef = useRef(null);

  useEffect(() => {
    const spanText = (text) => {
      let string = text.innerText;
      let spanned = "";
      for (let i = 0; i < string.length; i++) {
        if (string.substring(i, i + 1) === " ")
          spanned += string.substring(i, i + 1);
        else spanned += "<span>" + string.substring(i, i + 1) + "</span>";
      }
      text.innerHTML = spanned;

      let animations = text.querySelectorAll("span");
      animations.forEach((letter, i) => {
        letter.style.animationDelay = i * 0.1 + "s";
      });
    };

    if (h1Ref.current) {
      spanText(h1Ref.current);
    }

    if (pRef.current) {
      spanText(pRef.current);
    }
  }, []);
  return (
    <div className={styles.landingPage2}>
      {/* section 1 */}

      {/* <div className={styles.section4}>
        <div className={styles.publish}>
          <LuSend />
          <p>Publish your stories to reach millions</p>
        </div>
        <div className={styles.publish}>
          <TbLogin2 />
          <p>
            Get access to our stories rs 49 <sub> / month*</sub>
          </p>
        </div>
      </div> */}
      {/* section 2 */}
      <div className={styles.section2}>
        <div className={styles.section2Content}>
          <div>
            <h1 ref={pRef} className={styles.animation}>
              Connecting
            </h1>
            {/* <h1 ref={h1Ref} className={styles.animation}>
              
            </h1> */}
            <h1 ref={h1Ref} className={styles.animation}>
              StoryWriters and
            </h1>
            <h1 ref={h1Ref} className={styles.animation}>
              StoryTellers!
            </h1>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "1.5rem",
              fontWeight: "bold",
              justifyContent: "center",
              marginTop: "-1rem",
            }}
          >
            <p style={{ color: "red" }}>-</p>
            <p>-----</p>
            <p style={{ color: "red" }}>-</p>
          </div>
          <p>Come join our club</p>
        </div>
        <div className={styles.section2Buttons}>
          <button
            className={styles.btn}
            onClick={() => navigateTo("/storyTellers/page1")}
          >
            I am a StoryTeller
          </button>
          <button
            className={styles.btn}
            onClick={() => navigateTo("/storyWriters/page1")}
          >
            I am a StoryWriter
          </button>
        </div>
        <div className={styles.section2Images}>
          <div className={styles.left}>
            <img src={left} alt="leftImg" />
          </div>
          <div className={styles.right}>
            <img src={right} alt="rightImg" />
          </div>
        </div>
      </div>
      <div className={styles.bottomYellowBoxCon}>
        <div className={styles.bottomYellowBox}>
          <TbLogin2 /> <p>Publish your stories to reach millions</p>
        </div>
        <div className={styles.bottomYellowBox}>
          <PiTelegramLogo />
          <p>Publish your stories to reach millions</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage2;
