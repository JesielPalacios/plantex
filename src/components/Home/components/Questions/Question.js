import { useState, useRef, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

export const Question = ({ question_title, question_description, id }) => {
  const [accordion, setAccordion] = useState(false)
  const showAccordion = () => setAccordion(!accordion)

  let element = useRef()
  let content = useRef()

  const setHeight = () => {
    // const element = document.getElementById(id)
    // const element = document.getElementById('' + id + '')
    // const element = document.getElementById(tag)
    // console.log(tag)
    // element.scrollIntoView({ behavior: 'smooth' })

    if (accordion) {
      content.current.style.height =
        element.current.getBoundingClientRect().height + 'px'
    } else {
      content.current.style.height = 24 + 'px'
    }
  }

  return (
    <div
      className={
        accordion ? 'questions__item accordion-open' : 'questions__item'
      }
      ref={element}
      id={uuidv4()}
    >
      <header
        className="questions__header"
        onClick={() => {
          showAccordion()
          setHeight()
        }}
      >
        <i className="ri-add-line questions__icon"></i>
        <h3 className="questions__item-title">{question_title}</h3>
      </header>

      <div className="questions__content" ref={content}>
        <p className="questions__description">{question_description}</p>
      </div>
    </div>
  )
}
