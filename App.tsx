import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

export default function App() {
  const pickDocument = async () => {
    console.log('pickDocument called');

    try {
      const result = await DocumentPicker.getDocumentAsync();
      console.log('result');
      console.log(result);
    } catch (error) {
      console.log('catch');
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={pickDocument}>
        <Text>
          Pick Document
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
