import { useState, useRef, useEffect } from 'react'

export const Question = ({ question_title, question_description, id }) => {
  const [accordion, setAccordion] = useState(false)
  const showAccordion = () => setAccordion(!accordion)

  let element = useRef()

  const setHeight = (height) => {
    // const element = document.getElementById(id)
    // const element = document.getElementById('' + id + '')
    // const element = document.getElementById(tag)
    // console.log(tag)
    // element.scrollIntoView({ behavior: 'smooth' })
    element.current.style.height = height + 'px'
  }

  return (
    <div
      className={
        accordion ? 'questions__item accordion-open' : 'questions__item'
      }
      ref={element}
    >
      <header
        className="questions__header"
        onClick={() => {
          showAccordion()
          setHeight()
        }}
        // style={
        //   accordion
        //     ? () => {
        //         setHeight()
        //       }
        //     : ''
        // }
      >
        <i className="ri-add-line questions__icon"></i>
        <h3 className="questions__item-title">{question_title}</h3>
      </header>

      <div className="questions__content">
        <p className="questions__description">{question_description}</p>
      </div>
    </div>
  )
}
