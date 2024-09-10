import { Slot, Stack } from "expo-router";
import { AppProvider } from "../hooks/index";

export default function Layout() {
  return (
    <AppProvider>
      <Stack />
    </AppProvider>
  );
}
