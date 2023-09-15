import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineMail } from "react-icons/ai";
import { BiMenu, BiSearch } from "react-icons/bi";

const Header = () => {
  const [show, setShow] = useState(false);

  const headerShow = () => {
    if (window.pageYOffset > 100) {
      setShow(true);
    } else if (window.innerWidth === 768) {
      setShow(false);
    } else {
      setShow(false);
    }
  };
  window.addEventListener("scroll", headerShow);
  return (
    <div>
      {show ? (
        <Container bg="white">
          <Wrapper>
            <Menu>
              <BiMenu />
            </Menu>
            <Logo src="https://zozothemes.com/html/layer/demo/images/logo-dark.png" />

            <Navhold co="black">
              <Navs>Home</Navs>
              <Navs>Features</Navs>
              <Navs>How it works</Navs>
              <Navs>Screenshots</Navs>
              <Navs>Team</Navs>
              <Navs>News</Navs>
              <Navs>Extras+</Navs>
              <Icon>
                <AiOutlineMail />
              </Icon>
            </Navhold>
            <Search>
              <BiSearch />
            </Search>
          </Wrapper>
        </Container>
      ) : (
        <Container bg="none">
          <Wrapper>
            <Menu>
              <BiMenu />
            </Menu>
            <Logo src="https://zozothemes.com/html/layer/demo/images/logo-color.png" />

            <Navhold co="white">
              <Navs>Home</Navs>
              <Navs>Features</Navs>
              <Navs>How it works</Navs>
              <Navs>Screenshots</Navs>
              <Navs>Team</Navs>
              <Navs>News</Navs>
              <Navs>Extras+</Navs>
              <Icon>
                <AiOutlineMail />
              </Icon>
            </Navhold>
            <Search>
              <BiSearch />
            </Search>
          </Wrapper>
        </Container>
      )}
    </div>
  );
};

export default Header;
const Search = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    font-size: 30px;
    color: #e74c3c;
    display: flex;
  }
`;
const Menu = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    font-size: 35px;
    color: #fff;
    cursor: pointer;
    display: flex;
  }
`;
const Icon = styled.div`
  color: #e74c3c;
  font-size: 30px;
  margin-left: 20px;
  margin-top: 5px;
`;
const Navs = styled.h4`
  text-transform: uppercase;
  margin-left: 30px;
  transition: 350ms ease-in-out;
  &:hover {
    color: #e74c3c;
    cursor: pointer;
  }
`;
const Navhold = styled.div<{ co: string }>`
  display: flex;
  align-items: center;
  color: ${({ co }) => co};

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Logo = styled.img`
  height: 35px;
`;
const Wrapper = styled.div`
  display: flex;
  width: 83%;
  height: 100%;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;
const Container = styled.div<{ bg: string }>`
  display: flex;
  width: 100%;
  height: 80px;
  justify-content: center;
  position: fixed;
  background-color: ${({ bg }) => bg};
  transition: 450ms ease-in-out;
`;
