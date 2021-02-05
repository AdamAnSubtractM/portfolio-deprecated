import React, { useContext } from 'react';
import styled from 'styled-components';
import AppContext from '../context/AppContext';
import { motion } from 'framer-motion';
import { theme } from '../helpers/theme';

type MenuToggleProps = {
  toggle: () => void;
};

const StyledButton = styled.button``;

const StyledMenuLine = styled(motion.path)<ThemeProps>`
  fill: transparent;
  stroke-width: 3;
  stroke-linecap: round;
  stroke: ${({ themeKey }) => theme[themeKey].text()};
`;

export default function MenuToggle({ toggle }: MenuToggleProps) {
  const [appData] = useContext(AppContext);

  const { themeKey } = appData;

  return (
    <StyledButton className={`menu-toggle`} onClick={toggle}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <StyledMenuLine
          themeKey={themeKey}
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open: { d: 'M 3 16.5 L 17 2.5' },
          }}
        />
        <StyledMenuLine
          themeKey={themeKey}
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <StyledMenuLine
          themeKey={themeKey}
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346' },
            open: { d: 'M 3 2.5 L 17 16.346' },
          }}
        />
      </svg>
    </StyledButton>
  );
}
