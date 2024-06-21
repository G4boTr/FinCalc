import ButtonMain from "../components/common/ButtonMain";
import React from "react";
import  {render, fireEvent} from '@testing-library/react';

test('llamada a la prop  de  onClick cuando  el boton es clickeado', () => {
  const handleClick = jest.fn();
  const { getByText } = render(<ButtonMain text="Click me" onClick={handleClick} />);
  const button = getByText('Click me');
  fireEvent.click(button);
  expect(handleClick).toHaveBeenCalledTimes(1);
});

