import React from 'react'

const headeritems = ({title,Icon}) => {
    return (
        <div className="flex flex-col items-center w-12 cursor-pointer sm:w-20 group p-3">
            <Icon className="w-12 h-8 group-hover:animate-bounce" width="30"/>
            <p className="font-bold  group-hover:bg-opacity-100 opacity-0 hover:opacity-100 tracking-widest">{title}</p>
        </div>
    )
}

export default headeritems
