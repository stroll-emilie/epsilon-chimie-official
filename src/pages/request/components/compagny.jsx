
import { InfoCircleVideIcon } from '../../../assets/icons/info_circle_vide_icon'
import '../request.css'

function Compagny() {
    
    return (
    <>
        <div id="company-institution">
            <div>
                <label htmlFor="company">company or institution</label>
                <input type="text" placeholder='e.g. Epsilon Chimie'/>
            </div>

            <div>
                <label htmlFor="sector">sector</label>
                <select>
                    <option value="" selected hidden> Select a sector</option>
                </select>
            </div>
        </div>
    
        <div id="country-website">
            <div>
                <label htmlFor="country">country <InfoCircleVideIcon/></label>
                <select>
                    <option value="" selected hidden> Select a Country</option>
                </select>
            </div>

            <div>
                <label htmlFor="company">website (optional)</label>
                <input type="text" placeholder='e.g. https://'/>
            </div>
        </div>

        <div id='additional'>
            <label htmlFor="additional">additional comments</label>
            <textarea placeholder="Anything else we should know?."></textarea>
            <p className='input-comment'><input type="checkbox" /><span>I have read the <a href="">privacy policy</a> and recognized that my details will be used only to process this request.</span></p>
        </div>
    </>
    )
}

export default Compagny
