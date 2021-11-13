import { StyleSheet } from 'react-native'
import { theme } from '../../styles/theme'

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: 24,
        alignItems: 'center',

    },
    content: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 16,

    },
    guildname: {
        fontFamily: theme.fonts.title700,
        color: theme.color.heading,
        fontSize: 18,
        marginBottom: 11,
    },
    usertype: {
        fontFamily: theme.fonts.text400,
        color: theme.color.highlight,
        fontSize: 13,
        marginBottom: 24,
    },
})
