import React from 'react'
import styles from './options.module.css'

export default function Options(props) {
    const {selection, setSelection} = props

    const questions = [
        'pokemon',
        'move',
        'item',
        'berry'
    ]

    console.log("SELECTION: ", selection)

  return (
    <div className={styles.buttonContainer}>
        {questions.map((question, index) => {
            return (
                <button onClick={setSelection(question)} className={`${styles.button} ${question === selection ? styles.selectedButton :
                    styles.nonSelectedButton}`} key={index}>
                    {question.charAt(0).toUpperCase() + question.slice(1)}
                    </button>
            )
        })}
    </div>
  )
}
