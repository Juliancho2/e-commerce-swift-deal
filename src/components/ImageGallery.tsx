"use client"
import React, { FC, useState } from 'react'
import Image from 'next/image'
import { urlFor } from '@/app/sanity'

interface Props {
    images: any
}
const ImageGallery: FC<Props> = ({ images }) => {
    const [bigImage, setBigImage] = useState(images[0])

    const handleSmallImage = (image: any) => {
        setBigImage(image)
    }
    console.log(images)
    return (
        <div className='grid  gap-4 lg:grid-cols-5'>
            <div className='order-last flex gap-4 lg:order-none lg:flex-col'>
                {images?.map((image: any) => (
                    <div onClick={() => handleSmallImage(image)} key={image._key} className='relative overflow-hidden rounded-lg bg-gray-100 '>
                        <Image
                            width={500}
                            height={500}
                            src={urlFor(image).url()}
                            alt="hero image"
                            className='h-full w-full object-cover object-center'
                        />
                    </div>
                ))}
            </div>
            <div className='relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4'>
                <Image
                    width={500}
                    height={500}
                    src={urlFor(bigImage).url()} alt="hero image"
                    className={'h-full w-full object-cover object-center'} />
                    <span className='absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white'>Sale</span>
            </div>
        </div>
    )
}

export default ImageGallery
