"use client"
import React from 'react'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from './ui/sheet'
import { useShoppingCart } from 'use-shopping-cart'
import Image from 'next/image'
import { Button } from './ui/button'

const ShoppingCartModal = () => {
    const { cartCount, shouldDisplayCart, handleCartClick, cartDetails,removeItem,totalPrice,handleCloseCart,redirectToCheckout } = useShoppingCart()

    async function handleCheckout(event:any) {
        event.preventDefault()
        try{
            const result = await redirectToCheckout()
            if(result?.error){
                console.log(result.error)
            }
        }catch(err){
            console.log(err)
        }
    }
    return (
        <Sheet open={shouldDisplayCart} onOpenChange={handleCartClick}>
            <SheetContent className='sm:max-w-lg w-[90vw]'>
                <SheetHeader>
                    <SheetTitle>Shopping Cart</SheetTitle>
                </SheetHeader>
                <div className='h-full flex flex-col justify-between'>
                    <div className='mt-8 flex-1 overflow-hidden'>
                        <ul className='my-6 divide-y divide-gray-200'>
                            {cartCount == 0 ? (
                                <h1 className='text-2xl py-6'>Your cart is empty</h1>
                            ) : (
                                <>
                                    <h1 className='text-2xl py-6'>Hey you have {cartCount} items</h1>
                                    {
                                        Object.values(cartDetails ?? {}).map((product) => (
                                            <li
                                             key={product.id}
                                             className='flex py-6 
                                             '
                                             >
                                                <div className='h-24 w-24 overflow-hidden
                                             rounded-md flex-shrink-0
                                             border border-gray-200'>
                                                <Image 
                                                alt='product image'
                                                width={100}
                                                height={100}
                                                src={product.image as string}
                                                />
                                                </div>
                                                <div className='ml-4 flex flex-1 flex-col'>
                                                    <div>
                                                        <div className='flex justify-between
                                                        text-base font-medium
                                                        text-gray-900'>
                                                            <h3>
                                                                {product.name}
                                                            </h3>
                                                            <p className='ml-4'>
                                                                ${product.price}
                                                            </p>
                                                        </div>
                                                        <p className='mt-1 text-sm
                                                        line-clamp-2
                                                        text-gray-500'>
                                                            {product.description}
                                                        </p>
                                                    </div>
                                                    <div className='flex 
                                                     items-end justify-between flex-1
                                                     text-sm
                                                     '>
                                                        <p className='text-gray-500' >QTY: {product.quantity}</p>
                                                        <div className='flex '>
                                                        <button
                                                        onClick={() => removeItem(product.id)}
                                                        className='text-primary hover:text-primary/80'>Remover</button>
                                                        </div>
                                                    </div>
                                                </div>

                                             </li>
                                        ))
                                    }
                                </>
                            )}
                        </ul>

                    </div>
                    <div className='border-t border-gray-200 px-4 py-6 sm:px-6' >
                            <div className='flex justify-between text-base font-medium text-gray-900'>
                                <p>Subtotal</p>
                                <p>${totalPrice}</p>
                            </div>
                            <p className='mt-0.5 text-sm text-gray-500'> Shipping and taxes calculated at checkout. </p>

                            <div className='mt-6'>
                                <Button onClick={handleCheckout} className='w-full'> Checkout</Button>
                            </div>
                            <div className='mt-6 text-center flex justify-center text-sm text-gray-500'>
                                <p>
                                    OR <button onAbort={handleCloseCart} className='text-primary hover:text-primary/80'>Continue Shopping</button>
                                </p>

                            </div>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default ShoppingCartModal
