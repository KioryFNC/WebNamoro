import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`

export const Title = styled.div`
  display: flex;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 4rem;
    text-transform: uppercase;
  }

  :first-child {
    color: #FFF;
  }
  
  :last-child {
    background: linear-gradient(
      120deg,
      ${(props) => props.theme['pink-500']} 25%,
      ${(props) => props.theme['pink-700']} 100%
    );
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
`

export const Content = styled.div`
  position: relative;
  width: 35rem;
  height: 50.6rem;
  border-radius: 14px;
  z-index: 1;
  background: linear-gradient(
    120deg,
    ${(props) => props.theme['pink-800']} 50%,
    ${(props) => props.theme['pink-200']} 100%
  );

  &::before {
    content: "";
    position: absolute;
    inset: .3rem;
    background: linear-gradient(
      120deg,
      ${(props) => props.theme['pink-200']} 30%,
      ${(props) => props.theme['pink-800']} 100%
    );
    border-radius: 14px;
    z-index: -1;
  }

  &::after {
    content: "";
    position: absolute;
    inset: -1rem;
    background: ${(props) => props.theme.pinkBackground};
    opacity: 0.6;
    border-radius: 14px;
    z-index: -1;
  }

`

export const Images = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  img {
    width: 9.5rem;
    height: 9.5rem;
    border: 5px solid white;
 }
`

export const Header = styled.div`
`