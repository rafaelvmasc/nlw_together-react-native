import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { TextInput, TextInputProps } from 'react-native'
import { theme } from '../../styles/theme'
import {styles} from './styles'
 




export function SmallInput({...props}: TextInputProps) {
    const {secondary100, secondary80, highlight} = theme.color
    
    return (
        
        <LinearGradient style={styles.container}  colors={[secondary100, secondary80]} >

            <TextInput  style={styles.input}  {...props} 
            placeholderTextColor={highlight}
            
            
            />  
        </LinearGradient>
        
    )
}
