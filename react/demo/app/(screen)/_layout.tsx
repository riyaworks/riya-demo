import { Stack } from "expo-router";
import React from "react";
export default function layout() {
  return(
<Stack>
<Stack.Screen name="profile" options={{headerShown:false}}/>
</Stack>);
}