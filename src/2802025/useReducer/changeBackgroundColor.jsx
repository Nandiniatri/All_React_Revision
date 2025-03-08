const ChangeBackgroundColor = ({ color, handlebg }) => {
    return (
        <>
            <div style={{ backgroundColor: color , padding:'35px' , border:'solid'}}>
                Content
            </div>
            <button onClick={handlebg}>Change BG</button>
        </>
    )
}

export default ChangeBackgroundColor;