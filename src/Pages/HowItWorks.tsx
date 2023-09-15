import react from "react";
import styled from "styled-components";
import small from "../Assets/small-screen.png";
import big from "../Assets/big-screen.png";
import Button from "./button";
import HOWComponent from "./HowItWorksComp";
import { BiBell, BiHeart, BiMessage, BiStar } from "react-icons/bi";

const HowItWorks = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Left>
            <Img1 src={small}></Img1>
            <Img2 src={big}></Img2>
          </Left>
          <Right>
            <Topcon>
              <h2>
                AWESOME <span>FEATURES</span>
              </h2>
              <DashHolder>
                <Circle></Circle>
                <Line1></Line1>
                <Line2></Line2>
              </DashHolder>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore aliqua. Lorem
                ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore aliqua.Lorem ipsum
                dolor sit amet, consectetur adipisicing elit.
              </p>
            </Topcon>
            <Benefits>
              <Top>Benefits Of App</Top>
              <Components>
                <div>
                  <HOWComponent
                    Licon={BiBell}
                    Ltext="Notifications"
                    Stext="Lorem ipsum dolor sit amet, sed do consectetur adipisicing elit."
                    left="#bc5bddff"
                    right="#ed56bcff"
                  />
                  <HOWComponent
                    Licon={BiMessage}
                    Ltext="24/7 Support"
                    Stext="Lorem ipsum dolor sit amet, sed do consectetur adipisicing elit."
                    left="#f1386aff"
                    right="#fb6351ff"
                  />
                </div>
                <div>
                  <HOWComponent
                    Licon={BiStar}
                    Ltext="Favourites"
                    Stext="Lorem ipsum dolor sit amet, sed do consectetur adipisicing elit."
                    left="#8584e8ff"
                    right="#61c2e5ff"
                  />
                  <HOWComponent
                    Licon={BiHeart}
                    Ltext="Wishlist"
                    Stext="Lorem ipsum dolor sit amet, sed do consectetur adipisicing elit."
                    left="#bc5bddff"
                    right="#ed56bcff"
                  />
                </div>
              </Components>
              <But>
                <Button
                  bcc="#e74c3c"
                  text="Learn More"
                  color="white"
                  border="none"
                  hcolor="white"
                  hbcc="black"
                />
              </But>
            </Benefits>
          </Right>
        </Wrapper>
      </Container>
    </div>
  );
};

export default HowItWorks;

const But = styled.div`
  display: flex;
  margin-top: 0;
  position: relative;
  bottom: 50px;
`;
const Top = styled.div`
  font-size: 30px;
`;
const Components = styled.div`
  height: 50%;
  padding: 20px 0px 50px 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: 0;
`;

const Benefits = styled.div`
  width: 100%;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    padding: 0px 0px;
  }
  @media screen and (max-width: 375px) {
    flex-wrap: wrap;
    flex-direction: column;
    width: 100%;
  }
`;

const Line2 = styled.div`
  width: 55px;
  height: 1px;
  border-radius: 10px;
  background-color: #bcbcbc;
`;
const Line1 = styled.div`
  width: 45px;
  height: 1px;
  border-radius: 10px;
  background-color: #e74c3c;
`;
const Circle = styled.div`
  width: 10px;
  height: 10px;
  background-color: #e74c3c;
  border-radius: 50%;
`;
const DashHolder = styled.div`
  display: flex;
  align-items: center;
`;
const Topcon = styled.div`
  margin: 0;

  h2 {
    font-size: 37px;
    font-weight: 600;
    span {
      color: #e74c3c;
    }
  }

  p {
    color: #333;
    font-size: 14px;
    line-height: 1.6;
  }
`;
const Right = styled.div`
  margin-left: 250px;
  width: 55%;
  display: flex;
  align-items: center;
  flex-direction: column;
  /* justify-content: space-between; */
`;
const Img2 = styled.img`
  position: absolute;
  left: 300px;
  top: 2650px;
  z-index: -9999999;
`;
const Img1 = styled.img`
  position: relative;
  top: 0;
  z-index: -9999999;
`;
const Left = styled.div`
  width: auto;
`;
const Wrapper = styled.div`
  width: 83%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 70px;
`;
