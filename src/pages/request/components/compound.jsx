import { CircleArrowIcon } from '../../../assets/icons/circle_arrow_icon'
import { InfoCircleVideIcon } from '../../../assets/icons/info_circle_vide_icon'
import '../request.css'
import { Link } from 'react-router-dom'

function Compound() {
    
    return (
    <>
        <div id='request-type'>
            <label htmlFor="request-type">Request Type</label>
            <div>
                <div>
                    <input type="radio" />
                    <div>
                        <span>Catalogue product</span>
                        <p>Request for quote for a listed reference.</p>
                    </div>
                </div>

                <div>
                    <input type="radio"/>
                    <div>
                        <span>Custom synthesis</span>
                        <p>A non-commercial compound, synthesised on-demand.</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div id='product-name'>
            <label htmlFor="name">compound name, cas number or target structure <InfoCircleVideIcon/></label>
            <input type="text" placeholder='e.g. Diethyl phosphonate, CAS 762-04-9' />
        </div>

        <div id='quantity-purity'>
            <div>
                <label htmlFor="quantity">quantity <InfoCircleVideIcon/></label>
                <input type="text" placeholder='e.g. 250 g or 5x100 g'/>
                <p className='input-comment'>g, kilograms, or number of units</p>
            </div>
            <div>
                <label htmlFor="purity">minimum purity <InfoCircleVideIcon/></label>
                <select name="purity">
                    <option value="sup98" selected>sup98%</option>
                </select>
            </div>
        </div>

        <div id='packing-required'>
            <div>
                <label htmlFor="packing">packing preference </label>
                <input type="text" placeholder='e.g. x*50 g glass bottles'/>
            </div>
            <div>
                <label htmlFor="required">required by </label>
                <select name="purity">
                    <option value="default" selected hidden>Select a timeline</option>
                </select>
            </div>
        </div>

        <div id='application'>
            <label htmlFor="name">application / end-use</label>
            <textarea placeholder="e.g. HWE olefination step in a API synthesis; internal R&D only."></textarea>
            <p className='input-comment'>Help us confirm the right grade and packaging. Treated confidentially.</p>
        </div>
    </>
    )
}

export default Compound
