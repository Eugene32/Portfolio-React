import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
    return (
        <div className='container row w-100 p-3 bg-info position-relative start-50 translate-middle' style={{top: "30px", width: "100%"}}>

            <h2 className='nav justify-content-start col text-white px-3'>Reynan Kanindot</h2>
            <ul className="nav justify-content-end col ">

                <li className="nav-item ">
                    <a
                        href="#about"
                        onClick={() => handlePageChange('About')}
                        // This is a conditional (ternary) operator that checks to see if the current page is "Home"
                        // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                        className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                    >
                        <span className='text-white'>About Me</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#works"
                        onClick={() => handlePageChange('Works')}
                        // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                        className={currentPage === 'Works' ? 'nav-link active' : 'nav-link'}
                    >
                        <span className='text-white'>Portfolio</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#contact"
                        onClick={() => handlePageChange('Contact')}
                        // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                    >
                        <span className='text-white'>Contact</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#resume"
                        onClick={() => handlePageChange('Resume')}
                        // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                    >
                        <span className='text-white'>Resume'</span>
                    </a>
                </li>

            </ul>

        </div>
    );
}

export default NavTabs;
