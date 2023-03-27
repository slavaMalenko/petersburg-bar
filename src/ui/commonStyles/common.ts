import { css } from 'styled-components';

export const pointer = css`
  cursor: pointer;
`;
export const cursorDefault = css`
  cursor: default;
`;
export const selectNone = css`
  user-select: none;
`;

export const hoverFrame = css`
  position: relative;
  box-sizing: border-box;
  transition: all 0.2s linear;

  &::before,
  &::after {
    content: '';
    position: absolute;
    transition: 0.3s ease-in-out;
    width: 0;
    height: 0;
  }
  &::before {
    top: 0;
    left: 0;
    border-top: 0px solid #d5621d;
    border-left: 0px solid #d5621d;
  }
  &::after {
    right: 0;
    bottom: 0;
    border-bottom: 0px solid #d5621d;
    border-right: 0px solid #d5621d;
  }
  &:hover::before {
    border-top: 1px solid #d5621d;
    border-left: 1px solid #d5621d;
  }
  &:hover::after {
    border-bottom: 1px solid #d5621d;
    border-right: 1px solid #d5621d;
  }
  &:hover::before,
  &:hover::after {
    width: calc(100% + 9px);
    height: calc(100% + 9px);
  }
`;
