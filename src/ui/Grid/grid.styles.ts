import styled, { css } from 'styled-components'

import {
  getType,
  getTypeSm,
  getTypeMd,
  getTypeLg,
  getTypeXl,
  getDirection,
  getDimensions,
  getGridSpacing,
  getGridColSpan,
  getTypePropsMd,
  getTypePropsSm,
  getTypePropsLg,
  getTypePropsXl,
  getGridAlignItems,
  getGridJustifyContent
} from '@/functions/grid'
import { GridProps } from '@/ui/Grid/grid.interface'
import { ColSpanType } from '@/types/base.type'

export const GridStyled = styled.div<GridProps>`
  background-color: ${({ bgColor, theme, bgOpacity }) =>
    bgOpacity
      ? bgColor && `rgba(${bgColor(theme)},${bgOpacity})`
      : bgColor && bgColor(theme)};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? `${borderRadius}px` : 0};
  padding: ${props =>
    getDimensions(
      props.padding && getType(props.padding),
      props.paddingX && getType(props.paddingX),
      props.paddingY && getType(props.paddingY),
      props.paddingTop && getType(props.paddingTop),
      props.paddingRight && getType(props.paddingRight),
      props.paddingBottom && getType(props.paddingBottom),
      props.paddingLeft && getType(props.paddingLeft)
    )};
  margin: ${props =>
    getDimensions(
      props.margin && getType(props.margin),
      props.marginX && getType(props.marginX),
      props.marginY && getType(props.marginY),
      props.marginTop && getType(props.marginTop),
      props.marginRight && getType(props.marginRight),
      props.marginBottom && getType(props.marginBottom),
      props.marginLeft && getType(props.marginLeft)
    )};
  ${({ container, spacing, direction, justifyContent, alignItems }) =>
    container &&
    css`
      display: flex;
      flex-flow: ${direction ? getDirection(direction) : 'row'} wrap;
      margin-top: ${spacing && `-${getGridSpacing(spacing)}`};
      margin-left: ${spacing && `-${getGridSpacing(spacing)}`};
      justify-content: ${justifyContent
        ? getGridJustifyContent(justifyContent)
        : 'flex-start'};
      align-items: ${alignItems ? getGridAlignItems(alignItems) : 'stretch'};

      & > div {
        padding-top: ${spacing && getGridSpacing(spacing)};
        padding-left: ${spacing && getGridSpacing(spacing)};
        max-width: ${(direction === 'column' ||
          direction === 'column-reverse') &&
        'none'};
      }
    `}

  ${({ theme, item, xs, xs2, xs3, sm, sm2, md, md2, lg, lg2, xl, xl2 }) =>
    item &&
    css`
      max-width: ${xs && parseInt(xs) > 0 && parseInt(xs) <= 12
        ? getGridColSpan((xs || '12') as ColSpanType)
        : xs};
      flex-basis: ${xs && parseInt(xs) > 0 && parseInt(xs) <= 12
        ? getGridColSpan(xs as ColSpanType)
        : xs || '0'};
      flex-grow: ${xs ||
      xs2 ||
      xs3 ||
      sm ||
      sm2 ||
      md ||
      md2 ||
      lg ||
      lg2 ||
      xl ||
      xl2
        ? '0'
        : '1'};

      @media (min-width: ${theme.breakpoints.mobileM}) {
        max-width: ${xs2 && parseInt(xs2) > 0 && parseInt(xs2) <= 12
          ? getGridColSpan(xs2 as ColSpanType)
          : xs2};
        flex-basis: ${xs2 && parseInt(xs2) > 0 && parseInt(xs2) <= 12
          ? getGridColSpan(xs2 as ColSpanType)
          : xs2};
      }

      @media (min-width: ${theme.breakpoints.mobileL}) {
        max-width: ${xs3 && parseInt(xs3) > 0 && parseInt(xs3) <= 12
          ? getGridColSpan(xs3 as ColSpanType)
          : xs3};
        flex-basis: ${xs3 && parseInt(xs3) > 0 && parseInt(xs3) <= 12
          ? getGridColSpan(xs3 as ColSpanType)
          : xs3};
      }

      @media (min-width: ${theme.breakpoints.mobileXL}) {
        max-width: ${sm && parseInt(sm) > 0 && parseInt(sm) <= 12
          ? getGridColSpan(sm as ColSpanType)
          : sm};
        flex-basis: ${sm && parseInt(sm) > 0 && parseInt(sm) <= 12
          ? getGridColSpan(sm as ColSpanType)
          : sm};
      }

      @media (min-width: ${theme.breakpoints.tablet}) {
        max-width: ${sm2 && parseInt(sm2) > 0 && parseInt(sm2) <= 12
          ? getGridColSpan(sm2 as ColSpanType)
          : sm2};
        flex-basis: ${sm2 && parseInt(sm2) > 0 && parseInt(sm2) <= 12
          ? getGridColSpan(sm2 as ColSpanType)
          : sm2};
      }

      @media (min-width: ${theme.breakpoints.tabletM}) {
        max-width: ${md && parseInt(md) > 0 && parseInt(md) <= 12
          ? getGridColSpan(md as ColSpanType)
          : md};
        flex-basis: ${md && parseInt(md) > 0 && parseInt(md) <= 12
          ? getGridColSpan(md as ColSpanType)
          : md};
      }

      @media (min-width: ${theme.breakpoints.laptop}) {
        max-width: ${md2 && parseInt(md2) > 0 && parseInt(md2) <= 12
          ? getGridColSpan(md2 as ColSpanType)
          : md2};
        flex-basis: ${md2 && parseInt(md2) > 0 && parseInt(md2) <= 12
          ? getGridColSpan(md2 as ColSpanType)
          : md2};
      }

      @media (min-width: ${theme.breakpoints.laptopM}) {
        max-width: ${lg && parseInt(lg) > 0 && parseInt(lg) <= 12
          ? getGridColSpan(lg as ColSpanType)
          : lg};
        flex-basis: ${lg && parseInt(lg) > 0 && parseInt(lg) <= 12
          ? getGridColSpan(lg as ColSpanType)
          : lg};
      }

      @media (min-width: ${theme.breakpoints.laptopL}) {
        max-width: ${lg2 && parseInt(lg2) > 0 && parseInt(lg2) <= 12
          ? getGridColSpan(lg2 as ColSpanType)
          : lg2};
        flex-basis: ${lg2 && parseInt(lg2) > 0 && parseInt(lg2) <= 12
          ? getGridColSpan(lg2 as ColSpanType)
          : lg2};
      }

      @media (min-width: ${theme.breakpoints.desktop}) {
        max-width: ${xl && parseInt(xl) > 0 && parseInt(xl) <= 12
          ? getGridColSpan(xl as ColSpanType)
          : xl};
        flex-basis: ${xl && parseInt(xl) > 0 && parseInt(xl) <= 12
          ? getGridColSpan(xl as ColSpanType)
          : xl};
      }

      @media (min-width: ${theme.breakpoints.desktopL}) {
        max-width: ${xl2 && parseInt(xl2) > 0 && parseInt(xl2) <= 12
          ? getGridColSpan(xl2 as ColSpanType)
          : xl2};
        flex-basis: ${xl2 && parseInt(xl2) > 0 && parseInt(xl2) <= 12
          ? getGridColSpan(xl2 as ColSpanType)
          : xl2};
      }
    `}
  ${props =>
    getTypePropsSm(
      props.padding,
      props.paddingX,
      props.paddingY,
      props.paddingTop,
      props.paddingBottom,
      props.paddingRight,
      props.paddingLeft
    ) &&
    css<GridProps>`
      @media ${({ theme }) => theme.device.mobileXL} {
        padding: ${props =>
          getDimensions(
            props.padding && getTypeSm(props.padding),
            props.paddingX && getTypeSm(props.paddingX),
            props.paddingY && getTypeSm(props.paddingY),
            props.paddingTop && getTypeSm(props.paddingTop),
            props.paddingRight && getTypeSm(props.paddingRight),
            props.paddingBottom && getTypeSm(props.paddingBottom),
            props.paddingLeft && getTypeSm(props.paddingLeft)
          )};
      }
    `}
   ${props =>
    getTypePropsMd(
      props.padding,
      props.paddingX,
      props.paddingY,
      props.paddingTop,
      props.paddingBottom,
      props.paddingRight,
      props.paddingLeft
    ) &&
    css<GridProps>`
      @media ${({ theme }) => theme.device.tabletM} {
        padding: ${props =>
          getDimensions(
            props.padding && getTypeMd(props.padding),
            props.paddingX && getTypeMd(props.paddingX),
            props.paddingY && getTypeMd(props.paddingY),
            props.paddingTop && getTypeMd(props.paddingTop),
            props.paddingRight && getTypeMd(props.paddingRight),
            props.paddingBottom && getTypeMd(props.paddingBottom),
            props.paddingLeft && getTypeMd(props.paddingLeft)
          )};
      }
    `}
  ${props =>
    getTypePropsLg(
      props.padding,
      props.paddingX,
      props.paddingY,
      props.paddingTop,
      props.paddingBottom,
      props.paddingRight,
      props.paddingLeft
    ) &&
    css<GridProps>`
      @media ${({ theme }) => theme.device.laptopM} {
        padding: ${props =>
          getDimensions(
            props.padding && getTypeLg(props.padding),
            props.paddingX && getTypeLg(props.paddingX),
            props.paddingY && getTypeLg(props.paddingY),
            props.paddingTop && getTypeLg(props.paddingTop),
            props.paddingRight && getTypeLg(props.paddingRight),
            props.paddingBottom && getTypeLg(props.paddingBottom),
            props.paddingLeft && getTypeLg(props.paddingLeft)
          )};
      }
    `}
  ${props =>
    getTypePropsXl(
      props.padding,
      props.paddingX,
      props.paddingY,
      props.paddingTop,
      props.paddingBottom,
      props.paddingRight,
      props.paddingLeft
    ) &&
    css<GridProps>`
      @media ${({ theme }) => theme.device.desktop} {
        padding: ${props =>
          getDimensions(
            props.padding && getTypeXl(props.padding),
            props.paddingX && getTypeXl(props.paddingX),
            props.paddingY && getTypeXl(props.paddingY),
            props.paddingTop && getTypeXl(props.paddingTop),
            props.paddingRight && getTypeXl(props.paddingRight),
            props.paddingBottom && getTypeXl(props.paddingBottom),
            props.paddingLeft && getTypeXl(props.paddingLeft)
          )};
      }
    `}
  ${props =>
    getTypePropsSm(
      props.margin,
      props.marginX,
      props.marginY,
      props.marginTop,
      props.marginBottom,
      props.marginRight,
      props.marginLeft
    ) &&
    css<GridProps>`
      @media ${({ theme }) => theme.device.mobileXL} {
        margin: ${props =>
          getDimensions(
            props.margin && getTypeSm(props.margin),
            props.marginX && getTypeSm(props.marginX),
            props.marginY && getTypeSm(props.marginY),
            props.marginTop && getTypeSm(props.marginTop),
            props.marginRight && getTypeSm(props.marginRight),
            props.marginBottom && getTypeSm(props.marginBottom),
            props.marginLeft && getTypeSm(props.marginLeft)
          )};
      }
    `}
  ${props =>
    getTypePropsMd(
      props.margin,
      props.marginX,
      props.marginY,
      props.marginTop,
      props.marginBottom,
      props.marginRight,
      props.marginLeft
    ) &&
    css<GridProps>`
      @media ${({ theme }) => theme.device.tabletM} {
        margin: ${props =>
          getDimensions(
            props.margin && getTypeMd(props.margin),
            props.marginX && getTypeMd(props.marginX),
            props.marginY && getTypeMd(props.marginY),
            props.marginTop && getTypeMd(props.marginTop),
            props.marginRight && getTypeMd(props.marginRight),
            props.marginBottom && getTypeMd(props.marginBottom),
            props.marginLeft && getTypeMd(props.marginLeft)
          )};
      }
    `}
  ${props =>
    getTypePropsLg(
      props.margin,
      props.marginX,
      props.marginY,
      props.marginTop,
      props.marginBottom,
      props.marginRight,
      props.marginLeft
    ) &&
    css<GridProps>`
      @media ${({ theme }) => theme.device.laptopM} {
        margin: ${props =>
          getDimensions(
            props.margin && getTypeLg(props.margin),
            props.marginX && getTypeLg(props.marginX),
            props.marginY && getTypeLg(props.marginY),
            props.marginTop && getTypeLg(props.marginTop),
            props.marginRight && getTypeLg(props.marginRight),
            props.marginBottom && getTypeLg(props.marginBottom),
            props.marginLeft && getTypeLg(props.marginLeft)
          )};
      }
    `}

  ${props =>
    getTypePropsXl(
      props.margin,
      props.marginX,
      props.marginY,
      props.marginTop,
      props.marginBottom,
      props.marginRight,
      props.marginLeft
    ) &&
    css<GridProps>`
      @media ${({ theme }) => theme.device.desktop} {
        margin: ${props =>
          getDimensions(
            props.margin && getTypeXl(props.margin),
            props.marginX && getTypeXl(props.marginX),
            props.marginY && getTypeXl(props.marginY),
            props.marginTop && getTypeXl(props.marginTop),
            props.marginRight && getTypeXl(props.marginRight),
            props.marginBottom && getTypeXl(props.marginBottom),
            props.marginLeft && getTypeXl(props.marginLeft)
          )};
      }
    `}
`
