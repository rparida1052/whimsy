import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View ,Image, ScrollView} from "react-native";

import { theme } from "../../theme/them";
import { SafeAreaView } from "react-native-safe-area-context";
import PrimaryButton from "@/src/component/PrimaryButton";
import InputText from "@/src/component/InputText";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import axios from "axios";
import { useEffect, useState } from "react";
import ItemCard from "@/src/component/ItemCard";

export default function App() {
  const [productData, setproductData] = useState([])
  const fertchedData = async() =>{
    const response = await axios.get("https://dummyjson.com/products");
    console.log(response.data.products[0]); 
    setproductData(response.data.products);
  }
  useEffect(()=>{
    fertchedData();
  },[])
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.greetingContainer}>
          <Text>Hello!</Text>
          <Text style={styles.greetText}>Rahul Parida</Text>
        </View>
      </View>
      <View>
        <InputText
          placeholder="Search for a product"
          containerStyle={styles.inputTextContainer}
          icon={<FontAwesome name="search" size={24} color="gray" />}
        />
      </View>
      <View style={styles.bannerContainer}>
        <Text style={{color:"white",fontSize:18,textAlign:"center",fontWeight:"bold"}}>Get winter Discount</Text>
      </View>
      <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
        <Text style={styles.featuredText}>Featured</Text>
        <Text style={styles.seeallText}>See All</Text>
      </View>
      <ScrollView horizontal>
        {productData.map((item)=>{
          return(
            <ItemCard item={item}/>
          )
        })}
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorSecondary,
  },
  greetingContainer: {
    margin: 30,
  },
  greetText: {
    fontSize: 18,
    fontWeight: "semibold",
  },
  inputTextContainer: {
    borderRadius: 50,
    height: 60,
    paddingHorizontal: 20,
    marginRight: 30,
    backgroundColor: theme.colorGray,
  },
  bannerContainer: {
    marginTop: 30,
    marginHorizontal: 20,
    borderRadius: 10,
    height: 150,
    backgroundColor: theme.colorPrimary,
  },
  featuredText:{
    fontSize: 22,
    fontWeight: "bold",
    margin: 20,
  },
  seeallText:{
    fontSize: 16,
    fontWeight: "semibold",
    margin: 20,
    color: theme.colorPrimary,
  }
});
