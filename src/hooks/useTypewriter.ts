import { useEffect, useState } from 'react'

export function useTypewriter(lines: string[], active = true) {
  const [displayed, setDisplayed] = useState<string[]>([])
  const [current, setCurrent] = useState('')
  const [lineIdx, setLineIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)

  useEffect(() => {
    setDisplayed([])
    setCurrent('')
    setLineIdx(0)
    setCharIdx(0)
  }, [lines.join('|')])

  useEffect(() => {
    if (!active) return
    if (lineIdx >= lines.length) return
    const line = lines[lineIdx]
    if (charIdx < line.length) {
      const t = setTimeout(() => {
        setCurrent(line.slice(0, charIdx + 1))
        setCharIdx((c) => c + 1)
      }, 18 + Math.random() * 30)
      return () => clearTimeout(t)
    } else {
      const t = setTimeout(() => {
        setDisplayed((d) => [...d, line])
        setCurrent('')
        setCharIdx(0)
        setLineIdx((i) => i + 1)
      }, 650)
      return () => clearTimeout(t)
    }
  }, [active, charIdx, lineIdx, lines])

  return { displayed, current, done: lineIdx >= lines.length }
}