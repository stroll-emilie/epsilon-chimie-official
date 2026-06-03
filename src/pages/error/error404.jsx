import { CircleArrowIcon } from '../../assets/icons/circle_arrow_icon'
import './error404.css'

import { Link } from "react-router-dom"

function Error404() {
        
    return (
    <>
        
        <section id="error-title">
            <div className='path'><Link to="/">HOME</Link> / <span>ERROR 404</span></div>
        </section>
        <section id="error404">
            <article>
                <div>
                    <h1>404</h1>
                    <h2>This pages could not be found.</h2>
                </div>
                <p>The page you were looking for may have moved, been renames, or never existed. <br /> Let's get you back to the chemistry.</p>
                <nav>
                    <Link to="/"><CircleArrowIcon/> Back Home</Link>
                    <Link to="/catalogue">Browse the catalogue</Link>
                </nav>
            </article>
        </section>
    </>
    )
}

export default Error404
