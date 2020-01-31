import React from 'react';
import { apiClient } from './apiClient.jsx';

export function withApiClient(Component) {
  return function(props) {
    return <Component {...props} apiClient={apiClient} />;
  };
}