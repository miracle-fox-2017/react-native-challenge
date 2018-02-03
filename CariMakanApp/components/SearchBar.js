import React from 'react'
import { connect } from 'react-redux'
import { SearchBar } from 'react-native-elements'

const SearchBarComponent = () => {
  <SearchBar
  onChangeText={someMethod}
  onClearText={someMethod}
  placeholder='Type Here...' />
}

export default SearchBarComponent
