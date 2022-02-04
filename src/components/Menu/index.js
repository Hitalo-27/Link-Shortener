import './menu.css';
import { BsYoutube, BsInstagram } from 'react-icons/bs'
import { Link } from 'react-router-dom';

export default function Menu() {
    return (
        <div className='menu'>
            <a href="#" className='social'>
                <BsYoutube size={24} color='#fff' />
            </a>

            <a href="#" className='social'>
                <BsInstagram size={24} color='#fff' />
            </a>

            <Link to='/links' className='menu-item'>
                Meus Links
            </Link>
        </div>
    )
}