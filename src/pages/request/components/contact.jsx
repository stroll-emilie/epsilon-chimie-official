
import { LockCircleIcon } from '../../../assets/icons/lock_circle_icon'
import '../request.css'
import { formDataProp } from '../../../propTypes';


function Contact({data,onChange}) {
    
    return (
    <>
        <div id="your-name">
            <div>
                <label htmlFor="first-name" className='labelField'>first name<span>*</span></label>
                <input 
                type="text"
                value={data.firstName}
                onChange={(e) => onChange({firstName: e.target.value})}
                maxLength={50}
                />
            </div>

            <div>
                <label htmlFor="last-name" className='labelField'>last name<span>*</span></label>
                <input 
                type="text"
                value={data.lastName}
                onChange={(e) => onChange({lastName: e.target.value})}
                maxLength={50}
                />
            </div>
        </div>
    
        <div id="role">
            <div>
                <label htmlFor="last-name" className='labelField'>role / position</label>
                <input 
                type="text"
                placeholder='e.g. Research chemist, Procurement officer'
                value={data.role}
                onChange={(e) => onChange({role: e.target.value})}
                maxLength={150}
                />
            </div>
        </div>

        <div id="mail-phone">
            <div>
                <label htmlFor="mail" className='labelField'>e-mail<span>*</span></label>
                <input 
                type="text"
                placeholder='name@company.com'
                value={data.email}
                onChange={(e) => onChange({email: e.target.value})}
                maxLength={100}
                />
            </div>

            <div>
                <label htmlFor="phone" className='labelField'>phone number</label>
                <input 
                type="text"
                placeholder='+33 ...'
                value={data.tel}
                onChange={(e) => onChange({tel: e.target.value})}
                maxLength={30}
                />
            </div>
        </div>

        <div >
            <p id='form-contact-info'><LockCircleIcon/>All commercial and technical information you share stays confidential. We can sign a mutual NDA on request before any technical discussion.</p>
        </div>
    </>
    )
}

Contact.propTypes = { ...formDataProp };

export default Contact
