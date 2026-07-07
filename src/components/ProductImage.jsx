import { useState } from 'react'
import vide from '/images/mollecules/vide.webp'

function ProductImage({ refId, alt = '', ...props }) {
    const candidates = [...new Set([
        String(refId).padStart(5, '0'),
        String(refId).padStart(6, '0'),
    ])]

    const [i, setI] = useState(0)

    const src = i < candidates.length
        ? `${import.meta.env.BASE_URL}images/mollecules/${candidates[i]}.webp`
        : vide

    return (
        <img
        src={src}
        alt={alt}
        onError={() => setI(prev => prev + 1)}
        {...props}
        />
    )
}

export default ProductImage