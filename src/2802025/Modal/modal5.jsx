const Modal5 = ({isOpen , children}) => {
    if (!isOpen) {
        return null;
    }
    return (
        <div>
            {children}
        </div>
    )
}
export default Modal5;