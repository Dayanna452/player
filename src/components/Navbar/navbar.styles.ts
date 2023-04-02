import styled, { css } from 'styled-components'

export const NavbarContainer = styled.header<{
  scrollPosition: boolean
  openModal: boolean
}>`
  background-color: ${({ theme }) => theme.palette.common.white};
  height: 60px;
  z-index: 1000;
  top: 0;

  nav {
    height: inherit;
    width: 100%;
    max-width: 90rem;
    margin: auto;
    padding: 10px 24px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    nav {
      grid-template-columns: auto 1fr auto;
      gap: 0;
    }
  }
`

/* export const ProfileMenuContainer = styled.ul`
  position: absolute;
  left: -100px;
  top: 48px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.palette.common.white};
  width: 200px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  a {
    padding: 15px 19.5px;
    display: inline-block;
    width: 100%;
  }

  li {
    border-bottom: 1px solid #dbdbdb;

    &:last-child {
      padding: 15px 19.5px;
    }

    .a-logout {
      padding: 0px 0px;
    }

    span {
      font-size: 16px;
      display: inline-flex;
      align-items: center;
      gap: 23px;
    }

    &:last-child {
      border: none;
    }

    &:hover {
      background-color: ${({ theme }) => `${theme.palette.primary.light}99`};

      span {
        color: ${({ theme }) => theme.palette.common.white};
      }
    }
  }
`

export const NavItem = styled.li<{ isActive?: boolean }>`
  position: relative;

  ${({ isActive }) =>
    isActive &&
    css`
      color: ${({ theme }) => theme.palette.primary.main} !important;
      font-weight: 600;

      &::before {
        content: '';
        display: inline-block;
        width: 100%;
        height: 1px;
        background: linear-gradient(
          90deg,
          ${({ theme }) => theme.palette.primary.main} 0 80%,
          ${({ theme }) => theme.palette.common.white} 80% 90%,
          ${({ theme }) => theme.palette.primary.main} 90% 100%
        );
        position: absolute;
        bottom: 0;
      }
    `}

  &:hover {
    color: ${({ theme }) => theme.palette.primary.main};
    font-weight: 600;

    &::before {
      content: '';
      display: inline-block;
      width: 100%;
      height: 1px;
      background: linear-gradient(
        90deg,
        ${({ theme }) => theme.palette.primary.main} 0 80%,
        ${({ theme }) => theme.palette.common.white} 80% 90%,
        ${({ theme }) => theme.palette.primary.main} 90% 100%
      );
      position: absolute;
      bottom: 0;
    }
  }
` */
