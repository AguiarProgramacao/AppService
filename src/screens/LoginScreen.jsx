import { KeyboardAvoidingView, View, Text, Image, TouchableOpacity, TextInput, StyleSheet, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native" 

export default function LoginScreen(){
  const navigation = useNavigation();

  const handleForm = () => {
    navigation.navigate("FormRegister");
  }

  return(
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? "padding" : "height"}
    >
      <Image style={styles.image} source={require("../../assets/Logo-app.png")} />
      <TextInput 
        style={styles.input}
        placeholder="Seu Email"
      />
      <TextInput 
        style={styles.input}
        placeholder="Sua Senha"
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>Acessar</Text>
      </TouchableOpacity>
      <View style={styles.containerButton}>
        <Text style={styles.text}>Ainda não é cadastrado?</Text>
        <TouchableOpacity style={styles.buttonRegister} onPress={handleForm}>
          <Text style={styles.textButtonRegister}>clique aqui</Text>
        </TouchableOpacity>
      </View>
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
  image: {
    width: 300,
    height: 300,
    marginBottom: 50
  },
  input: {
    backgroundColor: "#CECECE",
    marginTop: 10,
    width: "100%",
    paddingVertical: 15,
    borderRadius: 8
  },
  text: {
    color: "#FFF",
    fontSize: 14
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
    flexDirection: "row",
    marginTop: 10
  },
  textButtonRegister: {
    color: "#FFF",
    marginLeft: 5,
    textDecorationLine: "underline"
  }
})