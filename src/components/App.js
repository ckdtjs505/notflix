import Router from "./Router";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "./api";

const GlobalStyle = createGlobalStyle`
  ${reset};
  a{
    text-decoration:none;
    color:inherit;
  }
  body {
    background-color:black;
    padding-top:100px;
    color : white;
    font-family: 'Jua', sans-serif;
  }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router />
    </div>
  );
}

export default App;
