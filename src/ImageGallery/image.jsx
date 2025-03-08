import { useEffect, useState } from "react"

const Images = [
    { id: 1, src: 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D' },
    { id: 2, src: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D' },
    { id: 3, src: 'https://letsenhance.io/static/a31ab775f44858f1d1b80ee51738f4f3/11499/EnhanceAfter.jpg' },
    { id: 4, src: 'https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true' }
]

const ImageGallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () =>{
        setCurrentIndex((prevCurrentIndex) => (prevCurrentIndex + 1) % Images.length);
    }

    const handlePrev = () =>{
        setCurrentIndex((prevCurrentIndex) => (prevCurrentIndex - 1 + Images.length) % Images.length);
    }

    useEffect(() =>{
        const interval = setInterval(() =>{
            handleNext();
        },1000)

        return (() => clearInterval(interval))
    },[currentIndex])

    return (
        <div className="image-container">
            <div style={{border:'solid', display:'flex', flexDirection:'row', alignItems:'center'}}>
                <button onClick={handlePrev}>Prev</button>
                <img src={Images[currentIndex].src} className="img-img" />
                <button onClick={handleNext}>Next</button>
            </div>
        </div>
    )
}

export default ImageGallery;