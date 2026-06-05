
import { InfoCircleVideIcon } from '../../../assets/icons/info_circle_vide_icon'
import { LockCircleIcon } from '../../../assets/icons/lock_circle_icon'
import '../request.css'

function Contact({data,onChange}) {
    
    return (
    <>
        <div id="your-name">
            <div>
                <label htmlFor="first-name">first nam<InfoCircleVideIcon/></label>
                <input 
                type="text"
                value={data.firstName}
                onChange={(e) => onChange({firstName: e.target.value})}
                />
            </div>

            <div>
                <label htmlFor="last-name">last name<InfoCircleVideIcon/></label>
                <input 
                type="text"
                value={data.lastName}
                onChange={(e) => onChange({lastName: e.target.value})}
                />
            </div>
        </div>
    
        <div id="role">
            <div>
                <label htmlFor="last-name">role / position</label>
                <input 
                type="text"
                placeholder='e.g. Research chemist, Procurement officer'
                value={data.role}
                onChange={(e) => onChange({role: e.target.value})}
                />
            </div>
        </div>

        <div id="mail-phone">
            <div>
                <label htmlFor="mail">e-mail<InfoCircleVideIcon/></label>
                <input 
                type="text"
                placeholder='name@company.com'
                value={data.email}
                onChange={(e) => onChange({email: e.target.value})}
                />
            </div>

            <div>
                <label htmlFor="phone">phone number (optional)</label>
                <input 
                type="text"
                placeholder='+33 ...'
                value={data.tel}
                onChange={(e) => onChange({tel: e.target.value})}
                />
            </div>
        </div>

        <div >
            <p id='form-contact-info'><LockCircleIcon/>All commercial and technical information you share stays confidential. We can sign a mutual NDA on request before any technical discussion.</p>
        </div>
    </>
    )
}

export default Contact
