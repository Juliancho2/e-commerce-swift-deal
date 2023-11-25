"use client"
import React from 'react'
import { Button } from './ui/button'
import { useShoppingCart } from 'use-shopping-cart'
import { urlFor } from '@/app/sanity'

export interface ProductCart {
    name: string
    description: string
    price: number
    currency: string
    image: any
    price_id: string
}
const AddToBag = ({ name, description, price, currency, image, price_id }: ProductCart) => {
    const { addItem, handleCartClick } = useShoppingCart()
    const product = { 
        name, 
        description, 
        price, 
        currency, 
        image:urlFor(image).url(),
        price_id 
    }
    const handleAddProduct = () => {
        addItem(product)
        handleCartClick()
    }
    return (
        <Button onClick={handleAddProduct} >Add to cart</Button>
    )
}

export default AddToBag
