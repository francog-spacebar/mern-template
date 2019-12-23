import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './home.module.scss'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import axios from 'axios'

class Home extends Component {
  checklogin = async () => {
    console.log('Checking login')
    const res = await axios.post(`${this.props.url}/api/user/check`)
    console.log('authenticated? ' + res)
  }

  render() {
    return (
      <Container>
        <Col>
          <Row>
            <div className={styles.container}>
              <h2>
                <strong>Bienvenido/a!</strong>
                <br />
                <br />
                <LinkContainer to="/login">
                  <Button variant="outline-primary">Inicia sesión</Button>
                </LinkContainer>{' '}
                para continuar.
                <br />
                <br />Ó{' '}
                <LinkContainer to="/registration">
                  <Button variant="outline-primary">regístrate aquí.</Button>
                </LinkContainer>
              </h2>
            </div>
          </Row>
        </Col>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.authenticated,
    user: state.user
  }
}

export default connect(mapStateToProps)(Home)
