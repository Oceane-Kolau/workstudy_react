import styled, { keyframes } from "styled-components";
import colors from "./globals";

type ButtonProps = {
  loading: boolean;
};

export const Form = styled.form`
  display: grid;
  place-content: center;
  grid-gap: 0.5rem;
  background-color: #e9f2fd;
  padding: 1rem;
`;

export const Label = styled.label`
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1;
`;

const focus = `
:focus {
    border-color: hsl(${colors.focus.h}, ${colors.focus.s}, ${colors.focus.l});
    box-shadow: 0 0 0 3px
      hsla(
        ${colors.focus.h},
        ${colors.focus.s},
        calc(${colors.focus.l} + 40%),
        0.8
      );
    outline: 3px solid transparent;
  }`;

export const Input = styled.input`
  font-size: 16px;
  font-size: Max(16px, 1em);
  font-family: inherit;
  padding: 0.25em 0.5em;
  background-color: #fff;
  border: 2px solid ${colors.primary};
  border-radius: 4px;
  transition: 180ms box-shadow ease-in-out;
  ${focus}
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Button = styled.button<ButtonProps>`
  text-decoration: none;
  background-color: ${({ loading }) => (loading ? "#fff" : "#f76c6c")};
  color: #fff;
  padding: 0.5em 1em;
  border-radius: 4px;
  display: inline-block;
  ${focus}
  svg {
    width: 47px !important;
    height: 47px !important;
    animation: ${rotate} 2s linear infinite;
    animation-play-state: running !important;
  }
`;

const messageStyle = `
color: #fff;
  padding: 0.5em 1em;
  border-radius: 4px;
`;

export const Success = styled.p`
  background-color: green;
  ${messageStyle}
`;

export const Error = styled.p`
  background-color: red;
  ${messageStyle}
`;
