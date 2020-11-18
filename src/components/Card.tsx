import React from "react";
import styled from "styled-components";

import theme from "theme/theme";

import CheckIcon from "./icons/CheckIcon";
import Typography from "./Typography";

type CardProps = {
  isSelected: boolean;
  handleSelect: () => void;
  replenish: number;
  get: number;
};

const Card = ({ isSelected, handleSelect, replenish, get }: CardProps) => {
  return (
    <Container isSelected={isSelected} onClick={handleSelect}>
      <Typography fontWeight={700} fontSize={14}>
        Пополнить на
      </Typography>
      <Typography fontWeight={400} fontSize={22}>
        ${replenish}
      </Typography>
      <Typography fontWeight={700} fontSize={14} color={theme.colors.green}>
        Получить
      </Typography>
      <Typography
        fontWeight={400}
        fontSize={22}
        color={theme.colors.green}
        isSelected={isSelected}
      >
        ${get}
      </Typography>
      <Circle isSelected={isSelected}>
        {isSelected ? <CheckIcon /> : null}
      </Circle>
    </Container>
  );
};

const Container = styled.div<{ isSelected: boolean }>`
  width: 164px;
  height: 186px;
  cursor: pointer;
  transition: 0.5s;
  transform: scale(${(props) => (props.isSelected ? 1.2 : 1)});
  z-index: scale(${(props) => (props.isSelected ? 10 : 1)});
  background: #3c4561;
  box-sizing: border-box;
  box-shadow: 8px 8px 20px rgba(24, 28, 38, 0.5);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border: 2px solid
    ${(props) =>
      props.isSelected
        ? props.theme.colors.green
        : props.theme.colors.lightBlue};
`;

const Circle = styled.div<{ isSelected: boolean }>`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  position: absolute;
  bottom: 0;
  transform: translateY(50%);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid
    ${(props) =>
      props.isSelected
        ? props.theme.colors.green
        : props.theme.colors.lightBlue};
  background-color: ${(props) =>
    props.isSelected
      ? props.theme.colors.green
      : props.theme.colors.darkenBlue};
`;

export default Card;
