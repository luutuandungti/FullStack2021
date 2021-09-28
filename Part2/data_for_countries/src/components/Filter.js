import React from 'react'

const Filter = (props) => {
  const { filter, handleFilterChange } = props
  return (
    <div>
      Search: <input value={filter} onChange={handleFilterChange} />
    </div>
  )
}

export default Filter