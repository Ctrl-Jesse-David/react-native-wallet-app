
import SafeScreen from "@/components/SafeScreen";
import { ClerkProvider } from '@clerk/clerk-expo'
import { Slot } from 'expo-router'


export default function RootLayout() {
  return (
    <ClerkProvider>
      <SafeScreen>
        <Slot />
      </SafeScreen>
    </ClerkProvider>
  );
}