import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';

const match = { params: { id: 0 } };
// const wrapper = shallow(<ProjectCard match={match} />)

describe('Renders ProjectCard component without crashing', () => {
  it('Renders Project', () => {
    // Arrange
    render(
      <Router>
        <ProjectCard match={match} />
      </Router>
    );

    // Assert
    expect(screen.findByRole('link')).toBeDefined();
  });
});
