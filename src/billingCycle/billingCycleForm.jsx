import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import formField from '../common/form/formField';

class BillingCycleForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    
    return (
      <form role='form' onSubmit={handleSubmit}>
        <div className='box-body'>
          <Field name='name' component={formField} label='Nome' cols='12 4' placeholder='Informe o nome' />
          <Field name='month' component={formField} type='number' label='Mês' cols='12 4' placeholder='Informe mês' />
          <Field name='year' component={formField} type='number' label='Ano' cols='12 4' placeholder='Informe o ano' />
        </div>
        <div className='box-footer'>
          <button type='submit' className='btn btn-primary'>Submit</button>
        </div>
      </form>
    )
  }
};

export default reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm);