import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {Item} from '../components/Item';


export default function Home() {
    const [itens, setItens] = useState<{name: string, checkbox: boolean}[]>([]);
    const [itemName, setItemName] = useState('');
    const [progress, setProgress] = useState(0);

    function handleParticipantAdd() {
        setItens(prevState => [...prevState, {name: itemName, checkbox: false}])
        setItemName('')
    }

    function handleParticipantRemove(item: {name: string, checkbox: boolean}) {
        setItens(
            itens.filter(i => i.name !== item.name)
        )
        if(item.checkbox) {
            setProgress(progress - 1)
        }
    }

    function handleItemChecked(item: {name: string, checkbox: boolean}) {
        if(item.checkbox) {
            setProgress(progress - 1)
        } else {
            setProgress(progress + 1)
        }
        setItens(
            itens.map(i => {
                if(i.name === item.name) {
                    return {
                        ...i,
                        checkbox: !i.checkbox
                    }
                }
                return i
            })
        )
    }


    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>
               Todo List
            </Text>
            <Text style={styles.eventDate}>
                Sexta, 4 de Janeiro de 2025
            </Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do item"
                    placeholderTextColor="#6B6B6B"
                    onChangeText={setItemName}
                    value={itemName}
                />

                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={itens}
                keyExtractor={item => item.name}
                renderItem={({item} )=> (
                    <Item
                    key={item.name}
                    name={item.name}
                    checkbox={item.checkbox}
                    onCkeck={() => {handleItemChecked(item)}}
                    onRemove={() => handleParticipantRemove(item)}
                    />
                    )}></FlatList>

            <View>
                <Text style={styles.progress} >
                    {itens.length > 0 ? ` ${progress} de ${itens.length} itens conclúidos` : 'Nenhum item cadastrado' }
                </Text>
            </View>
        </View>
    )
}
