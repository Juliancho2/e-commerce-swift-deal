import React from 'react'
import { client } from '../sanity'
import { simplifiedProduct } from '@/types/interface'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
async function getData(category: string) {
    const query = `*[_type == "product" && category-> name == "${category}"]{
        _id,
        "imageUrl":images[0].asset->url,
        price,
        name,
        "categoryName":category-> name
    }`
    const data = await client.fetch(query)
    return data
}
const CategoryPage = async ({params: {category}}: {params: {category: string}}) => {
    const data:simplifiedProduct[] = await getData(category)

    return (
        <div className='bg-white'>
            <div className='mx-auto max-w-2xl px-4 py-16 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
                <div className='flex justify-between items-center'>
                    <h2 className='text-2xl font-bold tracking-tight text-gray-900'>Our products for {category}</h2>
                </div>
                <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4'>
                    {data.map((product) => (
                        <div key={product._id} className='group relative'>
                            <div className='min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80'>
                                <Image
                                    width={500}
                                    height={500}
                                    src={product.imageUrl}
                                    alt={product.name}
                                    className='h-full w-full object-cover object-center lg:h-full lg:w-full'
                                />
                            </div>
                            <div className='mt-4 flex justify-between'>
                                <div>
                                    <h3 className='text-sm text-gray-700'>
                                        <Link href={`/product/${product._id}`}>
                                            <span aria-hidden='true' className='absolute inset-0' />
                                            {product.name}
                                        </Link>
                                    </h3>
                                    <p className='mt-1 text-sm text-gray-500'>{product.categoryName}</p>
                                </div>
                                <p className='text-sm font-medium text-gray-900'>${product.price}</p>
                            </div>
                        </div>))}
                </div>
            </div>
        </div>
    )
}

export default CategoryPage
