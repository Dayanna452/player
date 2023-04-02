import Theme from '@/styles/theme.styles'
import { ThemeProvider } from 'styled-components'
import SongsContext from './SongsContext'

interface ProvidersProps {
  children: React.ReactNode
}

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <ThemeProvider theme={Theme}>
      <SongsContext.Provider>{children}</SongsContext.Provider>
    </ThemeProvider>
  )
}
