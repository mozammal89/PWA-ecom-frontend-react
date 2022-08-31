import React, { Component, Fragment } from 'react'
import Categories from '../components/home/Categories'
import FeatureProducts from '../components/home/FeatureProducts'

 class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <FeatureProducts />
        <Categories />
      </Fragment>
    )
  }
}

export default HomePage