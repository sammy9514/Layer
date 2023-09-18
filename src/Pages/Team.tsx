import styled from "styled-components";
import TeamComponenet from "./TeamComp";
import member1 from "../Assets/download-4.jpg";
import member2 from "../Assets/download-5.jpg";
import member3 from "../Assets/download-6.jpg";
import member4 from "../Assets/download-7.jpg";

const Team = () => {
  return (
    <div>
      <Container>
        <TopWrapper>
          <W>TEAM MEMBERS</W>
        </TopWrapper>
        <div
          style={{
            display: "flex",
          }}
        >
          <Line bcc="#e74f40ff">
            <Ball />
          </Line>
          <Line bcc="grey"></Line>
        </div>
        <Wrapper>
          <Text>
            We ensure quality & support. People love us & we love them. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </Wrapper>
        <MembersHolder>
          <TeamComponenet
            image={member1}
            name="Ahmed Rufai"
            role="SEO Marketer"
          />
          <TeamComponenet
            image={member3}
            name="Ekene Nwanchukwu"
            role="UI/UX Expert"
          />
          <TeamComponenet
            image={member2}
            name="Zion Akwubo"
            role="Fullstack developer"
          />
          <TeamComponenet
            image={member4}
            name="Joan Ewuzie"
            role="Fullstack developer"
          />
        </MembersHolder>
      </Container>
    </div>
  );
};

export default Team;

const MembersHolder = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
  flex-wrap: wrap;
  margin-top: 50px;
`;

const Text = styled.div`
  font-weight: 500;
  color: #9b9b9bff;
  width: 50%;
  text-align: center;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
`;

const Ball = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #e74f40ff;
`;

const TopWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Line = styled.div<{ bcc: string }>`
  width: 50px;
  height: 1px;
  background-color: ${({ bcc }) => bcc};
  display: flex;
  align-items: center;
  margin: 15px 0px;
`;

const W = styled.div`
  width: 100%;
  font-size: 36px;
  font-weight: 400;
  justify-content: center;
  display: flex;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, #e9feedff, #fbffffff, #e9fbffff);
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 50px 0;
`;
