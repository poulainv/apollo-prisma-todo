import { createMuiTheme } from '@material-ui/core/styles'
import { orange } from '@material-ui/core/colors'

const theme = createMuiTheme(
    {
        palette: {
            primary: {
                light: orange['200'],
                main: orange['600']
            }
        }
    })

export default theme