import { Stack } from "expo-router";


export default function ProductLayout(){
  return(
    <Stack>
      <Stack.Screen name="index" options={{
        headerShown:false,
        title:"Product"
      }}/>
      <Stack.Screen  name="ProductList"/>
      <Stack.Screen name="product/[productId]"/>

    </Stack>
  );
}