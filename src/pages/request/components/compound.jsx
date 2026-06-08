import { CircleArrowIcon } from '../../../assets/icons/circle_arrow_icon'
import '../request.css'
import { Link } from 'react-router-dom'

function Compound({data, onChange}) {
    
    return (
    <>
        <div id='request-type'>
            <label htmlFor="request-type">Request Type</label>
            <div>
                <div>
                    <input 
                        type="radio" 
                        name="radio-request-type"
                        checked={data.requestType === "catalogue"}
                        onChange={() => onChange({requestType: "catalogue"})}


                    />
                    <div>
                        <span>Catalogue product</span>
                        <p>Request for quote for a listed reference.</p>
                    </div>
                </div>

                <div>
                    <input 
                        type="radio" 
                        name="radio-request-type"
                        checked={data.requestType === "custom"}
                        onChange={() => onChange({requestType: "custom"})}

                    />
                    <div>
                        <span>Custom synthesis</span>
                        <p>A non-commercial compound, synthesised on-demand.</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div id='product-name'>
            <label htmlFor="name">compound name, cas number or target structure <span>*</span></label>
            <input 
                type="text" 
                placeholder='e.g. Diethyl phosphonate, CAS 762-04-9' 
                value={data.compoundName}
                onChange={(e) => onChange({compoundName: e.target.value})}
                maxLength={100}
                />
        </div>

        <div id='quantity-purity'>
            <div>
                <label htmlFor="quantity">quantity <span>*</span></label>
                <input 
                    type="text" 
                    placeholder='e.g. 250 g or 5x100 g'
                    value={data.quantity}
                    onChange={(e) => onChange({quantity: e.target.value})}
                    maxLength={50}
                />
                <p className='input-comment'>g, kilograms, or number of units</p>
            </div>
            <div>
                <label htmlFor="purity">minimum purity <span>*</span></label>
                <select 
                    name="purity"
                    value={data.purity}
                    onChange={(e) => onChange({purity: e.target.value})}
                >
                    <option value="default">Select a purity</option>
                    <option value="min50">min. 50%</option>
                    <option value="80-90">80-90%</option>
                    <option value="95">95%</option>
                    <option value="min98">min. 98%</option>
                    <option value="99">99%</option>
                </select>
            </div>
            
        </div>

        <div id='packing-required'>
            <div>
                <label htmlFor="packing">packing preference </label>
                <input 
                    type="text" 
                    placeholder='e.g. x*50 g glass bottles'
                    value={data.packing}
                    onChange={(e) => onChange({packing: e.target.value})}
                    maxLength={50}
                />
            </div>
            <div>
                <label htmlFor="required">required by </label>
                <select 
                    name="purity"
                    value={data.required}
                    onChange={(e) => onChange({required: e.target.value})}
                >
                    <option value="default">Select a timeline</option>
                    <option value="withinweek">Within a week</option>
                    <option value="withinmonth">Within a month</option>
                    <option value="overmonth">Over a month</option>

                </select>
            </div>
        </div>

        <div id='application'>
            <label htmlFor="name">application / end-use</label>
            <textarea 
                placeholder="e.g. HWE olefination step in a API synthesis; internal R&D only."
                value={data.application}
                onChange={(e) => onChange({application: e.target.value})}
                maxLength={1000}
            >
            </textarea>
            <p className='input-comment'>Help us confirm the right grade and packaging. Treated confidentially.</p>
        </div>
    </>
    )
}

export default Compound
