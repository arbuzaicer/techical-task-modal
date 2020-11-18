import React, { useEffect, useState } from "react";
import styled from "styled-components";

import theme from "theme/theme";

import ClockIcon from "./icons/ClockIcon";
import Typography from "./Typography";

const TOTAL_TIME = 16 * 60;

const Timer = () => {
  const [totalTime, setTotalTime] = useState(TOTAL_TIME);

  const seconds = totalTime % 60;
  const minutes = Math.floor(totalTime / 60);

  const displayFormattedTime = (value: number) => {
    const stringValue = value.toString();
    return stringValue.length > 1 ? stringValue : `0${stringValue}`;
  };

  useEffect(() => {
    let timerID: number;
    if (totalTime >= 0) {
      timerID = setTimeout(() => setTotalTime(() => totalTime - 1), 1000);
    } else {
      setTotalTime(TOTAL_TIME);
    }

    return () => clearTimeout(timerID);
  }, [totalTime]);

  return (
    <Container>
      <ClockIcon />
      <DisplayTimer>
        <Typography fontSize={22} fontWeight={400} color={theme.colors.green}>
          00:{displayFormattedTime(minutes)}:{displayFormattedTime(seconds)}
        </Typography>
      </DisplayTimer>
    </Container>
  );
};

const Container = styled.div`
  width: 120px;
  height: 25px;
  display: flex;
  justify-content: space-evenly;
`;

const DisplayTimer = styled.div`
  width: 85px;
  height: 100%;
`;

export default Timer;
