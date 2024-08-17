import * as style from "./PageTwo.module.css"
import global from "../../../assets/global/global.png"
import logo from "../../../assets/global/Shape 1.png"
import title from "../../../assets/2_box/title.png"
import "../../Global/Global.css"
import layer3copy6 from "../../../assets/2_box/Layer 3 copy 6.png"
import layer3copy2 from "../../../assets/2_box/Layer 3 copy 2.png"
import layer3copy4 from "../../../assets/2_box/Layer 3 copy 4.png"
import layer3copy3 from "../../../assets/2_box/Layer 3 copy 3.png"
import layer3copy5 from "../../../assets/2_box/Layer 3 copy 5.png"
import { useState, useRef, useEffect } from "react"

const PageTwo = () => {
  const [thumbPosition, setThumbPosition] = useState(0)
  const scrollbarRef = useRef(null)
  const contentRef = useRef(null)

  const handleThumbMove = (
    clientY: any,
    initialThumbTop: any,
    scrollbarRect: any,
    thumbRect: any
  ) => {
    const mouseY = clientY - scrollbarRect.top
    const newThumbTop = mouseY - initialThumbTop

    const maxHeight = scrollbarRef.current.offsetHeight - thumbRect.height
    const clampedThumbTop = Math.max(0, Math.min(newThumbTop, maxHeight))

    setThumbPosition(clampedThumbTop)

    const scrollRatio =
      clampedThumbTop / (scrollbarRef.current.offsetHeight - thumbRect.height)
    contentRef.current.scrollTop =
      scrollRatio *
      (contentRef.current.scrollHeight - contentRef.current.clientHeight)
  }

  const handleThumbMouseDown = (event: any) => {
    event.preventDefault()

    const thumbRect = event.target.getBoundingClientRect()
    const scrollbarRect = scrollbarRef.current.getBoundingClientRect()

    const initialThumbTop = thumbRect.top - scrollbarRect.top

    const handleMouseMove = (e: any) => {
      handleThumbMove(e.clientY, initialThumbTop, scrollbarRect, thumbRect)
    }

    const handleMouseUp = () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", handleMouseUp)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseup", handleMouseUp)
  }

  const handleThumbTouchStart = (event: any) => {
    event.preventDefault()

    const thumbRect = event.target.getBoundingClientRect()
    const scrollbarRect = scrollbarRef.current.getBoundingClientRect()

    const initialThumbTop = thumbRect.top - scrollbarRect.top

    const handleTouchMove = (e: any) => {
      const touch = e.touches[0]
      handleThumbMove(touch.clientY, initialThumbTop, scrollbarRect, thumbRect)
    }

    const handleTouchEnd = () => {
      window.removeEventListener("touchmove", handleTouchMove)
      window.removeEventListener("touchend", handleTouchEnd)
    }

    window.addEventListener("touchmove", handleTouchMove)
    window.addEventListener("touchend", handleTouchEnd)
  }

  useEffect(() => {
    const content = contentRef.current
    if (!content) return
    return () => content.removeEventListener("scroll", () => {})
  }, [])

  return (
    <div className={style.PageTwo__backgroundImg}>
      <img className="Global__imgGlobal" src={global} alt="иконка" />
      <img className="Global__imgShape1" src={logo} alt="логотип" />
      <img
        className={style.PageTwo__textBlock}
        src={title}
        alt="текст сообщения"
      />
      <img
        className={style.PageTwo__imgLayer3copy6}
        src={layer3copy6}
        alt="сперматозойд 6"
      />
      <img
        className={style.PageTwo__imgLayer3copy2}
        src={layer3copy2}
        alt="сперматозойд 2"
      />
      <img
        className={style.PageTwo__imgLayer3copy4}
        src={layer3copy4}
        alt="сперматозойд 4"
      />
      <img
        className={style.PageTwo__imgLayer3copy3}
        src={layer3copy3}
        alt="сперматозойд 3"
      />
      <img
        className={style.PageTwo__imgLayer3copy5}
        src={layer3copy5}
        alt="сперматозойд 5"
      />

      <div className={style.PageTwo__scrollBar} ref={scrollbarRef}>
        <div
          className={style.PageTwo__scrollBar_thumb}
          style={{ top: `${thumbPosition}px` }}
          onMouseDown={handleThumbMouseDown}
          onTouchStart={handleThumbTouchStart} // Добавляем обработку касаний
        ></div>
      </div>
      <div
        className={style.PageTwo__containerText}
        ref={contentRef}
        style={{ minHeight: "400px", overflowY: "auto" }}
      >
        <p className={style.PageTwo__text}>
          <p className={style.PageTwo__p}>
            <b>Lorem ipsum dolor sit amet,</b> consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <br /> Duis ut diam quam nulla. Mauris in aliquam sem fringilla ut
            morbi tincidunt. Vitae aliquet nec ullamcorper sit amet risus nullam
            eget felis. Nulla pharetra diam sit amet nisl. Eget nulla facilisi
            etiam dignissim diam quis enim lobortis. Est sit amet facilisis
            magna.
            <br />
            Neque laoreet suspendisse interdum consectetur libero id.
            <br /> Nec ullamcorper sit amet risus nullam eget felis eget.
            <br /> Mollis aliquam ut porttitor leo a diam sollicitudin tempor
            id.
            <br /> Euismod quis viverra nibh cras pulvinar mattis nunc.
            <br /> Massa massa ultricies mi quis. Sit amet massa vitae tortor
            condimentum lacinia. Et malesuada fames ac turpis egestas integer
            eget. Elementum pulvinar etiam non quam lacus suspendisse faucibus
            interdum posuere.
          </p>
          <p>
            Amet justo donec enim diam vulputate ut pharetra sit.
            <br /> Risus ultricies tristique nulla aliquet enim tortor at
            auctor.
            <br /> Velit sed ullamcorper morbi tincidunt ornare massa.
            <br /> Quis hendrerit dolor magna eget est lorem ipsum. Etiam
            dignissim diam quis enim. Gravida neque convallis a cras. Ut enim
            blandit volutpat maecenas volutpat. Mauris sit amet massa vitae
            tortor condimentum lacinia quis vel.
          </p>
        </p>
      </div>
    </div>
  )
}

export default PageTwo
