import axios from 'axios';

import ENV from '../env';

export function getSummary() {
  const request = axios.get(`${ENV.URL.API_URL}/billingCycles/summary`);

  return {
    type: 'BILLING_SUMMARY_FETCHED',
    payload: request,
  }
};
