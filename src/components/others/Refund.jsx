import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import axios from 'axios';
import AppURL from '../../api/AppURL';
class Refund extends Component {

     constructor() {
          super();
          this.state = {
               refund: ""
          }
     }

     componentDidMount() {
          axios.get(AppURL.getSiteinfo).then(response => {
               let StatusCode = response.status;
               if (StatusCode == 200) {
                    // console.log(response.data['data'][0]['about'])
                    let GetData = response.data['data'][0]['refund'];
                    this.setState({ refund: GetData });
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
                                   <h4 className="section-title-login">Refund Page </h4>
                                   <p className="section-title-contact">
                                   <div dangerouslySetInnerHTML={{ __html: this.state.refund }} />
                                   </p>


                              </Col>
                         </Row>
                    </Container>
               </Fragment>
          )
     }
}

export default Refund