import { Button, StyleSheet, Text, View } from "react-native";
import { useAuth } from "../../hooks/Auth";

export default function Home(){
    const { signOut } = useAuth();
    return(
        <View style={styles.teste}>
            <Text>Home</Text>
            <Button title="Sair" onPress={()=> signOut()}/>
        </View>
    )
}
const styles = StyleSheet.create({
    teste: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
  });