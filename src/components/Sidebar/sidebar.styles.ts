import styled from 'styled-components'

import { FilterButtonProps } from './sidebar.interface'

export const FilterButton = styled.span<FilterButtonProps>`
  padding: 12px;
  bottom: 7rem;
  cursor: pointer;
  position: fixed;
  overflow: hidden;
  align-items: center;
  transition: left 1s;
  display: inline-flex;
  border-radius: 9999px;
  left: ${({ show }) => (show ? '220px' : '3%')};
  z-index: ${({ show }) => (show ? '55' : '40')};
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  background-color: ${({ theme }) => theme.palette.primary.light};
  box-shadow: ${({ theme }) => theme.shadows.default};

  svg {
    fill: ${({ theme }) => theme.palette.common.white};
  }

  @media ${({ theme }) => theme.device.laptop} {
    display: none;
  }
`
