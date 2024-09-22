import { Tabs } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { theme } from "../../theme/them";


export default function HomeLayout(){
    return (
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: theme.colorPrimary,
        }}>
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ color }) => (
              <Entypo name="home" size={24} color={color} />
            ),
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="Search"
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="search" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="Bag"
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="shopping-bag" size={24} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="Profile"
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="user-alt" size={24} color={color} />
            ),
          }}
        />
      </Tabs>
    );
}