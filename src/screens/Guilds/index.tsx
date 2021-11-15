import React from 'react'
import { View, FlatList, Text } from 'react-native'
import { Guild } from '../../components/Guild'
import { styles } from './styles'
import ListDivider from '../../components/ListDivider'
import { GuildProps } from '../../components/Appointment'


type Props = {
    handleGuildSelected : (guild : GuildProps) => void
}

export function Guilds({handleGuildSelected } : Props) {

    const guilds = [
        {
            id: '1',
            name: 'Lendarios',
            icon: 'https://www.freeiconspng.com/thumbs/discord-icon/discord-metro-style-icon-0.png',
            owner: true,
        },
        {
            id: '2',
            name: 'Lendarios',
            icon: 'https://www.freeiconspng.com/thumbs/discord-icon/discord-metro-style-icon-0.png',
            owner: true,
        },
    ]

    return (
        <View style={styles.container} >
            <FlatList 
                data={guilds} 
                keyExtractor={item => item.id} 
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={()=><ListDivider/>}
                ListHeaderComponent={()=><ListDivider/>}
                style={styles.guilds}
                contentContainerStyle={{paddingBottom: 24}}
                renderItem={({item}) => (
        
                <Guild 
                onPress={()=>handleGuildSelected(item)}
                
                item={item}   />
            
            )  }  />
        </View>
    )
}
