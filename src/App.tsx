import React, { useState } from "react";
import styled from "styled-components";

import Button from "components/Button";
import Modal from "components/Modal";

function App() {
  const [visible, setVisible] = useState(false);
  const handleClose = () => setVisible(false);

  return (
    <Container>
      <ButtonContainer>
        <Button label="Открыть модалку" onClick={() => setVisible(true)} />
      </ButtonContainer>
      <Modal onClose={handleClose} visible={visible} />
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.darkBlue};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  position: absolute;
  width: 188px;
  height: 42px;
  left: 45px;
  top: 79px;
`;

export default App;
