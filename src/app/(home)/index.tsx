import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import InputText from "../../component/InputText";
import PrimaryButton from "../../component/PrimaryButton";
import { theme } from "../../theme/them";


export default function App() {
  return (
    <View style={styles.container}>
        <View>
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:theme.bgColor
  },
});
