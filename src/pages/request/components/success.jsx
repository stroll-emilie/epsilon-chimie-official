import '../request.css'
import { XIcon } from '../../../assets/icons/x_icon'
import { SmsTrackingIcon } from '../../../assets/icons/sms_tracking_icon'
import { useLocation, Navigate, Link } from 'react-router-dom'

function Success({data,onChange}) {

    const location = useLocation();

    if (!location.state?.fromForm) return <Navigate to="/" />;

    return (
    <>
        <section id="success">
            <article>
                <Link to="/"><XIcon/></Link>
            </article>
            <article>
                <SmsTrackingIcon/>
                <div>
                    <h1>Thank you !</h1>
                    <span>Your request has been succesfully sent.</span>
                </div>
                <div>
                    <p>You will receive a confirmation email shortly. Our team will review your request and get back to you within 48 business hours. Meanwhile you can keep </p>
                    <Link to="/">Back Home</Link>
                </div>
            </article>
        </section>
    </>
    )
}

export default Success