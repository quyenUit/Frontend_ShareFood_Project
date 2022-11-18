import React from 'react'
import CardFoodList from '../components/Body/CardFoodList'
import SearchFood from '../components/Body/Utils/SearchFood'

const Search = () => {
  return (
    <>
        <SearchFood  />
        <CardFoodList />
    </>
  )
}

export default Search