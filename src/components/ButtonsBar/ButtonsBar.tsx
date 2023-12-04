import React from 'react';

import { List } from './ButtonsBar.styled';

const ButtonsBar: React.FC<ButtonsBarProps> = props => {
  const { onLeaveFeedback, options } = props;

  return (
    <List>
      {options.map(option => (
        <li key={option}>
          <button onClick={onLeaveFeedback} name={option}>
            {option}
          </button>
        </li>
      ))}
    </List>
  );
};

export default ButtonsBar;

type ButtonsBarProps = {
  onLeaveFeedback: (event: React.MouseEvent<HTMLButtonElement>) => void;
  options: string[];
};
