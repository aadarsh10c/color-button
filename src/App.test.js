import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('button has correct intial color',() => {
  render(<App/>)
  //rab the button by text 
  const colorButton = screen.getByRole('button', { name : 'Change to blue'})
  expect(colorButton).toHaveStyle({backgroundColor: 'red'})
})


test('button color turns blue when clicked', () => {
  render(<App/>)

  //Gra the olor button
  const colorButton = screen.getByRole('button', {name: 'Change to blue'})

  //click event
  fireEvent.click(colorButton)

  //expect to change the color
  expect(colorButton).toHaveStyle(`
    background-color: blue;
  `)

  //epect to have update the text
  expect(colorButton).toHaveTextContent('Change to red')
})