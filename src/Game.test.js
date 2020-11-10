import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Board from './components/Board';
import Title from './components/Title';
import Settings from './components/Settings';
import Square from './components/Square';
import Game from './Game';

test('renders Game Component', () => {
  const GameComponent = renderer.create(<Game />).toJSON();
  expect(GameComponent).toMatchSnapshot();
});

test('renders Title Component', () => {
  const GameComponent = renderer.create(<Title />).toJSON();
  expect(GameComponent).toMatchSnapshot();
});

test('renders Board Component', () => {
  const GameComponent = renderer.create(<Board />).toJSON();
  expect(GameComponent).toMatchSnapshot();
});

test('renders Settings Component', () => {
  const GameComponent = renderer.create(<Settings />).toJSON();
  expect(GameComponent).toMatchSnapshot();
});

test('renders Square Component', () => {
  const GameComponent = renderer.create(<Square />).toJSON();
  expect(GameComponent).toMatchSnapshot();
});