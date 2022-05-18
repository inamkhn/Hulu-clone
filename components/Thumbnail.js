import React from 'react'
import Image from 'next/image';
import { ThumbUpIcon } from '@heroicons/react/outline';

const Thumbnail = ({result}) => {
    console.log(result.backdrop_path)
    const BASE_URL = 'https://image.tmdb.org/t/p/original';
  return (
    <div>
        <img
        className="group cursor-pointer p-3 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50"
        src={
            `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
            `${BASE_URL}${result.backdrop_path}`
          }
        height={1080}
        width={1920}
        layout='responsive'
      />
      <div className='p-2 text-gray-500'>
        <p className='truncate max-w-md'>{result.overview}</p>
        <h2 className='text-2xl font-medium group-hover:font-bold transition-all duration-200 ease-in-out'>
          {result.title || result.orignal_name}
        </h2>
        <p className='flex'>
          {result.media_type && `${result.media_type} ·`}{' '}
          {result.release_date && `${result.release_date} ·`}{' '}
          <ThumbUpIcon className='h-5 mx-2' /> {result.vote_count}
        </p>
      </div>

    </div>
  )
}

export default Thumbnail