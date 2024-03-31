import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store';
//import { ChakraProvider, theme } from '@chakra-ui/react'
import Location from './components/Location';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={theme}>
  <Provider store={store}>

   


    <React.StrictMode>

    <App />

    </React.StrictMode>
  </Provider>,


  </ChakraProvider>


    


      

 
);
reportWebVitals();
