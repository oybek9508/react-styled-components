import styled, { ThemeProvider } from 'styled-components'
import Button from './components/Button'
import Theme from './theme/theme'

const MainWrapper = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`
const PaginationWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: ${({ page }) =>
    page === 'first'
      ? 'flex-start'
      : page === 'middle'
      ? 'center'
      : 'flex-end'};
  &:hover {
    color: silver;
  }
`

const Link = styled.a.attrs((props) => ({
  target: '_blank',
}))`
  color: blue;
  font-size: ${(props) => props.theme.fonts.smallFont};
`
function App() {
  return (
    <ThemeProvider theme={Theme}>
      <MainWrapper className='App'>
        <Button primary margin='5rem'>
          My Primary Button
        </Button>
        <Button>My Button</Button>
        <PaginationWrapper page='middle'>
          <Button> Pagination</Button>
        </PaginationWrapper>
        <Link href='https://www.google.com'>One Link</Link>
        <Link href='https://www.google.com'>Another Link</Link>
      </MainWrapper>
    </ThemeProvider>
  )
}

export default App
