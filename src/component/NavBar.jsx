import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const pages = ['About', 'Projects', 'Contact', 'Resume'];

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <ul className="nav-menu">
                    {pages.map((page, index) => (
                        <li key={index} className="nav-item">
                            <Link to={`/${page.toLowerCase()}`} className="nav-links">
                                {page}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
// const [top, setTop] = useState(true);
// useEffect(() => {
//     const scrollHandler = () => {
//         window.pageYOffset > 10 ? setTop(false) : setTop(true);
//     };
//     window.addEventListener('scroll', scrollHandler);
//     return () => window.removeEventListener('scroll', scrollHandler);
// }, [top]);

export default Navbar;
