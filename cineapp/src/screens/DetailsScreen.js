// src/screens/DetailsScreen.js
import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CHAVE_FAVORITOS = '@cinefatec_favoritos';

export default function DetailsScreen({ route, navigation }) {
  const { filme } = route.params;

  async function salvarFavorito() {
    try {
      const dados = await AsyncStorage.getItem(CHAVE_FAVORITOS);
      const favoritos = dados ? JSON.parse(dados) : [];

      const jaExiste = favoritos.some((f) => f.id === filme.id);

      if (jaExiste) {
        Alert.alert('Aviso', 'Este filme já está na sua lista de favoritos!');
        return;
      }

      const novosFavoritos = [...favoritos, filme];
      await AsyncStorage.setItem(
        CHAVE_FAVORITOS,
        JSON.stringify(novosFavoritos)
      );

      Alert.alert('Sucesso', 'Filme salvo nos favoritos!', [
        { text: 'OK', onPress: () => navigation.goBack() },
      ]);
    } catch (erro) {
      Alert.alert('Erro', 'Não foi possível salvar o filme.');
      console.log(erro);
    }
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: filme.poster }} style={styles.poster} />

      <View style={styles.conteudo}>
        <Text style={styles.titulo}>{filme.titulo}</Text>

        <View style={styles.infoLinha}>
          <Text style={styles.infoTag}>{filme.genero}</Text>
          <Text style={styles.infoTag}>{filme.duracao}</Text>
        </View>

        <Text style={styles.diretor}>Direção: {filme.diretor}</Text>

        <Text style={styles.sinopseTitulo}>Sinopse</Text>
        <Text style={styles.sinopse}>{filme.sinopse}</Text>

        <TouchableOpacity style={styles.botaoSalvar} onPress={salvarFavorito}>
          <Text style={styles.botaoSalvarTexto}>💾 Salvar nos Favoritos</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#141414' },
  poster: { width: '100%', height: 320 },
  conteudo: { padding: 16 },
  titulo: { color: '#fff', fontSize: 22, fontWeight: 'bold' },
  infoLinha: { flexDirection: 'row', marginTop: 8 },
  infoTag: {
    color: '#f1ee0a',
    fontSize: 13,
    fontWeight: '600',
    marginRight: 14,
  },
  diretor: { color: '#bbb', fontSize: 14, marginTop: 6 },
  sinopseTitulo: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
  },
  sinopse: { color: '#ccc', fontSize: 14, marginTop: 8, lineHeight: 20 },
  botaoSalvar: {
    backgroundColor: '#f1ee0a',
    marginTop: 28,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  botaoSalvarTexto: { color: '#fff', fontWeight: 'bold', fontSize: 15 },
});
