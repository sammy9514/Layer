import react from "react";
import { styled } from "styled-components";
import phone from "../Assets/about-2.png";
import Part from "./Part";
import AwesomeComp from "./AwesomeComp";
import { BiGlobe, BiMicrophone, BiPen } from "react-icons/bi";
import { BsFlag, BsLightning, BsPaletteFill } from "react-icons/bs";

const Awesome = () => {
  return (
    <div>
      <Container>
        <Wrapper>
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
              We ensure quality & support. People love us & we love them. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </Topcon>
          <Bottomcon>
            <Left>
              <AwesomeComp
                LIcon={BiPen}
                LText="Creative Design"
                color="red"
                margin="140"
                right=""
              />
              <AwesomeComp
                LIcon={BsFlag}
                LText="Easy to Customize"
                color="lightblue"
                margin="50"
                right=""
              />
              <AwesomeComp
                LIcon={BsLightning}
                LText="Bootstrap 3"
                color="orange"
                margin="140"
                right=""
              />
            </Left>
            <Middle>
              <Image src={phone} />
            </Middle>
            <Right>
              <AwesomeComp
                LIcon={BsPaletteFill}
                LText="Different Colours"
                color="purple"
                right=""
                margin=""
              />
              <AwesomeComp
                LIcon={BiGlobe}
                LText="Seo friendly"
                color="cyan"
                right="140"
                margin=""
              />
              <AwesomeComp
                LIcon={BiMicrophone}
                LText="24/7 SUPPORT"
                color="#fe9776ff"
                right="10"
                margin=""
              />
            </Right>
          </Bottomcon>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Awesome;

const Image = styled.img``;
const Right = styled.div`
  gap: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Middle = styled.div``;
const Left = styled.div`
  gap: 50px;
  display: flex;
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
  gap: 90px;
  align-items: center;
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
  background: linear-gradient(to right, #e9f0ffff, #fcfaffff, #f8e9ffff);
  @media screen and (max-width: 768px) {
    height: 100%;
    padding: 20px 0px 120px 0px;
  }
`;
