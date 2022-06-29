import './styles.css'
import { Link } from 'react-router-dom';

function Header() {

    return (

        <div className='header'>
            <Link to='/'>Home</Link>
            <Link to='Users'>Users</Link>
            <Link to='Albums'>Albums</Link>
        </div>
    )
}
export default Header;