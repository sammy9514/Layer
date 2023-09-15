import reacr from "react";
import { styled } from "styled-components";

interface iPart {
  lg?: string;
  Icon: any;
  text: string;
  left: string;
  right: string;
}

const Part: React.FC<iPart> = ({ text, left, right, Icon }) => {
  return (
    <div>
      <Container>
        <Wrap>
          <Detail>
            <h3>{text}</h3>
          </Detail>
          <DetailsTxt>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore aliqua.
          </DetailsTxt>
        </Wrap>
        <Circle left={left} right={right}>
          <Icon />
        </Circle>
      </Container>
    </div>
  );
};

export default Part;

const Circle = styled.div<{ left: string; right: string }>`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  background: linear-gradient(
    to right,
    ${({ left }) => left},
    ${({ right }) => right}
  );
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 33px;
  color: white;
  margin-top: 13px;
  transition: all 350ms;

  &:hover {
    transform: scale(1.1);
  }
`;
const DetailsTxt = styled.div`
  font-size: 14px;
`;
const Detail = styled.div`
  h3 {
    margin: 0;
  }
`;
const Wrap = styled.div`
  text-align: right;
  width: 75%;
  line-height: 1.7;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  align-items: center;
`;
