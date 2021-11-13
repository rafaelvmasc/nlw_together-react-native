import { StyleSheet } from 'react-native'
import { theme } from '../../styles/theme'

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.color.primary,
        borderRadius: 8,
    },
    title: {
        color: theme.color.heading,
        textAlign: 'center',
    },
})
