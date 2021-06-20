import styled from 'styled-components'

export const SearchContainerDiv = styled.div`
  z-index: 11;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  bottom: 12rem;
  left: 30px;
  padding: 1.5rem;
  width: 400px;
  height: 670px;
  border-top: 1px solid rgba(256, 256, 256, .125);
  border-right: 1px solid rgba(256, 256, 256, .125);
  border-bottom: 1px solid rgba(0, 0, 0, .125);
  border-left: 1px solid rgba(0, 0, 0, .125);
  background: ${props => props.theme.lightPurple};

  @media (max-width: 767px) {
    left: 1rem;
    bottom: 10rem;
    padding: 1rem;
    width: 300px;
    height: 400px;
  }
`

export const SelectedAssetStyle = styled.div`
  padding-left: 1rem;
  width: 100%;
  height: 3rem;
  font-size: 1.5rem;
  line-height: 3rem;
  border: 1px solid ${props => props.theme.darkPurple};

  em {
    font-style: normal;
    color: ${props => props.theme.apricot};
  }

  button {
    float: right;
    margin: 0.7rem 1rem 0 0;
    height: 1.5rem;
    font-size: 0.8rem;
  }

  @media (max-width: 767px) {
    font-size: 1rem;
  }
`

export const SearchSection = styled.section`
  input {
    padding-left: 1rem;
    width: 100%;
    height: 3rem;
    font-size: 1.5rem;
    color: ${props => props.theme.darkPurple};
    background: ${props => props.theme.offWhite};
    border: 1px solid ${props => props.theme.darkPurple};
    -webkit-user-select: text;
    user-select: text;
    outline-width: 0;

    &::placeholder { color: ${props => props.theme.darkPurple}; }
  }

  @media (max-width: 767px) {
    input {
      margin-bottom: 1rem;
      height: 2rem;
      font-size: 0.8rem;
    }
  }
`

export const SearchListStyle = styled.ul`
  overflow-y: scroll;
  margin: 1rem 0 0;
  padding: 0;
  height: 310px;

  &::-webkit-scrollbar { width: 1em; }

  &::-webkit-scrollbar-track { background: ${props => props.theme.darkPurple}; }

  &::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.apricot};
    cursor: pointer;
  }

  li {
    padding: 0.5rem 0.5rem 0.5rem 1rem;
    font-size: 1.2rem;
    line-height: 1rem;
    list-style: none;
    outline-width: 0;
    cursor: pointer;

    &:hover {
      transition: background 150ms ease-in-out;
      color: ${props => props.theme.darkPurple};
      background: ${props => props.theme.brightPurple};
    }

    &:active {
      color: ${props => props.theme.darkPurple};
      background: ${props => props.theme.apricot};
    }
  }

  p { display: inline; margin: 0 0.5rem 0 0; }

  span { color: ${props => props.theme.apricot}; }

  em {
    float: right;
    font-size: 1.2rem;
    font-style: normal;
    color: ${props => props.theme.black};
  }

  @media (max-width: 767px) {
    margin: 0 0 1rem;
    height: 250px;

    li, em {
      font-size: 1rem;
      line-height: 0.8rem;
    }
  }
`

export const SearchButtons = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  button {
    margin-bottom: 1rem;
    height: 4rem;
    font-size: 1.2rem;
    &:last-child { margin-bottom: 0; }
  }
  
  @media (max-width: 767px) {
    flex-direction: row;

    button { height: 3rem; font-size: 0.8rem; }
  }
`

export const SearchSelectContainer = styled.section`
  h2 {
    margin: 1rem 0 0 0;
    height: 3rem;
    font-size: 1rem;
    line-height: 1.5rem;
    color: ${props => props.theme.offWhite};

    span { color: ${props => props.theme.apricot}; }
  }

  @media (max-width: 767px) {
    h2 {
      margin: 1rem 0 0.25rem 0;
      font-size: 0.8rem;
      line-height: 1rem;
    }
  }
`

export const SearchSelectStyle = styled.select`
  margin-top: 0.5rem;
  text-indent: 0.5rem;
  width: 100%;
  height: 3rem;
  font-size: 1rem;
  color: #fff;
  border: 1px solid ${props => props.theme.darkPurple};
  background: ${props => props.theme.brightPurple};
  cursor: pointer;

  option {
    display: flex;
    justify-content: space-around;
  }

  &:disabled {
    opacity: 0.4;
    color: ${props => props.theme.lightGrey};
    border: 1px solid ${props => props.theme.midGray};
    background: ${props => props.theme.grey};
    cursor: not-allowed;
  }

  @media (max-width: 767px) { font-size: 0.8rem; }
`

export const LoaderDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const SearchListLoader = styled(LoaderDiv)`
  width: 330px;
  height: 300px;
`

export const SearchSelectLoader = styled(LoaderDiv)`
  width: 350px;
  height: 300px;

  @media (max-width: 767px) {
    width: 250px;
    height: 225px;
  }
`

export const SquareContainer = styled.div`
  width: 245px;
  @media (max-width: 767px) { width: 146px; }
`

export const SearchSelectAsset = styled.section`
  h2 { margin: 1.5rem 0; font-size: 1rem; }

  li {
    margin-left: 0;
    list-style: none;
    font-size: 1.2rem;
    &:first-child { font-size: 1.5rem; }
  }

  @media (max-width: 767px) {
    h2 { margin: 1.5rem 0 1rem; font-size: 0.8rem; }
  }
`

export const EnterPositionStyle = styled.section`
  h2 { margin-bottom: 1rem; }

  @media (max-width: 767px) {
    button { font-size: 0.8rem; line-height: 1.25rem; }
  }
`

export const AggregateInputDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  position: relative;
  width: 100%;

  input {
    margin: 1rem 0 0 0;
    width: 25px;
    height: 30px;
    border-radius: 5px;
    background: ${props => props.theme.offWhite};
  }

  label { margin-top: 20px; }

  p { line-height: 2rem; }

  @media (max-width: 767px) { height: 45px; }
`

export const Note = styled.p`
  position: absolute;
  top: 5rem;
  width: 325px;
  text-align: center;
`

export const CheckMark = styled.div`
  position: absolute;
  top: 21px;
  left: 5px;
  width: 20px;
  height: 20px;
  background: ${props => props.theme.offWhite};
`
