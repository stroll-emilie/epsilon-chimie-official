import '../product.css'


function Specification({specsList}) {
    if (!specsList) return null;
    return (
    <>
        <article id="specification">
            {specsList.map((spec, index) => (
                <div key={index} className='specification-elem'>
                    <p>{spec.label}</p>
                    {spec.label.toUpperCase() === "MOLECULAR FORMULA" ? (
                        <p dangerouslySetInnerHTML={{ __html: spec.data }} />
                    ) : (
                        <p>{spec.data}</p>
                    )}
                </div>
            ))}
            
        </article>
    </>
    )
}

export default Specification
