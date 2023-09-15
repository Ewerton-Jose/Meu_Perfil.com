import { Text, SafeAreaView, StyleSheet, Button } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        A plantação é uma atividade gratificante que nos conecta com a natureza e contribui para um planeta mais saudável. Plantar árvores melhora a qualidade do ar e combate as mudanças climáticas, enquanto hortas e jardins fornecem alimentos frescos, reduzindo a pegada ambiental. Além disso, a jardinagem é terapêutica, promovendo o bem-estar emocional. Comece hoje, mesmo com um pequeno esforço, e ajude a criar um mundo mais verde e harmonioso.
      </Text>
      <Card>
        <AssetExample />
      </Card>
      <Button title='Plante uma árvore agora' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#00ff0f',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
