import React from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import CustomButton from '../components/Button'; // Renomeado para evitar conflito
import { horizontalData } from '../data/homeData';
import { verticalData } from '../data/homeData2';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
        <View style={styles.searchContainer}>
            <TextInput
                style={styles.searchInput}
                placeholder="Pesquisar"
            />
        </View>

        <FlatList
            data={horizontalData}
            horizontal
            renderItem={({ item }) => (
                <TouchableOpacity style={styles.itemContainer}>
                    <Image source={{ uri: item.imageUrl }} style={styles.image} />
                    <Text style={styles.category}>{item.categories}</Text>
                </TouchableOpacity>
            )}
            keyExtractor={(item) => item.imageUrl}
        />
        
        <FlatList 
          data={verticalData}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.productContainer}>
                <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
                <View style={styles.descriptionContainer}>
                    <Text style={styles.productCategory}>{item.categories}</Text>
                    <CustomButton onPress={() => navigation.navigate('Details')} title="Ver Detalhes" />
                </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.imageUrl}
        />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        padding: 20,
        backgroundColor: '#fff',
    },
    searchContainer: {
        marginBottom: 20,
    },
    searchInput: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    itemContainer: {
        marginRight: 10,
        marginBottom: 20,
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    category: {
        marginTop: 5,
        fontSize: 16,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: 'gray',
        padding: 5,
        borderRadius: 5,
        marginTop: 10,
    },
    productContainer: {
        marginBottom: 20,
        marginTop: 10,
        alignItems: 'center',
        flexDirection: 'row',
    },
    descriptionContainer: {
        marginLeft: 10,
        flex: 1,
    },
    productImage: {
        width: 150,
        height: 150,
        borderRadius: 10,
    },
    productCategory: {
        marginBottom: 5,
        fontSize: 16,
        fontWeight: 'bold',
    },
});