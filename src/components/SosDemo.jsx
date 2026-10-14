import { useEffect, useRef, useState } from 'react'

const STEPS = ['Alert sent', 'Location shared', 'Contacts notified']

/** Concept demo of the Safe Signal flow. Nothing is actually sent. */
export default function SosDemo() {
  const [step, setStep] = useState(-1) // -1 idle, 0..2 in progress, 3 done
  const timers = useRef([])

  useEffect(() => () => timers.current.forEach(clearTimeout), [])

  const run = () => {
    timers.current.forEach(clearTimeout)
    setStep(0)
    timers.current = [1, 2, 3].map((n) => setTimeout(() => setStep(n), n * 900))
  }

  return (
    <div className="sos">
      <button className={`sos-btn ${step >= 0 && step < 3 ? 'is-active' : ''}`} onClick={run}>
        {step === 3 ? 'Replay SOS demo' : 'Try the SOS demo'}
      </button>
      <ol className="sos-steps" aria-live="polite">
        {STEPS.map((label, i) => (
          <li key={label} className={step > i || step === 3 ? 'done' : step === i ? 'now' : ''}>
            {label}
          </li>
        ))}
      </ol>
      <p className="muted sos-note">Concept demo only. No real alert is sent.</p>
    </div>
  )
}
