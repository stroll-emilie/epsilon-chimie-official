import './product.css'
const { products } = useProducts()
const { id } = useParams()
const product = getProductById(products, id)


function Product() {
    
    return (
    <>
        
    </>
    )
}

export default Product
