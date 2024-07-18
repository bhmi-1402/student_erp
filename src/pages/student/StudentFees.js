
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
              <FeesBioField title={'Full Name'} value={'Naveen Chaudhary'}></FeesBioField>
              <FeesBioField title={'Class'} value={'CSE'}></FeesBioField>
              <FeesBioField title={'Roll Number'} value={'2100911540029'}></FeesBioField>
              <FeesBioField title={'Semester'} value={'VI'}></FeesBioField>
              <FeesBioField title={'Total Fees'} value={'119850'}></FeesBioField>
              <FeesBioField title={'Paid Fees'} value={'99850'}></FeesBioField>
              <FeesBioField title={'Remaining Fees'} value={'20000'}></FeesBioField>
            </div>
            <div className='fees-container'>
                <p>Enter Amount</p>
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