import { CircleArrowIcon } from '../../assets/icons/circle_arrow_icon'
import { InfoCircleVideIcon } from '../../assets/icons/info_circle_vide_icon'
import Compagny from './components/compagny'
import Compound from './components/compound'
import Contact from './components/contact'
import './request.css'
import { Link } from 'react-router-dom'

function Request() {
    

    return (
    <>
        <section id='request-title'>
            <div className='path'><Link to="/">HOME</Link> / <span>REQUEST FOR QUOTE</span></div>
            <div>
                <h2>Request for quote</h2>
                <p>We reply to every request within 48 working hours. All information stays confidential.</p>
            </div>
        </section>
        <section id="request">
            <article className="form-container">
                <div>
                    <div className="form-point active">
                        <span>1</span>
                        <p>COMPOUND</p>
                    </div>
                    <hr />
                    <div className="form-point">
                        <span>2</span>
                        <p>COMPAGNY</p>
                    </div>
                    <hr />
                    <div className="form-point">
                        <span>3</span>
                        <p>CONTACT</p>
                    </div>
                </div>
        
                <form id='form-compound'>
                    <Contact/>



                    <hr />
                    
                    <nav>
                        <Link><CircleArrowIcon/> Back</Link>
                        <Link>Send request</Link>
                    </nav>
                </form>


            </article>
        </section>
    </>
    )
}

export default Request
