import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { createContext, useContext } from "react";
import { ActivityIndicator, Text, View } from "react-native";

const FontContext = createContext({});
SplashScreen.preventAutoHideAsync();

export function FontProvider({ children }) {
  const [loaded, error] = useFonts({
    regular: require("../../assets/fonts/Montserrat-Regular.ttf"),
    bold: require("../../assets/fonts/Montserrat-Bold.ttf"),
    black: require("../../assets/fonts/Montserrat-Black.ttf"),
    semibold: require("../../assets/fonts/Montserrat-SemiBold.ttf"),
    light: require("../../assets/fonts/Montserrat-Light.ttf"),
    medium: require("../../assets/fonts/Montserrat-Medium.ttf"),
    thin: require("../../assets/fonts/Montserrat-Thin.ttf"),
    extralight: require("../../assets/fonts/Montserrat-ExtraLight.ttf"),
    extrabold: require("../../assets/fonts/Montserrat-ExtraBold.ttf"),
    italic: require("../../assets/fonts/Montserrat-Italic.ttf"),
    bolditalic: require("../../assets/fonts/Montserrat-BoldItalic.ttf"),
    blackitalic: require("../../assets/fonts/Montserrat-BlackItalic.ttf"),
    lightitalic: require("../../assets/fonts/Montserrat-LightItalic.ttf"),
    mediumitalic: require("../../assets/fonts/Montserrat-MediumItalic.ttf"),
    thinitalic: require("../../assets/fonts/Montserrat-ThinItalic.ttf"),
    extralightitalic: require("../../assets/fonts/Montserrat-ExtraLightItalic.ttf"),
    extrabolditalic: require("../../assets/fonts/Montserrat-ExtraBoldItalic.ttf"),
  });

  if (!loaded && !error) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{fontSize:28, marginTop: 15}}>Carregando as fontes...</Text>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }
  return <FontContext.Provider value={{loaded}}>{children}</FontContext.Provider>;
}

export function useFont() {
  const context = useContext(FontContext);
  if (!context) {
    throw new Error("useFont must be used within a FontProvider");
  }
  return context;
}
