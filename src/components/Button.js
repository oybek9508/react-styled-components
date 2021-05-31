import React from 'react'
import styled, { css, keyframes } from 'styled-components'

const fadeIn = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1
}
`
const OutterWrapper = styled.div`
  width: 100%;
  margin-bottom: ${(props) => props.theme.fonts.mediumFont};
  background-color: ${(props) => props.theme.colors.secondary};
`

const ButtonStyle = styled.button`
  padding: 1rem 1.5rem;
  font-size: 1.8rem;
  color: ${(props) => props.theme.colors.primary};
  outline: none;
  margin-bottom: ${({ margin }) => margin || '2rem'};
  border: none;
  animation: 2s ${fadeIn} ease-in
  background-color: #333;
  ${({ primary }) =>
    primary &&
    css`
      background-color: grey;
      border: 1px solid tomato;
    `}
${OutterWrapper}:hover & {
  color: red
}
    `

const SuperButton = styled(ButtonStyle)`
  font-size: 3rem;
`

function Button({ children, primary, margin }) {
  return (
    <>
      <OutterWrapper>
        <ButtonStyle primary={primary} margin={margin}>
          {children}
        </ButtonStyle>
      </OutterWrapper>
      {/*<SuperButton primary={primary}>{children}</SuperButton>*/}
    </>
  )
}

export default Button
