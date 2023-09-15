import react from "react";
import { styled } from "styled-components";

interface iButton {
  bcc: string;
  hbcc: string;
  text: string;
  color: string;
  hcolor: string;
  border: string;
}

const Button: React.FC<iButton> = ({
  bcc,
  text,
  color,
  border,
  hbcc,
  hcolor,
}) => {
  return (
    <div>
      <Container
        color={color}
        hcolor={hcolor}
        bcc={bcc}
        hbcc={hbcc}
        border={border}
      >
        {text}
      </Container>
    </div>
  );
};

export default Button;
const Container = styled.div<{
  color: string;
  hcolor: string;
  bcc: string;
  hbcc: string;
  border: string;
}>`
  padding: 15px 35px;
  border-radius: 40px;
  color: ${({ color }) => color};
  font-size: 15px;
  background-color: ${({ bcc }) => bcc};
  text-align: center;
  border: ${({ border }) => border};
  font-weight: 500;
  transition: 350ms ease;
  &:hover {
    color: ${({ hcolor }) => hcolor};
    background-color: ${({ hbcc }) => hbcc};
  }
`;
