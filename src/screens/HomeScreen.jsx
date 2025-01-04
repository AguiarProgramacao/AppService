import { StatusBar, View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native"

export default function HomeScreen() {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate("Login");
  }

  return(
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#161F30" />
      <Image style={styles.image} source={require("../../assets/Logo-app.png")}/>
      <Text style={styles.text}>Aqui você encontrará o</Text>
      <Text style={styles.text}>serviço que precisa!!</Text>
      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.textButton}>Sou Profissional</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Buscando Profissional</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

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
  },
  text: {
    color: "#FFF",
    fontSize: 22
  },
  containerButton: {
    marginTop: 40,
  },
  button: {
    backgroundColor: "#84B026",
    paddingVertical: 15,
    paddingHorizontal: 100,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: "center",
    borderRadius: 5
  },
  textButton: {
    fontSize: 16,
    fontWeight: "bold"
  }
});