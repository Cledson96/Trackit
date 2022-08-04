import { Link } from 'react-router-dom'
import './footer.css'
import CircularProgress from '@mui/material/CircularProgress'




export default function Footer() {


    let props = { value: 90 }

    return (
        <div className="footer">
            <Link className='links' to={'/habitos'}>Hábitos</Link>
            <div className='porcentagem'>
                <Link to={'/hoje'}> <CircularProgress size={"90px"} color="primary" variant="determinate" {...props} /></Link>
                <h5 className='porcent'>Hoje</h5>
            </div>

            <Link className='links' to={'/historico'}>Histórico</Link>
        </div>
    )
}