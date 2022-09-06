import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import axios from 'axios';
import AppURL from '../../api/AppURL';
import { render } from 'react-dom';
class Privacy extends Component {
     constructor() {
          super();
          this.state = {
               privacy: ""
          }
     }

     componentDidMount() {
          axios.get(AppURL.getSiteinfo).then(response => {
               let StatusCode = response.status;
               if (StatusCode == 200) {
                    // console.log(response.data['data'][0]['about'])
                    let GetData = response.data['data'][0]['privacy'];
                    this.setState({ privacy: GetData });
               }
          }).catch(error => {

          })
     }

     render() {
          return (
               <Fragment>
                    <Container>
                         <Row className="p-2">
                              <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
                                   <h4 className="section-title-login">Privacy Page </h4>
                                   <p className="section-title-contact">
                                        <div dangerouslySetInnerHTML={{ __html: this.state.privacy }} />
                                   </p>


                              </Col>
                         </Row>
                    </Container>
               </Fragment>
          )
     }
}

export default Privacy