import { Link } from 'react-router-dom'
import './error.css'

export default function Error(){
    return(
        <div className='container-error'>
            <img src="notfound.png" alt="Pagina não encontrada" />
            <h1>Página não encontrada!</h1>
            <Link to="/">
                Voltar para home
            </Link>
        </div>
    )
}