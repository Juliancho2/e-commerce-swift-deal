import { client } from '@/app/sanity'
import AddToBag from '@/components/AddToBag'
import CheckoutNow from '@/components/CheckoutNow'
import ImageGallery from '@/components/ImageGallery'
import { Button } from '@/components/ui/button'
import { fullProduct } from '@/types/interface'
import { Star, Truck } from 'lucide-react'
import React from 'react'

async function getData(id: string) {
    const query = `*[_type == "product" && _id == "${id}"][0]{
        _id,
        images,
        name,
        price,
        description,
        "categoryName":category-> name,
        price_id
    }`
    const data = await client.fetch(query)
    return data

}

const page = async ({ params }: { params: { id: string } }) => {
    const data: fullProduct = await getData(params.id)
    return (
        <div className='bg-white'>
            <div className='mx-auto max-w-screen px-4 py-16 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
                <div className='grid gap-x-6 gap-y-10 sm:grid-cols-2'>
                    <ImageGallery images={data.images} />
                    <div className='md:py-8 '>
                        <div className='mb-2 md:mb-3'>
                            <span className='mb-0.5 inline-block text-gray-500'>{data.categoryName}</span>
                            <h2 className='text-xl 
                            lg:text-2xl font-bold text-gray-900'>{data.name}</h2>
                        </div>
                        <div className='mb-6 flex items-center gap-3 md:mb-10'>
                            <Button className='rounded-full gap-x-2'>
                                <span className='text-xs'>4.2</span>
                                <Star className='ml-1 h-4 w-4' />
                            </Button>
                            <span className='text-sm text-gray-500 transition duration-100'>56 Ratings</span>
                        </div>
                        <div className='mb-4 '>
                            <div className='flex items-end gap-2'>
                                <span className='text-xl
                                md:text-2xl font-bold text-gray-900'>${data.price}</span>
                                <span className='mb-0.5 text-sm text-red-500 line-through'>
                                    ${data.price + 30}
                                </span>
                            </div>
                            <span className='text-sm text-gray-500'>Incl. Vat Plus Shipping</span>
                        </div>
                        <div className='mb-6 flex items-center gap-2 text-gray-500'>
                            <Truck />
                            <span>2-4 Day Delivery</span>
                        </div>
                        <div className='flex gap-2.5 '>
                            <AddToBag
                                price_id={data.price_id}
                                currency='USD'
                                description={data.description}
                                image={data.images[0]}
                                name={data.name}
                                price={data.price}
                            />
                            <CheckoutNow
                                currency="USD"
                                description={data.description}
                                image={data.images[0]}
                                name={data.name}
                                price={data.price}
                                key={data._id}
                                price_id={data.price_id}
                            />

                        </div>
                        <p className='mt-12 text-sm text-gray-500 tracking-wide'>{data.description}</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
