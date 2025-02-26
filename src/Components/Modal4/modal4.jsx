const Modal4 = ({children , isOpen}) =>{

    if(!isOpen){
        return null;
    }

    return (
        <div>
            {children}
        </div>
    )
}

export default Modal4;