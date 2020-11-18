import React from "react";
import styled from "styled-components";

import theme from "../theme/theme";

type TypographyProps = {
  children: any;
  fontSize: number;
  fontWeight: number;
  color?: string;
  isSelected?: boolean;
};

const Typography = ({
  fontSize,
  color = theme.colors.white,
  fontWeight,
  children,
  isSelected,
}: TypographyProps) => (
  <Text
    fontSize={fontSize}
    color={color}
    fontWeight={fontWeight}
    isSelected={isSelected}
  >
    {children}
  </Text>
);

const Text = styled.p<{
  fontSize: number;
  color: string;
  fontWeight: number;
  isSelected?: boolean;
}>`
  transition: 0.3s;
  font-size: ${(props) => (props.isSelected ? 36 : props.fontSize)}px;
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
  font-family: "Gilroy", sans-serif;
`;

export default Typography;
