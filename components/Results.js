import React from 'react'
import Thumbnail from './Thumbnail'

const Results = ({results}) => {
  return (
    <div className="sm:grid md:grid-cols-2 lg:grid-cols-3 px-5 py-3">
        {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </div>
  )
}

export default Results