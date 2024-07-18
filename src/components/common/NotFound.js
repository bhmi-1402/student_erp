import { Button } from '@mui/material';
import './NotFound.css';
import { Link } from 'react-router-dom';
import logo from './../../assets/notfound.jpeg'
const NotFound = ()=>{
    return <>
    <div className='not-found'>
        <div>
            <img src={logo}></img>
        </div>
        <p>
            Not found  404
        </p>
        <Link to={'/'}>
        <Button>
            Go to Home
        </Button>
        </Link>
    </div>
    </>
}

export default NotFound;