import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';

const ProductCard = () => {
  return (
    <View style={styles.cardBackground}>
      <View>
        <Image
          source={require("@/assets/card-image.png")}
          style={{ width: "100%", height: "90%", borderRadius: 6 }}
        />
      </View>
      <View style={styles.starRating}>
        <AntDesign name="star" size={24} color="#FFBA49" />
        <AntDesign name="star" size={24} color="#FFBA49" />
        <AntDesign name="star" size={24} color="#FFBA49" />
        <AntDesign name="star" size={24} color="#FFBA49" />
        <AntDesign name="star" size={24} color="#FFBA49" />
        <Text style={{marginRight:10}}>
            5.0<Text>(10)</Text>
        </Text>
      </View>
      <Text>ProductCard</Text>
    </View>
  );
}

export default ProductCard

const styles = StyleSheet.create({
  cardBackground: {
    backgroundColor: "#fafafa",
    height: 260,
    width: 160,
    borderRadius: 4,
    margin: 10,
  },
  starRating:{
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    
  }
});