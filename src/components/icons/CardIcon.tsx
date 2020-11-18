import React from "react";

import theme from "theme/theme";

const CardIcon = () => (
  <svg
    width={20}
    height={16}
    viewBox="0 0 20 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.933.667c-.81 0-1.466.656-1.466 1.466v.734h19.066v-.734c0-.81-.656-1.466-1.466-1.466H1.933zm-1.466 4.4v8.8c0 .81.656 1.466 1.466 1.466h16.134c.81 0 1.466-.656 1.466-1.466v-8.8H.467zm2.2 1.466h5.866v.734H2.667v-.734z"
      fill={theme.colors.lightBlue}
    />
  </svg>
);

export default CardIcon;
