import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactList from '../components/ContactList';
import ContactCard from '../components/ContactCard';

describe('ContactList Component', () => {
  it('It Renders', async () => {
    // Arrange
    render(<ContactList />);

    // Assert
    const links = await screen.findAllByRole('link');
    expect(links).toHaveLength(5);
  });
});

describe('ContactCard Component', () => {
  it('It Renders', async () => {
    // Arrange
    const label = 'My Linked In';
    render(
      <ContactCard
        platform="linked-in"
        href="http://linkedin.com/"
        content={label}
      />
    );

    // Assert
    const link = await screen.findByText(label);
    expect(link).toBeDefined();
  });
});
