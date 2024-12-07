"use client";

import Image from 'next/image'
import { useState } from 'react'

// const images = [
//   {
//     id: 1,
//     url: 'https://images.pexels.com/photos/14643689/pexels-photo-14643689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
//   },
//   {
//     id: 2,
//     url: 'https://images.pexels.com/photos/29549363/pexels-photo-29549363/free-photo-of-vibrant-european-robin-perched-in-nature.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
//   },
//   {
//     id: 3,
//     url: 'https://images.pexels.com/photos/16475273/pexels-photo-16475273/free-photo-of-urban-yellow-colonnade.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
//   },
//   {
//     id: 4,
//     url: 'https://images.pexels.com/photos/29321623/pexels-photo-29321623/free-photo-of-picturesque-street-view-of-dresden-s-historic-architecture.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
//   }
// ]

const ProductImages = ({items}:{items: any}) => {
  const [index, setIndex] = useState(0)

  return (
    <div className=''>
      <div className='h-[500px] relative'>
        <Image
          src={items[index].image?.url}
          alt=''
          fill
          sizes='30vw'
          className='object-cover rounded-md'
        />
      </div>
      <div className='flex justify-between gap-4 mt-8'>
        {items.map((item: any, i: number) => (
          <div 
            className='w-1/4 h-32 relative gap-4 mt-8 cursor-pointer' 
            key={item._id}
            onClick={() => setIndex(i)}>

            <Image
              src={item.image?.url}
              alt=''
              fill
              sizes='30vw'
              className='object-cover rounded-md'
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductImages
