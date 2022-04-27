export const Question = ({ question_title, question_description }) => {
  return (
    <div className="questions__item">
      <header className="questions__header">
        <i className="ri-add-line questions__icon"></i>
        <h3 className="questions__item-title">{question_title}</h3>
      </header>

      <div className="questions__content">
        <p className="questions__description">{question_description}</p>
      </div>
    </div>
  )
}
