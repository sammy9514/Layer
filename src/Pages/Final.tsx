import styled from "styled-components";
import bg from "../Assets/bg-2.jpg";
import TableComponent from "./Table";
import { BsBootstrap, BsTv } from "react-icons/bs";
import { BiLogoHtml5, BiRocket } from "react-icons/bi";
import phone from "../Assets/about-3.png";

const Additional = () => {
  return (
    <div>
      <Container>
        <Hold>
          <TopWrapper>
            <W>
              ADDITIONAL <span> FEATURES</span>
            </W>
            <div style={{ display: "flex" }}>
              <Line bcc="#e74f40ff">
                <Ball />
              </Line>
              <Line bcc="grey"></Line>
            </div>
          </TopWrapper>
          <Wrapper>
            <Text>
              We ensure quality & support. People love us & we love them. Lorem
              ipsum dolor sit <br /> amet, consectetur adipiscing elit.
            </Text>
          </Wrapper>
          <Table>
            <TableComponent Icon={BsBootstrap} text="BOOTSTRAP 3.0" />
            <TableComponent Icon={BiLogoHtml5} text="HTML5 & CSS3" />
            <TableComponent Icon={BsTv} text="RESPONSIVE" />
            <TableComponent Icon={BiRocket} text="UNLIMITED SUPPORT" />
          </Table>
        </Hold>
        <ImgHolder>
          <Img src={phone} />
        </ImgHolder>
      </Container>
    </div>
  );
};

export default Additional;

const ImgHolder = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: -270px;
  height: 400px;
  @media screen and (max-width: 768px) {
    margin-top: 200px;
    bottom: -300px;
  }
`;
const Img = styled.img`
  @media screen and (max-width: 375px) {
    width: 100%;
  }
  @media screen and (max-width: 425px) {
    width: 100%;
  }
`;

const Table = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding: 30px 0px; */
  padding-bottom: 30px;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const Hold = styled.div`
  padding: 50px 0px 0px 0px;
  width: 100%;
  height: 84.8vh;
  background-color: rgba(0, 0, 0, 0.4);

  @media screen and (max-width: 768px) {
    padding: 50px 0px 80px 0px;
    height: 100%;
    flex-wrap: wrap;
  }
`;

const Text = styled.div`
  margin-top: 20px;
  text-align: center;
  font-weight: 500;
  color: white;
`;

const Wrapper = styled.div`
  width: 100%;
  /* height: 50px; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Ball = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #e74f40ff;
`;

const TopWrapper = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Line = styled.div<{ bcc: string }>`
  width: 50px;
  height: 1px;
  background-color: ${({ bcc }) => bcc};
  margin-top: 23px;
  display: flex;
  align-items: center;
`;

const W = styled.div`
  height: 60px;
  width: 100%;
  font-size: 36px;
  font-weight: 400;
  display: flex;
  color: white;
  justify-content: center;
  //   align-items: center;

  span {
    color: #e74c3cff;
    margin-left: 11px;
  }
`;

const Container = styled.div`
  height: 90vh;
  width: 100%;
  background-image: url(${bg});
  background-attachment: fixed;
  position: relative;
  margin-top: 70px;
  z-index: -9999999;

  @media screen and (max-width: 768px) {
    height: 100%;
    flex-wrap: wrap;
  }
`;
