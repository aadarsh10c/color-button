import { render, screen } from '@testing-library/react';
import App from './App';

test('button has orrect intial color',() => {
  render(<App/>)
  //rab the button by text 
  const colorButton = screen.getByRole('button', { name : 'Change to blue'})
  expect(colorButton).toHaveStyle({backgroundColor: 'red'})
})


test('button color turns blue when clicked', () => {

})