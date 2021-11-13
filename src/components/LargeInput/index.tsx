import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { theme } from '../../styles/theme'
import { styles } from './styles'

export function LargeInput() {

    const { secondary80, secondary100 } = theme.color

    return (
        <LinearGradient colors={[secondary100, secondary80]} style={styles.container} >
            <TextInput style={styles.input} multiline maxLength={100} numberOfLines={5} autoCorrect={false}  />
        </ LinearGradient>
    )
}
