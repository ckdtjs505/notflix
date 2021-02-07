import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  background-color: rgba(10, 10, 10 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const List = styled.ul`
  display: flex;
  align-items: center;
`;
const Item = styled.li`
  color: ${props => (props.current ? "white" : "gray")};
`;
const SLink = styled(Link)`
  margin-left: 1.3rem;
  width: 70px;
  font-size: 0.8rem;
`;
const HomeLink = styled(Link)`
  font-family: "Oswald", sans-serif;
  font-size: 2rem;
  margin-left: 2rem;
  color: red;
`;

const Search = styled.input`
  margin-right: 1.5rem;
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <List>
      <Item current={pathname === "/"}>
        <HomeLink to="/">NOTFLIX</HomeLink>
      </Item>
      <Item current={pathname === "/"}>
        <SLink to="/">홈</SLink>
      </Item>
      <Item current={pathname === "/tv"}>
        <SLink to="/tv">TV프로그램</SLink>
      </Item>
      <Item current={pathname === "/movie"}>
        <SLink to="/movie">영화</SLink>
      </Item>
      {/* <Item current={pathname === "/detail"}>
        <SLink to="/detail">detail</SLink>
      </Item>
      <Item current={pathname === "/search"}>
        <SLink to="/search">search</SLink>
      </Item> */}
    </List>
    <Search></Search>
  </Header>
));
