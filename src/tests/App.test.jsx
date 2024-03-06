import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router, MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('Renders App component without crashing', () => {
  it('Renders App', async () => {
    // Arrange
    render(
      <Router>
        <App />
      </Router>
    );

    // Act
    await userEvent.click(screen.getByText('Contact'));

    // Assert
    expect(screen.getByText('Contact Me!')).toBeDefined();
  });
});

describe('Clicking Route Links render correct component based on path', () => {
  it('Home Page Route is functional', async () => {
    // Arrange
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    // Assert
    expect(screen.getByRole('heading')).toHaveTextContent(
      "Welcome to Mr. Spock's Portfolio Page"
    );
  });

  it('Contact Route is functional', () => {
    // Arrange
    render(
      <MemoryRouter initialEntries={['/contact/']}>
        <App />
      </MemoryRouter>
    );

    // Assert
    expect(screen.getByText('Contact Me!')).toBeDefined();
  });

  it('ProjectGallery Page Route is functional', () => {
    // Arrange
    render(
      <MemoryRouter initialEntries={['/project-gallery']}>
        <App />
      </MemoryRouter>
    );

    // Assert
    expect(screen.getByAltText('Star Fleet Academy Project')).toBeDefined();
  });

  it('ProjectDetails Page Route is functional', () => {
    // Arrange
    render(
      <MemoryRouter initialEntries={['/project/1']}>
        <App />
      </MemoryRouter>
    );

    // Assert
    expect(screen.getByRole('heading')).toHaveTextContent('My First Project');
  });
});
