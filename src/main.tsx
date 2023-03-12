import './index.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

const queryClient = new QueryClient();

import App from './App';
import ConfirmContextProvider from './context/confirmContext';
import ModalContextProvider from './context/modalContext';

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ModalContextProvider>
        <ConfirmContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
          <ReactQueryDevtools initialIsOpen={true} />
        </ConfirmContextProvider>
      </ModalContextProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
