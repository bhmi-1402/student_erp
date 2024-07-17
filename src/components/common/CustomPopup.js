import './CustomPopup.css'

const CustomPopup = ({heading,body,data,close})=>{

    return <div className='custom-popup-container'>
    <div className='custom-popup'>
        <div className='custom-popup-heading'>
            <p>{data?.Title}</p>
            <button onClick={close}>Close</button>
        </div>
        <div className='custom-popup-body'>
           {
            data?.Body?.split('\n')?.map((line)=><p>{line}</p>)
           }
           <br></br>
          <span className='bold text-bold'>
            {
                "-"
            }
            {
            data?.Sender?.FullName
           }
          </span>
        </div>
    </div>
    </div>;
}

export default CustomPopup;