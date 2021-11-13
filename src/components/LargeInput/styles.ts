import { StyleSheet } from 'react-native'
import { theme } from '../../styles/theme'


export const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        borderWidth: 1,
        borderColor: theme.color.secondary80
    },
    input: {
        height: 95,
        width: '100%'
    },
})
