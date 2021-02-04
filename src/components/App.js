import Router from "./router";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset};
  a{
    text-decoration:none;
    color:inherit;
  }
  body {
    padding-top:50px
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
