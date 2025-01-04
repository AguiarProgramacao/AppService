import { KeyboardAvoidingView, ScrollView, Image, TextInput, TouchableOpacity, Text, Platform, StyleSheet } from "react-native";

export default function RegisterScreen() {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image style={styles.image} source={require("../../assets/Logo-app.png")} />
        <TextInput
          style={styles.input}
          placeholder="Email para cadastro"
          placeholderTextColor="#000"
        />
        <TextInput
          style={styles.input}
          placeholder="Sua Senha"
          placeholderTextColor="#000"
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Confirmar Senha"
          placeholderTextColor="#000"
          secureTextEntry
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Cadastrar</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161F30",
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 30,
  },
  input: {
    backgroundColor: "#CECECE",
    marginTop: 20,
    width: "100%",
    paddingVertical: 16,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#84B026",
    paddingVertical: 15,
    paddingHorizontal: 100,
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    width: "100%",
  },
  textButton: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
