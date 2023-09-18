import { styled } from "styled-components";

export const Mobile = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Menu />
          <Logo />
          <NavsHolder>
            <Nav>Lorem</Nav>
            <Nav>Lorem</Nav>
            <Nav>Lorem</Nav>
            <Nav>Lorem</Nav>
            <Nav>Lorem</Nav>
            <Nav>Lorem</Nav>
            <Nav>Lorem</Nav>
            <MessageIcon />
          </NavsHolder>
          <SearchIcon />
        </Wrapper>
      </Container>
    </div>
  );
};

const SearchIcon = styled.div`
  width: 30px;
  height: 30px;
  background-color: lightgrey;
  object-fit: cover;

  @media (min-width: 1026px) {
    display: none;
  }
`;

const MessageIcon = styled.div`
  @media (min-width: 1026px) {
    width: 30px;
    height: 30px;
    background-color: lightgrey;
    object-fit: cover;
    display: block;
  }
  display: none;
`;

const Nav = styled.div``;

const NavsHolder = styled.div`
  display: none;

  @media (min-width: 1026px) {
    display: flex;
  }
`;

const Logo = styled.div`
  width: 30px;
  height: 30px;
  background-color: lightgrey;
  object-fit: cover;
`;

const Menu = styled.div`
  width: 30px;
  height: 30px;
  background-color: lightgrey;
  object-fit: cover;
`;

const Wrapper = styled.div`
  width: 90%;
  height: 90%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Container = styled.div`
  width: 100%;
  height: 50px;
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
`;
