import styled from 'styled-components'

export const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  z-index: 3;
  padding-right: 1rem;
  width: 100%;
  height: 5rem;
  background-color: rgba(62,31,67, 0.75);

  nav {
    width: auto;

    ol {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin: 30px 0 0 0;
    }

    li { margin-right: 1.5rem; list-style: none; }
  }

  @media (max-width: 767px) {
    font-size: 0.8rem;

    nav {
      ol {
        display: flex;
        flex-direction: col;
        justify-content: flex-start;
        margin: 30px 0 0 0;
      }

      &:first-child {
        position: absolute;
        z-index: 3;
      }

      &:nth-child(2) {
        position: relative;
        top: 2rem;
      }

      &:nth-child(3) {
        position: absolute;
        top: -0.5rem;
        right: 0.5rem;
      }
    }
  }
`

export const NavLink = styled.a`
  color: ${props => props.theme.lightPurple};
  border: none;
  &:hover { color: ${props => props.theme.offWhite}; }
`

export const NavActive = styled(NavLink)`
  color: ${props => props.theme.offWhite};
  border-bottom: 2px solid ${props => props.theme.apricot};
`

export const NavDisabled = styled(NavLink)`
  color: ${props => props.theme.darkPurple};
  &:hover { color: ${props => props.theme.darkPurple}; }
  cursor: not-allowed;
`

export const CreateLink = styled.li`
  margin-top: -0.5rem;
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid ${props => props.theme.darkPurple};
`
