import react from "react";
import { styled } from "styled-components";
import bckimg from "../Assets/download.jpg";
import phoneImg from "../Assets/about-1.png";
import Button from "./button";
const Home = () => {
  return (
    <div>
      <Container>
        <Wrap>
          <Wrapper>
            <Left>
              <h2>
                BEST WAY TO <span>PRESENT</span> YOUR APP
              </h2>
              <p>
                We ensure quality & support. People love us & we love them.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <ButtonHolder>
                <Button
                  bcc="#e74c3c"
                  text="Learn More"
                  color="white"
                  border="none"
                  hcolor="black"
                  hbcc="white"
                />
                <Button
                  bcc="none"
                  text="Download Now"
                  color="white"
                  border="1px solid white"
                  hcolor="black"
                  hbcc="white"
                />
              </ButtonHolder>
            </Left>
            <Right>
              <Image src={phoneImg} />
            </Right>
          </Wrapper>
        </Wrap>
      </Container>
    </div>
  );
};

export default Home;
const Image = styled.img`
  height: 95%;
  @media screen and (max-width: 768px) {
    height: 95%;
  }
`;
const Right = styled.div`
  width: 45%;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 60px;
    justify-content: center;
    display: flex;
    /* background-color: red; */
  }
`;
const ButtonHolder = styled.div`
  display: flex;
  margin-top: 30px;
  gap: 10px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
const Left = styled.div`
  width: 35%;
  color: #fff;
  h2 {
    font-size: 39px;
    font-weight: 600;
    @media screen and (max-width: 768px) {
      font-size: 39px;
    }

    span {
      color: #e74c3c;
    }
  }
  p {
    line-height: 1.8;
    font-size: 15px;
    @media screen and (max-width: 768px) {
      font-size: 13px;
      width: 100%;
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Wrapper = styled.div`
  width: 83%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 100px 0;
  margin-top: 10px;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;
const Wrap = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${bckimg});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: cover;
`;
