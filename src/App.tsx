import { ThemeProvider } from 'styled-components'
import { Transactions } from './pages/Transactions'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { TransactionsProvider } from './contexts/TransactionsContext'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
