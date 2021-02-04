import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  background-color: black;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;
  align-items: center;
`;
const List = styled.ul`
  display: flex;
`;
const Item = styled.li`
  height: 50px;
  border-bottom: ${props => (props.current ? "solid red 2px" : "solid red 0px")};
`;
const SLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 100%;
  color: white;
  font-size: 1rem;
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <List>
      <Item current={pathname === "/detail"}>
        <SLink to="/detail">detail</SLink>
      </Item>
      <Item current={pathname === "/search"}>
        <SLink to="/search">search</SLink>
      </Item>
      <Item current={pathname === "/tv"}>
        <SLink to="/tv">tv</SLink>
      </Item>
    </List>
  </Header>
));
