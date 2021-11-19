import styled from 'styled-components';

export const Container = styled.div `
  position: relative;
  width: 0%;

  span {
    background: #fff;
    padding: 10px;
    border: 1px solid #fff;
    border-radius: 16px;
    font-size: 12px;
    opacity: 0;
    transition: opacity 0.4s;
    visibility: hidden;
    text-align: left;

    position: absolute;
    bottom: calc(100% + 20px);
    width: 181px;
    right: -136px;
    transform: translateX(-50%);
    color: #312e38;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);

    &::after {
      content: "";
      position: absolute;
      width: 0;
      height: 0;
      margin-left: -0.5em;
      bottom: -2em;
      left: 76%;
      box-sizing: border-box;
      
      border: 1em solid black;
      border-color: transparent transparent #fff #fff;
      
      transform-origin: 0 0;
      transform: rotate(-45deg);
      
      box-shadow: -3px 2px 2px 0 rgba(0, 0, 0, 0.18);
    }
  }
  
  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`
;