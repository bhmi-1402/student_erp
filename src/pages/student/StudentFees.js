
import Strip from '../../components/common/Strip';
import './Student.css';
import { useState } from 'react';
import { Button } from 'antd';

const FeesBioField = ({title,value})=>{
    return <div className='fees-bio-field'>
        <p>{title}</p>
        <span>{value}</span>
    </div>
}

const StudentFees = ()=>{
    
    const [remainingFees,setRemainingFees] = useState(119850);
    const [amount,setAmount] = useState('');
    
    const feesValidator = (e)=>{
        if(e.target.value <= remainingFees){
            setAmount(e.target.value);
        }
    }

    return <>
        <Strip></Strip>
        <div
        className='fees-form'
        >
            <div className='fees-bio'>
              <FeesBioField title={'Full Name'} value={'Praveen Chaudhary'}></FeesBioField>
              <FeesBioField title={'Account type'} value={'Saving'}></FeesBioField>
              <FeesBioField title={'Account Number'} value={'2100911540029'}></FeesBioField>
              <FeesBioField title={'Age'} value={'20'}></FeesBioField>
              <FeesBioField title={'Balance'} value={'119850'}></FeesBioField>
              <FeesBioField title={'IFSC Code'} value={'99850'}></FeesBioField>
              <FeesBioField title={'Branch'} value={'Bisawar Hathras'}></FeesBioField>
            </div>
            <div className='fees-container'>
                <p>Enter Amount to Deposit</p>
                <input type="number" inputMode='numeric' className='number-input-venom' value={amount} onChange={feesValidator}></input>
                <button className='button-venom'>Pay {amount}</button>
            </div>
            <div className='fees-history'>
                <div className='fees-history-box'></div>
            </div>
        </div>
    </>;
}
export default StudentFees;