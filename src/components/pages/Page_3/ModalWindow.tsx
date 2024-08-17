import { FC, useState } from "react"
import * as style from "./ModalWindow.module.css"
import cross from "../../../assets/3_box/modalWindow/btn_close.png"
import txt from "../../../assets/3_box/modalWindow/txt.png"
import title from "../../../assets/3_box/modalWindow/title.png"
import btn from "../../../assets/3_box/modalWindow/btn_1.png"
import ellipse2 from "../../../assets/3_box/modalWindow/Ellipse 2 copy.png"
import ellipse from "../../../assets/3_box/modalWindow/Ellipse 2.png"
import btn_next from "../../../assets/3_box/modalWindow/btn_next.png"
import ModalWindowPage1 from "./ModalWindowPage1"
import ModalWindowPage2 from "./ModalWindowPage2"

interface PropsType {
  close: () => void
}

const ModalWindow: FC<PropsType> = (props) => {
  const [page, setPage] = useState<string>("1")

  return (
    <div
      onClick={() => props.close()}
      className={style.ModalWindow__backgroundImg}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={style.ModalWindow__blockText}
      >
        <img
          onClick={() => props.close()}
          className={style.ModalWindow__imgCloss}
          src={cross}
        />
        <img className={style.ModalWindow__txt} src={txt} alt="текст" />
        <img className={style.ModalWindow__title} src={title} alt="название" />

        <div className={style.ModalWindow__container}>
          {page == "1" ? <ModalWindowPage1 /> : <ModalWindowPage2 />}

          <div className={style.ModalWindow__pagination}>
            <img
              onClick={() => setPage("1")}
              className={style.ModalWindow__btn}
              src={btn}
              alt="левая стрелка"
            />
            <img
              className={style.ModalWindow__ellipse}
              src={ellipse2}
              alt="точка 1"
            />
            {page == "1" ? (
              <img src={ellipse} alt="точка 2 незакрашена" />
            ) : (
              <img src={ellipse2} alt="точка 2 закрашена" />
            )}
            <img
              onClick={() => setPage("2")}
              className={style.ModalWindow__btn_next}
              src={btn_next}
              alt="правая стрелка"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalWindow
