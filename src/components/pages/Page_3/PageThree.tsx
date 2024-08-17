import * as style from "./PageThree.module.css"
import "../../Global/Global.css"
import global from "../../../assets/global/global.png"
import logo from "../../../assets/global/Shape 1.png"
import bottle from "../../../assets/3_box/bottle.png"
import titleCopy from "../../../assets/3_box/title copy.png"
import titleCopy2 from "../../../assets/3_box/title copy 2.png"
import icon2 from "../../../assets/3_box/icon2.png"
import icon1 from "../../../assets/3_box/icon1.png"
import btn from "../../../assets/3_box/btn.png"
import bubble1 from "../../../assets/3_box/1.png"
import bubble2 from "../../../assets/3_box/2.png"
import bubble3 from "../../../assets/3_box/3.png"
import bubble4 from "../../../assets/3_box/4.png"
import bubble5 from "../../../assets/3_box/5.png"
import bubble6 from "../../../assets/3_box/6.png"
import bubble7 from "../../../assets/3_box/7.png"
import bubble8 from "../../../assets/3_box/8.png"
import { useState } from "react"
import ModalWindow from "./ModalWindow"

const PageThree = () => {
  const [visibleModalWindow, setVisibleModalWindow] = useState<boolean>(false)
  return (
    <>
      <div className={style.PageThree__backgroundImg}>
        <img className="Global__imgGlobal" src={global} alt="иконка" />
        <img className="Global__imgShape1" src={logo} alt="логотип" />

        <img
          className={style.PageThree__imgBottle}
          src={bottle}
          alt="бутылка"
        />

        <img
          className={style.PageThree__imgBubble1}
          src={bubble1}
          alt="пузырь1"
        />
        <img
          className={style.PageThree__imgBubble2}
          src={bubble2}
          alt="пузырь2"
        />
        <img
          className={style.PageThree__imgBubble3}
          src={bubble3}
          alt="пузырь3"
        />
        <img
          className={style.PageThree__imgBubble4}
          src={bubble4}
          alt="пузырь4"
        />
        <img
          className={style.PageThree__imgBubble5}
          src={bubble5}
          alt="пузырь5"
        />
        <img
          className={style.PageThree__imgBubble6}
          src={bubble6}
          alt="пузырь6"
        />
        <img
          className={style.PageThree__imgBubble7}
          src={bubble7}
          alt="пузырь7"
        />
        <img
          className={style.PageThree__imgBubble8}
          src={bubble8}
          alt="пузырь8"
        />
        {visibleModalWindow && (
          <ModalWindow close={() => setVisibleModalWindow(false)} />
        )}

        <img
          className={style.PageThree__title1}
          src={titleCopy}
          alt="Ключевое сообщение"
        />
        <img
          className={style.PageThree__title2}
          src={titleCopy2}
          alt="brend xy"
        />

        <div className={style.PageThree__containerText}>
          <div className={style.PageThree__blockText1}>
            <img
              className={style.PageThree__imgIcon2}
              src={icon2}
              alt="иконка1"
            />
            <p>
              Ehicula ipsum a arcu cursus vitae. Eu non diam phasellus
              vestibulum lorem sed risus ultricies
            </p>
          </div>

          <div>
            <div className={style.PageThree__blockText2}>
              <img
                className={style.PageThree__imgIcon1}
                src={icon1}
                alt="иконка1"
              />
              <p>A arcu cursus vitae</p>
            </div>
            <img
              onClick={() => setVisibleModalWindow(true)}
              className={style.PageThree__btn}
              src={btn}
              alt="кнопка"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default PageThree
