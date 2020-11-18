import React from "react";
import styled from "styled-components";

type ButtonProps = {
  label: string;
  onClick: () => void;
};

const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <Container onClick={onClick}>
      <BlurSection />
      {label}
    </Container>
  );
};

const Container = styled.button`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 100px;
  border: none;
  background-color: ${({ theme }) => theme.colors.green};
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.blueTextColor};
  font-family: "GilroyBold", sans-serif;
`;

const BlurSection = styled.div`
  width: 78px;
  height: 28px;
  background-color: ${({ theme }) => theme.colors.green};
  position: absolute;
  transform: translate(40%);
  opacity: 0.6;
  filter: blur(30px);
  border-radius: 10px;
`;

export default Button;
