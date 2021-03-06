import React from 'react'
import Grid from 'react-bootstrap/lib/Grid'
import Panel from 'react-bootstrap/lib/Panel'
import Row from 'react-bootstrap/lib/Row'
import {injectIntl} from 'react-intl'
import LedgerTable from './LedgerTableContainer'

class Ledgers extends React.Component {
  render() {
    const {formatMessage} = this.props.intl
    return (
      <Grid>
        <Row>
          <Panel header={formatMessage({id: 'ledgers'})}>
            <LedgerTable usePaging limit={20} />
          </Panel>
        </Row>
      </Grid>
    )
  }
}

export default injectIntl(Ledgers)
