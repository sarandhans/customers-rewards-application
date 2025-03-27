import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  body {
    font-family: 'Arial', sans-serif;
    background: #f8f9fa;
    color: #333;
    padding: 2rem;
    font-size: 18px; 
  }

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    background-color: #0077cc;
    color: white;
    padding: 1rem;
    border-radius: 8px;
    margin-top: 20px;
    margin-bottom: 1.5rem;
  }
 h3{
 padding: 1rem 0;
  font-size: 1.5rem;
  font-weight: bold;
 }
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 2rem;
    font-size: 1.1rem; 
  }

  th, td {
    padding: 1rem;
    border: 1px solid #ccc;
    text-align: left;
  }

  th {
    background-color: #0077cc;
    color: white;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  select, button, input {
    font-size: 1rem; 
  }

  p {
    font-size: 1.1rem;
  }
  
`;


export default GlobalStyle;

