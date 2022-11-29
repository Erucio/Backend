import { useContext, useState } from "react"
import { createContext } from "react"
import { Props } from "../models/Product"


interface ProductProviderType {
    children: any
}

export interface ProductContextType{
    product: Props
    all: Props[]
    featured: Props[]
    flashSale: Props[]
    get: (articleNumber?: string) => void
    getAll: (take?: number) => void
    getFeatured: (take?: number) => void
    getFlashSale: (take?: number) => void
}

export const ProductContext = createContext<ProductContextType | null>(null)
export const useProductContext = () => { return useContext(ProductContext)}

const ProductProvider: React.FC<ProductProviderType> = ({children}) => {
    const baseUrl:string = 'https://win22-webapi.azurewebsites.net/api/products'
    const EMPTY_PRODUCT: Props = { articleNumber: '', name: '', category: '', price: 0, imageName: '' }

    const [product, setProduct] = useState<Props>(EMPTY_PRODUCT)
    const [all, setAll] = useState<Props[]>([])
    const [featured, setFeatured] = useState<Props[]>([])
    const [flashSale, setFlashSale] = useState<Props[]>([])

    const get = async (articleNumber?: string) => {
        if (articleNumber !== undefined){
            const res = await fetch(baseUrl + `/${articleNumber}`)
            setProduct(await res.json())
        }
    }

    const getAll = async (take:number = 0) => {
        let url = baseUrl

        if (take !== 0)
            url = baseUrl + `take=${take}`
            
        const res = await fetch(url)
        setAll(await res.json())
    }
    const getFeatured = async (take:number = 0) => {
        let url = baseUrl + `?tag=featured`

        if (take !== 0)
            url += baseUrl + `&take=${take}`

        const res = await fetch(url)
        setFeatured(await res.json())
    }
    const getFlashSale = async (take:number = 0) => {
        let url = baseUrl + `?tag=flashSale`

        if (take !== 0)
            url += baseUrl + `&take=${take}`

        const res = await fetch(url)
        setFlashSale(await res.json())
    }

    return <ProductContext.Provider value={{product, all, featured, flashSale, get, getAll, getFeatured, getFlashSale}}>
        {children}
    </ProductContext.Provider>
}
export default ProductProvider
