import React, { Component } from 'react'
import { connect } from 'react-redux'
import { action1 } from '../store/actions'
import { i18n, Link, withNamespaces } from '../i18n'
import Test from './Test';
class Counter extends Component {
  static async getInitialProps() {
    return {
      namespacesRequired: ['common'],
    }
  }
  increment = () => {
    const { dispatch } = this.props
    dispatch(action1.incrementCount())
  }

  decrement = () => {
    const { dispatch } = this.props
    dispatch(action1.decrementCount())
  }

  reset = () => {
    const { dispatch } = this.props
    dispatch(action1.resetCount())
  }

  render () {
    const { count,t } = this.props
    return (
      <div>
        <h1>
          Count: <span>{count}</span>
        </h1>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
        <button onClick={this.reset}>{t('h1')}</button>
        <Test />
      </div>
    )
  }
}

function mapStateToProps (state) {
  const { count } = state
  return { count }
}

export default withNamespaces('common')(connect(mapStateToProps)(Counter))
