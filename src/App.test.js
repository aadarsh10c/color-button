import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';


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

test.only('intial stages of button and checkbox', () => {
  render(<App/>)

  //check if button is present and enabled
  const colorButton = screen.getByRole('button', {name: 'Change to blue'})
  expect(colorButton).toBeEnabled()

  //check if checkbox is present and unchecked
  const checkbox = screen.getByRole('checkbox')
  expect(checkbox).not.toBeChecked()
})