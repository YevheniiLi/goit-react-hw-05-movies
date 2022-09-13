import styled from 'styled-components';

export const MovieList = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
`;

export const MovieListItem = styled.li`
  width: 200px;
  margin: 10px;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 250ms ease-in-out;

  :hover {
    transform: translateY(-3px);
  }
`;

export const MovieListImg = styled.img`
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
`;
