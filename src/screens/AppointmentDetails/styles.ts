import { StyleSheet } from 'react-native'
import { getBottomSpace } from 'react-native-iphone-x-helper'
import { theme } from '../../styles/theme'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    banner:{
        width: '100%',
        height: 234,
        marginBottom: 24,
    },

    bannercontent: {
        justifyContent: 'flex-end',
        flex: 1,
        paddingHorizontal: 24,
        marginBottom: 30,
    },

    title: {
        fontSize: 28,
        fontFamily: theme.fonts.title700,
        color: theme.color.heading
    },
    subtitle: {
        fontSize: 13,
        fontFamily: theme.fonts.text400,
        color: theme.color.heading
    },
    list: {
        width: '100%',
        marginTop: 24,
    },

    footer:{
        paddingVertical: 20,
        paddingHorizontal: 24,
        marginBottom: getBottomSpace(),
    },

})
