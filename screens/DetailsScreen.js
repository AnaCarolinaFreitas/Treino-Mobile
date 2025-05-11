import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { verticalData } from '../data/homeData2';
import Button from '../components/Button'; // Importando o componente Button

export default function DetailsScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Imagens detalhadas dos Produtos</Text>

        <FlatList
            data={verticalData}
            renderItem={({ item }) => (
                <View style={styles.imageContainer}>
                    <Image source={{ uri: item.imageUrl }} style={styles.image} />
                </View>
            )}
            keyExtractor={(item) => item.imageUrl}
            numColumns={2} // Define duas colunas
        />

        <Button onPress={() => navigation.navigate('Favorite')} title="Meu Produto Favorito" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    imageContainer: {
        flex: 1,
        margin: 5, 
    },
    image: {
        width: 130,
        height: 200,
        borderRadius: 10,
    },
});