import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Apple from '../../assets/images/apple.png'
import Google from '../../assets/images/google.png'
import axios from 'axios';
import AppURL from '../../api/AppURL';

class FooterDesktop extends Component {

  constructor() {
    super();
    this.state = {
         address: "",
         copyright: "",
         facebook: "",
         twitter: "",
         instragram: "",
    }
}

componentDidMount() {
    axios.get(AppURL.getSiteinfo).then(response => {
         let StatusCode = response.status;
         if (StatusCode == 200) {
              // console.log(response.data['data'][0]['copyright'])
              let GetAddress = response.data['data'][0]['address'];
              this.setState({ address: GetAddress });

              let GetCR = response.data['data'][0]['copyright'];
              this.setState({ copyright: GetCR });

              let GetFacebook = response.data['data'][0]['address'];
              this.setState({ facebook: GetFacebook });

              let GetTwitter = response.data['data'][0]['twitter_link'];
              this.setState({ twitter: GetTwitter });

              let GetInstragram = response.data['data'][0]['instragram_link'];
              this.setState({ instragram: GetInstragram });
         }
    }).catch(error => {

    })
}


  render() {
    return (
      <Fragment>
        <div className="footerback m-0 mt-5 pt-3 shadow-sm">
          <Container>
            <Row className="px-0 my-5">
              <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                <h5 className="footer-menu-title">OFFICE ADDRESS</h5>
                <div dangerouslySetInnerHTML={{ __html: this.state.address }} />
                <h5 className="footer-menu-title">SOCIAL LINK</h5>
                <a href={this.state.GetFacebook} target="_blank"><i className="fab m-1 h4 fa-facebook"></i></a>
                <a href={this.state.GetInstragram} target="_blank"><i className="fab m-1 h4 fa-instagram"></i></a>
                <a href={this.state.GetTwitter} target="_blank"><i className="fab m-1 h4 fa-twitter"></i></a>
              </Col>

              <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                <h5 className="footer-menu-title">THE COMPANY</h5>
                <Link to="/about" className="footer-link"> About Us</Link><br></br>
                <Link to="/" className="footer-link"> Company Profile</Link><br></br>
                <Link to="/contact" className="footer-link"> Contact Us</Link><br></br>
              </Col>

              <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                <h5 className="footer-menu-title">MORE INFO</h5>
                <Link to="/purchase" className="footer-link">How To Purchase</Link><br></br>
                <Link to="/privacy" className="footer-link"> Privacy Policy</Link><br></br>
                <Link to="/refund" className="footer-link"> Refund Policy </Link><br></br>
              </Col>

              <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                <h5 className="footer-menu-title">DOWNLOAD APPS</h5>
                <a><img src={Google} /></a><br></br>
                <a><img className="mt-2" src={Apple} /></a><br></br>
                Change Your Language <br></br>
                <div id="google_translate_element">  </div>
              </Col>

            </Row>
          </Container>
          <Container fluid={true} className="text-center m-0 pt-3 pb-1 bg-dark">
            <Container>
              <Row>
                <h6 className="text-white">{ this.state.copyright }</h6>
              </Row>
            </Container>
          </Container>
        </div>

      </Fragment>
    )
  }
}

export default FooterDesktop