import '../product.css'

function SafetyHazards({ hazards = [] }) {
    
    return (
        <article id="safety_hazards">
            {hazards.length > 0 ? (
                hazards.map((hazard,i) => (
                    <div key={`${hazard.for}-${i}`}>
                        <span>{hazard.code}</span>
                        <div>
                            <p>{hazard.label}</p>
                            <p>{hazard.description}</p>
                        </div>
                    </div>
                ))
            ) : (
                <div>
                    <span>N/A</span>
                    <div>
                        <p>Information not currently available.</p>
                        <p>Please, feel free to reach out tu us for further details.</p>
                    </div>
                </div>
            )}
            
            <p>Request for the full SDS (Safety Data Sheet) for detailed handling, storage and disposal guidance.</p>
        </article>
    )
}

export default SafetyHazards
