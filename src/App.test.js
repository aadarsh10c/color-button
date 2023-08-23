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

test('intial stages of button and checkbox', () => {
  render(<App/>)

  //check if button is present and enabled
  const colorButton = screen.getByRole('button', {name: 'Change to blue'})
  expect(colorButton).toBeEnabled()

  //check if checkbox is present and unchecked
  const checkbox = screen.getByRole('checkbox')
  expect(checkbox).not.toBeChecked()
})

test.only('checking checkbox funcionality',() => {
  render(<App />)
  const colorButton = screen.getByRole('button', {name: 'Change to blue'})
  const checkbox = screen.getByRole('checkbox')

  //check if  button is disabled when checkbox is checked
  fireEvent.click(checkbox)
  expect(checkbox).toBeChecked()
  expect(colorButton).toBeDisabled()

  //check if  button is enabled when chekbox is unchecked
  fireEvent.click(checkbox)
  expect(checkbox).not.toBeChecked()
  expect(colorButton).toBeEnabled()
})