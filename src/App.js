import { render } from 'react-dom'
import React, { useState, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'
import './App.css'
import Education from './components/pages/Education'
import Experience from './components/pages/Experience'
import Hobbies from './components/pages/Hobbies'
import Landing from './components/pages/Landing'


const pages = [
  ({ style }) => <animated.div style={{ ...style, background: '#9F792C' }}>
    <Landing />
  </animated.div>,

  ({ style }) => <animated.div style={{ ...style, background:  '#006778' }}>
    <Experience />
  </animated.div>,


  ({ style }) => <animated.div style={{ ...style, background: '#D7A22A' }}>
    <Education />
  </animated.div>,

({ style }) => <animated.div style={{ ...style, background: '#101820' }}>
<Hobbies  />
</animated.div>,
]

function App() {
  const [index, set] = useState(0)
  const onClick = useCallback(() => set(state => (state + 1) % 4), [])
  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })
  return (
    <div className="simple-trans-main" onClick={onClick}>
      {transitions.map(({ item, props, key }) => {
        const Page = pages[item]
        return <Page key={key} style={props} />
      })}
    </div>
  )
}

export default App;