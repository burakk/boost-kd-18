import { useState, useRef } from "react"

function App() {
  const [counter, setCounter] = useState(0);


  let counter2 = 1000;

  const counter3 = useRef(0); //{current:0}

  console.log("rendering");
  return (

    <>
      <button onClick={(e) => { setCounter(counter + 1) }}>  useState counter {counter} </button>
      <button onClick={(e) => { counter2 += 1000; console.log(counter2) }}>  {counter2}  </button>

      <button onClick={(e) => { counter3.current = counter3.current + 1; console.log(counter3.current) }} > useRef test {counter3.current}</button>


      <StopWatch />


      <Input />
    </>


  )
}


function StopWatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);

  const intervalIdRef = useRef();

  function handleStart(e) {
    setStartTime(Date.now());
    setNow(Date.now());

    intervalIdRef.current = setInterval(() => { setNow(Date.now()) }, 10)

  }

  function handleStop() {

    clearInterval(intervalIdRef.current);
  }


  let timePassed = 0;

  if (startTime !== null && now !== null) {
    timePassed = (now - startTime) / 1000;
  }

  return (
    <>
      <h3>Kronometre</h3>

      <p>Geçen süre: {timePassed}  </p>

      <button onClick={handleStart}>Başlat</button>

      <button onClick={handleStop}>Durdur</button>
    </>

  )


}

function Input() {

  const inpRef = useRef();


  return (
    <>
      <input id="inpTest" type="text" ref={inpRef} />
      <button onClick={(e) => { inpRef.current.focus(); }} >Focus me! </button>
    </>
  )
}



export default App
