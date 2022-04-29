import { useState, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'

export const Question = ({ question_title, question_description, id }) => {
  const [accordion, setAccordion] = useState(false)
  const showAccordion = () => setAccordion(!accordion)

  const handleClass = () => {
    return accordion ? 'questions__item accordion-open' : 'questions__item'
  }

  let element = useRef()
  let content = useRef()

  const setHeight = () => {
    if (accordion) {
      showAccordion()
      content.current.removeAttribute('style')
    } else {
      content.current.style.height = content.current.scrollHeight + 'px'
    }
  }

  return (
    <div className={() => handleClass()} ref={element} id={uuidv4()}>
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
