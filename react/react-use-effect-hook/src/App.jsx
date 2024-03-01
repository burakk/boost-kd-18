import { useState, useEffect, useRef } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  console.log("render ediliyor 1");


  // rendering must be pure
  // useEffect verdiğiniz callback function'ını render işlemi bittikten hemen sonra çağırır
  useEffect(() => {
    console.log("ben use effect tarafından çağrılan bir callback function'ım");

    //side effect oluşturmak için doğru bir yer
  });


  console.log("render ediliyor 2");

  return (
    <>
      <h1>Hello useEffect</h1>

      <button onClick={(e) => { setCounter(counter + 1);  /* side effect */ }}>  increment counter {counter}</button>


      <ToolBar />

    </>
  )
}


function ToolBar() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div>
      <VideoPlayer src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" isPlaying={isPlaying} />
      <button type="button" onClick={() => { setIsPlaying(!isPlaying) }}>{isPlaying ? "Durdur" : "Başlat "}</button>
    </div>
  )
}


function VideoPlayer({ src, isPlaying }) {

  const videoRef = useRef();

  useEffect(() => {
    if (isPlaying) {
      videoRef.current.play(); //video artık dökümanda gerçek bir eleman ve ulaşılabilir çünkü useEffect verdiğiniz callback function'ını render işlemi bittikten hemen sonra çağırır
    } else {
      videoRef.current.pause();
    }
  })

  return (
    <video src={src} ref={videoRef}></video>
  )


}





export default App
