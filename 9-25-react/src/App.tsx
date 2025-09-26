import { useState, useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const divRef = useRef<HTMLDivElement | null>(null)
  const countRef = useRef(0)
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)


  function incrementCountState() {
    setCount(count + 1)
  }
  function incrementCount2State() {
    setCount2(count2 + 1)
  }
  function incrementCountRef() {
    // setCount(count + 1)
    // countRef.current = countRef.current + 2
    countRef.current++
    console.log(countRef.current)
  }

  // BELOW ISN'T GOOD - will redo every single time it re-renders
    // PLUS won't exist at first since goes through everything b/4 return first
  //const divElement = document.getElementById("abcd")

  function logDivSize() {
    console.log(divRef.current?.getBoundingClientRect())
  }

  // in useEffect, function and dependency array!!!! that way doesn't run all the time
  // useEffect(() => {}, [])
  useEffect(() => {
    // will run twice to ensure running clean up functions - 'bug" thanks to 'strict mode' for development
    console.log("component has mounted!")
  }, [])

  // shows count 1 when update count, count 2 when update count2
  // effect HAPPENS WHEN SOMETHING HAPPENS TO THE VARIABLES IN DEPENDENCY ARRAY!!!!!!
  useEffect(() => {
    console.log('count 1 effect!')
  }, [count])

   useEffect(() => {
    console.log('count 2 effect!')
  }, [count2])

  return (
    <>
      <div id="abcd">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={incrementCountRef}>
          countRef is {countRef.current}
        </button>
        <button onClick={incrementCountState}>
          countState is {count}
        </button>
        <button onClick={incrementCount2State}>
          countState2 is {count2}
        </button>
        <button onClick={logDivSize}>
          logDivSize
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
