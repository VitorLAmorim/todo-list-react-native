import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

type Props = {
    name: string;
    checkbox: boolean;
    onRemove: () => void;
    onCkeck: () => void;
}

export function Item({ name, checkbox, onRemove, onCkeck }: Props) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={checkbox ? styles.checkboxTrue : styles.checkboxFalse} onPress={onCkeck}>
                <Text >
                    {checkbox ? '✓' : ' '}
                </Text>
            </TouchableOpacity>

            <Text style={styles.name}>
                {name}
            </Text>

            <TouchableOpacity style={styles.button} onPress={onRemove}>
                <Text style={styles.buttonText}>
                    -
                </Text>
            </TouchableOpacity>
        </View>
    )
}
