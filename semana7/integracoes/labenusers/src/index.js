import React from 'react'
import axios from "axios"
import './App.css';
import { render } from '@testing-library/react';


const url =
  'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'

const headers = {
  headers: {
    Authorization: 'raphael-nicolini-molina'
  }
};

export default class app extends React.Component {

  state = {
    nome: '',
    email: ''
  }


  render() {
  return(

    <div>
      aaaa
    </div>
  )}  
  
}