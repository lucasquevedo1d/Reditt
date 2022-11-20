import { createTheme } from '@mui/material/styles'
import { corPrimaria, corNeutra } from './Color'

const theme = createTheme({
    palette:{
        primary:{
            main:corPrimaria,
            contrastText:"#000000"
        },
        text:{
            primary:corNeutra
        }
    }
})

export default theme