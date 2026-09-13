// src/screens/FavoritesScreen.js
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CHAVE_FAVORITOS = '@cinefatec_favoritos';

export default function FavoritesScreen({ navigation }) {
  const [favoritos, setFavoritos] = useState([]);

  async function carregarFavoritos() {
    try {
      const dados = await AsyncStorage.getItem(CHAVE_FAVORITOS);
      setFavoritos(dados ? JSON.parse(dados) : []);
    } catch (erro) {
      console.log(erro);
    }
  }


  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', carregarFavoritos);
    return unsubscribe;
  }, [navigation]);

  // Também carrega uma vez ao montar o componente
  useEffect(() => {
    carregarFavoritos();
  }, []);

  async function limparFavoritos() {
    Alert.alert(
      'Limpar Favoritos',
      'Tem certeza que deseja remover todos os filmes favoritados?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Limpar',
          style: 'destructive',
          onPress: async () => {
            await AsyncStorage.removeItem(CHAVE_FAVORITOS);
            setFavoritos([]);
          },
        },
      ]
    );
  }

 
  async function removerFavorito(id) {
    const novaLista = favoritos.filter((f) => f.id !== id);
    setFavoritos(novaLista);
    await AsyncStorage.setItem(CHAVE_FAVORITOS, JSON.stringify(novaLista));
  }

  function renderItem({ item }) {
    return (
      <View style={styles.card}>
        <Image source={{ uri: item.poster }} style={styles.poster} />
        <View style={styles.cardInfo}>
          <Text style={styles.titulo}>{item.titulo}</Text>
          <Text style={styles.subtitulo}>
            {item.genero} • {item.duracao}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.botaoRemover}
          onPress={() => removerFavorito(item.id)}
        >
          <Text style={styles.botaoRemoverTexto}>🗑</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {}
      <Text style={styles.contador}>
        Total: {favoritos.length}{' '}
        {favoritos.length === 1 ? 'filme salvo' : 'filmes salvos'}
      </Text>

      {favoritos.length === 0 ? (
        <View style={styles.vazioContainer}>
          <Text style={styles.vazioEmoji}>🎬</Text>
          <Text style={styles.vazioTitulo}>Nenhum favorito ainda</Text>
          <Text style={styles.vazioTexto}>
            Toque em um filme na tela inicial e salve-o nos favoritos para
            vê-lo aqui.
          </Text>
        </View>
      ) : (
        <>
          <FlatList
            data={favoritos}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            contentContainerStyle={styles.lista}
          />
          <TouchableOpacity
            style={styles.botaoLimpar}
            onPress={limparFavoritos}
          >
            <Text style={styles.botaoLimparTexto}>Limpar Favoritos</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#141414' },
  contador: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    padding: 12,
    paddingBottom: 0,
  },
  lista: { padding: 12 },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1f1f1f',
    borderRadius: 12,
    marginBottom: 12,
    overflow: 'hidden',
  },
  poster: { width: 70, height: 100 },
  cardInfo: { flex: 1, padding: 10 },
  titulo: { color: '#fff', fontSize: 15, fontWeight: 'bold' },
  subtitulo: { color: '#bbb', fontSize: 12, marginTop: 4 },
  botaoRemover: { padding: 14 },
  botaoRemoverTexto: { fontSize: 20 },
  botaoLimpar: {
    backgroundColor: '#333',
    margin: 12,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  botaoLimparTexto: { color: '#fff', fontWeight: 'bold', fontSize: 14 },
  vazioContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  vazioEmoji: { fontSize: 50, marginBottom: 12 },
  vazioTitulo: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  vazioTexto: {
    color: '#999',
    fontSize: 13,
    textAlign: 'center',
    marginTop: 8,
  },
});
