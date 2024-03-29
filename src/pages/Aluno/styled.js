import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Title = styled.h1`
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  margin-top: 20px;
  margin-bottom: 20px;

  /* label:nth-child(1) {
    margin-bottom: 20px;
  } */

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  input {
    height: 40px;
    font-size: 18px;
    border: 0 1px solid #ddd;
    padding: 0 10px;
    border-radius: 4px;
    margin-top: 5px;

    &:focus {
      border: 1px solid ${colors.primaryColor};
    }
  }

`;

export const ProfilePicture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0 20px;
  position: relative;
  margin-top: 30px;

  img {
    width: 180px;
    height: 180px;
    border-radius: 50%;   

  }
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    position: absolute;
    bottom: 0; 
    
    color: #fff;
    background: ${colors.primaryColor};

    width: 30px;
    height: 30px;
    border-radius: 25%;
   
  }  
`;
