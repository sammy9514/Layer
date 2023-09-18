import react from "react";
import { styled } from "styled-components";

const ImageScroll = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Top></Top>
        </Wrapper>
      </Container>
    </div>
  );
};

export default ImageScroll;

// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
const Top = styled.div``;
const Wrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: gray;
`;
