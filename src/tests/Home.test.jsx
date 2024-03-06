import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';

describe('Home Component renders correct A tags text', () => {
  it('Renders My Name', () => {
    // Arrange
    render(<Home />);

    // Assert
    expect(screen.getByRole('heading')).toHaveTextContent(
      "Welcome to Mr. Spock's Portfolio Page"
    );
  });

  it('Renders Link that displays GitHub text', () => {
    // Arrange
    render(<Home />);

    // Assert
    expect(screen.findByText('GitHub')).toBeDefined();
  });

  it('Renders Link that displays LinkedIn text', () => {
    // Arrange
    render(<Home />);

    // Assert
    expect(screen.findByText('LinkedIn')).toBeDefined();
  });

  it('Renders Link that displays Resume text', () => {
    // Arrange
    render(<Home />);

    // Assert
    expect(screen.findByText('Resume')).toBeDefined();
  });

  it('Renders Link that displays Call Me text', () => {
    // Arrange
    render(<Home />);

    // Assert
    expect(screen.findByText('Call Me')).toBeDefined();
  });

  it('Renders Link that displays Email Me text', () => {
    // Arrange
    render(<Home />);

    // Assert
    expect(screen.findByText('Email Me')).toBeDefined();
  });
});

describe('Renders correct social media links', () => {
  it('Renders a link for GitHub', async () => {
    // Arrange
    render(<Home />);

    // Assert
    const link = await screen.getByRole('link', { name: 'GitHub' });
    expect(link).toHaveAttribute('href', 'https://github.com');
  });

  it('Renders a link for LinkedIn', async () => {
    // Arrange
    render(<Home />);

    // Assert
    const link = await screen.getByRole('link', { name: 'LinkedIn' });
    expect(link).toHaveAttribute('href', 'https://www.linkedin.com');
  });

  it('Renders a link for Resume', async () => {
    // Arrange
    render(<Home />);

    // Assert
    const link = await screen.getByRole('link', { name: 'Resume' });
    expect(link).toHaveAttribute(
      'href',
      'https://drive.google.com/file/d/1Y3I8pKG7CMY-9D1fbivfF36Bv1NHsxJG/view?usp=sharing'
    );
  });

  it('Renders a link for Phone Number', async () => {
    // Arrange
    render(<Home />);

    // Assert
    const link = await screen.getByRole('link', { name: 'Call Me' });
    expect(link).toHaveAttribute('href', 'tel:+155512346789');
  });

  it('Renders a link for Email Address', async () => {
    // Arrange
    render(<Home />);

    // Assert
    const link = await screen.getByRole('link', { name: 'Email Me' });
    expect(link).toHaveAttribute('href', 'mailto:spock@starfleet.com');
  });
});
