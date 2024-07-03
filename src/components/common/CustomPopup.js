import './CustomPopup.css'

const CustomPopup = ({heading,body,close})=>{
    return <div className='custom-popup-container'>
    <div className='custom-popup'>
        <div className='custom-popup-heading'>
            <p>Topic</p>
            <button onClick={close}>Close</button>
        </div>
        <div className='custom-popup-body'>
           {
            `Hi there \nMy name is Naveen\nwhat yours?`
           }{
            body
           }
        </div>
    </div>
    </div>;
}

export default CustomPopup;