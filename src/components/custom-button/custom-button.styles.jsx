import styled, { css } from 'styled-components';

const buttonStyles = css`
  border: none;
  display: inline-block;
  text-align: center;
  cursor: pointer;
  outline: none;
  overflow: hidden;
  position: relative;
  color: #fff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  border-radius: 5px;

  &:hover {
    color: #000;
  }

  span {
    position: relative;
    z-index: 1;
  }

  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 490%;
    width: 140%;
    background: #b12600;
    -webkit-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    -webkit-transform: translateX(-98%) translateY(-25%) rotate(46deg);
    tranform: translateX(-98%) translateY(-25%) rotate(45deg);
  }

  &:hover {
    &:after {
      -webkit-tranform: translateX(-9%) translateY(-25%) rotate(45deg);
      transform: translateX(-9%) translateY(-25%) rotate(45deg);
      color: #fff;
    }
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const googleSignInStyles = css`
  background-color: #800080;
  color: white;
  border-radius: 5px;

  &:hover {
    background-color: orange;
    border: none;
  }
`;

const getButtonStyles = props => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: ;
  color: #000;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  ${getButtonStyles}
`;
