import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as colors from '../../config/colors';

export const AlunoContainer = styled.div`
 margin-top: 20px;

 div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 0;
 }

 div + div {
  border-top: 1px solid #eee;
 }
 
`;

export const ProfilePicture = styled.div`
  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;

  }

`;

export const NovoAluno = styled(Link)`
  display: block;
  padding: 10px 0 10px 0;

  color: ${colors.primaryDarkColor};
  font-size: 22px;
  font-weight: 700;
 
`;
