import { forwardRef, useImperativeHandle, useRef } from 'react';
import video1 from './videos/test.mp4'

function Video (props, ref) {
    const videoRef = useRef();
    useImperativeHandle(ref, () => (
        {
            play() {
                videoRef.current.play()
            }, 
            pause() {
                videoRef.current.pause()
            }, 
        }
    ))
    console.log(ref)
    return (
        <video ref={videoRef} src={video1} width={280}/>
    );
}


export default forwardRef(Video);