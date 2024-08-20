import { Stack } from "expo-router";
import { AppProvider } from "../hooks";

export default function layout({ children }) {
  return (
    <AppProvider>
      <Stack />
    </AppProvider>
  );
}
