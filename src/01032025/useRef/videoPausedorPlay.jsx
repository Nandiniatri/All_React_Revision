import { useRef } from "react"

const VideoPlayAndPause = () => {
    const videoRef = useRef(null);
    console.log(videoRef);
    const inputValue = useRef(null);
    console.log(inputValue);

    // const handlePlayAndPause = () => {
    //     // console.log(videoRef.current.play);
    //     if (videoRef.current.pause) {
    //         videoRef.current.play();
    //         console.log('pause');
    //     } else if (videoRef.current.play) {
    //         videoRef.current.pause();
    //         console.log('play');
    //     }
    // }

    const handlePlay = () =>{
        if(videoRef.current.pause){
            videoRef.current.play()
        }
    }

    const handlePause = () =>{
        if(videoRef.current.play){
            videoRef.current.pause();
        }
    }


    return (
        <div>
            <video controls width='400px' ref={videoRef}>
                <source src="https://cdn.pixabay.com/video/2025/01/22/253998_large.mp4" />
            </video>

            {/* <button onClick={handlePlayAndPause}>Play</button>
            <button onClick={handlePlayAndPause}>Pause</button> */}

            <button onClick={handlePlay}>Play</button>
            <button onClick={handlePause}>Pause</button>
            <input type="text" ref={inputValue} />
        </div>
    )
}

export default VideoPlayAndPause;