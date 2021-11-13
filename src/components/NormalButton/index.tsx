import React from 'react'
import {  StyleProp, Text, TouchableOpacity, TouchableOpacityProps, ViewStyle } from 'react-native'
import { styles } from './styles'

type Props = TouchableOpacityProps & {
    title: string;
    style?: StyleProp<ViewStyle>
}

export default function NormalButton({title, style, ...props} : Props) {
    return (
        <TouchableOpacity {...props} style={[style, styles.container]} >
            <Text style={styles.title} >{title}</Text>
        </TouchableOpacity>
    )
}
