import { StatusBar } from "expo-status-bar";
import { BackHandler, Button, StyleSheet, Text, View } from "react-native";
import { useAuth } from "../hooks/Auth/index";
import { router } from "expo-router";

export default function App() {
  const { signIn, signOut } = useAuth();

  const handleEntrarSuper = async () => {
    try {
      await signIn({ email: "super@email.com", password: "A123456a!" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aplicativo pronto para usar</Text>
      <Button title="Signin Super" onPress={handleEntrarSuper} />
      <Button
        title="Signin Adm"
        onPress={() => signIn({ email: "admin@email.com", password: "A123456a!" })}
      />
      <Button
        title="Signin User"
        onPress={() => signIn({ email: "user@email.com", password: "A123456a!" })}
      />
      <Button title="sobre" onPress={() => router.push("/about")} />
      <Button
        title="Sair do Aplicativo"
        onPress={() => BackHandler.exitApp()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
  },
  title: {
    fontFamily: "bold",
    fontSize: 20,
  },
});
