import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({

  models:{
    transaction: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions: [{
        id: 1,
        title: 'Freelancer de Sistemas Web',
        type: 'deposit',
        category: 'Desenvolvimento',
        amount: 6000,
        createdAt: new Date()
      },

      {
        id: 2,
        title: 'Aluguel do Apto',
        type: 'withdraw',
        category: 'Apartamento',
        amount: 587,
        createdAt: new Date()
      }
    
    ]
    })
  },

  routes(){
    this.namespace = 'api';


    this.get('/transactions', () => {
      return this.schema.all('transaction')
    
    })

    this.post('/transactions', (schema, request) => {
        const data = JSON.parse(request.requestBody)

        return schema.create('transaction', data);
      })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

