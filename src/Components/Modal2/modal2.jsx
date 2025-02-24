const Modal2 = ({children , isOpen }) =>{

        if(!isOpen){
            return null
        }

    return (
        <div>
            {children}
        </div>
    )
}
export default Modal2;