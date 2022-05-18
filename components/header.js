import React from 'react'
import Image from 'next/image'
import Headeritems from './headeritems'
import { HomeIcon,SearchIcon,UserIcon,CollectionIcon,BadgeCheckIcon,LightningBoltIcon } from '@heroicons/react/outline'

const header = () => {
    return (
        <header className="flex justify-between bg-slate-500 items-center px-5 p-2">
            <div className="flex space-x-4 text-green-500">
               <Headeritems Icon={HomeIcon} title="HOME"  />
               <Headeritems Icon={SearchIcon} title="SEARCH"  />
               <Headeritems Icon={UserIcon} title="ACCOUNT"  />
               <Headeritems Icon={CollectionIcon} title="COLLECTIONS"  />
               <Headeritems Icon={BadgeCheckIcon} title="VERIFIED"  />
               <Headeritems Icon={LightningBoltIcon} title="TRENDING"  />
            </div>
           <div>
            {/* <img className="w-28 h-16"   src="https://is4-ssl.mzstatic.com/image/thumb/Purple122/v4/09/f0/90/09f0902e-93e2-07e8-10dc-35bb92511df1/HuluAppIcon-1x_U007emarketing-0-7-0-85-220.png/1200x630wa.png" /> */}
            <h1 className='text-5xl text-green-500 font-bold'>HULU</h1>
            </div>
        </header>
    )
}

export default header
