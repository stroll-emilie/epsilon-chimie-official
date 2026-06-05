
import { InfoCircleVideIcon } from '../../../assets/icons/info_circle_vide_icon'
import '../request.css'

function Company({data,onChange}) {
    
    return (
    <>
        <div id="company-institution">
            <div>
                <label htmlFor="company">company or institution</label>
                <input 
                type="text" 
                placeholder='e.g. Epsilon Chimie'
                value={data.company}
                onChange={(e) => onChange({company: e.target.value})}
                />
            </div>

            <div>
                <label htmlFor="sector">sector</label>
                <select>
                    <option value="default">Select a sector</option>
                    <option value="pharmaceutical">Pharmaceutical</option>
                    <option value="scholar">Scholar</option>
                    <option value="r&d">R&D</option>
                    <option value="commercial">Commercial</option>
                    <option value="other">Other application</option>


                </select>
            </div>
        </div>
    
        <div id="country-website">
            <div>
                <label htmlFor="country">country <InfoCircleVideIcon/></label>
                <select>
                    <option value=""> Select a Country</option>
                </select>
                <p className='input-comment'>This may have an impacts on freight costs and currencies.</p>
            </div>

            <div>
                <label htmlFor="company">website</label>
                <input 
                type="text" 
                placeholder='e.g. https://'
                value={data.website}
                onChange={(e) => onChange({website: e.target.value})}
                />
            </div>
        </div>

        <div id='additional'>
            <label htmlFor="additional">additional comments</label>
            <textarea 
                placeholder="Anything else we should know?."
                value={data.additional}
                onChange={(e) => onChange({additional: e.target.value})}
            >

            </textarea>
            <p className='input-comment'><input type="checkbox" /><span>By clicking 'Next', you confirm that you have read ou <a href="">privacy policy</a>  and agree that your details will be used solely to process this request.</span></p>
        </div>
    </>
    )
}

export default Company
