import React from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';
import Button from '../components/Button'; 

export default function FavoriteScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Meu Favorito</Text>
            <Image
                source={{ uri: 'https://down-br.img.susercontent.com/file/br-11134207-7r98o-lxv7m0ttatmefe' }} 
                style={styles.image}
            />

            <Button onPress={() => navigation.navigate('Home')} title="Voltar para Home" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 10,
        marginBottom: 20,
    },
});