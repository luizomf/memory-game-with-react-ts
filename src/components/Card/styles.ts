import styled, { css } from 'styled-components';
import { CardProps } from '.';

export const Container = styled.div`
  background: transparent;

  &:hover {
    cursor: pointer;
  }
`;

export const Inner = styled.div<Pick<CardProps, 'flipped'>>`
  position: relative;
  width: 200px;
  /* height: 200px; */
  transform-style: preserve-3d;
  background: transparent;
  transition: transform 0.5s;
  aspect-ratio: 1/1;

  ${({ flipped }) => css`
    transform: ${flipped ? 'rotateY(180deg)' : 'rotateY(0deg)'};
  `}
`;

export const Front = styled.div`
  ${({ theme }) => css`
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${theme.colors.primaryColor};
    color: ${theme.colors.white};
    backface-visibility: hidden;
    transform-style: preserve-3d;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
  `}
`;

export const Back = styled(Front)`
  ${({ theme }) => css`
    background: ${theme.colors.secondaryColor};
    color: ${theme.colors.white};
    transform: rotateY(180deg);
  `}
`;
