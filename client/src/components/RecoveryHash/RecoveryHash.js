import React, { Component } from 'react'
import { Paper, Typography, Button, Grid } from '@material-ui/core'
import styles from './recoveryHash.module.scss'
import axios from 'axios'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { blue, green } from '@material-ui/core/colors'
import CircularProgress from '@material-ui/core/CircularProgress'
import { connect } from 'react-redux'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: green
  },
  typography: {
    useNextVariants: true
  }
})

class RecoveryHash extends Component {
  constructor(props) {
    super(props)

    this.state = {
      password: '',
      passwordAgain: '',
      hash: this.props.match.params.hash,
      loading: false
    }
  }

  recover = async () => {
    const { password, hash } = this.state
    const userdata = {
      hash,
      password
    }
    this.setState({
      loading: true
    })
    const response = await axios.post(
      `${this.props.url}/api/user/recovery`,
      userdata
    )
    this.setState({
      loading: false
    })
    if (response.data.success) {
      this.props.notification({
        type: 'success',
        title: 'Tu contraseña ha sido actualizada',
        message: 'Ya puedes iniciar sesión!'
      })
      this.props.history.push('/login')
    } else {
      this.props.notification({
        type: 'danger',
        title: 'Hubo un error al actualizar tu contraseña :(',
        message: 'Intente de nuevo más tarde.'
      })
      this.props.history.push('/')
    }
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    })
  }

  componentDidMount() {
    ValidatorForm.addValidationRule('isPasswordMatch', value => {
      if (value !== this.state.password) {
        return false
      }
      return true
    })
  }

  render = () => {
    const { loading } = this.state

    return (
      <MuiThemeProvider theme={theme}>
        <div className={styles.recoveryHash}>
          <Grid item xs={12} sm={6} md={4}>
            <Paper>
              <Typography className={styles.title} component="h1" variant="h5">
                Recuperar contraseña
              </Typography>
              <ValidatorForm
                ref="form"
                onSubmit={this.recover}
                // onError={ errors => console.log(errors) }
                className={styles.content}
              >
                <TextValidator
                  label="New password"
                  onChange={this.handleChange('password')}
                  name="password"
                  type="password"
                  value={this.state.password}
                  validators={[
                    'required',
                    'minStringLength:5',
                    'maxStringLength:100'
                  ]}
                  errorMessages={[
                    'this field is required',
                    'min 5 characters',
                    'max 100 characters'
                  ]}
                  margin="normal"
                  fullWidth
                />
                <TextValidator
                  label="New password again"
                  onChange={this.handleChange('passwordAgain')}
                  name="passwordAgain"
                  type="password"
                  value={this.state.passwordAgain}
                  validators={[
                    'required',
                    'isPasswordMatch',
                    'minStringLength:5',
                    'maxStringLength:100'
                  ]}
                  errorMessages={[
                    'this field is required',
                    'password mismatch',
                    'min 5 characters',
                    'max 100 characters'
                  ]}
                  margin="normal"
                  fullWidth
                />
                {loading ? (
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    disabled
                  >
                    <CircularProgress color="primary" size={24} />
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Actualizar contraseña
                  </Button>
                )}
              </ValidatorForm>
            </Paper>
          </Grid>
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

export default connect(mapStateToProps)(RecoveryHash)
