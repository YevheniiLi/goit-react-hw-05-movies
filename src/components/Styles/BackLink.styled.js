import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';

export const BackButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 80px;
  margin-bottom: 50px;
  padding: 10px;
  color: ${p => p.theme.colors.red};
  text-transform: uppercase;
  background-color: sub;
  border-radius: 25px;
  box-shadow: 2px 2px 5px grey, 1px 1px 1px silver;
  text-decoration: none;
;

  :hover {
    color: ${p => p.theme.colors.green};
  }
`;

export const BackButtonIcon = styled(BiArrowBack)`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;
