import { useState } from "react";

const Toogle = () => {
    const [showContent, setShowContent] = useState(false);

    const handleToogle = () => {
        setShowContent(!showContent);
    }

    return (
        <>
            <button onClick={handleToogle}>Toogle Content</button>

            <div>
                {showContent &&
                    <div style={{boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' , marginTop:'30px' , padding:'30px', width:'40%'}}>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, tempore? Et cumque velit incidunt, ea qui officia praesentium, corporis temporibus cum corrupti provident? Deleniti similique eius voluptas nihil suscipit vel.</p>
                    </div>
                }
            </div>
        </>
    )
}

export default Toogle;