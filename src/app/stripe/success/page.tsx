import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { CheckCheck } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <div className='h-screen'>
      <CheckCheck className='text-green-500 w-16 h-16 mx-auto my-4'/>
      <div className='text-center'>
        <h3 className='md:text-2xl text-base text-gray-900 font-semibold text-center'>Payment was successful</h3>
        <p className='text-gray-600 my-2'>Thank you for your purchase </p>
        <Button asChild className='mt-5'>
            <Link href='/' className='text-white'>Go back</Link>
        </Button>
        </div>
    </div>
  )
}

export default page
