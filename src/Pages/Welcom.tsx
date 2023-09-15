import react from "react";
import { styled } from "styled-components";
import girl from "../Assets/about-4.png";
import Part from "./Part";
import { BsGear, BsMegaphone } from "react-icons/bs";
import { TfiDesktop } from "react-icons/tfi";
const Welcome = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Topcon>
            <h2>
              WELCOME TO <span>LAYER</span>
            </h2>
            <DashHolder>
              <Circle></Circle>
              <Line1></Line1>
              <Line2></Line2>
            </DashHolder>
            <p>
              We ensure quality & support. People love us & we love them. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </Topcon>
          <Bottomcon>
            <Left>
              <Part
                text="BOOTSTRAP 3.2"
                left="#912cebff"
                right="#c812daff"
                Icon={TfiDesktop}
              />
              <Part
                text="CREATIVE DESIGN"
                left="#ff5e3cff"
                right="#ff9b33ff"
                Icon={BsGear}
              />
              <Part
                text="EASY TO USE"
                left="#f0356dff"
                right="#fb6650ff"
                Icon={BsMegaphone}
              />
            </Left>
            <Right>
              <Image src={girl} />
            </Right>
          </Bottomcon>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Welcome;

const Image = styled.img``;
const Right = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 40%;
  /* background-color: black; */
`;
const Left = styled.div`
  width: 50%;
  display: flex;
  gap: 60px;
  justify-content: center;
  flex-direction: column;
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
const Bottomcon = styled.div`
  display: flex;
`;
const Topcon = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 40%;

  h2 {
    font-size: 37px;
    font-weight: 600;
    span {
      color: #e74c3c;
    }
  }

  p {
    text-align: center;
    color: #333;
    font-size: 14px;
    line-height: 1.6;
  }
`;
const Wrapper = styled.div`
  width: 83%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  /* background-color: red; */
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 70px;
`;
