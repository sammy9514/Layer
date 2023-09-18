import styled from "styled-components";
import { BsPlusCircle } from "react-icons/bs";
import phone from "../Asset/1.jpg";
type iPhone = {
  Image: any;
};

const ScrnShotComponent: React.FC<iPhone> = ({ Image }) => {
  return (
    <div>
      <Container>
        <Phone>
          <Img src={Image} />
        </Phone>
        <Wrapper>
          <Icon />
        </Wrapper>
      </Container>
    </div>
  );
};

export default ScrnShotComponent;

const Icon = styled(BsPlusCircle)`
  font-size: 70px;
  color: white;
  &:hover {
    border-radius: 90%;
    background-color: #f1592f;
    z-index: 800000;
    border: none;
  }
`;

const Img = styled.img``;

const Phone = styled.div``;

const Wrapper = styled.div`
  width: 290px;
  height: 500px;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  opacity: 0;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    /* transform: scale(1.2); */
    opacity: 1;
  }
`;

const Container = styled.div`
  width: 290px;
  height: 500px;
  background-color: #00000072;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;

  &:hover {
    transform: scale(1.2);
    opacity: 1;
  }
`;
