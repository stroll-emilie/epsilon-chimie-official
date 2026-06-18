import '../request.css'
import { XIcon } from '../../../assets/icons/x_icon'
import { useLocation, Navigate, Link } from 'react-router-dom'
import { CloudCrossIcon } from '../../../assets/icons/cloud_cross_icon';

function RequestError() {

    const location = useLocation();

    if (!location.state?.fromForm) return <Navigate to="/" />;

    return (
        <section id="success">
            <article>
                <Link to="/" aria-label="Close and go back home"><XIcon aria-hidden="true"/></Link>
            </article>
            <article>
                <CloudCrossIcon/>
                <div>
                    <h1>Oups !</h1>
                    <span>There has been a mistake.</span>
                </div>
                <div>
                    <p>You will receive a confirmation email shortly. Our team will review your request and get back to you within 48 business hours. Meanwhile you can keep </p>
                    <Link to="/">Back Home</Link>
                </div>
            </article>
        </section>
    )
}

export default RequestError