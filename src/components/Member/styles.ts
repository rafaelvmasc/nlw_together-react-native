import { StyleSheet } from 'react-native'
import { theme } from '../../styles/theme'

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 24,
    },
    userstatus:{
        marginLeft: 16,

    },
    username:{
        color: theme.color.heading,
        fontSize: 18,
        fontFamily: theme.fonts.title700
    },
    status: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    statusball:{
        width: 8,
        height: 8,
        borderRadius: 4,
        marginRight: 8,
    },

    textstatus:{
        fontSize: 13,
        fontFamily: theme.fonts.text400,
        color: theme.color.highlight
    },
})
