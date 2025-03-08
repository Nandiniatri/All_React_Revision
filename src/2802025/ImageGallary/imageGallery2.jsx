import { useEffect, useState } from "react";

const Image = [
    {id:1 , src:'https://searchengineland.com/wp-content/seloads/2014/08/photos-images-pictures-ss-1920.jpg'},
    {id:2 , src:'https://media.gettyimages.com/id/1215119911/photo/looking-directly-up-at-the-skyline-of-the-financial-district-in-central-london-stock-image.jpg?s=612x612&w=gi&k=20&c=rIsNW_iVWpfHt77QBOI40_0bz8ea3XetPsy0kplL2FQ='},
    {id:3 , src:'https://cdn.pixabay.com/photo/2015/01/15/16/17/hands-600497_1280.jpg'},
    {id:4 , src:'https://www.befunky.com/images/prismic/1f427434-7ca0-46b2-b5d1-7d31843859b6_funky-focus-red-flower-field-after.jpeg?auto=avif,webp&format=jpg&width=863'},
    {id:5 , src:'https://thumbs.dreamstime.com/b/two-ladybugs-orange-spring-flower-flight-insect-artistic-macro-image-concept-spring-summer-two-ladybugs-orange-125140826.jpg'},
]

const ImageGallery2 = () =>{
    const [currentIndex , setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevNext) => (prevNext + 1) % Image.length);
    }

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + Image.length) % Image.length);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        },500)
        return (() => clearInterval(interval));
    }, [])

    return (
        <div>
            <button onClick={handlePrev}>Prev</button>
            <img src={Image[currentIndex].src} width='500px' />
            <button onClick={handleNext}>Next</button>
        </div>
    )
}

export default ImageGallery2;