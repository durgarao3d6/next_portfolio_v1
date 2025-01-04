import React from 'react'

const Heading = ({children}) => {
  return (
    <h3 className='capitalize text-2xl font-semibold text-red-500 dark:text-red-300 mb-3'>
        {children}
    </h3>
  )
}

export default Heading