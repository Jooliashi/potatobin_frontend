import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  typography: {
    h1: {
      color: '#412a1a',
      fontFamily: '"Changa One", Open Sans',
    },
    h4: {
      color: '#412a1a',
      fontFamily: '"Changa One", Open Sans',
    },
    h5: {
      color: '#412a1a',
      fontFamily: '"Changa One", Open Sans',
    },
    h6: {
      color: '#412a1a',
      fontFamily: '"Changa One", Open Sans',
    },
    body1: {
      color: '#412a1a',
      fontFamily: '"Changa One", Open Sans',
    }
   },
   palette: {
     background: {
      default: '#fbe4ce',
     },
     primary: {
       main: '#f2a45a',
     },
     secondary: {
       main: '#6d462b',
     }
   },
   components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#412a1a',
          fontFamily: '"Changa One", Open Sans',
          fontSize: '22px',
        }
      }
    }
  }
})

export default theme;