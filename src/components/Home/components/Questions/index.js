import { v4 as uuidv4 } from 'uuid'
import { questions, questions2 } from '../../../../core/router/routes'
import { Question } from './Question'

export const Questions = () => {
  return (
    <div className="questions__container container grid">
      <div className="questions__group">
        {questions.map((question, index) => {
          return <Question key={index} {...question} id={uuidv4()} />
        })}
      </div>

      <div className="questions__group">
        {questions2.map((question, index) => {
          return <Question key={index} {...question} id={uuidv4()} />
        })}
      </div>
    </div>
  )
}
