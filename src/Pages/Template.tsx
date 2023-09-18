import styled from "styled-components";
import TemplateCom from "./TemplateComp";

const Template = () => {
  return (
    <div>
      <Container>
        <TemplateCom />
      </Container>
    </div>
  );
};

export default Template;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
