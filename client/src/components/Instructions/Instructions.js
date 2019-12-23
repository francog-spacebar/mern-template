import React, { Component } from 'react'
import styles from './instructions.module.scss'
import { Tabs, Tab } from 'react-bootstrap'

class Instructions extends Component {
  render() {
    return (
      <div className={styles.instructions}>
        <h2>Instrucciones</h2>
        <Tabs onSelect={key => this.setState({ key })} variant="tabs">
          <Tab eventKey="activation" title="Para activar tu cuenta">
            <div className={styles.text}>
              <h5>Instrucciones para activar una cuenta</h5>
            </div>
          </Tab>
          <Tab eventKey="usage" title="Para jugar">
            <div className={styles.text}>
              <h5>Instrucciones de uso</h5>
            </div>
          </Tab>
        </Tabs>
      </div>
    )
  }
}

export default Instructions
