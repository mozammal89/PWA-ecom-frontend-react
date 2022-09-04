import React, { Component, Fragment } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import ContactPage from '../pages/ContactPage';
import HomePage from '../pages/HomePage';
import PrivacyPage from '../pages/PrivacyPage';
import ProductDetailsPage from '../pages/ProductDetailsPage';
import PurchasePage from '../pages/PurchasePage';
import RefundPage from '../pages/RefundPage';
import UserLoginPage from '../pages/UserLoginPage';

 class AppRoute extends Component {
  render() {
    return (
      <Fragment>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<UserLoginPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/purchase" element={<PurchasePage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/refund" element={<RefundPage />} />
          <Route path="/productdetails" element={<ProductDetailsPage />} />
        </Routes>
        
      </Fragment>
    )
  }
}

export default AppRoute