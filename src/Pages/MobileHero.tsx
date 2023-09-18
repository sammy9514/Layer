import styled from "styled-components";

const Hero = () => {
  return (
    <Container>
      <Wrapper>
        <Holder>
          <H1>
            BEST WAY TO <span>PRESENT</span> YOUR APP
          </H1>
          <H2>
            We ensure quality & support. People love us & we love them. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit.
          </H2>
        </Holder>
        <Image />
      </Wrapper>
    </Container>
  );
};

export default Hero;

const Image = styled.img`
  width: 100%;
  max-width: 500px;
  height: 300px;
  background-color: aliceblue;

  @media (min-width: 1024px) {
    height: 500px;
  }
`;

const H2 = styled.h2`
  font-size: 15px;
  color: #fff;
  line-height: 25px;
  font-family: "Nunito Sans";
`;

const H1 = styled.h1`
  width: 80%;
  font-size: 35px;
  color: #fff;
  font-family: "Quicksand";

  span {
    color: #e74c3c;
  }

  @media (min-width: 1057px) {
    width: 100%;
    font-size: 40px;
  }
`;

const Holder = styled.div`
  @media (min-width: 1024px) {
    width: 40%;
  }
`;

const Wrapper = styled.main`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media (min-width: 1057px) {
    width: 70%;
  }
  @media (min-width: 1024px) {
    justify-content: space-between;
  }
`;

const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background: rgba(000, 000, 000, 50%);
  display: flex;
  justify-content: center;
  align-items: center;
`;
