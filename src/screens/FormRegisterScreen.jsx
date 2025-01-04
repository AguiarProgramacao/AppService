import { KeyboardAvoidingView, View, TextInput, TouchableOpacity, Text, Platform, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native"
import { FontAwesome } from "@expo/vector-icons"

export default function FormRegisterScreen(){
  const navigation = useNavigation();

  const handleRegister = () => {
    navigation.navigate("Register")
  };

  const goBack = () => {
    navigation.navigate("Login")
  };

  return(
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? "padding" : "height"}
    >
      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.buttonBack} onPress={goBack}>
          <FontAwesome name="arrow-left" size={32} color="#FFF" />
        </TouchableOpacity>
      </View>

      <TextInput 
        style={styles.input}
        placeholder="Nome da Empresa"
        placeholderTextColor="#000"
      />
      <TextInput 
        style={styles.input}
        placeholder="Whatsapp"
        placeholderTextColor="#000"
      />
      <TextInput
        style={styles.input}
        placeholder="CPF ou CNPJ"
        placeholderTextColor="#000"
      />
      <TextInput 
        style={styles.input}
        placeholder="Endereço"
        placeholderTextColor="#000"
      />
      <TextInput 
        style={styles.inputArea}
        placeholder="Descrição:"
        placeholderTextColor="#000"
        multiline={true}
        numberOfLines={4}
        textAlignVertical="top"
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.textButton}>Prosseguir</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#161F30",
    padding: 15
  },
  input: {
    backgroundColor: "#CECECE",
    marginTop: 20,
    width: "100%",
    paddingVertical: 16,
    borderRadius: 8
  },
  inputArea: {
    width: "100%",
    height: 150,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 20,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#CECECE",
  },
  button: {
    backgroundColor: "#84B026",
    paddingVertical: 15,
    paddingHorizontal: 100,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: "center",
    borderRadius: 5,
    width: "100%"
  },
  textButton: {
    fontSize: 16,
    fontWeight: "bold"
  },
  containerButton: {
    height: 80,
    alignItems: 'flex-start',
    width: "100%"
  },
})