import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const ItemCard = ({item}) => {
  return (
    <View key={item.id} style={{ margin: 10,maxWidth:150 }}>
      <Image
        source={{ uri: item.thumbnail }}
        style={{ width: 150, height: 150, borderRadius: 10 }}
      />
      <Text style={{ fontSize: 16, fontWeight: "bold" }}>{item.title}</Text>
      <Text style={{ fontSize: 16, fontWeight: "semibold" }}>$ {item.price}</Text>
    </View>
  );
}

export default ItemCard

const styles = StyleSheet.create({})