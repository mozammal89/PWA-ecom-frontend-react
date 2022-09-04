import React, { Component, Fragment } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import ContactPage from '../pages/ContactPage';
import HomePage from '../pages/HomePage';
import UserLoginPage from '../pages/UserLoginPage';

 class AppRoute extends Component {
  render() {
    return (
      <Fragment>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<UserLoginPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* <Route exact path="/login" component={UserLoginPage} /> */}
        </Routes>
        {/* UserLoginPage */}
      </Fragment>
    )
  }
}

export default AppRoute