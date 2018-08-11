import React, { Component } from 'react';
import styled from 'styled-components';

const StyledContent = styled.div`
  flex: 1;
  justify-content: center;
  align-items: center;
  text-align: justify;
  padding: 2em 0;
  div {
    padding: 1rem;
    margin-top: 5px;
  }

  div:first-child {
    margin-top: 0;
  }
  div > h4 {
    text-transform: uppercase;
  }
`;

const sections = [
  {
    title: `Practice`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur laudantium reprehenderit cumque aspernatur quidem quia architecto dignissimos labore, deserunt quos dicta? In, est illo? Eveniet, tenetur nostrum! Maxime quasi dolor, inventore minima dignissimos corporis esse similique quos sit architecto assumenda et deleniti tenetur neque, facere voluptas aliquam dolores recusandae earum.`,
  },
  {
    title: `Projects`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur laudantium reprehenderit cumque aspernatur quidem quia architecto dignissimos labore, deserunt quos dicta? In, est illo? Eveniet, tenetur nostrum! Maxime quasi dolor, inventore minima dignissimos corporis esse similique quos sit architecto assumenda et deleniti tenetur neque, facere voluptas aliquam dolores recusandae earum.`,
  },
  {
    title: `Contact`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur laudantium reprehenderit cumque aspernatur quidem quia architecto dignissimos labore, deserunt quos dicta? In, est illo? Eveniet, tenetur nostrum! Maxime quasi dolor, inventore minima dignissimos corporis esse similique quos sit architecto assumenda et deleniti tenetur neque, facere voluptas aliquam dolores recusandae earum.`,
  },
  {
    title: `Book a Meeting`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur laudantium reprehenderit cumque aspernatur quidem quia architecto dignissimos labore, deserunt quos dicta? In, est illo? Eveniet, tenetur nostrum! Maxime quasi dolor, inventore minima dignissimos corporis esse similique quos sit architecto assumenda et deleniti tenetur neque, facere voluptas aliquam dolores recusandae earum.`,
  },
];

class Content extends Component {
  render() {
    return (
      <StyledContent>
        {sections.map(section => (
          <div key={section.title}>
            <h4>{section.title}</h4>
            <p>{section.description}</p>
          </div>
        ))}
      </StyledContent>
    );
  }
}

export default Content;
