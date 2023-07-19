import { Link } from 'react-router-dom';


const Navbar = () => {

    return(
        <nav>
                <Link className='pageNav' to="/">
                    Movements
                </Link>
                <Link className='pageNav' to="/gantt">
                    Gantt Chart
                </Link>
        </nav>
    )
};


export default Navbar;