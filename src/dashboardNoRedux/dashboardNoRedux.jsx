/**
 * Example of dashboard using state instead of redux
 * Valid approach since summary data will only be used by dashboard route and will not be shared by other components
 * 
 * Call it on main/routes.jsx
 */

import React, { Component } from 'react';
import axios from 'axios';

import ENV from '../env';

import ContentHeader from '../common/template/contentHeader';
import Content from '../common/template/content';
import ValueBox from '../common/widget/valueBox';
import Row from '../common/layout/row';

export default class DashboardNoRedux extends Component {
  constructor(props) {
    super(props);
    this.state = { credit: 0, debt: 0 };
  };

  componentWillMount() {
    axios.get(`${ENV.URL.API_URL}/billingCycles/summary`).then(resp => this.setState(resp.data));
  };

  render() {
    const { credit, debt } = this.state;
    return (
      <div>
        <ContentHeader title='Dashboard' small='Versão 2.0' />
        <Content>
          <Row>
            <ValueBox cols='12 4' color='green' icon='bank' value={`R$ ${credit}`} text='Total de Créditos' />
            <ValueBox cols='12 4' color='red' icon='credit-card' value={`R$ ${debt}`} text='Total de Débitos' />
            <ValueBox cols='12 4' color='blue' icon='money' value={`R$ ${credit - debt}`} text='Valor Consolidado' />
          </Row>
        </Content>
      </div>
    )
  };
};
