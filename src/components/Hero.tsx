import React from 'react'
import Image from 'next/image'
import { client, urlFor } from '@/app/sanity'
import Link from 'next/link'

async function getData() {
    const query = `*[_type == "heroimages"][0]`
    const data= await client.fetch(query)

    return data
}

const Hero = async () => {
    const data= await getData()
  return (
    <section className='mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
      <div className='mb-8 flex flex-wrap justify-between md:mb-16'>
        <div className='mb-6 w-full flex flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48'>
            <h1 className='mb-4 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl md:mb-8 md:text-6xl'>
                Top fashion brands of 2022
            </h1>
            <p className='max-w-md leading-relaxed text-gray-500 xl:text-lg'> We sell the best products from the top brands around the world and ship them to your door. </p>
        </div>
        <div className='mb-12 flex w-full md:mb-16 lg:w-2/3'>
            <div className='relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0'>
                <Image 
                    width={500}
                    height={500}
                    src={urlFor(data.image1).url()}
                    alt="hero image"
                    className='h-full w-full object-cover object-center'
                />
            </div>
            <div className='relative overflow-hidden rounded-lg bg-gray-100 shadow-lg'>
                <Image 
                    width={500}
                    height={500}
                    src={urlFor(data.image2).url()}
                    alt="hero image"
                    className='h-full w-full object-cover object-center'
                />
            </div>

        </div>

      </div>
      <div className='flex flex-col items-center justify-between gap-8 md:flex-row'>
        <div className='flex h-12 w-64 overflow-hidden rounded-lg border divide-x'>
        <Link className='flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-100' href={"/Men"}>
        Men
        </Link>
        <Link className='flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-100' href={"/women"}>
        Women
        </Link>
        <Link className='flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-100' href={"/teens"}>
        Teens
        </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
