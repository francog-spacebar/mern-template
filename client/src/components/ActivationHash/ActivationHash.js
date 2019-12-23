import React, { Component } from 'react'
import styles from './activationHash.module.scss'
import axios from 'axios'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { blue, green } from '@material-ui/core/colors'
import { connect } from 'react-redux'
import CircularProgress from '@material-ui/core/CircularProgress'

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: green
  },
  typography: {
    useNextVariants: true
  }
})

class Activation extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hash: this.props.match.params.hash,
      loading: true
    }
  }

  activate = async () => {
    const { hash } = this.state
    const userdata = {
      hash
    }
    this.setState({
      loading: true
    })
    const response = await axios.post(
      `${this.props.url}/api/user/activation`,
      userdata
    )
    this.setState({
      loading: false
    })
    if (response.data.success) {
      this.props.notification({
        type: 'success',
        title: 'Cuenta Activada!',
        message: 'Ahora puedes iniciar sesión.'
      })
      this.props.history.push('/login')
    } else {
      this.props.notification({
        type: 'danger',
        title: 'Hubo un error al actiar tu cuenta!',
        message: 'Intente de nuevo más tarde.'
      })
      this.props.history.push('/')
    }
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.activate()
    }, 1)
  }

  render = () => {
    const { loading } = this.state

    return (
      <MuiThemeProvider theme={theme}>
        <div className={styles.activationHash}>
          {loading ? (
            <div>
              <h2>Activando tu cuenta...</h2>
              <CircularProgress className={styles.loader} />
            </div>
          ) : null}
        </div>
      </MuiThemeProvider>
    )
  }
}

const mapStateToProps = state => {
  return {
    url: state.url,
    notification: state.notification
  }
}

export default connect(mapStateToProps)(Activation)
