// src/screens/HomeScreen.js
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import { buscarFilmes } from '../api';

export default function HomeScreen({ navigation }) {
  const [filmes, setFilmes] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function carregarFilmes() {
      const dados = await buscarFilmes();
      setFilmes(dados);
      setCarregando(false);
    }
    carregarFilmes();
  }, []);

  function renderItem({ item }) {
    return (
      <TouchableOpacity
        style={styles.card}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Details', { filme: item })}
      >
        <Image source={{ uri: item.poster }} style={styles.poster} />
        <View style={styles.cardInfo}>
          <Text style={styles.titulo}>{item.titulo}</Text>
          <Text style={styles.subtitulo}>
            {item.genero} • {item.duracao}
          </Text>
          <Text style={styles.diretor}>{item.diretor}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  if (carregando) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#f1ee0a" />
        <Text style={styles.loadingText}>Carregando filmes...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.botaoFavoritos}
        onPress={() => navigation.navigate('Favorites')}
      >
        <Text style={styles.botaoFavoritosTexto}>🍿 Ver Favoritos</Text>
      </TouchableOpacity>

      <FlatList
        data={filmes}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.lista}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#141414' },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#141414',
  },
  loadingText: { color: '#fff', marginTop: 10 },
  lista: { padding: 12 },
  card: {
    flexDirection: 'row',
    backgroundColor: '#1f1f1f',
    borderRadius: 12,
    marginBottom: 12,
    overflow: 'hidden',
    elevation: 2,
  },
  poster: { width: 90, height: 130 },
  cardInfo: { flex: 1, padding: 10, justifyContent: 'center' },
  titulo: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  subtitulo: { color: '#bbb', fontSize: 13, marginTop: 4 },
  diretor: { color: '#888', fontSize: 12, marginTop: 2 },
  botaoFavoritos: {
    width: 130,
    backgroundColor: '#f1ee0a',
    margin: 12,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  botaoFavoritosTexto: { color: '#fff', fontWeight: 'bold', fontSize: 15 },
});
