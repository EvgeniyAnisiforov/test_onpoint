import * as style from "./PageOne.module.css"
import layer4copy2 from "../../../assets/1_box/Layer 4 copy 2.png"
import layer7 from "../../../assets/1_box/Layer 7.png"
import layer5 from "../../../assets/1_box/Layer 5.png"
import pinkSperm1 from "../../../assets/1_box/pink_sperm_1.png"
import layer8 from "../../../assets/1_box/Layer 8.png"
import helloText from "../../../assets/1_box/txt/helo_txt.png"
import title from "../../../assets/1_box/txt/title.png"
import btn from "../../../assets/1_box/btn.png"
import bakti1 from "../../../assets/1_box/bakti_1.png"
import pinkSperm from "../../../assets/1_box/pink_sperm.png"
import layer4copy from "../../../assets/1_box/Layer 4 copy.png"
import layer4 from "../../../assets/1_box/Layer 4.png"
import global from "../../../assets/global/global.png"
import logo from "../../../assets/global/Shape 1.png"
import "../../Global/Global.css"

const PageOne = () => {
  return (
    <div className={style.PageOne__backgroundImg}>
      <img className="Global__imgGlobal" src={global} alt="иконка" />
      <img className="Global__imgShape1" src={logo} alt="логотип" />
      <img
        className={style.PageOne__imgLayer4copy2}
        src={layer4copy2}
        alt="бактерия 4 копия 2"
      />
      <img className={style.PageOne__imgLayer5} src={layer5} alt="бактерия 5" />
      <img className={style.PageOne__imgLayer7} src={layer7} alt="бактерия 7" />
      <img
        className={style.PageOne__imgPinkSperm1}
        src={pinkSperm1}
        alt="розовый сперматозойд1"
      />
      <img className={style.PageOne__imgLayer8} src={layer8} alt="бактерия 8" />
      <div className={style.PageOne__blockText}>
        <img className={style.PageOne__text1} src={helloText} alt="Привет" />
        <img
          className={style.PageOne__title}
          src={title}
          alt="Это не коммерческое задание"
        />
      </div>
      <img className={style.PageOne__button} src={btn} alt="кнопка" />
      <img className={style.PageOne__imgBakti1} src={bakti1} alt="бактерия 1" />
      <img
        className={style.PageOne__imgPinkSperm}
        src={pinkSperm}
        alt="розовый сперматозойд"
      />
      <img
        className={style.PageOne__imgLayer4copy}
        src={layer4copy}
        alt="бактерия 4 копия"
      />
      <img className={style.PageOne__imgLayer4} src={layer4} alt="бактерия 4" />
    </div>
  )
}

export default PageOne
