import { useEffect, useState } from 'react'

const reduced = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

/** Types and deletes each word in turn. With reduced motion, shows the first word statically. */
export default function useTypewriter(words, { type = 70, erase = 35, hold = 1400 } = {}) {
  const [text, setText] = useState(reduced() ? words[0] : '')

  useEffect(() => {
    if (reduced()) return
    let wordIndex = 0
    let charIndex = 0
    let deleting = false
    let timer

    const tick = () => {
      const word = words[wordIndex]
      charIndex += deleting ? -1 : 1
      setText(word.slice(0, charIndex))

      let delay = deleting ? erase : type
      if (!deleting && charIndex === word.length) {
        deleting = true
        delay = hold
      } else if (deleting && charIndex === 0) {
        deleting = false
        wordIndex = (wordIndex + 1) % words.length
        delay = 350
      }
      timer = setTimeout(tick, delay)
    }

    timer = setTimeout(tick, 500)
    return () => clearTimeout(timer)
  }, [words, type, erase, hold])

  return text
}
