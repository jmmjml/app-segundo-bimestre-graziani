import { Stack, useSegments, router } from "expo-router";
import { useEffect } from "react";
import { AppProvider } from "../hooks";
import { useAuth } from "../hooks/Auth/index";

const StackLayout = () => {
  const { user } = useAuth();

  useEffect(() => {
    if (user?.autenticated) {
      router.push("(protected)");
    } else {
      router.replace("signin");
    }
  }, [user]);

  return (
    <Stack>
      <Stack.Screen name="signin" options={{ headerShown: false }} />
      <Stack.Screen name="about" options={{ headerShown: false }} />
      <Stack.Screen name="(protected)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default function Layout() {
  return (
    <AppProvider>
      <StackLayout />
    </AppProvider>
  );
}
