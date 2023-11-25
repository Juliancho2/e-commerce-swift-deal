"use client"
import React from 'react'
import { Button } from './ui/button'
import { useShoppingCart } from 'use-shopping-cart'
import { urlFor } from '@/app/sanity'
import { ProductCart } from './AddToBag'


const CheckoutNow = ({ name, description, price, currency, image, price_id }: ProductCart) => {
    const { checkoutSingleItem,} = useShoppingCart()
    const buyNow = (priceId: string) => {
        checkoutSingleItem(priceId)
    }
    const product = { 
        name, 
        description, 
        price, 
        currency, 
        image:urlFor(image).url(),
        price_id 
    }
    return (
        <Button variant={"outline"} onClick={()=>buyNow(product.price_id)} >Checkout Now</Button>
    )
}

export default CheckoutNow
