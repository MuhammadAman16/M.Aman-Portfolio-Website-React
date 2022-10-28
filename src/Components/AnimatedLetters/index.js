import './index.scss'
import React from 'react'
// THIS IS MADE SO WE CAN ANIMATE WHICH EVER ITEM WE WANT DIRECTLY BY JUST PASSING IT AS AN ARRAY TO THIS ANIMATEDLETTERS FUNCTION
// 3 arguments:
// 1-class to apply to char
// 2-array of char
// 3-index of starting point which will setdelay.
// return is span as want an inline element as individual letters need to form a word
const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  return (
    <span>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  )
}

export default AnimatedLetters
