import { Component } from 'react';
import Form from './components/form';
import Dados from './components/api/dados';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <>
        <Form />
        <br/>
        <Dados />
      </>
    );
  }
}