import { Inner as CardInner } from '../Card/styles';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  max-width: 640px;
  margin: 0 auto;
`;

export const Grid = styled.div`
  ${() => css`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1px;
    max-width: 100%;
    margin: 0 auto;
  `}

  ${CardInner} {
    width: 100%;
  }
`;

export const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Text = styled.p`
text-align: center;
`;

export const Reset = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors.primaryColor};
    color: ${theme.colors.white};
    margin-left: 10px;
    padding: 5px 10px;
    cursor: pointer;
  `}
`;
