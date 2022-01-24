import './Nav.css'
import { Link } from 'react-router-dom';

function Nav(){
    return(
        <nav className='navbar'>
            <h3>VK Student CRUD</h3>
            <ul>
                <Link to="/"><button  className='btn btn-light'>Home</button></Link>
                <Link to="/add"><button  className='btn btn-light'>Add Student</button></Link>
                {/* <Link to="/edit-student/:id"><li>Employee</li></Link> */}
            </ul>
        </nav>
    );
}

export default Nav;