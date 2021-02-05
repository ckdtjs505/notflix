import Router from "./router";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset};
  @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@600&display=swap');
  a{
    text-decoration:none;
    color:inherit;
  }
  body {
    background-color:black;
    padding-top:50px;
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
